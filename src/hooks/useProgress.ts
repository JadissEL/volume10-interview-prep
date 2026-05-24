import { useCallback, useEffect, useMemo, useState } from 'react'
import { questions } from '../data/questions'
import type {
  AppProgress,
  Confidence,
  EdgeProfile,
  MockQuestionScore,
  QuestionProgress,
  StarStory,
} from '../data/types'
import {
  defaultProgress,
  loadProgress,
  migrateProgress,
  STORAGE_KEY,
} from '../lib/progressIO'
import { getDueQuestions, isQuestionDue, scheduleNextReview } from '../lib/spacedRepetition'

export function useProgress() {
  const [progress, setProgress] = useState<AppProgress>(() => loadProgress())

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
    } catch {
      /* quota */
    }
  }, [progress])

  const setQuestionProgress = (id: string, patch: Partial<QuestionProgress>) => {
    setProgress((prev) => ({
      ...prev,
      byQuestion: {
        ...prev.byQuestion,
        [id]: { ...prev.byQuestion[id], ...patch },
      },
    }))
  }

  const rateQuestion = (id: string, confidence: Confidence) => {
    const now = new Date().toISOString()
    setQuestionProgress(id, {
      confidence,
      studied: true,
      lastSeen: now,
      nextReviewAt: scheduleNextReview(confidence),
    })
  }

  const togglePhase = (phaseId: string) => {
    setProgress((prev) => {
      const done = prev.completedPhases.includes(phaseId)
      return {
        ...prev,
        completedPhases: done
          ? prev.completedPhases.filter((p) => p !== phaseId)
          : [...prev.completedPhases, phaseId],
      }
    })
  }

  const setRevisionCheck = (itemId: string, checked: boolean) => {
    setProgress((prev) => ({
      ...prev,
      revisionChecklist: { ...prev.revisionChecklist, [itemId]: checked },
    }))
  }

  const updateStarStory = (story: StarStory) => {
    setProgress((prev) => ({
      ...prev,
      starStories: prev.starStories.map((s) => (s.id === story.id ? story : s)),
    }))
  }

  const setEdgeProfile = (patch: Partial<EdgeProfile>) => {
    setProgress((prev) => ({
      ...prev,
      edgeProfile: { ...prev.edgeProfile, ...patch },
    }))
  }

  const setMockScore = (questionId: string, score: number, note?: string) => {
    const entry: MockQuestionScore = {
      score,
      note,
      at: new Date().toISOString(),
    }
    setProgress((prev) => ({
      ...prev,
      mockScores: { ...prev.mockScores, [questionId]: entry },
    }))
  }

  const importProgress = useCallback((json: string) => {
    setProgress(migrateProgress(JSON.parse(json)))
  }, [])

  const resetAll = () => setProgress({ ...defaultProgress })

  const recordCardUsage = (snippetId: string, questionId?: string) => {
    const now = new Date().toISOString()
    setProgress((prev) => {
      const prevEntry = prev.cardUsage?.[snippetId]
      return {
        ...prev,
        cardUsage: {
          ...prev.cardUsage,
          [snippetId]: {
            count: (prevEntry?.count ?? 0) + 1,
            lastUsed: now,
            lastQuestionId: questionId ?? prevEntry?.lastQuestionId,
          },
        },
      }
    })
  }

  const dismissSnippet = (snippetId: string) => {
    setProgress((prev) => {
      const hidden = prev.hiddenSnippetIds ?? []
      if (hidden.includes(snippetId)) return prev
      return { ...prev, hiddenSnippetIds: [...hidden, snippetId] }
    })
  }

  const getHiddenSnippets = useCallback(
    () => progress.hiddenSnippetIds ?? [],
    [progress.hiddenSnippetIds],
  )

  const stats = useMemo(() => {
    const total = questions.length
    let studied = 0
    let weak = 0
    let strong = 0
    const byCategory: Record<string, { total: number; studied: number; weak: number }> = {}

    for (const q of questions) {
      const p = progress.byQuestion[q.id]
      if (!byCategory[q.categoryId]) {
        byCategory[q.categoryId] = { total: 0, studied: 0, weak: 0 }
      }
      byCategory[q.categoryId].total++
      if (p?.studied) {
        studied++
        byCategory[q.categoryId].studied++
      }
      if (p?.confidence !== undefined && p.confidence <= 2) {
        weak++
        byCategory[q.categoryId].weak++
      }
      if (p?.confidence !== undefined && p.confidence >= 4) {
        strong++
      }
    }

    const percent = total ? Math.round((studied / total) * 100) : 0
    const strongPercent = total ? Math.round((strong / total) * 100) : 0
    const allDue = questions.filter((q) => isQuestionDue(q, progress.byQuestion[q.id]))
    const duePreview = getDueQuestions(questions, progress.byQuestion, 8)
    return {
      total,
      studied,
      weak,
      strong,
      strongPercent,
      percent,
      byCategory,
      dueCount: allDue.length,
      duePreview,
    }
  }, [progress])

  const getConfidence = (id: string): Confidence | undefined =>
    progress.byQuestion[id]?.confidence

  return {
    progress,
    setQuestionProgress,
    rateQuestion,
    togglePhase,
    setRevisionCheck,
    updateStarStory,
    setEdgeProfile,
    setMockScore,
    importProgress,
    stats,
    getConfidence,
    resetAll,
    recordCardUsage,
    dismissSnippet,
    getHiddenSnippets,
  }
}
