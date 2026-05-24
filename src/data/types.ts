export type CategoryId =
  | 'firm-culture'
  | 'strategy'
  | 'innovation'
  | 'ecosystem'
  | 'intelligence'
  | 'case-style'
  | 'sectors'
  | 'behavioral'
  | 'relocation'
  | 'small-team'
  | 'compensation'
  | 'curveball'

export interface CategoryMeta {
  id: CategoryId
  label: string
  count: number
}

export interface InterviewQuestion {
  id: string
  categoryId: CategoryId
  question: string
  answerBullets: string[]
  fullScript: string
  tags: string[]
  relatedCaseStudy?: string
  bilingualRequired?: boolean
  interviewerVariants?: string[]
  context?: string
  difficulty?: 'standard' | 'stress' | 'followUp'
}

export type AnswerFormat = 'STAR' | 'CASE' | 'DIRECT' | 'CURVEBALL'

export interface PersonalizedAnswer {
  questionId: string
  format: AnswerFormat
  hook: string
  storyScript: string
  /** Notes / phrases clés EN (questions bilingues) */
  storyScriptEn?: string
  /** Mots-clés de la question — contrôle audit alignement */
  addresses: string[]
  proofPointIds: string[]
  /** Cartes imposées en tête (override moteur de pertinence) */
  snippetIds?: string[]
  modulesEncg?: string[]
  volumeDixLink?: string
  followUps?: string[]
}

export interface CardUsageEntry {
  count: number
  lastUsed: string
  lastQuestionId?: string
}

export type StakeholderRole =
  | 'recruiter'
  | 'partner'
  | 'manager'
  | 'colleague'
  | 'client'
  | 'trainee'
  | 'expertNetwork'
  | 'publicSector'

export interface StakeholderPerspective {
  role: StakeholderRole
  whatTheyProbe: string
  howToAnswer: string
  redFlags: string[]
  categoryIds?: CategoryId[]
}

export interface ApplicationQuestion {
  id: string
  question: string
  yourSubmittedAnswer: string
  optimizedInterviewAnswer: string
  proofPointIds: string[]
  pillarMapping?: string[]
}

export type Confidence = 1 | 2 | 3 | 4 | 5

export interface QuestionProgress {
  studied: boolean
  confidence?: Confidence
  lastSeen?: string
  /** Prochaine révision (ISO) — répétition espacée */
  nextReviewAt?: string
}

export interface StarStory {
  id: string
  title: string
  situation: string
  task: string
  action: string
  result: string
}

export interface EdgeProfile {
  visaStatus: string
  relocationDate: string
  frenchLevel: string
  frenchPlan: string
  pitchNotes: string
}

export interface MockQuestionScore {
  score: number
  note?: string
  at: string
}

export interface AppProgress {
  byQuestion: Record<string, QuestionProgress>
  completedPhases: string[]
  revisionChecklist: Record<string, boolean>
  starStories: StarStory[]
  edgeProfile: EdgeProfile
  mockScores: Record<string, MockQuestionScore>
  /** Utilisation des extraits (cartes) en pratique */
  cardUsage?: Record<string, CardUsageEntry>
  /** Cartes masquées par l'utilisateur (« pas pertinent ») */
  hiddenSnippetIds?: string[]
}

export interface LearningPhase {
  id: string
  dayRange: string
  title: string
  focus: string
  categoryIds: CategoryId[]
  questionIds: string[]
}

export interface YoutubeTopic {
  id: string
  title: string
  description: string
  keywords: string[]
  keywordsFr?: string[]
}

export interface RecruiterQuestion {
  id: string
  question: string
  why: string
}
