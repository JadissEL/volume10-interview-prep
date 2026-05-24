import {
  flagshipCaseStudies,
  interviewHooks,
  servicePillars,
} from '../data/cheatSheet'
import { applicationQuestions } from '../data/applicationQuestions'
import { candidateProfile, proofPoints } from '../data/candidateProfile'
import { encgEssentialIds, encgModules } from '../data/encgCurriculum'
import { yourEdge } from '../data/edgeContent'
import { frenchPhrases } from '../data/frenchPhrases'
import { keywordsEnFr } from '../data/keywordsEnFr'
import { questions } from '../data/questions'
import type { AppProgress, InterviewQuestion } from '../data/types'
import { getDueQuestions } from './spacedRepetition'

const ESSENTIAL_PHRASE_IDS = ['fr-01', 'fr-02', 'fr-05', 'fr-07', 'fr-10', 'fr-12']
const ESSENTIAL_KEYWORD_IDS = [
  'k01', 'k07', 'k57', 'k59', 'k62', 'k64', 'k69', 'k70', 'k72', 'k74', 'k75', 'k90',
]

export const careerTimeline = [
  { period: '2018–2020', label: 'Prépa ECT Fès', detail: 'Fondation quantitative' },
  { period: '2020–2023', label: 'ENCG Marrakech GFC', detail: 'Master finance & comptabilité' },
  { period: '2023', label: 'Al Barid Bank', detail: 'Stage contrôle de gestion — Casablanca' },
  { period: '2023–', label: 'Superprof', detail: 'Formation modélisation financière' },
  { period: '2024', label: 'Assistwise', detail: 'Produits financiers — Moyen-Orient' },
  { period: '2024–2025', label: 'Deloitte Grèce', detail: 'Finance publique BE + compliance 42 filiales' },
  { period: '2025+', label: 'Volume Dix → Montréal', detail: 'Relocalisation, conseil boutique' },
]

export function getWeakQuestions(progress: AppProgress): InterviewQuestion[] {
  return questions.filter((q) => {
    const c = progress.byQuestion[q.id]?.confidence
    return c !== undefined && c <= 2
  })
}

export function getRevisionBundle(progress: AppProgress) {
  const weak = getWeakQuestions(progress)
  const due = getDueQuestions(questions, progress.byQuestion, 12)
  const relocation = questions.filter((q) => q.categoryId === 'relocation').slice(0, 5)
  const star = questions.filter((q) => q.categoryId === 'behavioral').slice(0, 5)
  const curveball = questions.filter((q) => q.categoryId === 'curveball')

  return {
    hooks: interviewHooks,
    pillars: servicePillars,
    mandates: flagshipCaseStudies.slice(0, 6),
    edge: yourEdge,
    weak,
    due,
    relocation,
    star,
    curveball,
    phrases: frenchPhrases.filter((p) => ESSENTIAL_PHRASE_IDS.includes(p.id)),
    keywords: keywordsEnFr.filter((k) => ESSENTIAL_KEYWORD_IDS.includes(k.id)),
    applicationQuestions,
    encgModules: encgModules.filter((m) => encgEssentialIds.includes(m.id)),
    proofPoints,
    timeline: careerTimeline,
    profileSummary: candidateProfile.identity,
  }
}
