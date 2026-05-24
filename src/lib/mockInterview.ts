import { questions } from '../data/questions'
import type { CategoryId, InterviewQuestion } from '../data/types'

/** Weighted pool for mock interview — relocation, cases, firm culture emphasized */
const WEIGHTS: Partial<Record<CategoryId, number>> = {
  'firm-culture': 3,
  'case-style': 3,
  relocation: 4,
  behavioral: 2,
  'small-team': 2,
  compensation: 2,
  strategy: 1,
  innovation: 1,
  sectors: 1,
  curveball: 2,
}

const MOCK_COUNT = 10
const MOCK_SECONDS = 8 * 60

export function buildMockDeck(): InterviewQuestion[] {
  const pool: InterviewQuestion[] = []
  for (const q of questions) {
    const w = WEIGHTS[q.categoryId] ?? 1
    for (let i = 0; i < w; i++) pool.push(q)
  }
  const picked = new Set<string>()
  const deck: InterviewQuestion[] = []
  while (deck.length < MOCK_COUNT && picked.size < questions.length) {
    const q = pool[Math.floor(Math.random() * pool.length)]
    if (!picked.has(q.id)) {
      picked.add(q.id)
      deck.push(q)
    }
  }
  return deck
}

export { MOCK_COUNT, MOCK_SECONDS }
