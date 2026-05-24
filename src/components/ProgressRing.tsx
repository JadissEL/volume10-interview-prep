import { motion } from 'framer-motion'
import { fr } from '../i18n/fr'

export function ProgressRing({ percent }: { percent: number }) {
  const r = 44
  const c = 2 * Math.PI * r
  const offset = c - (percent / 100) * c

  return (
    <div className="relative h-32 w-32">
      <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100" aria-hidden>
        <circle cx="50" cy="50" r={r / 2.2} fill="none" stroke="#d9d9d9" strokeWidth="4" />
        <motion.circle
          cx="50"
          cy="50"
          r={r / 2.2}
          fill="none"
          stroke="#f05733"
          strokeWidth="4"
          strokeLinecap="butt"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: offset }}
          transition={{ type: 'spring', stiffness: 50, damping: 18 }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="stat-value">{percent}</span>
        <span className="label-caps-neutral mt-1">{fr.dashboard.progressLabel}</span>
      </div>
    </div>
  )
}
