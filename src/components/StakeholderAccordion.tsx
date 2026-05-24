import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import type { CategoryId } from '../data/types'
import {
  getPerspectivesForCategory,
  stakeholderRoleLabels,
} from '../data/stakeholderPerspectives'
import { motionTransition, v10Spring } from '../lib/v10Motion'
import { AnimatedCollapse, ExpandChevron } from './motion'
import { fr } from '../i18n/fr'

export function StakeholderAccordion({ categoryId }: { categoryId: CategoryId }) {
  const reduced = useReducedMotion()
  const [open, setOpen] = useState(false)
  const perspectives = getPerspectivesForCategory(categoryId).slice(0, 3)
  if (!perspectives.length) return null

  return (
    <div className="mt-3 border-t border-v10-line pt-3">
      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        whileTap={reduced ? undefined : { scale: 0.99 }}
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-v10-muted hover:text-v10-ink"
      >
        <ExpandChevron open={open} className="h-3.5 w-3.5 text-v10-muted" />
        {fr.personalized.stakeholderTitle}
      </motion.button>
      <AnimatedCollapse open={open} contentKey="stakeholder-list" className="mt-2">
        <ul className="space-y-2">
          {perspectives.map((p, i) => (
            <motion.li
              key={p.role}
              initial={reduced ? false : { opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...motionTransition(reduced, v10Spring), delay: i * 0.05 }}
              className="text-xs text-v10-dim"
            >
              <span className="font-semibold text-v10-ink">
                {stakeholderRoleLabels[p.role]} :
              </span>{' '}
              {p.howToAnswer.slice(0, 120)}…
            </motion.li>
          ))}
        </ul>
      </AnimatedCollapse>
    </div>
  )
}
