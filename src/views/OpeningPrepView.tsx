import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { Mic, Sparkles, Target } from 'lucide-react'
import {
  jobOfferFitMap,
  jobOfferMeta,
  jobOfferMission,
  jobOfferProfile,
  jobOfferResponsibilities,
} from '../data/jobOffer'
import {
  openingStoryBlocks,
  openingStoryElevator30s,
  openingStoryFraming,
  openingStoryFullScript,
  whyBestCandidateBullets,
} from '../data/openingStory'
import { getProofPoint } from '../data/candidateProfile'
import { getSnippetById } from '../data/storySnippets'
import { fr } from '../i18n/fr'
import { ElasticCard } from '../components/ElasticCard'
import { PageHero } from '../components/PageHero'
import { StorySnippetCards } from '../components/StorySnippetCards'
import { AnimatedCollapse, MotionCta, RevealPanel } from '../components/motion'
import { fadeSlideUp, motionTransition, staggerDelay, v10Spring } from '../lib/v10Motion'
import type { ScoredStoryCard } from '../lib/storyCardsForQuestion'

const openingSnippetIds = ['frag-leadership-matrix', 'card-pp-42-matrix', 'card-pp-smartsheet']

export function OpeningPrepView() {
  const reduced = useReducedMotion()
  const [storyRevealed, setStoryRevealed] = useState(false)
  const [scriptRevealed, setScriptRevealed] = useState(false)
  const [fitRevealed, setFitRevealed] = useState<Record<number, boolean>>({})
  const [cardsRevealed, setCardsRevealed] = useState(false)

  const openingCards: ScoredStoryCard[] = openingSnippetIds
    .map((id) => getSnippetById(id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))
    .map((c) => ({ ...c, score: 100, matchReason: 'Ouverture d’entrevue' }))

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <PageHero
        label={fr.opening.title}
        title={fr.opening.heading}
        description={fr.opening.desc}
        accent
      />

      <ElasticCard className="border-v10-red/30 bg-v10-bg/50 p-6">
        <p className="label-caps text-v10-red">{fr.opening.offerBadge}</p>
        <h2 className="mt-2 text-xl font-semibold text-v10-ink">
          {jobOfferMeta.openings} {jobOfferMeta.title}
        </h2>
        <ul className="mt-4 space-y-2 text-sm text-v10-dim">
          <li>
            <strong className="text-v10-ink">{fr.opening.deadline} :</strong>{' '}
            {jobOfferMeta.deadlineLabel}
          </li>
          <li>
            <strong className="text-v10-ink">{fr.opening.location} :</strong>{' '}
            {jobOfferMeta.location}
          </li>
          <li>
            <strong className="text-v10-ink">{fr.opening.languages} :</strong>{' '}
            {jobOfferMeta.languages}
          </li>
          <li>
            <strong className="text-v10-ink">Mission :</strong>{' '}
            {jobOfferMission.positioning}
          </li>
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-v10-ink">
          {jobOfferProfile.environment} — {jobOfferProfile.culture}
        </p>
      </ElasticCard>

      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Mic className="h-5 w-5 text-v10-red" />
          <h2 className="text-lg font-semibold text-v10-ink">{fr.opening.storyTitle}</h2>
        </div>
        <ElasticCard className="p-6">
          <p className="text-base font-medium leading-relaxed text-v10-ink italic">
            « {openingStoryFraming.introLine} »
          </p>
          {!cardsRevealed ? (
            <MotionCta variant="link" onClick={() => setCardsRevealed(true)} className="mt-4 text-v10-red">
              {fr.opening.revealOpeningCards}
            </MotionCta>
          ) : (
            <AnimatePresence>
              <motion.div
                initial={reduced ? false : 'hidden'}
                animate="visible"
                variants={fadeSlideUp}
                transition={motionTransition(reduced, v10Spring)}
                className="mt-4"
              >
                <StorySnippetCards cards={openingCards} showMatchScore={false} />
              </motion.div>
            </AnimatePresence>
          )}
          {!storyRevealed ? (
            <MotionCta pulse onClick={() => setStoryRevealed(true)} className="mt-6">
              <Sparkles className="h-4 w-4" />
              {fr.opening.revealStory}
            </MotionCta>
          ) : (
            <RevealPanel className="mt-6">
              <ol className="space-y-4">
                {openingStoryBlocks.map((block, i) => (
                  <motion.li
                    key={block.id}
                    initial={reduced ? false : { opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      ...motionTransition(reduced, v10Spring),
                      delay: staggerDelay(i, reduced),
                    }}
                    className="border-l-2 border-v10-line pl-4"
                  >
                    <p className="label-caps-neutral">
                      {i + 1}. {block.label}
                      {block.durationSec ? ` · ~${block.durationSec}s` : ''}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-v10-ink">{block.content}</p>
                  </motion.li>
                ))}
                <motion.li
                  initial={reduced ? false : { opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={motionTransition(reduced, v10Spring)}
                  className="border-l-2 border-v10-red pl-4"
                >
                  <p className="label-caps">{fr.opening.whyBest}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-v10-dim">
                    {whyBestCandidateBullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </motion.li>
              </ol>
            </RevealPanel>
          )}
        </ElasticCard>

        <ElasticCard className="p-6">
          <p className="label-caps-neutral">{fr.opening.elevator30}</p>
          <p className="mt-2 text-sm leading-relaxed text-v10-ink">{openingStoryElevator30s}</p>
          {!scriptRevealed ? (
            <MotionCta variant="link" onClick={() => setScriptRevealed(true)} className="mt-4 text-v10-red">
              {fr.opening.revealFullScript}
            </MotionCta>
          ) : (
            <AnimatedCollapse open={scriptRevealed} contentKey="opening-full">
              <p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-v10-dim">
                {openingStoryFullScript}
              </p>
            </AnimatedCollapse>
          )}
        </ElasticCard>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Target className="h-5 w-5 text-v10-red" />
          <h2 className="text-lg font-semibold text-v10-ink">{fr.opening.fitTitle}</h2>
        </div>
        <p className="text-sm text-v10-dim">{fr.opening.fitDesc}</p>
        <ul className="space-y-3">
          {jobOfferFitMap.map((row, i) => {
            const open = fitRevealed[i]
            return (
              <ElasticCard key={row.requirement} className="p-4">
                <p className="text-sm font-semibold text-v10-ink">{row.requirement}</p>
                <p className="mt-1 text-xs text-v10-muted">{row.dinaProof}</p>
                {!open ? (
                  <MotionCta
                    variant="link"
                    onClick={() => setFitRevealed((f) => ({ ...f, [i]: true }))}
                    className="mt-3 text-xs text-v10-red"
                  >
                    {fr.opening.revealLine}
                  </MotionCta>
                ) : (
                  <RevealPanel className="mt-3 !border-l-v10-red">
                    <p className="text-sm leading-relaxed text-v10-ink">{row.interviewLine}</p>
                    <div className="flex flex-wrap gap-1">
                      {row.proofPointIds.map((id) => (
                        <span key={id} className="bg-v10-bg px-2 py-0.5 text-xs">
                          {getProofPoint(id)?.label ?? id}
                        </span>
                      ))}
                    </div>
                  </RevealPanel>
                )}
              </ElasticCard>
            )
          })}
        </ul>
      </section>

      <ElasticCard className="p-6">
        <p className="label-caps">{fr.opening.responsibilities}</p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-v10-dim">
          {jobOfferResponsibilities.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        <p className="mt-4 label-caps">{fr.opening.traits}</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {jobOfferProfile.traits.map((t) => (
            <span key={t} className="bg-v10-bg px-2 py-1 text-xs font-medium text-v10-ink">
              {t}
            </span>
          ))}
        </ul>
      </ElasticCard>
    </div>
  )
}
