import { motion } from 'framer-motion'
import { AlarmClock, ArrowRight } from 'lucide-react'
import type { InterviewQuestion } from '../data/types'
import { fr } from '../i18n/fr'
import { getCategoryLabel } from '../lib/categories'
import { ElasticCard } from './ElasticCard'

type Props = {
  due: InterviewQuestion[]
  totalDue: number
  onPractice: () => void
  onOpenQuestion: (id: string) => void
}

export function DueTodayQueue({ due, totalDue, onPractice, onOpenQuestion }: Props) {
  if (totalDue === 0) {
    return (
      <ElasticCard className="p-5">
        <p className="label-caps">{fr.dueToday.title}</p>
        <p className="mt-2 text-sm text-v10-muted">{fr.dueToday.none}</p>
      </ElasticCard>
    )
  }

  return (
    <ElasticCard className="p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="label-caps flex items-center gap-2">
            <AlarmClock className="h-3.5 w-3.5" />
            {fr.dueToday.title}
          </p>
          <p className="mt-1 text-sm text-v10-muted">{fr.dueToday.count(totalDue)}</p>
        </div>
        <button
          type="button"
          onClick={onPractice}
          className="btn-cta"
        >
          {fr.dueToday.practiceDue} <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
      <ul className="mt-4 space-y-2">
        {due.map((q, i) => (
          <motion.li
            key={q.id}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.03 }}
          >
            <button
              type="button"
              onClick={() => onOpenQuestion(q.id)}
              className="w-full rounded-lg border border-black/5 bg-white/50 px-3 py-2 text-left text-sm hover:bg-white/80"
            >
              <span className="text-xs text-v10-muted">{getCategoryLabel(q.categoryId)}</span>
              <p className="mt-0.5 line-clamp-2 font-medium text-v10-ink">{q.question}</p>
            </button>
          </motion.li>
        ))}
      </ul>
      {totalDue > due.length && (
        <p className="mt-3 text-xs text-v10-muted">
          {fr.dueToday.showing(due.length, totalDue)}
        </p>
      )}
    </ElasticCard>
  )
}
