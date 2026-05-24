import type { AnswerFormat, PersonalizedAnswer } from '../types'

type AnswerExtra = Omit<PersonalizedAnswer, 'questionId' | 'format' | 'hook' | 'storyScript' | 'addresses' | 'proofPointIds'>

/** Construit une réponse personnalisée alignée sur une question */
export function A(
  questionId: string,
  format: AnswerFormat,
  hook: string,
  storyScript: string,
  addresses: string[],
  proofPointIds: string[],
  extra?: AnswerExtra,
): PersonalizedAnswer {
  return {
    questionId,
    format,
    hook,
    storyScript,
    addresses,
    proofPointIds,
    ...extra,
  }
}
