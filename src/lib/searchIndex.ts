import { frenchPhrases } from '../data/frenchPhrases'
import { keywordsEnFr } from '../data/keywordsEnFr'
import { flagshipCaseStudies, interviewHooks } from '../data/cheatSheet'
import { applicationQuestions } from '../data/applicationQuestions'
import { proofPoints, candidateProfile } from '../data/candidateProfile'
import { encgModules } from '../data/encgCurriculum'
import { questions } from '../data/questions'
import { recruiterQuestions } from '../data/recruiterQuestions'
import { stakeholderRoleLabels } from '../data/stakeholderPerspectives'
import { jobOfferMeta } from '../data/jobOffer'
import { openingStoryElevator30s, whyBestCandidateBullets } from '../data/openingStory'
import type { StakeholderRole } from '../data/types'
import type { TabId } from './tabs'

export type SearchResult = {
  id: string
  title: string
  subtitle?: string
  tab: TabId
  action?: 'question' | 'none'
  questionId?: string
}

export function buildSearchIndex(): SearchResult[] {
  const items: SearchResult[] = []

  for (const q of questions) {
    items.push({
      id: `q-${q.id}`,
      title: q.question,
      subtitle: q.id,
      tab: 'questions',
      action: 'question',
      questionId: q.id,
    })
  }

  for (const k of keywordsEnFr) {
    items.push({
      id: `kw-${k.id}`,
      title: `${k.english} → ${k.french}`,
      subtitle: k.note,
      tab: 'keywords',
    })
  }

  for (const p of frenchPhrases) {
    items.push({
      id: `fr-${p.id}`,
      title: p.french,
      subtitle: p.english,
      tab: 'french',
    })
  }

  for (const c of flagshipCaseStudies) {
    items.push({
      id: `cs-${c.title}`,
      title: c.title,
      subtitle: c.summary,
      tab: 'cheat',
    })
  }

  interviewHooks.forEach((h, i) => {
    items.push({ id: `hook-${i}`, title: h, tab: 'cheat' })
  })

  for (const r of recruiterQuestions) {
    items.push({
      id: `rq-${r.id}`,
      title: r.question,
      subtitle: r.why,
      tab: 'revision',
    })
  }

  items.push({
    id: 'opening-story',
    title: 'Histoire d’ouverture — matrice 42 filiales',
    subtitle: openingStoryElevator30s.slice(0, 80) + '…',
    tab: 'opening',
  })

  whyBestCandidateBullets.forEach((b, i) => {
    items.push({
      id: `why-best-${i}`,
      title: b,
      subtitle: 'Pourquoi meilleure candidate',
      tab: 'opening',
    })
  })

  items.push({
    id: 'job-offer',
    title: `${jobOfferMeta.openings} postes — ${jobOfferMeta.title}`,
    subtitle: jobOfferMeta.location,
    tab: 'opening',
  })

  for (const aq of applicationQuestions) {
    items.push({
      id: `app-${aq.id}`,
      title: aq.question,
      subtitle: 'Candidature Volume Dix',
      tab: 'application',
    })
  }

  for (const pp of proofPoints) {
    items.push({
      id: `pp-${pp.id}`,
      title: pp.label,
      subtitle: pp.whenToUse,
      tab: 'revision',
    })
  }

  for (const m of encgModules) {
    items.push({
      id: `encg-${m.id}`,
      title: m.nameFr,
      subtitle: m.linkToInterview,
      tab: 'revision',
    })
  }

  items.push({
    id: 'profile-name',
    title: candidateProfile.identity.name,
    subtitle: candidateProfile.identity.trajectory,
    tab: 'revision',
  })

  for (const role of Object.keys(stakeholderRoleLabels) as StakeholderRole[]) {
    items.push({
      id: `stake-${role}`,
      title: stakeholderRoleLabels[role],
      subtitle: 'Perspective entrevue',
      tab: 'perspectives',
    })
  }

  return items
}

export function filterSearch(query: string, items: SearchResult[]): SearchResult[] {
  const q = query.trim().toLowerCase()
  if (!q) return items.slice(0, 12)
  return items
    .filter(
      (i) =>
        i.title.toLowerCase().includes(q) ||
        (i.subtitle?.toLowerCase().includes(q) ?? false),
    )
    .slice(0, 20)
}
