import { questions } from '../data/questions'
import type { CategoryId, LearningPhase } from '../data/types'

export function getPhaseQuestions(phase: LearningPhase) {
  if (phase.questionIds.length > 0) {
    const set = new Set(phase.questionIds)
    return questions.filter((q) => set.has(q.id))
  }
  return questions.filter((q) => phase.categoryIds.includes(q.categoryId))
}

export function getPhaseCategoryFilter(phase: LearningPhase): CategoryId[] {
  return phase.categoryIds
}
