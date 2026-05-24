import { AnimatePresence, motion } from 'framer-motion'
import { v10Spring } from './lib/v10Motion'
import { lazy, Suspense, useCallback, useState } from 'react'
import {
  BookOpen,
  LayoutDashboard,
  PlayCircle,
  MessageSquareText,
  Video,
  List,
  FileText,
  Languages,
  Timer,
  Download,
  ArrowLeftRight,
  Sparkles,
  FileCheck,
  Users,
  Mic,
} from 'lucide-react'
import { Volume10Atmosphere } from './components/Volume10Atmosphere'
import { SiteHeader } from './components/SiteHeader'
import { AppNav } from './components/AppNav'
import { GlobalSearch } from './components/GlobalSearch'
import { useProgress } from './hooks/useProgress'
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts'
import { fr } from './i18n/fr'
import type { TabId } from './lib/tabs'
import { DashboardView } from './views/DashboardView'
import { QuestionsView } from './views/QuestionsView'
import { PracticeView, type PracticeFocus } from './views/PracticeView'
import { AnswerBankView } from './views/AnswerBankView'
import { CheatSheetView } from './views/CheatSheetView'
import { LastRevisionView } from './views/LastRevisionView'
import { OpeningPrepView } from './views/OpeningPrepView'

const YoutubeView = lazy(() =>
  import('./views/YoutubeView').then((m) => ({ default: m.YoutubeView })),
)
const FrenchPhrasesView = lazy(() =>
  import('./views/FrenchPhrasesView').then((m) => ({ default: m.FrenchPhrasesView })),
)
const MockInterviewView = lazy(() =>
  import('./views/MockInterviewView').then((m) => ({ default: m.MockInterviewView })),
)
const ExportView = lazy(() =>
  import('./views/ExportView').then((m) => ({ default: m.ExportView })),
)
const KeywordsEnFrView = lazy(() =>
  import('./views/KeywordsEnFrView').then((m) => ({ default: m.KeywordsEnFrView })),
)
const ApplicationPrepView = lazy(() =>
  import('./views/ApplicationPrepView').then((m) => ({ default: m.ApplicationPrepView })),
)
const StakeholderLabView = lazy(() =>
  import('./views/StakeholderLabView').then((m) => ({ default: m.StakeholderLabView })),
)

const TABS = [
  { id: 'dashboard' as const, label: fr.tabs.dashboard, icon: LayoutDashboard },
  { id: 'opening' as const, label: fr.tabs.opening, icon: Mic },
  { id: 'cheat' as const, label: fr.tabs.cheat, icon: FileText },
  { id: 'questions' as const, label: fr.tabs.questions, icon: List },
  { id: 'practice' as const, label: fr.tabs.practice, icon: PlayCircle },
  { id: 'answers' as const, label: fr.tabs.answers, icon: MessageSquareText },
  { id: 'keywords' as const, label: fr.tabs.keywords, icon: ArrowLeftRight },
  { id: 'youtube' as const, label: fr.tabs.youtube, icon: Video },
  { id: 'french' as const, label: fr.tabs.phrases, icon: Languages },
  { id: 'mock' as const, label: fr.tabs.mock, icon: Timer },
  { id: 'revision' as const, label: fr.tabs.revision, icon: Sparkles },
  { id: 'application' as const, label: fr.tabs.application, icon: FileCheck },
  { id: 'perspectives' as const, label: fr.tabs.perspectives, icon: Users },
  { id: 'export' as const, label: fr.tabs.export, icon: Download },
]

function TabFallback() {
  return (
    <div className="flex min-h-[200px] items-center justify-center text-sm text-v10-muted">
      Chargement…
    </div>
  )
}

export default function App() {
  const [tab, setTab] = useState<TabId>('dashboard')
  const [practiceFocus, setPracticeFocus] = useState<PracticeFocus>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const progressApi = useProgress()

  useKeyboardShortcuts({
    onTab: (i) => {
      const t = TABS[i]
      if (t) setTab(t.id)
    },
    onSearch: () => setSearchOpen(true),
    onExportTab: () => setTab('export'),
    onApplicationTab: () => setTab('application'),
    onOpeningTab: () => setTab('opening'),
  })

  const goPractice = useCallback((focus: PracticeFocus) => {
    setPracticeFocus(focus)
    setTab('practice')
  }, [])

  const handleSearchNavigate = (target: TabId, questionId?: string) => {
    setTab(target)
    if (questionId) goPractice({ questionId })
  }

  return (
    <div className="relative min-h-dvh">
      <Volume10Atmosphere />
      <GlobalSearch
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={handleSearchNavigate}
      />
      <div className="relative min-h-dvh pb-24 md:pb-0">
        <SiteHeader onSearch={() => setSearchOpen(true)} />
        <AppNav tabs={TABS} active={tab} onSelect={setTab} />

        <main className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-12" id="main-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={v10Spring}
            >
              {tab === 'dashboard' && (
                <DashboardView
                  progressApi={progressApi}
                  onPracticeDue={() => goPractice({ dueOnly: true })}
                  onOpenQuestion={(id) => goPractice({ questionId: id })}
                  onPracticePhase={(categoryIds, phaseTitle) =>
                    goPractice({ categoryIds, phaseTitle })
                  }
                  onGoOpening={() => setTab('opening')}
                />
              )}
              {tab === 'opening' && <OpeningPrepView />}
              {tab === 'cheat' && <CheatSheetView />}
              {tab === 'questions' && <QuestionsView progressApi={progressApi} />}
              {tab === 'practice' && (
                <PracticeView
                  progressApi={progressApi}
                  focus={practiceFocus}
                  onFocusConsumed={() => setPracticeFocus(null)}
                />
              )}
              {tab === 'answers' && <AnswerBankView progressApi={progressApi} />}
              {tab === 'keywords' && (
                <Suspense fallback={<TabFallback />}>
                  <KeywordsEnFrView />
                </Suspense>
              )}
              {tab === 'youtube' && (
                <Suspense fallback={<TabFallback />}>
                  <YoutubeView />
                </Suspense>
              )}
              {tab === 'french' && (
                <Suspense fallback={<TabFallback />}>
                  <FrenchPhrasesView />
                </Suspense>
              )}
              {tab === 'mock' && (
                <Suspense fallback={<TabFallback />}>
                  <MockInterviewView progressApi={progressApi} />
                </Suspense>
              )}
              {tab === 'revision' && (
                <LastRevisionView
                  progressApi={progressApi}
                  onPracticeWeak={() => goPractice({ weakOnly: true })}
                  onPracticeDue={() => goPractice({ dueOnly: true })}
                  onOpenQuestion={(id) => goPractice({ questionId: id })}
                  onGoMock={() => setTab('mock')}
                  onGoExport={() => setTab('export')}
                  onGoApplication={() => setTab('application')}
                />
              )}
              {tab === 'application' && (
                <Suspense fallback={<TabFallback />}>
                  <ApplicationPrepView progressApi={progressApi} />
                </Suspense>
              )}
              {tab === 'perspectives' && (
                <Suspense fallback={<TabFallback />}>
                  <StakeholderLabView />
                </Suspense>
              )}
              {tab === 'export' && (
                <Suspense fallback={<TabFallback />}>
                  <ExportView progressApi={progressApi} />
                </Suspense>
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        <footer className="hidden border-t border-v10-line bg-v10-ink py-10 text-center md:block">
          <p className="text-lg font-bold text-v10-paper">
            Donner de l&apos;espace
            <br />
            à vos idées
          </p>
          <BookOpen className="mx-auto mt-4 h-4 w-4 text-v10-beige/60" aria-hidden />
          <p className="mt-3 text-xs font-bold text-v10-beige/80">{fr.app.footer}</p>
        </footer>
      </div>
    </div>
  )
}
