import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { CATEGORIES, questions } from '../data/questions'
import type { CategoryId } from '../data/types'
import type { useProgress } from '../hooks/useProgress'
import { fr } from '../i18n/fr'
import { getCategoryLabel } from '../lib/categories'
import { ElasticCard } from '../components/ElasticCard'
import { PageHero } from '../components/PageHero'
import { QuestionBadges } from '../components/QuestionBadges'
import { PersonalizedAnswerReveal } from '../components/PersonalizedAnswerReveal'
import { StakeholderAccordion } from '../components/StakeholderAccordion'
import { YourEdgeSidebar } from '../components/YourEdgeSidebar'
import { ExpandChevron } from '../components/motion'
import { motionTransition, v10Spring } from '../lib/v10Motion'
import { useReducedMotion } from 'framer-motion'

type ProgressApi = ReturnType<typeof useProgress>

export function QuestionsView({ progressApi }: { progressApi: ProgressApi }) {
  const reduced = useReducedMotion()
  const [category, setCategory] = useState<CategoryId | 'all'>('all')
  const [query, setQuery] = useState('')
  const [expanded, setExpanded] = useState<string | null>(null)
  const { progress, setQuestionProgress } = progressApi

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return questions.filter((item) => {
      if (category !== 'all' && item.categoryId !== category) return false
      if (!q) return true
      return (
        item.question.toLowerCase().includes(q) ||
        item.answerBullets.some((b) => b.toLowerCase().includes(q))
      )
    })
  }, [category, query])

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
      <div>
        <PageHero label={fr.questions.bank} title={fr.questions.title} />

        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-v10-muted" />
            <input
              type="search"
              placeholder={fr.questions.search}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-xl border border-black/5 bg-white/80 py-2.5 pl-10 pr-4 text-sm outline-none ring-v10-ink/20 focus:ring-2"
            />
          </div>
          <p className="text-sm text-v10-muted">{fr.questions.shown(filtered.length)}</p>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          <FilterChip
            active={category === 'all'}
            onClick={() => setCategory('all')}
            label={fr.questions.all}
          />
          {CATEGORIES.map((c) => (
            <FilterChip
              key={c.id}
              active={category === c.id}
              onClick={() => setCategory(c.id)}
              label={`${c.label} (${c.count})`}
            />
          ))}
        </div>

        <ul className="space-y-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => {
              const open = expanded === item.id
              const studied = progress.byQuestion[item.id]?.studied
              return (
                <motion.li
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                >
                  <ElasticCard className="overflow-hidden">
                    <button
                      type="button"
                      className="flex w-full items-start gap-4 p-4 text-left"
                      onClick={() => setExpanded(open ? null : item.id)}
                      aria-expanded={open}
                    >
                      <ExpandChevron open={open} className="mt-1 h-4 w-4 shrink-0 text-v10-muted" />
                      <span className="label-caps mt-1 shrink-0">{item.id}</span>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-medium text-v10-muted">
                          {getCategoryLabel(item.categoryId)}
                        </p>
                        <p className="mt-1 font-medium leading-snug text-v10-ink">
                          {item.question}
                        </p>
                        <QuestionBadges q={item} />
                      </div>
                      {studied && (
                        <span className="label-caps shrink-0 rounded-full bg-v10-ink/5 px-2 py-1">
                          {fr.questions.studied}
                        </span>
                      )}
                    </button>
                    <AnimatePresence>
                      {open && (
                        <motion.div
                          initial={reduced ? false : { height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={motionTransition(reduced, v10Spring)}
                          className="overflow-hidden border-t border-v10-line px-4 pb-4"
                        >
                          <PersonalizedAnswerReveal
                            questionId={item.id}
                            categoryId={item.categoryId}
                            genericBullets={item.answerBullets}
                            hideGenericUntilHint
                            progressHooks={progressApi}
                          />
                          <StakeholderAccordion categoryId={item.categoryId} />
                          <button
                            type="button"
                            className="mt-3 text-xs font-semibold uppercase tracking-wider text-v10-ink underline-offset-4 hover:underline"
                            onClick={() =>
                              setQuestionProgress(item.id, {
                                studied: !studied,
                                lastSeen: new Date().toISOString(),
                              })
                            }
                          >
                            {studied ? fr.questions.unmarkStudied : fr.questions.markStudied}
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </ElasticCard>
                </motion.li>
              )
            })}
          </AnimatePresence>
        </ul>
      </div>

      <YourEdgeSidebar compact progressApi={progressApi} />
    </div>
  )
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean
  onClick: () => void
  label: string
}) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 500, damping: 24 }}
      onClick={onClick}
      className={`rounded-full px-3 py-1.5 text-xs font-medium ${
        active ? 'bg-v10-ink text-white' : 'bg-white/70 text-v10-muted ring-1 ring-black/5'
      }`}
    >
      {label}
    </motion.button>
  )
}
