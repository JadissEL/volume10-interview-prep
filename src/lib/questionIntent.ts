import type { CategoryId } from '../data/types'
import {
  addressTopicMap,
  categoryTopicHints,
  questionLexicon,
  topicExclusions,
  type InterviewTopic,
} from './interviewTopics'

export interface QuestionIntent {
  topics: Map<InterviewTopic, number>
  addressKeywords: string[]
  questionTokens: string[]
}

export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/['']/g, "'")
}

const STOP_WORDS = new Set([
  'pourquoi',
  'comment',
  'quelle',
  'quel',
  'quels',
  'quelles',
  'avez',
  'vous',
  'votre',
  'notre',
  'dans',
  'avec',
  'sans',
  'cette',
  'cet',
  'chez',
  'entre',
  'sous',
  'vers',
  'depuis',
  'mais',
  'donc',
  'or',
  'ni',
  'car',
  'une',
  'des',
  'les',
  'est',
  'sont',
  'été',
  'être',
  'avoir',
  'fait',
  'faire',
  'plus',
  'moins',
  'très',
  'tout',
  'tous',
  'toute',
  'toutes',
  'que',
  'qui',
  'quoi',
  'dont',
  'où',
  'par',
  'pas',
  'peut',
  'peuvent',
  'devrait',
  'devriez',
  'pourriez',
  'pourrait',
  'décrivez',
  'racontez',
  'expliquez',
  'parlez',
  'donnez',
  'exemple',
  'situation',
])

function addTopic(map: Map<InterviewTopic, number>, topic: InterviewTopic, weight: number) {
  map.set(topic, (map.get(topic) ?? 0) + weight)
}

function tokenize(text: string): string[] {
  const norm = normalizeText(text)
  return norm
    .split(/[^a-z0-9àâäéèêëïîôùûüç'-]+/i)
    .map((t) => t.trim())
    .filter((t) => t.length >= 3 && !STOP_WORDS.has(t))
}

/** Déduit l’intention de la question à partir du libellé, tags, catégorie et mots-clés d’alignement */
export function analyzeQuestionIntent(
  questionText: string,
  categoryId: CategoryId,
  addresses: string[],
  questionTags: string[] = [],
): QuestionIntent {
  const topics = new Map<InterviewTopic, number>()
  const combined = normalizeText([questionText, ...questionTags].join(' '))

  for (const { pattern, topics: ts, weight } of questionLexicon) {
    if (pattern.test(combined)) {
      for (const t of ts) addTopic(topics, t, weight * 4)
    }
  }

  for (const addr of addresses) {
    const key = normalizeText(addr)
    if (!key || key === 'a completer' || key === 'à completer') continue
    const mapped = addressTopicMap[key]
    if (mapped) {
      for (const t of mapped) addTopic(topics, t, 12)
    } else {
      for (const [mapKey, mapTopics] of Object.entries(addressTopicMap)) {
        if (key.includes(mapKey) || mapKey.includes(key)) {
          for (const t of mapTopics) addTopic(topics, t, 8)
        }
      }
    }
  }

  const hints = categoryTopicHints[categoryId]
  if (hints) {
    for (const t of hints) addTopic(topics, t, 2)
  }

  const questionTokens = tokenize(questionText)
  for (const tok of questionTokens) {
    const mapped = addressTopicMap[tok]
    if (mapped) {
      for (const t of mapped) addTopic(topics, t, 5)
    }
  }

  return {
    topics,
    addressKeywords: addresses.filter(
      (a) => a && !/compléter/i.test(a) && normalizeText(a).length >= 3,
    ),
    questionTokens,
  }
}

export function getTopTopics(intent: QuestionIntent, limit = 8): InterviewTopic[] {
  return [...intent.topics.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([t]) => t)
}

export function hasTopicConflict(
  cardTopics: InterviewTopic[],
  intentTopics: InterviewTopic[],
): boolean {
  for (const qTopic of intentTopics) {
    const excluded = topicExclusions[qTopic]
    if (!excluded) continue
    if (cardTopics.some((ct) => excluded.includes(ct))) return true
  }
  return false
}

export function topicOverlapScore(
  cardTopics: InterviewTopic[],
  intent: QuestionIntent,
): { score: number; matched: InterviewTopic[] } {
  const matched: InterviewTopic[] = []
  let score = 0
  for (const ct of cardTopics) {
    const w = intent.topics.get(ct)
    if (w && w > 0) {
      matched.push(ct)
      score += w * 3
    }
  }
  return { score, matched }
}
