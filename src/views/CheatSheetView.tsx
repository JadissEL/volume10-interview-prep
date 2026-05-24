import { fr } from '../i18n/fr'
import { ElasticCard } from '../components/ElasticCard'
import { PageHero } from '../components/PageHero'
import {
  companyFacts,
  flagshipCaseStudies,
  interviewHooks,
  keySectors,
  servicePillars,
} from '../data/cheatSheet'

export function CheatSheetView() {
  return (
    <div className="space-y-8">
      <PageHero label={fr.cheat.title} title={fr.cheat.heading} description={fr.cheat.desc} />

      <ElasticCard className="p-6">
        <p className="label-caps">{fr.cheat.brand}</p>
        <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-medium text-v10-ink">{fr.cheat.names}</dt>
            <dd className="text-v10-muted">{companyFacts.names.join(' · ')}</dd>
          </div>
          <div>
            <dt className="font-medium text-v10-ink">{fr.cheat.tagline}</dt>
            <dd className="text-v10-muted">{companyFacts.tagline}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="font-medium text-v10-ink">{fr.cheat.mission}</dt>
            <dd className="text-v10-muted">{companyFacts.mission}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="font-medium text-v10-ink">{fr.cheat.promise}</dt>
            <dd className="text-v10-muted">{companyFacts.promise}</dd>
          </div>
        </dl>
      </ElasticCard>

      <div className="grid gap-6 md:grid-cols-2">
        {servicePillars.map((p) => (
          <ElasticCard key={p.name} className="p-5">
            <p className="label-caps">{p.name}</p>
            <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-v10-muted">
              {p.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </ElasticCard>
        ))}
      </div>

      <ElasticCard className="p-5">
        <p className="label-caps">{fr.cheat.sectors}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {keySectors.map((s, i) => (
            <span
              key={s}
              className="rounded-full bg-white/80 px-3 py-1 text-xs ring-1 ring-black/5"
            >
              {i + 1}. {s}
            </span>
          ))}
        </div>
      </ElasticCard>

      <ElasticCard className="p-5">
        <p className="label-caps">{fr.cheat.mandates}</p>
        <ul className="mt-4 space-y-4">
          {flagshipCaseStudies.map((c) => (
            <li key={c.title} className="border-b border-black/5 pb-4 last:border-0 last:pb-0">
              <p className="font-semibold text-v10-ink">{c.title}</p>
              {c.client && <p className="text-xs text-v10-muted">{c.client}</p>}
              <p className="mt-1 text-sm text-v10-muted">{c.summary}</p>
              <p className="mt-1 text-xs text-v10-muted">{c.pillars.join(' · ')}</p>
            </li>
          ))}
        </ul>
      </ElasticCard>

      <ElasticCard className="p-5">
        <p className="label-caps">{fr.cheat.hooks}</p>
        <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-v10-muted">
          {interviewHooks.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </ElasticCard>
    </div>
  )
}
