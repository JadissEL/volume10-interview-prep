import type { EdgeProfile } from '../data/types'
import { fr } from '../i18n/fr'
import { ElasticCard } from './ElasticCard'

export function EdgeProfileForm({
  profile,
  onChange,
}: {
  profile: EdgeProfile
  onChange: (patch: Partial<EdgeProfile>) => void
}) {
  const fields: { key: keyof EdgeProfile; label: string; rows?: number }[] = [
    { key: 'visaStatus', label: fr.edge.form.visa },
    { key: 'relocationDate', label: fr.edge.form.relocationDate },
    { key: 'frenchLevel', label: fr.edge.form.frenchLevel },
    { key: 'frenchPlan', label: fr.edge.form.frenchPlan, rows: 2 },
    { key: 'pitchNotes', label: fr.edge.form.pitch, rows: 4 },
  ]

  return (
    <ElasticCard className="p-5">
      <p className="label-caps mb-3">{fr.edge.form.title}</p>
      <div className="space-y-3">
        {fields.map((f) => (
          <label key={f.key} className="block text-sm">
            <span className="font-medium text-v10-ink">{f.label}</span>
            {f.rows ? (
              <textarea
                value={profile[f.key]}
                onChange={(e) => onChange({ [f.key]: e.target.value })}
                rows={f.rows}
                className="mt-1 w-full rounded-xl border-0 bg-white/80 px-3 py-2 text-sm ring-1 ring-black/5"
              />
            ) : (
              <input
                type="text"
                value={profile[f.key]}
                onChange={(e) => onChange({ [f.key]: e.target.value })}
                className="mt-1 w-full rounded-full border-0 bg-white/80 px-3 py-2 text-sm ring-1 ring-black/5"
              />
            )}
          </label>
        ))}
      </div>
    </ElasticCard>
  )
}
