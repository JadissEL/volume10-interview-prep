import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { v10SpringSnappy } from '../../lib/v10Motion'

type Variant = 'primary' | 'outline' | 'link'

type Props = {
  children: ReactNode
  variant?: Variant
  /** Légère pulsation d’accent sur le CTA principal */
  pulse?: boolean
  className?: string
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const variantClass: Record<Variant, string> = {
  primary: 'btn-cta',
  outline: 'btn-cta-outline',
  link: 'link-underline-up inline-flex items-center gap-1.5 text-sm font-medium text-v10-ink',
}

export function MotionCta({
  children,
  variant = 'primary',
  pulse = false,
  className = '',
  onClick,
  disabled,
  type = 'button',
}: Props) {
  const reduced = useReducedMotion()

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={reduced ? undefined : { y: variant === 'link' ? 0 : -2 }}
      whileTap={reduced ? undefined : { scale: 0.98 }}
      transition={v10SpringSnappy}
      className={`${variantClass[variant]} ${pulse ? 'btn-cta-pulse' : ''} ${className}`.trim()}
    >
      {children}
    </motion.button>
  )
}
