import { motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { v10SpringSnappy } from '../../lib/v10Motion'

type Props = {
  open: boolean
  className?: string
}

export function ExpandChevron({ open, className = 'h-4 w-4 text-v10-red' }: Props) {
  const reduced = useReducedMotion()

  return (
    <motion.span
      animate={{ rotate: open ? 180 : 0 }}
      transition={reduced ? { duration: 0 } : v10SpringSnappy}
      className="inline-flex shrink-0"
      aria-hidden
    >
      <ChevronDown className={className} />
    </motion.span>
  )
}
