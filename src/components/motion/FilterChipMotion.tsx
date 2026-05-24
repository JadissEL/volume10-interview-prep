import { motion, useReducedMotion } from 'framer-motion'
import { motionTransition, v10SpringSnappy } from '../../lib/v10Motion'

type Props = {
  active: boolean
  onClick: () => void
  label: string
}

export function FilterChipMotion({ active, onClick, label }: Props) {
  const reduced = useReducedMotion()

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={reduced ? undefined : { scale: 0.96 }}
      animate={{
        backgroundColor: active ? 'var(--color-v10-ink)' : 'var(--color-v10-paper)',
        color: active ? 'var(--color-v10-paper)' : 'var(--color-v10-muted)',
      }}
      transition={motionTransition(reduced, v10SpringSnappy)}
      className="px-3 py-1.5 text-xs font-medium ring-1 ring-v10-line"
      style={{ borderColor: active ? 'var(--color-v10-ink)' : undefined }}
    >
      {label}
    </motion.button>
  )
}
