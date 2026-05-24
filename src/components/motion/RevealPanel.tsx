import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { motionTransition, revealBorderVariants, v10Spring } from '../../lib/v10Motion'

type Props = {
  children: ReactNode
  className?: string
}

/** Panneau avec barre rouge animée — style réponses personnalisées Volume10 */
export function RevealPanel({ children, className = '' }: Props) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial={reduced ? false : 'hidden'}
      animate="visible"
      exit="exit"
      variants={revealBorderVariants}
      transition={motionTransition(reduced, v10Spring)}
      className={`space-y-4 border-v10-red ${className}`}
      style={{ borderLeftStyle: 'solid' }}
    >
      {children}
    </motion.div>
  )
}
