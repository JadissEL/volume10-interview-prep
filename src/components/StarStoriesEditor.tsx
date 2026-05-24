import type { StarStory } from '../data/types'
import { fr } from '../i18n/fr'
import { ElasticCard } from './ElasticCard'

const FIELDS: { key: keyof StarStory; label: string; rows: number }[] = [
  { key: 'situation', label: 'S', rows: 2 },
  { key: 'task', label: 'T', rows: 2 },
  { key: 'action', label: 'A', rows: 3 },
  { key: 'result', label: 'R', rows: 2 },
]

export function StarStoriesEditor({
  stories,
  onUpdate,
}: {
  stories: StarStory[]
  onUpdate: (story: StarStory) => void
}) {
  return (
    <div className="space-y-4">
      <header>
        <p className="label-caps">{fr.star.title}</p>
        <p className="mt-1 text-sm text-v10-muted">{fr.star.desc}</p>
      </header>
      {stories.map((story) => (
        <ElasticCard key={story.id} className="p-5">
          <input
            type="text"
            value={story.title}
            onChange={(e) => onUpdate({ ...story, title: e.target.value })}
            className="w-full border-0 bg-transparent text-base font-semibold text-v10-ink outline-none"
            aria-label={fr.star.storyTitle}
          />
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {FIELDS.map((f) => (
              <label key={f.key} className="text-sm">
                <span className="label-caps">{f.label}</span>
                <textarea
                  value={story[f.key] as string}
                  onChange={(e) => onUpdate({ ...story, [f.key]: e.target.value })}
                  rows={f.rows}
                  placeholder={fr.star.placeholder(f.label)}
                  className="mt-1 w-full rounded-xl border-0 bg-white/80 px-3 py-2 text-sm ring-1 ring-black/5"
                />
              </label>
            ))}
          </div>
        </ElasticCard>
      ))}
    </div>
  )
}
