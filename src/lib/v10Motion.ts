import type { Transition, Variants } from 'framer-motion'

/** Spring principal — aligné sur les transitions d’onglets (App.tsx) */
export const v10Spring: Transition = {
  type: 'spring',
  stiffness: 260,
  damping: 28,
}

export const v10SpringSnappy: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 30,
}

export const v10EaseOut: Transition = {
  duration: 0.35,
  ease: [0.22, 1, 0.36, 1],
}

export const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
}

export const fadeSlideIn: Variants = {
  hidden: { opacity: 0, x: 16 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -12 },
}

export const collapseVariants: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: 'auto', opacity: 1 },
  exit: { height: 0, opacity: 0 },
}

export const revealBorderVariants: Variants = {
  hidden: { opacity: 0, paddingLeft: 0, borderLeftWidth: 0 },
  visible: { opacity: 1, paddingLeft: 16, borderLeftWidth: 2 },
  exit: { opacity: 0, paddingLeft: 0, borderLeftWidth: 0 },
}

/** Délai stagger pour listes de cartes */
export function staggerDelay(index: number, reducedMotion: boolean | null): number {
  if (reducedMotion) return 0
  return Math.min(index * 0.045, 0.35)
}

export function motionTransition(reducedMotion: boolean | null, t: Transition = v10Spring): Transition {
  if (reducedMotion) return { duration: 0 }
  return t
}
