import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { BookOpen, Briefcase, Copy, GraduationCap, Star, X } from 'lucide-react'
import { useState } from 'react'
import type { ScoredStoryCard } from '../lib/storyCardsForQuestion'
import type { StorySnippetKind } from '../data/storySnippets'
import { staggerDelay, motionTransition, v10Spring } from '../lib/v10Motion'
import { AnimatedCollapse, ExpandChevron } from './motion'
import { fr } from '../i18n/fr'

const kindIcon: Record<StorySnippetKind, typeof Star> = {
  star: Star,
  proof: Briefcase,
  encg: GraduationCap,
  edge: BookOpen,
  fragment: Star,
}

const kindLabel: Record<StorySnippetKind, string> = {
  star: 'STAR',
  proof: 'Expérience',
  encg: 'ENCG',
  edge: 'Profil',
  fragment: 'Extrait',
}

type Props = {
  cards: ScoredStoryCard[]
  followUps?: string[]
  showMatchScore?: boolean
  onCardExpand?: (cardId: string) => void
  onDismiss?: (cardId: string) => void
}

export function StorySnippetCards({
  cards,
  followUps,
  showMatchScore = true,
  onCardExpand,
  onDismiss,
}: Props) {
  const reduced = useReducedMotion()
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  if (cards.length === 0) {
    return (
      <p className="text-xs leading-relaxed text-v10-muted">{fr.personalized.cardsEmpty}</p>
    )
  }

  const copyOral = async (card: ScoredStoryCard) => {
    const text = [card.oralLine, card.oralLineEn].filter(Boolean).join('\n\n')
    try {
      await navigator.clipboard.writeText(text)
      setCopiedId(card.id)
      window.setTimeout(() => setCopiedId(null), 2000)
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="space-y-3">
      <p className="label-caps-neutral">{fr.personalized.cardsIntro}</p>
      <ul className="grid gap-3 sm:grid-cols-2">
        {cards.map((card, i) => {
          const Icon = kindIcon[card.kind]
          const open = expandedId === card.id
          const cardFollowUps = card.suggestedFollowUps ?? (open ? followUps : undefined)
          return (
            <motion.li
              key={card.id}
              layout
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ...motionTransition(reduced, v10Spring),
                delay: staggerDelay(i, reduced),
              }}
              className="flex flex-col"
            >
              <motion.div
                layout
                transition={motionTransition(reduced, v10Spring)}
                className={`flex h-full flex-col border ${
                  open
                    ? 'border-v10-red bg-v10-bg/80 ring-1 ring-v10-red/30'
                    : 'border-v10-line bg-v10-paper'
                }`}
              >
                <button
                  type="button"
                  onClick={() => {
                    const next = open ? null : card.id
                    setExpandedId(next)
                    if (next) onCardExpand?.(card.id)
                  }}
                  className="flex w-full flex-col p-4 text-left transition-colors hover:bg-v10-bg/40"
                >
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-wide text-v10-red">
                      <Icon className="h-3 w-3" aria-hidden />
                      {kindLabel[card.kind]}
                    </span>
                    <div className="flex flex-wrap items-center justify-end gap-1">
                      {showMatchScore && (
                        <span className="text-[0.6rem] text-v10-muted">
                          {fr.personalized.matchScore(Math.min(99, Math.round(card.score)))}
                        </span>
                      )}
                      {card.matchReason && (
                        <span
                          className="max-w-[8rem] truncate text-[0.6rem] text-v10-muted"
                          title={card.matchReason}
                        >
                          {card.matchReason}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm font-semibold leading-snug text-v10-ink">{card.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-v10-dim">{card.oralLine}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-[0.65rem] font-medium text-v10-red">
                    <ExpandChevron open={open} className="h-3 w-3" />
                    {open ? fr.personalized.cardCollapse : fr.personalized.cardExpand}
                  </span>
                </button>
                <AnimatedCollapse open={open} contentKey={`card-${card.id}`} className="px-4 pb-2">
                  {card.oralLineEn && (
                    <p className="text-xs italic leading-relaxed text-v10-muted">{card.oralLineEn}</p>
                  )}
                  {card.detail && (
                    <p className="mt-3 whitespace-pre-wrap border-t border-v10-line pt-3 text-xs leading-relaxed text-v10-muted">
                      {card.detail}
                    </p>
                  )}
                  {cardFollowUps && cardFollowUps.length > 0 && (
                    <div className="mt-3 border-t border-v10-line pt-3">
                      <p className="text-[0.65rem] font-bold uppercase tracking-wide text-v10-dim">
                        {fr.personalized.cardFollowUps}
                      </p>
                      <ul className="mt-1 list-disc pl-4 text-xs text-v10-muted">
                        {cardFollowUps.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </AnimatedCollapse>
                <div className="flex border-t border-v10-line">
                  <motion.button
                    type="button"
                    whileTap={reduced ? undefined : { scale: 0.97 }}
                    onClick={() => copyOral(card)}
                    className="flex flex-1 items-center justify-center gap-1 py-2 text-[0.65rem] font-medium text-v10-ink hover:bg-v10-bg/60"
                  >
                    <Copy className="h-3 w-3" />
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={copiedId === card.id ? 'copied' : 'copy'}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={motionTransition(reduced)}
                      >
                        {copiedId === card.id ? fr.personalized.copiedOral : fr.personalized.copyOral}
                      </motion.span>
                    </AnimatePresence>
                  </motion.button>
                  {onDismiss && (
                    <motion.button
                      type="button"
                      whileTap={reduced ? undefined : { scale: 0.97 }}
                      onClick={() => onDismiss(card.id)}
                      className="flex flex-1 items-center justify-center gap-1 border-l border-v10-line py-2 text-[0.65rem] font-medium text-v10-muted hover:bg-v10-bg/60 hover:text-v10-red"
                    >
                      <X className="h-3 w-3" />
                      {fr.personalized.dismissCard}
                    </motion.button>
                  )}
                </div>
              </motion.div>
            </motion.li>
          )
        })}
      </ul>
    </div>
  )
}
