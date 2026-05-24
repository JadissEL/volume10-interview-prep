import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Sparkles, FileText, Lightbulb } from 'lucide-react'
import { useState } from 'react'
import type { CategoryId } from '../data/types'
import { questions } from '../data/questions'
import { getPersonalizedAnswer, hasDedicatedAnswer } from '../data/personalizedAnswers'
import { getStoryCardsForQuestion } from '../lib/storyCardsForQuestion'
import { fadeSlideUp, motionTransition, v10Spring } from '../lib/v10Motion'
import { StorySnippetCards } from './StorySnippetCards'
import { AnimatedCollapse, MotionCta, RevealPanel } from './motion'
import { fr } from '../i18n/fr'
import type { useProgress } from '../hooks/useProgress'

type ProgressHooks = Pick<
  ReturnType<typeof useProgress>,
  'getHiddenSnippets' | 'recordCardUsage' | 'dismissSnippet'
>

type Props = {
  questionId: string
  categoryId: CategoryId
  genericBullets?: string[]
  hideGenericUntilHint?: boolean
  compact?: boolean
  hiddenSnippetIds?: string[]
  progressHooks?: ProgressHooks
  showMatchScore?: boolean
  onCardUsed?: (snippetId: string, questionId: string) => void
  onDismissCard?: (snippetId: string) => void
  showRevealButton?: boolean
  initialStep?: 'hidden' | 'cards' | 'full'
}

type RevealStep = 'hidden' | 'cards' | 'full'

export function PersonalizedAnswerReveal({
  questionId,
  categoryId,
  genericBullets,
  hideGenericUntilHint = true,
  compact = false,
  hiddenSnippetIds: hiddenProp = [],
  progressHooks,
  showMatchScore = import.meta.env.DEV,
  onCardUsed,
  onDismissCard,
  showRevealButton = true,
  initialStep = 'hidden',
}: Props) {
  const reduced = useReducedMotion()
  const [showHints, setShowHints] = useState(!hideGenericUntilHint)
  const [step, setStep] = useState<RevealStep>(initialStep)
  const answer = getPersonalizedAnswer(questionId, categoryId)
  const tailored = hasDedicatedAnswer(questionId)
  const questionRow = questions.find((q) => q.id === questionId)
  const questionText = questionRow?.question ?? ''
  const hiddenSnippetIds = progressHooks
    ? progressHooks.getHiddenSnippets()
    : hiddenProp
  const storyCards = getStoryCardsForQuestion(
    categoryId,
    answer,
    questionText,
    questionRow?.tags ?? [],
    hiddenSnippetIds,
  )
  const handleCardUsed = (snippetId: string, qid: string) => {
    progressHooks?.recordCardUsage(snippetId, qid)
    onCardUsed?.(snippetId, qid)
  }
  const handleDismiss = (snippetId: string) => {
    progressHooks?.dismissSnippet(snippetId)
    onDismissCard?.(snippetId)
  }

  const formatLabels = {
    STAR: 'STAR',
    CASE: 'Cas pratique',
    DIRECT: 'Réponse directe',
    CURVEBALL: 'Question piège',
  } as const

  return (
    <div className={compact ? 'mt-3 space-y-2' : 'mt-4 space-y-3'}>
      <AnimatePresence mode="wait">
        {step === 'hidden' && (
          <motion.div
            key="meta"
            initial={reduced ? false : 'hidden'}
            animate="visible"
            exit="exit"
            variants={fadeSlideUp}
            transition={motionTransition(reduced, v10Spring)}
            className="flex flex-wrap items-center gap-2"
          >
            {tailored ? (
              <span className="bg-v10-red/10 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-v10-red">
                {fr.personalized.tailoredBadge}
              </span>
            ) : null}
            <span className="label-caps-neutral">{formatLabels[answer.format]}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {genericBullets && genericBullets.length > 0 && (
        <div>
          <AnimatedCollapse open={!hideGenericUntilHint || showHints} contentKey="hints">
            <ul className="list-disc space-y-1 pl-5 text-sm text-v10-muted">
              {genericBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </AnimatedCollapse>
          {hideGenericUntilHint && !showHints && (
            <MotionCta variant="link" onClick={() => setShowHints(true)} className="text-xs text-v10-dim">
              <Lightbulb className="h-3.5 w-3.5" />
              {fr.personalized.showHints}
            </MotionCta>
          )}
        </div>
      )}

      <AnimatePresence mode="wait">
        {step === 'hidden' && showRevealButton && (
          <motion.div
            key="cta-hidden"
            initial={reduced ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -6 }}
            transition={motionTransition(reduced, v10Spring)}
          >
            <MotionCta
              pulse
              onClick={() => setStep('cards')}
              className="w-full justify-center sm:w-auto"
            >
              <motion.span
                animate={reduced ? undefined : { rotate: [0, 8, -8, 0] }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Sparkles className="h-4 w-4" />
              </motion.span>
              {fr.personalized.revealCardsButton}
            </MotionCta>
          </motion.div>
        )}

        {step !== 'hidden' && (
          <motion.div
            key={`reveal-${step}`}
            initial={reduced ? false : 'hidden'}
            animate="visible"
            exit="exit"
            variants={fadeSlideUp}
            transition={motionTransition(reduced, v10Spring)}
          >
            <RevealPanel>
              <StorySnippetCards
                cards={storyCards}
                followUps={answer.followUps}
                showMatchScore={showMatchScore}
                onCardExpand={(id) => handleCardUsed(id, questionId)}
                onDismiss={handleDismiss}
              />

              {step === 'cards' && (
                <MotionCta variant="link" onClick={() => setStep('full')}>
                  <FileText className="h-4 w-4 text-v10-red" />
                  {fr.personalized.revealFullScript}
                </MotionCta>
              )}

              <AnimatedCollapse open={step === 'full'} contentKey="full-script">
                <div className="space-y-3 border-t border-v10-line pt-4">
                  <p className="label-caps">{fr.personalized.fullScriptTitle}</p>
                  <p className="text-sm font-semibold text-v10-red">{answer.hook}</p>
                  <p className="whitespace-pre-wrap text-sm leading-relaxed text-v10-ink">
                    {answer.storyScript}
                  </p>
                  {answer.storyScriptEn && (
                    <div className="rounded border border-v10-line bg-v10-bg/60 p-3 text-xs leading-relaxed text-v10-dim">
                      <p className="label-caps-neutral mb-1">{fr.personalized.englishNotes}</p>
                      <p>{answer.storyScriptEn}</p>
                    </div>
                  )}
                  {answer.volumeDixLink && (
                    <p className="text-xs font-medium text-v10-dim">
                      Volume Dix : {answer.volumeDixLink}
                    </p>
                  )}
                  {answer.followUps && answer.followUps.length > 0 && (
                    <div className="text-xs text-v10-muted">
                      <p className="font-medium text-v10-ink">{fr.personalized.followUps}</p>
                      <ul className="mt-2 list-disc pl-4">
                        {answer.followUps.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </AnimatedCollapse>

              <div className="flex flex-wrap gap-3">
                {step === 'full' && (
                  <MotionCta variant="link" onClick={() => setStep('cards')} className="text-xs text-v10-muted">
                    {fr.personalized.backToCards}
                  </MotionCta>
                )}
                {showRevealButton && (
                  <MotionCta variant="link" onClick={() => setStep('hidden')} className="text-xs text-v10-muted">
                    {fr.personalized.hideAnswer}
                  </MotionCta>
                )}
              </div>
            </RevealPanel>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
