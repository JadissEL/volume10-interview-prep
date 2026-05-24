import { useEffect, useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { fr } from '../i18n/fr'
import { buildSearchIndex, filterSearch, type SearchResult } from '../lib/searchIndex'
import type { TabId } from '../lib/tabs'

type Props = {
  open: boolean
  onClose: () => void
  onNavigate: (tab: TabId, questionId?: string) => void
}

export function GlobalSearch({ open, onClose, onNavigate }: Props) {
  const [query, setQuery] = useState('')
  const index = useMemo(() => buildSearchIndex(), [])
  const results = useMemo(() => filterSearch(query, index), [query, index])

  useEffect(() => {
    if (!open) setQuery('')
  }, [open])

  const pick = (r: SearchResult) => {
    onNavigate(r.tab, r.questionId)
    onClose()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-4 pt-[10vh] backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={fr.search.title}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="w-full max-w-xl border border-v10-line bg-v10-paper shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-v10-line px-5 py-4">
              <Search className="h-4 w-4 text-v10-red" aria-hidden />
              <input
                autoFocus
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={fr.search.placeholder}
                className="flex-1 border-0 bg-transparent text-lg font-medium outline-none placeholder:text-v10-muted"
              />
              <button
                type="button"
                onClick={onClose}
                className="link-underline-up text-sm font-medium text-v10-muted"
              >
                {fr.search.close}
              </button>
            </div>
            <ul className="max-h-[50vh] overflow-y-auto py-1" role="listbox">
              {results.length === 0 ? (
                <li className="px-5 py-8 text-center text-sm text-v10-muted">{fr.search.empty}</li>
              ) : (
                results.map((r) => (
                  <li key={r.id}>
                    <button
                      type="button"
                      role="option"
                      className="group w-full border-b border-v10-line px-5 py-3 text-left hover:bg-v10-bg"
                      onClick={() => pick(r)}
                    >
                      <p className="font-medium text-v10-ink group-hover:text-v10-red">
                        {r.title}
                      </p>
                      {r.subtitle && (
                        <p className="mt-1 text-xs text-v10-muted">{r.subtitle}</p>
                      )}
                    </button>
                  </li>
                ))
              )}
            </ul>
            <p className="border-t border-v10-line px-5 py-2 text-xs text-v10-muted">
              {fr.search.hint}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
