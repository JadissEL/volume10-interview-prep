/** @deprecated Utiliser storyCardsForQuestion — ré-exports pour compatibilité */
export {
  getPersonalizedAnswer,
  getPersonalizedAnswerById,
  hasDedicatedAnswer,
} from '../data/personalizedAnswers'

export {
  getStoryCardsForQuestion,
  getStoryCardsForApplication,
  getStoryCardsForStakeholder,
  type ScoredStoryCard,
} from './storyCardsForQuestion'

export { resolveProofPointLabels } from './proofPointLabels'
