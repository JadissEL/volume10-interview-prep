import { CATEGORIES } from '../data/questions'
import { fr } from '../i18n/fr'
import { ElasticCard } from './ElasticCard'

export function CategoryProgress({
  byCategory,
}: {
  byCategory: Record<string, { total: number; studied: number; weak: number }>
}) {
  return (
    <ElasticCard className="p-5">
      <p className="label-caps mb-4">{fr.dashboard.categoryProgress}</p>
      <ul className="space-y-3">
        {CATEGORIES.map((c) => {
          const s = byCategory[c.id]
          if (!s) return null
          const pct = s.total ? Math.round((s.studied / s.total) * 100) : 0
          return (
            <li key={c.id}>
              <div className="flex justify-between text-xs">
                <span className="font-medium text-v10-ink">{c.label}</span>
                <span className="text-v10-muted">
                  {s.studied}/{s.total}
                  {s.weak > 0 && ` · ${s.weak} ${fr.dashboard.weakShort}`}
                </span>
              </div>
              <div
                className="mt-1 h-1.5 overflow-hidden rounded-full bg-black/5"
                role="progressbar"
                aria-valuenow={pct}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="h-full bg-v10-red transition-all"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </li>
          )
        })}
      </ul>
    </ElasticCard>
  )
}
