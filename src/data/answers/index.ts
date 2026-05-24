import type { CategoryId, PersonalizedAnswer } from '../types'
import { behavioralAnswers } from './behavioral'
import { caseStyleAnswers } from './case-style'
import { compensationAnswers } from './compensation'
import { curveballAnswers } from './curveball'
import { ecosystemAnswers } from './ecosystem'
import { firmCultureAnswers } from './firm-culture'
import { innovationAnswers } from './innovation'
import { intelligenceAnswers } from './intelligence'
import { relocationAnswers } from './relocation'
import { sectorsAnswers } from './sectors'
import { smallTeamAnswers } from './small-team'
import { strategyAnswers } from './strategy'

export const personalizedAnswers: PersonalizedAnswer[] = [
  ...firmCultureAnswers,
  ...strategyAnswers,
  ...innovationAnswers,
  ...ecosystemAnswers,
  ...intelligenceAnswers,
  ...caseStyleAnswers,
  ...sectorsAnswers,
  ...behavioralAnswers,
  ...relocationAnswers,
  ...smallTeamAnswers,
  ...compensationAnswers,
  ...curveballAnswers,
]

const byId = new Map(personalizedAnswers.map((a) => [a.questionId, a]))

export function getPersonalizedAnswerById(questionId: string): PersonalizedAnswer | undefined {
  return byId.get(questionId)
}

export function hasDedicatedAnswer(questionId: string): boolean {
  return byId.has(questionId)
}

/** Une entrée par question — pas de fallback générique par catégorie */
export function getPersonalizedAnswer(
  questionId: string,
  _categoryId?: CategoryId,
): PersonalizedAnswer {
  const direct = byId.get(questionId)
  if (direct) return direct
  return {
    questionId,
    format: 'DIRECT',
    hook: 'Réponse en cours de finalisation pour cette question.',
    storyScript:
      'Reliez la question aux preuves Dina : matrice 42 filiales, Smartsheet, QCER, secteur public Belgique, relocalisation Montréal. Consultez l’onglet Ouverture pour le fil narratif principal.',
    addresses: ['à compléter'],
    proofPointIds: ['pp-42-matrix'],
  }
}
