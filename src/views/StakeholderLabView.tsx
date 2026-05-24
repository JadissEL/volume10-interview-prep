import { useState } from 'react'
import {
  interviewScenarios,
  stakeholderPerspectives,
  stakeholderRoleLabels,
} from '../data/stakeholderPerspectives'
import { fr } from '../i18n/fr'
import { ElasticCard } from '../components/ElasticCard'
import { PageHero } from '../components/PageHero'
import { StorySnippetCards } from '../components/StorySnippetCards'
import { getStoryCardsForStakeholder } from '../lib/storyCardsForQuestion'
import type { StakeholderRole } from '../data/types'

export function StakeholderLabView() {
  const [role, setRole] = useState<StakeholderRole | 'all'>('all')
  const filtered =
    role === 'all'
      ? stakeholderPerspectives
      : stakeholderPerspectives.filter((p) => p.role === role)

  return (
    <div className="space-y-8">
      <PageHero
        label={fr.stakeholder.title}
        title={fr.stakeholder.heading}
        description={fr.stakeholder.desc}
        accent
      />

      <div className="flex flex-wrap gap-2">
        <Chip active={role === 'all'} onClick={() => setRole('all')} label="Tous" />
        {(Object.keys(stakeholderRoleLabels) as StakeholderRole[]).map((r) => (
          <Chip
            key={r}
            active={role === r}
            onClick={() => setRole(r)}
            label={stakeholderRoleLabels[r]}
          />
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((p) => {
          const exampleCards = getStoryCardsForStakeholder(p.role, p.categoryIds)
          return (
            <ElasticCard key={p.role} className="p-5">
              <p className="label-caps">{stakeholderRoleLabels[p.role]}</p>
              <div className="mt-3 space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-v10-ink">{fr.stakeholder.probe}</p>
                  <p className="text-v10-dim">{p.whatTheyProbe}</p>
                </div>
                <div>
                  <p className="font-semibold text-v10-ink">{fr.stakeholder.answer}</p>
                  <p className="text-v10-dim">{p.howToAnswer}</p>
                </div>
                <div>
                  <p className="font-semibold text-v10-red">{fr.stakeholder.redFlags}</p>
                  <ul className="list-disc pl-4 text-v10-muted">
                    {p.redFlags.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
                {exampleCards.length > 0 && (
                  <div className="border-t border-v10-line pt-3">
                    <p className="label-caps-neutral mb-2">{fr.stakeholder.examples}</p>
                    <StorySnippetCards cards={exampleCards} showMatchScore={false} />
                  </div>
                )}
              </div>
            </ElasticCard>
          )
        })}
      </div>

      <ElasticCard className="p-6">
        <p className="label-caps">{fr.stakeholder.scenarios}</p>
        <ul className="mt-4 space-y-4">
          {interviewScenarios.map((s) => (
            <li key={s.id} className="border-b border-v10-line pb-4 last:border-0">
              <p className="font-semibold text-v10-ink">{s.title}</p>
              <p className="mt-1 text-sm text-v10-dim">{s.description}</p>
              <p className="mt-2 text-xs text-v10-muted">{s.tips}</p>
            </li>
          ))}
        </ul>
      </ElasticCard>
    </div>
  )
}

function Chip({
  active,
  onClick,
  label,
}: {
  active: boolean
  onClick: () => void
  label: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors ${
        active ? 'bg-v10-red text-white' : 'bg-v10-bg text-v10-dim ring-1 ring-v10-line'
      }`}
    >
      {label}
    </button>
  )
}
