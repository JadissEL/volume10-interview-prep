import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { collapseVariants, motionTransition, v10Spring } from '../../lib/v10Motion'

type Props = {
  open: boolean
  children: ReactNode
  className?: string
  /** Identifiant stable si plusieurs collapses dans le même parent */
  contentKey?: string
}

export function AnimatedCollapse({ open, children, className = '', contentKey = 'panel' }: Props) {
  const reduced = useReducedMotion()

  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          key={contentKey}
          initial={reduced ? false : 'hidden'}
          animate="visible"
          exit="exit"
          variants={collapseVariants}
          transition={motionTransition(reduced, v10Spring)}
          className={`overflow-hidden ${className}`}
        >
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -4 }}
            transition={motionTransition(reduced)}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
