import { motion } from 'framer-motion'
import { companyPainPoints, yourEdge } from '../data/edgeContent'
import type { useProgress } from '../hooks/useProgress'
import { fr } from '../i18n/fr'
import { ElasticCard } from './ElasticCard'
import { EdgeProfileForm } from './EdgeProfileForm'

export function YourEdgeSidebar({
  compact = false,
  progressApi,
}: {
  compact?: boolean
  progressApi?: ReturnType<typeof useProgress>
}) {
  return (
    <aside className={compact ? 'space-y-4' : 'space-y-5 lg:sticky lg:top-24 lg:self-start'}>
      <ElasticCard className="p-5">
        <p className="label-caps mb-2">{fr.edge.sectionLabel}</p>
        <h3 className="text-lg font-semibold leading-snug text-v10-ink">{yourEdge.title}</h3>
        <p className="mt-2 text-sm text-v10-muted">{yourEdge.subtitle}</p>
        <ul className="mt-4 space-y-3">
          {yourEdge.points.map((p) => (
            <li key={p.title}>
              <p className="text-sm font-medium text-v10-ink">{p.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-v10-muted">{p.body}</p>
            </li>
          ))}
        </ul>
      </ElasticCard>

      {progressApi && (
        <EdgeProfileForm
          profile={progressApi.progress.edgeProfile}
          onChange={(patch) => progressApi.setEdgeProfile(patch)}
        />
      )}

      <ElasticCard className="p-5">
        <p className="label-caps mb-2">{fr.edge.painTitle}</p>
        <ul className="space-y-3">
          {companyPainPoints.map((p) => (
            <motion.li
              key={p.title}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-medium text-v10-ink">{p.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-v10-muted">{p.body}</p>
            </motion.li>
          ))}
        </ul>
      </ElasticCard>
    </aside>
  )
}
