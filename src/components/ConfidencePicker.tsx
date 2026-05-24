import { motion } from 'framer-motion'
import type { Confidence } from '../data/types'
import { fr } from '../i18n/fr'

export function ConfidencePicker({
  value,
  onChange,
}: {
  value?: Confidence
  onChange: (c: Confidence) => void
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {([1, 2, 3, 4, 5] as Confidence[]).map((n) => (
        <motion.button
          key={n}
          type="button"
          whileTap={{ scale: 0.96 }}
          onClick={() => onChange(n)}
          className={`px-3 py-1.5 text-xs font-medium transition-colors ${
            value === n
              ? 'bg-v10-ink text-v10-paper'
              : 'bg-v10-paper text-v10-muted ring-1 ring-v10-line hover:text-v10-ink'
          }`}
        >
          {n} · {fr.confidence.labels[n - 1]}
        </motion.button>
      ))}
    </div>
  )
}
