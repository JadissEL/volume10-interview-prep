import { AnimatePresence, motion } from 'framer-motion'
import { MotionCta } from '../components/motion'
import { fadeSlideUp, motionTransition, v10Spring } from '../lib/v10Motion'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Clock, RotateCcw, Play } from 'lucide-react'
import type { InterviewQuestion } from '../data/types'
import type { useProgress } from '../hooks/useProgress'
import { buildMockDeck, MOCK_COUNT, MOCK_SECONDS } from '../lib/mockInterview'
import { getCategoryLabel } from '../lib/categories'
import { fr } from '../i18n/fr'
import { ElasticCard } from '../components/ElasticCard'
import { PageHero } from '../components/PageHero'
import { PersonalizedAnswerReveal } from '../components/PersonalizedAnswerReveal'

type ProgressApi = ReturnType<typeof useProgress>

type Phase = 'idle' | 'running' | 'done'

export function MockInterviewView({ progressApi }: { progressApi: ProgressApi }) {
  const { setMockScore, progress } = progressApi
  const [phase, setPhase] = useState<Phase>('idle')
  const [deck, setDeck] = useState<InterviewQuestion[]>([])
  const [index, setIndex] = useState(0)
  const [secondsLeft, setSecondsLeft] = useState(MOCK_SECONDS)
  const [scores, setScores] = useState<Record<string, { score: number; note: string }>>({})
  const [currentScore, setCurrentScore] = useState(7)
  const [currentNote, setCurrentNote] = useState('')
  const [showCards, setShowCards] = useState(false)

  const start = useCallback(() => {
    setDeck(buildMockDeck())
    setIndex(0)
    setSecondsLeft(MOCK_SECONDS)
    setScores({})
    setCurrentScore(7)
    setCurrentNote('')
    setShowCards(false)
    setPhase('running')
  }, [])

  useEffect(() => {
    if (phase !== 'running') return
    if (secondsLeft <= 0) {
      setPhase('done')
      return
    }
    const t = window.setInterval(() => setSecondsLeft((s) => s - 1), 1000)
    return () => clearInterval(t)
  }, [phase, secondsLeft])

  const current = deck[index]

  useEffect(() => {
    setShowCards(false)
  }, [current?.id])

  const saveAndAdvance = () => {
    if (!current) return
    setMockScore(current.id, currentScore, currentNote || undefined)
    setScores((s) => ({
      ...s,
      [current.id]: { score: currentScore, note: currentNote },
    }))
    setCurrentNote('')
    setCurrentScore(7)
    setShowCards(false)
    if (index >= MOCK_COUNT - 1) setPhase('done')
    else setIndex((i) => i + 1)
  }

  const avgScore = useMemo(() => {
    const vals = Object.values(scores).map((s) => s.score)
    if (!vals.length) {
      const saved = deck
        .map((q) => progress.mockScores[q.id]?.score)
        .filter((n): n is number => n !== undefined)
      if (!saved.length) return null
      return saved.reduce((a, b) => a + b, 0) / saved.length
    }
    return vals.reduce((a, b) => a + b, 0) / vals.length
  }, [scores, deck, progress.mockScores])

  if (phase === 'idle') {
    return (
      <div className="mx-auto max-w-2xl space-y-6 text-center">
        <PageHero
          label={fr.mock.title}
          title={fr.mock.heading}
          description={fr.mock.desc(MOCK_COUNT)}
          accent
        />
        <button type="button" onClick={start} className="btn-cta mx-auto">
          <Play className="h-4 w-4" />
          {fr.mock.start}
        </button>
      </div>
    )
  }

  if (phase === 'done') {
    return (
      <div className="mx-auto max-w-3xl space-y-6">
        <PageHero
          label={fr.mock.complete}
          title={fr.mock.checklist}
          description={avgScore !== null ? fr.mock.avgScore(avgScore) : undefined}
        />
        <ul className="space-y-6">
          {deck.map((q) => {
            const local = scores[q.id]
            const saved = progress.mockScores[q.id]
            const score = local?.score ?? saved?.score
            const note = local?.note ?? saved?.note
            return (
              <ElasticCard key={q.id} className="p-5">
                <p className="text-sm font-medium text-v10-ink">{q.question}</p>
                {score !== undefined && (
                  <p className="mt-1 text-xs text-v10-muted">
                    {fr.mock.score} : {score}/10{note ? ` — ${note}` : ''}
                  </p>
                )}
                <PersonalizedAnswerReveal
                  questionId={q.id}
                  categoryId={q.categoryId}
                  compact
                  progressHooks={progressApi}
                  initialStep="cards"
                />
              </ElasticCard>
            )
          })}
        </ul>
        <button type="button" onClick={start} className="btn-cta">
          <RotateCcw className="h-4 w-4" />
          {fr.mock.again}
        </button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div className="flex items-center justify-between">
        <span className="label-caps flex items-center gap-2">
          <Clock className="h-4 w-4" />
          {Math.floor(secondsLeft / 60)}:{(secondsLeft % 60).toString().padStart(2, '0')}
        </span>
        <span className="text-sm text-v10-muted">
          {fr.mock.question(index + 1, MOCK_COUNT)}
        </span>
      </div>

      {current && (
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <ElasticCard className="min-h-[200px] p-6">
            <p className="label-caps">{getCategoryLabel(current.categoryId)}</p>
            <h3 className="mt-4 text-xl font-semibold text-v10-ink">{current.question}</h3>
            <p className="mt-4 text-xs text-v10-muted">{fr.mock.speak}</p>
            <div className="mt-6 flex flex-wrap items-end gap-4">
              <label className="text-sm">
                <span className="font-medium text-v10-ink">{fr.mock.score}</span>
                <input
                  type="range"
                  min={1}
                  max={10}
                  value={currentScore}
                  onChange={(e) => setCurrentScore(Number(e.target.value))}
                  className="mt-1 block w-32"
                />
                <span className="text-v10-muted">{currentScore}</span>
              </label>
              <label className="min-w-[200px] flex-1 text-sm">
                <span className="font-medium text-v10-ink">{fr.mock.note}</span>
                <input
                  type="text"
                  value={currentNote}
                  onChange={(e) => setCurrentNote(e.target.value)}
                  className="mt-1 w-full rounded-full border-0 bg-white/80 px-3 py-1.5 text-sm ring-1 ring-black/5"
                />
              </label>
            </div>
            {!showCards ? (
              <MotionCta variant="link" onClick={() => setShowCards(true)} className="mt-6">
                {fr.mock.showCardsBeforeNext}
              </MotionCta>
            ) : (
              <AnimatePresence>
                <motion.div
                  key="mock-cards"
                  initial="hidden"
                  animate="visible"
                  variants={fadeSlideUp}
                  transition={motionTransition(null, v10Spring)}
                  className="mt-4"
                >
                  <PersonalizedAnswerReveal
                    questionId={current.id}
                    categoryId={current.categoryId}
                    compact
                    progressHooks={progressApi}
                    initialStep="cards"
                    showRevealButton={false}
                  />
                </motion.div>
              </AnimatePresence>
            )}
          </ElasticCard>
        </motion.div>
      )}

      <div className="flex justify-between">
        <button
          type="button"
          disabled={index === 0}
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          className="rounded-full bg-white/80 px-4 py-2 text-sm ring-1 ring-black/5 disabled:opacity-40"
        >
          {fr.mock.previous}
        </button>
        <button type="button" onClick={saveAndAdvance} className="btn-cta">
          {index >= MOCK_COUNT - 1 ? fr.mock.finish : fr.mock.saveScore}
        </button>
      </div>
    </div>
  )
}
