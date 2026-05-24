import { motion, AnimatePresence } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import {
  LayoutDashboard,
  PlayCircle,
  Sparkles,
  Timer,
  List,
  MoreHorizontal,
  FileCheck,
  Users,
  Mic,
} from 'lucide-react'
import { useState } from 'react'
import { fr } from '../i18n/fr'
import type { TabId } from '../lib/tabs'
import { PRIMARY_MOBILE_TABS } from '../lib/tabs'

export type TabConfig = { id: TabId; label: string; icon: LucideIcon }

type Props = {
  tabs: TabConfig[]
  active: TabId
  onSelect: (id: TabId) => void
}

const MOBILE_ICONS: Record<TabId, LucideIcon> = {
  dashboard: LayoutDashboard,
  opening: Mic,
  practice: PlayCircle,
  revision: Sparkles,
  mock: Timer,
  questions: List,
  cheat: List,
  answers: List,
  keywords: List,
  youtube: List,
  french: List,
  application: FileCheck,
  perspectives: Users,
  export: List,
}

export function AppNav({ tabs, active, onSelect }: Props) {
  const [moreOpen, setMoreOpen] = useState(false)
  const secondary = tabs.filter((t) => !PRIMARY_MOBILE_TABS.includes(t.id))
  const primaryConfigs = PRIMARY_MOBILE_TABS.map((id) => tabs.find((t) => t.id === id)!).filter(
    Boolean,
  )

  return (
    <>
      <nav className="relative mx-auto hidden max-w-6xl md:block" aria-label={fr.nav.main}>
        <div className="flex items-center gap-6 overflow-x-auto border-t border-v10-line/60 px-4 py-4 md:gap-8 md:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {tabs.map((t, i) => {
            const shortcut = i < 9 ? String(i + 1) : i === 9 ? '0' : undefined
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => onSelect(t.id)}
                aria-current={active === t.id ? 'page' : undefined}
                className="nav-v10 shrink-0"
                title={shortcut ? `${shortcut} — ${t.label}` : t.label}
              >
                {t.label}
              </button>
            )
          })}
        </div>
      </nav>

      <nav
        className="fixed inset-x-4 bottom-4 z-40 md:hidden"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        aria-label={fr.nav.mobile}
      >
        <div className="border border-v10-line bg-v10-paper shadow-lg">
          <div className="flex items-stretch justify-around">
            {primaryConfigs.map((t) => {
              const Icon = MOBILE_ICONS[t.id] ?? t.icon
              const isActive = active === t.id
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => onSelect(t.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative flex flex-1 flex-col items-center gap-0.5 py-3 text-[10px] font-medium ${
                    isActive ? 'text-v10-red' : 'text-v10-muted'
                  }`}
                >
                  <Icon className="h-5 w-5" strokeWidth={isActive ? 2.25 : 1.75} aria-hidden />
                  <span className="max-w-[4rem] truncate">{t.label.split(' ')[0]}</span>
                </button>
              )
            })}
            <button
              type="button"
              onClick={() => setMoreOpen((o) => !o)}
              className={`flex flex-1 flex-col items-center gap-0.5 py-3 text-[10px] font-medium ${
                secondary.some((t) => t.id === active) ? 'text-v10-red' : 'text-v10-muted'
              }`}
              aria-expanded={moreOpen}
            >
              <MoreHorizontal className="h-5 w-5" />
              <span>{fr.nav.more}</span>
            </button>
          </div>
          <AnimatePresence>
            {moreOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="border-t border-v10-line bg-v10-beige/40"
              >
                <div className="grid grid-cols-2 gap-px bg-v10-line">
                  {secondary.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => {
                        onSelect(t.id)
                        setMoreOpen(false)
                      }}
                      className={`bg-v10-paper px-3 py-2.5 text-left text-xs font-medium ${
                        active === t.id ? 'text-v10-red' : 'text-v10-ink'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  )
}
