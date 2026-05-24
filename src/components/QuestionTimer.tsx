import { useEffect, useState } from 'react'
import { Clock } from 'lucide-react'
import { fr } from '../i18n/fr'

export function QuestionTimer({
  seconds = 60,
  active,
  onExpire,
}: {
  seconds?: number
  active: boolean
  onExpire?: () => void
}) {
  const [left, setLeft] = useState(seconds)

  useEffect(() => {
    if (!active) {
      setLeft(seconds)
      return
    }
    setLeft(seconds)
    const t = window.setInterval(() => {
      setLeft((s) => {
        if (s <= 1) {
          window.clearInterval(t)
          onExpire?.()
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => window.clearInterval(t)
  }, [active, seconds, onExpire])

  const urgent = left <= 10 && active

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
        urgent ? 'bg-red-100 text-red-900' : 'bg-white/80 text-v10-muted ring-1 ring-black/5'
      }`}
      role="timer"
      aria-live="polite"
    >
      <Clock className="h-3.5 w-3.5" aria-hidden />
      {fr.practice.timer(left)}
    </span>
  )
}
