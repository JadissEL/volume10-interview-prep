import type { CategoryId, PersonalizedAnswer, StakeholderRole } from '../data/types'
import { proofPoints } from '../data/candidateProfile'
import { encgModules } from '../data/encgCurriculum'
import {
  storySnippetCatalog,
  getSnippetById,
  getSnippetByProofPointId,
  type StorySnippetCard,
} from '../data/storySnippets'
import {
  analyzeQuestionIntent,
  getTopTopics,
  hasTopicConflict,
  normalizeText,
  topicOverlapScore,
  type QuestionIntent,
} from './questionIntent'
import { stakeholderTopicMap, topicLabelsFr, type InterviewTopic } from './interviewTopics'

export type ScoredStoryCard = StorySnippetCard & {
  score: number
  matchReason?: string
}

const MIN_SCORE = 52
const MAX_CARDS = 5
const FRAGMENT_BONUS = 8
const SNIPPET_OVERRIDE_SCORE = 500

const encgModuleTopics: Record<string, InterviewTopic[]> = {
  'encg-s7-lc': ['communication', 'bilingual', 'french-quebec'],
  'encg-s7-oad': ['education-quant', 'case-practical', 'ai-innovation'],
  'encg-s7-tg2': ['banking', 'education-quant'],
  'encg-s7-mo6': ['teamwork', 'affiliates-42', 'project-management'],
  'encg-s8-fe': ['strategy', 'due-diligence', 'education-quant'],
  'encg-s8-dpp': ['boutique-fit', 'feedback', 'communication'],
  'encg-s9-intl': ['affiliates-42', 'remote-clients'],
  'encg-s9-logiciels': ['innovation', 'client-adoption'],
  'encg-s9-fg': ['affiliates-42', 'education-quant'],
  'encg-s9-cf': ['qcer-quality', 'compliance'],
  'encg-s10-stage': ['deadline', 'deloitte-experience'],
}

function cardHaystack(card: StorySnippetCard): string {
  return normalizeText(
    [
      card.title,
      card.oralLine,
      card.oralLineEn ?? '',
      card.detail ?? '',
      card.keywords.join(' '),
      card.tags.join(' '),
    ].join(' '),
  )
}

function addressMatchesCard(card: StorySnippetCard, address: string, intent: QuestionIntent): number {
  const addr = normalizeText(address)
  if (addr.length < 3) return 0
  const hay = cardHaystack(card)

  if (hay.includes(addr)) return 42

  for (const kw of card.keywords) {
    if (addr.includes(kw) || kw.includes(addr)) return 38
  }

  for (const t of card.topics) {
    if (intent.topics.has(t) && addr.length >= 4) {
      const addrStem = addr.slice(0, Math.min(6, addr.length))
      for (const kw of card.keywords) {
        if (kw.startsWith(addrStem) || addr.includes(kw.slice(0, 4))) return 28
      }
    }
  }
  if (addr.length >= 5) {
    for (const tok of addr.split(/\s+/)) {
      if (tok.length >= 4 && hay.includes(tok)) return 32
    }
  }

  return 0
}

function scoreProofPointLink(
  proofPointId: string,
  card: StorySnippetCard,
  intent: QuestionIntent,
  overlap: { score: number; matched: InterviewTopic[] },
): number {
  if (card.proofPointId !== proofPointId) return 0
  const pp = proofPoints.find((p) => p.id === proofPointId)
  if (!pp) return 0

  let score = 0
  if (overlap.matched.length > 0) score += 25 + overlap.matched.length * 8
  for (const tag of pp.tags) {
    if (card.tags.includes(tag) && overlap.matched.length > 0) score += 4
  }
  const whenNorm = normalizeText(pp.whenToUse)
  for (const tok of intent.questionTokens) {
    if (whenNorm.includes(tok)) score += 6
  }
  return score
}

function buildMatchReason(
  matchedTopics: InterviewTopic[],
  addressHit: string | null,
  isFragment: boolean,
  isOverride?: boolean,
): string {
  if (isOverride) return 'Recommandé pour cette question'
  const parts: string[] = []
  if (addressHit) parts.push(`Mot-clé : « ${addressHit} »`)
  if (matchedTopics.length > 0) {
    const labels = matchedTopics.slice(0, 2).map((t) => topicLabelsFr[t])
    parts.push(labels.join(' · '))
  }
  if (isFragment) parts.push('Extrait ciblé')
  return parts.join(' — ') || 'Pertinent pour cette question'
}

function scoreCard(
  card: StorySnippetCard,
  intent: QuestionIntent,
  categoryId: CategoryId,
  answer: PersonalizedAnswer,
  questionText: string,
): ScoredStoryCard | null {
  const intentTopics = getTopTopics(intent, 10)
  const overlap = topicOverlapScore(card.topics, intent)
  let score = overlap.score
  let bestAddress: string | null = null

  if (hasTopicConflict(card.topics, intentTopics)) {
    score -= 45
  }

  for (const addr of intent.addressKeywords) {
    const hit = addressMatchesCard(card, addr, intent)
    if (hit > 0) {
      score += hit
      if (!bestAddress || hit > 38) bestAddress = addr
    }
  }

  const qNorm = normalizeText(questionText)
  const hay = cardHaystack(card)
  for (const kw of card.keywords) {
    if (kw.length >= 4 && qNorm.includes(kw)) score += 14
  }
  for (const tok of intent.questionTokens) {
    if (tok.length >= 5 && hay.includes(tok)) score += 8
  }

  if (card.proofPointId && answer.proofPointIds.includes(card.proofPointId)) {
    score += scoreProofPointLink(card.proofPointId, card, intent, overlap)
  }

  if (card.kind === 'fragment' && overlap.matched.length >= 1) {
    score += FRAGMENT_BONUS + overlap.matched.length * 4
  }

  if (card.kind === 'star') {
    if (overlap.matched.length >= 2) score += 12
    else if (overlap.matched.length === 1) score += 4
    else score -= 15
  }

  if (card.categoryIds?.includes(categoryId) && score >= 30) {
    score += 6
  }

  if (card.kind === 'star' && overlap.matched.length === 0 && score < 40) {
    return null
  }

  if (card.proofPointId && answer.proofPointIds.includes(card.proofPointId)) {
    if (overlap.matched.length === 0 && !bestAddress && score < MIN_SCORE) {
      return null
    }
  }

  if (score < MIN_SCORE) return null

  return {
    ...card,
    score,
    matchReason: buildMatchReason(overlap.matched, bestAddress, card.kind === 'fragment'),
  }
}

function buildEncgCards(
  moduleIds: string[],
  intent: QuestionIntent,
  categoryId: CategoryId,
): ScoredStoryCard[] {
  const out: ScoredStoryCard[] = []
  for (const mid of moduleIds) {
    const mod = encgModules.find((m) => m.id === mid)
    if (!mod) continue
    const modTopics = encgModuleTopics[mid] ?? ['education-quant']
    const card: StorySnippetCard = {
      id: `card-encg-${mid}`,
      kind: 'encg',
      title: mod.nameFr,
      oralLine: mod.linkToInterview,
      tags: ['encg'],
      topics: modTopics,
      keywords: normalizeText(mod.nameFr).split(/\s+/).filter((w) => w.length > 4),
      categoryIds: [categoryId],
    }
    const overlap = topicOverlapScore(modTopics, intent)
    if (overlap.score < 12) continue
    out.push({
      ...card,
      score: overlap.score + 40,
      matchReason: `ENCG — ${overlap.matched.map((t) => topicLabelsFr[t]).join(' · ') || 'formation'}`,
    })
  }
  return out
}

function injectSnippetOverrides(
  answer: PersonalizedAnswer,
  scored: Map<string, ScoredStoryCard>,
) {
  if (!answer.snippetIds?.length) return
  for (const sid of answer.snippetIds) {
    const card = getSnippetById(sid)
    if (!card) continue
    scored.set(sid, {
      ...card,
      score: SNIPPET_OVERRIDE_SCORE,
      matchReason: buildMatchReason([], null, card.kind === 'fragment', true),
    })
  }
}

function dedupeAndLimit(
  scored: Map<string, ScoredStoryCard>,
  snippetIds: string[] = [],
): ScoredStoryCard[] {
  const overrideSet = new Set(snippetIds)
  const ranked = [...scored.values()].sort((a, b) => {
    const aO = overrideSet.has(a.id) ? 1 : 0
    const bO = overrideSet.has(b.id) ? 1 : 0
    if (aO !== bO) return bO - aO
    return b.score - a.score
  })

  const deduped: ScoredStoryCard[] = []
  const seenProof = new Set<string>()
  const seenFragmentParent = new Set<string>()

  for (const card of ranked) {
    if (deduped.length >= MAX_CARDS) break

    if (card.kind === 'fragment' && card.parentStarId) {
      const starFullId = `card-${card.parentStarId}`
      const hasFullStar = deduped.some((c) => c.id === starFullId)
      const hasSiblingFrag = seenFragmentParent.has(card.parentStarId)
      if (hasFullStar && card.score < (deduped.find((c) => c.id === starFullId)?.score ?? 0) + 15) {
        continue
      }
      if (hasSiblingFrag) continue
      seenFragmentParent.add(card.parentStarId)
    }

    if (card.proofPointId) {
      if (seenProof.has(card.proofPointId)) {
        const existing = deduped.find((c) => c.proofPointId === card.proofPointId)
        if (
          existing &&
          card.kind === 'fragment' &&
          existing.kind === 'proof' &&
          card.score > existing.score + 12
        ) {
          deduped[deduped.indexOf(existing)] = card
        }
        continue
      }
      seenProof.add(card.proofPointId)
    }

    deduped.push(card)
  }

  return deduped.length > 0 ? deduped : ranked.slice(0, Math.min(3, ranked.length))
}

function scoreAllCards(
  categoryId: CategoryId,
  answer: PersonalizedAnswer,
  questionText: string,
  questionTags: string[],
  hiddenSnippetIds: string[],
): ScoredStoryCard[] {
  const hidden = new Set(hiddenSnippetIds)
  const intent = analyzeQuestionIntent(questionText, categoryId, answer.addresses, questionTags)
  const scored = new Map<string, ScoredStoryCard>()

  const merge = (item: ScoredStoryCard | null) => {
    if (!item || hidden.has(item.id)) return
    const prev = scored.get(item.id)
    if (!prev || item.score > prev.score) scored.set(item.id, item)
  }

  injectSnippetOverrides(answer, scored)

  for (const card of storySnippetCatalog) {
    merge(scoreCard(card, intent, categoryId, answer, questionText))
  }

  for (const encg of buildEncgCards(answer.modulesEncg ?? [], intent, categoryId)) {
    merge(encg)
  }

  if ([...scored.values()].filter((c) => c.score < SNIPPET_OVERRIDE_SCORE).length === 0) {
    for (const pid of answer.proofPointIds) {
      const card = getSnippetByProofPointId(pid)
      if (!card || hidden.has(card.id)) continue
      const overlap = topicOverlapScore(card.topics, intent)
      if (overlap.matched.length === 0) continue
      merge({
        ...card,
        score: 55 + overlap.score,
        matchReason: buildMatchReason(overlap.matched, null, false),
      })
    }
  }

  return dedupeAndLimit(scored, answer.snippetIds ?? [])
}

/** Cartes d’expertise / histoires strictement alignées sur la question */
export function getStoryCardsForQuestion(
  categoryId: CategoryId,
  answer: PersonalizedAnswer,
  questionText = '',
  questionTags: string[] = [],
  hiddenSnippetIds: string[] = [],
): ScoredStoryCard[] {
  return scoreAllCards(categoryId, answer, questionText, questionTags, hiddenSnippetIds)
}

/** Cartes pour les 6 questions du formulaire candidature */
export function getStoryCardsForApplication(
  question: string,
  proofPointIds: string[],
  addresses: string[] = [],
  hiddenSnippetIds: string[] = [],
): ScoredStoryCard[] {
  const answer: PersonalizedAnswer = {
    questionId: 'app',
    format: 'DIRECT',
    hook: '',
    storyScript: '',
    addresses: addresses.length ? addresses : proofPointIds.map((id) => id.replace('pp-', '')),
    proofPointIds,
  }
  return scoreAllCards('firm-culture', answer, question, [], hiddenSnippetIds)
}

/** Cartes suggérées par rôle interviewer (stakeholder lab) */
export function getStoryCardsForStakeholder(
  role: StakeholderRole,
  categoryIds: CategoryId[] = [],
): ScoredStoryCard[] {
  const topics = stakeholderTopicMap[role] ?? ['boutique-fit']
  const intentTopics = new Map<InterviewTopic, number>()
  for (const t of topics) intentTopics.set(t, 10)

  const scored: ScoredStoryCard[] = []
  for (const card of storySnippetCatalog) {
    let score = 0
    const matched: InterviewTopic[] = []
    for (const t of card.topics) {
      if (intentTopics.has(t)) {
        matched.push(t)
        score += (intentTopics.get(t) ?? 0) * 4
      }
    }
    if (categoryIds.length && card.categoryIds?.some((c) => categoryIds.includes(c))) {
      score += 8
    }
    if (score >= 24) {
      scored.push({
        ...card,
        score,
        matchReason: matched.map((t) => topicLabelsFr[t]).slice(0, 2).join(' · '),
      })
    }
  }

  return scored.sort((a, b) => b.score - a.score).slice(0, MAX_CARDS)
}
