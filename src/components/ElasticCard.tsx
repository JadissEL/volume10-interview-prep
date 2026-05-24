import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

const spring = { type: 'spring' as const, stiffness: 400, damping: 30 }

type Props = HTMLMotionProps<'div'> & {
  children: ReactNode
  className?: string
  /** Carte sans barre latérale accent */
  flat?: boolean
}

export function ElasticCard({ children, className = '', flat = false, ...rest }: Props) {
  return (
    <motion.div
      className={`card-surface ${flat ? '[&::before]:hidden' : ''} ${className}`}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.995 }}
      transition={spring}
      layout
      {...rest}
    >
      {children}
    </motion.div>
  )
}
