import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight, Eye, Filter } from 'lucide-react'
import { CATEGORIES, questions } from '../data/questions'
import type { CategoryId, Confidence } from '../data/types'
import type { useProgress } from '../hooks/useProgress'
import { useKeyboardShortcuts } from '../hooks/useKeyboardShortcuts'
import { fr } from '../i18n/fr'
import { getCategoryLabel } from '../lib/categories'
import { isQuestionDue } from '../lib/spacedRepetition'
import { ConfidencePicker } from '../components/ConfidencePicker'
import { ElasticCard } from '../components/ElasticCard'
import { PageHero } from '../components/PageHero'
import { QuestionTimer } from '../components/QuestionTimer'
import { QuestionBadges } from '../components/QuestionBadges'
import { PersonalizedAnswerReveal } from '../components/PersonalizedAnswerReveal'
import { AnimatedCollapse, MotionCta } from '../components/motion'
import { v10Spring } from '../lib/v10Motion'

type ProgressApi = ReturnType<typeof useProgress>

export type PracticeFocus = {
  weakOnly?: boolean
  dueOnly?: boolean
  questionId?: string
  categoryIds?: CategoryId[]
  phaseTitle?: string
} | null

export function PracticeView({
  progressApi,
  focus,
  onFocusConsumed,
}: {
  progressApi: ProgressApi
  focus?: PracticeFocus
  onFocusConsumed?: () => void
}) {
  const { progress, setQuestionProgress, rateQuestion, getConfidence } = progressApi
  const [weakOnly, setWeakOnly] = useState(false)
  const [dueOnly, setDueOnly] = useState(false)
  const [phaseCategories, setPhaseCategories] = useState<CategoryId[] | null>(null)
  const [phaseTitle, setPhaseTitle] = useState<string | null>(null)
  const [category, setCategory] = useState<CategoryId | 'all'>('all')
  const [index, setIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [showScript, setShowScript] = useState(false)
  const [timerOn, setTimerOn] = useState(false)

  useEffect(() => {
    if (!focus) return
    if (focus.weakOnly) setWeakOnly(true)
    if (focus.dueOnly) setDueOnly(true)
    if (focus.categoryIds?.length) {
      setPhaseCategories(focus.categoryIds)
      setPhaseTitle(focus.phaseTitle ?? null)
      setCategory('all')
    }
    onFocusConsumed?.()
  }, [focus, onFocusConsumed])

  const deck = useMemo(() => {
    return questions.filter((q) => {
      if (phaseCategories?.length && !phaseCategories.includes(q.categoryId)) return false
      if (category !== 'all' && q.categoryId !== category) return false
      if (dueOnly && !isQuestionDue(q, progress.byQuestion[q.id])) return false
      if (!weakOnly) return true
      const c = progress.byQuestion[q.id]?.confidence
      return !c || c <= 2
    })
  }, [category, weakOnly, dueOnly, phaseCategories, progress])

  useEffect(() => {
    if (!focus?.questionId) return
    const idx = deck.findIndex((q) => q.id === focus.questionId)
    if (idx >= 0) {
      setIndex(idx)
      setRevealed(false)
      setShowScript(false)
      setTimerOn(true)
    }
  }, [focus?.questionId, deck])

  const current = deck[index] ?? deck[0]
  const total = deck.length

  const go = useCallback(
    (delta: number) => {
      setRevealed(false)
      setShowScript(false)
      setTimerOn(true)
      setIndex((i) => {
        if (!total) return 0
        return (i + delta + total) % total
      })
    },
    [total],
  )

  useKeyboardShortcuts(
    {
      onNext: () => go(1),
      onPrev: () => go(-1),
      onReveal: () => setRevealed((r) => !r),
    },
    Boolean(current),
  )

  if (!current) {
    return (
      <ElasticCard className="p-8 text-center">
        <p className="text-v10-muted">{fr.practice.noCards}</p>
      </ElasticCard>
    )
  }

  const confidence = getConfidence(current.id)

  const rate = (c: Confidence) => {
    rateQuestion(current.id, c)
    go(1)
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHero
        label={fr.practice.title}
        title={fr.practice.flashcards}
        description={
          phaseTitle
            ? `${fr.practice.shortcuts} · ${fr.practice.phaseFilter} : ${phaseTitle}`
            : fr.practice.shortcuts
        }
        accent
      />

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => setWeakOnly((w) => !w)}
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium ${
            weakOnly ? 'bg-v10-ink text-white' : 'bg-white/80 ring-1 ring-black/5'
          }`}
        >
          <Filter className="h-3.5 w-3.5" />
          {fr.practice.weakOnly}
        </button>
        <button
          type="button"
          onClick={() => setDueOnly((d) => !d)}
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium ${
            dueOnly ? 'bg-v10-ink text-white' : 'bg-white/80 ring-1 ring-black/5'
          }`}
        >
          <Filter className="h-3.5 w-3.5" />
          {fr.practice.dueToday}
        </button>
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value as CategoryId | 'all')
            setIndex(0)
            setRevealed(false)
          }}
          className="rounded-full border-0 bg-white/80 px-3 py-1.5 text-xs ring-1 ring-black/5"
          disabled={Boolean(phaseCategories?.length)}
        >
          <option value="all">{fr.practice.allCategories}</option>
          {CATEGORIES.map((c) => (
            <option key={c.id} value={c.id}>
              {c.label}
            </option>
          ))}
        </select>
        <QuestionTimer active={timerOn && !revealed} onExpire={() => setRevealed(true)} />
        <span className="text-sm text-v10-muted">{fr.practice.card(index + 1, total)}</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, x: 24, rotate: 0.5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={v10Spring}
        >
          <ElasticCard className="min-h-[280px] p-6 md:p-8">
            <p className="label-caps">{getCategoryLabel(current.categoryId)}</p>
            <h3 className="mt-4 text-xl font-semibold leading-snug text-v10-ink md:text-2xl">
              {current.question}
            </h3>
            <QuestionBadges q={current} />
            {current.bilingualRequired && (
              <p className="mt-2 text-xs font-medium text-blue-800">{fr.practice.frenchTip}</p>
            )}

            {!revealed ? (
              <MotionCta
                pulse
                onClick={() => {
                  setRevealed(true)
                  setTimerOn(false)
                  setQuestionProgress(current.id, {
                    lastSeen: new Date().toISOString(),
                    studied: progress.byQuestion[current.id]?.studied ?? false,
                  })
                }}
                className="mt-8"
              >
                <Eye className="h-4 w-4" />
                {fr.practice.reveal}
              </MotionCta>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key="practice-answer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={v10Spring}
                >
                  <PersonalizedAnswerReveal
                    questionId={current.id}
                    categoryId={current.categoryId}
                    genericBullets={current.answerBullets}
                    hideGenericUntilHint
                    compact
                    progressHooks={progressApi}
                    initialStep="cards"
                    showRevealButton={false}
                  />
                  <MotionCta
                    variant="link"
                    onClick={() => setShowScript((s) => !s)}
                    className="mt-4 text-xs font-semibold uppercase tracking-wider"
                  >
                    {showScript ? fr.practice.hideScript : fr.practice.showScript}
                  </MotionCta>
                  <AnimatedCollapse open={showScript} contentKey="practice-full-script">
                    <pre className="mt-3 whitespace-pre-wrap bg-v10-bg/80 p-4 text-sm leading-relaxed text-v10-ink">
                      {current.fullScript}
                    </pre>
                  </AnimatedCollapse>
                </motion.div>
              </AnimatePresence>
            )}
          </ElasticCard>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          className="inline-flex items-center gap-1 rounded-full bg-white/80 px-4 py-2 text-sm ring-1 ring-black/5"
        >
          <ChevronLeft className="h-4 w-4" /> {fr.practice.prev}
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          className="inline-flex items-center gap-1 rounded-full bg-white/80 px-4 py-2 text-sm ring-1 ring-black/5"
        >
          {fr.practice.next} <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div>
        <p className="label-caps mb-2">{fr.practice.rateConfidence}</p>
        <ConfidencePicker value={confidence} onChange={rate} />
      </div>
    </div>
  )
}
