import { defaultEdgeProfile, defaultStarStories } from '../data/defaults'
import type { AppProgress } from '../data/types'

export const STORAGE_KEY = 'v10-interview-progress-v2'

export const defaultProgress: AppProgress = {
  byQuestion: {},
  completedPhases: [],
  revisionChecklist: {},
  starStories: defaultStarStories,
  edgeProfile: defaultEdgeProfile,
  mockScores: {},
}

export function migrateProgress(raw: unknown): AppProgress {
  if (!raw || typeof raw !== 'object') return { ...defaultProgress }
  const o = raw as Partial<AppProgress>
  return {
    byQuestion: o.byQuestion ?? {},
    completedPhases: o.completedPhases ?? [],
    revisionChecklist: o.revisionChecklist ?? {},
    starStories:
      o.starStories && o.starStories.length > 0 ? o.starStories : defaultStarStories,
    edgeProfile: { ...defaultEdgeProfile, ...o.edgeProfile },
    mockScores: o.mockScores ?? {},
    cardUsage: o.cardUsage ?? {},
    hiddenSnippetIds: o.hiddenSnippetIds ?? [],
  }
}

export function loadProgress(): AppProgress {
  try {
    const v2 = localStorage.getItem(STORAGE_KEY)
    if (v2) return migrateProgress(JSON.parse(v2))

    const v1 = localStorage.getItem('v10-interview-progress-v1')
    if (v1) return migrateProgress(JSON.parse(v1))
  } catch {
    /* ignore */
  }
  return { ...defaultProgress }
}

export function exportProgressJson(progress: AppProgress): string {
  return JSON.stringify(progress, null, 2)
}

export function importProgressJson(json: string): AppProgress {
  return migrateProgress(JSON.parse(json))
}

export function downloadProgress(progress: AppProgress) {
  const blob = new Blob([exportProgressJson(progress)], {
    type: 'application/json;charset=utf-8',
  })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `volume10-progress-${new Date().toISOString().slice(0, 10)}.json`
  a.click()
  URL.revokeObjectURL(url)
}
