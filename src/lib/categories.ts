import { CATEGORIES, questions } from '../data/questions'
import type { CategoryId } from '../data/types'

export const categoryMap = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c]),
) as Record<CategoryId, (typeof CATEGORIES)[number]>

export function getCategoryLabel(id: CategoryId): string {
  return categoryMap[id]?.label ?? id
}

export function questionsByCategory(categoryId?: CategoryId) {
  if (!categoryId) return questions
  return questions.filter((q) => q.categoryId === categoryId)
}
