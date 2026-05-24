import type { Confidence, InterviewQuestion, QuestionProgress } from '../data/types'

const HOURS_48 = 48 * 60 * 60 * 1000
const MAX_DUE = 20

/** Jours avant prochaine révision selon la confiance */
const REVIEW_DAYS: Record<Confidence, number> = {
  1: 1,
  2: 2,
  3: 3,
  4: 5,
  5: 7,
}

export function scheduleNextReview(confidence: Confidence, from = Date.now()): string {
  const days = REVIEW_DAYS[confidence]
  return new Date(from + days * 24 * 60 * 60 * 1000).toISOString()
}

export function isQuestionDue(
  _q: InterviewQuestion,
  progress: QuestionProgress | undefined,
  now = Date.now(),
): boolean {
  if (!progress) return true

  const conf = progress.confidence
  if (conf !== undefined && conf <= 2) return true

  if (progress.nextReviewAt) {
    const next = new Date(progress.nextReviewAt).getTime()
    if (!Number.isNaN(next) && now < next) {
      return false
    }
  }

  if (!progress.lastSeen) return !progress.studied

  const last = new Date(progress.lastSeen).getTime()
  if (Number.isNaN(last)) return true
  return now - last >= HOURS_48
}

export function getDueQuestions(
  all: InterviewQuestion[],
  byQuestion: Record<string, QuestionProgress | undefined>,
  limit = MAX_DUE,
): InterviewQuestion[] {
  const due = all.filter((q) => isQuestionDue(q, byQuestion[q.id]))
  due.sort((a, b) => {
    const pa = byQuestion[a.id]
    const pb = byQuestion[b.id]
    const score = (p?: QuestionProgress) => {
      if (!p) return 0
      if (p.confidence !== undefined && p.confidence <= 2) return 0
      if (p.nextReviewAt) return new Date(p.nextReviewAt).getTime()
      if (!p.lastSeen) return 1
      return new Date(p.lastSeen).getTime()
    }
    return score(pa) - score(pb)
  })
  return due.slice(0, limit)
}
