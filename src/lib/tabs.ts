export const TAB_IDS = [
  'dashboard',
  'opening',
  'cheat',
  'questions',
  'practice',
  'answers',
  'keywords',
  'youtube',
  'french',
  'mock',
  'revision',
  'application',
  'perspectives',
  'export',
] as const

export type TabId = (typeof TAB_IDS)[number]

export const PRIMARY_MOBILE_TABS: TabId[] = [
  'dashboard',
  'opening',
  'practice',
  'revision',
  'mock',
  'questions',
]
