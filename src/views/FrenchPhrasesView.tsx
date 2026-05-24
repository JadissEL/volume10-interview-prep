import { useMemo, useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { FRENCH_CATEGORY_LABELS, frenchPhrases, type FrenchPhrase } from '../data/frenchPhrases'
import { fr } from '../i18n/fr'
import { ElasticCard } from '../components/ElasticCard'
import { PageHero } from '../components/PageHero'

function youtubeSearchUrl(q: string) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`
}

export function FrenchPhrasesView() {
  const [cat, setCat] = useState<FrenchPhrase['category'] | 'all'>('all')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    return frenchPhrases.filter((p) => {
      if (cat !== 'all' && p.category !== cat) return false
      if (!query) return true
      const q = query.toLowerCase()
      return (
        p.french.toLowerCase().includes(q) ||
        p.english.toLowerCase().includes(q) ||
        p.whenToUse.toLowerCase().includes(q)
      )
    })
  }, [cat, query])

  return (
    <div className="space-y-6">
      <PageHero
        label="Québec bilingue"
        title={fr.phrases.heading}
        description={fr.phrases.desc(frenchPhrases.length)}
      />

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setCat('all')}
          className={`rounded-full px-3 py-1.5 text-xs font-medium ${
            cat === 'all' ? 'bg-v10-ink text-white' : 'bg-white/80 ring-1 ring-black/5'
          }`}
        >
          {fr.phrases.all}
        </button>
        {(Object.keys(FRENCH_CATEGORY_LABELS) as FrenchPhrase['category'][]).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCat(c)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium ${
              cat === c ? 'bg-v10-ink text-white' : 'bg-white/80 ring-1 ring-black/5'
            }`}
          >
            {FRENCH_CATEGORY_LABELS[c]}
          </button>
        ))}
      </div>

      <input
        type="search"
        placeholder={fr.phrases.search}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full max-w-md rounded-full border-0 bg-white/80 px-4 py-2 text-sm ring-1 ring-black/5"
      />

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((p) => (
          <ElasticCard key={p.id} className="p-5">
            <p className="label-caps">{FRENCH_CATEGORY_LABELS[p.category]}</p>
            <p className="mt-3 text-base font-medium leading-relaxed text-v10-ink">{p.french}</p>
            {p.phonetic && (
              <p className="mt-1 text-xs italic text-v10-muted">/{p.phonetic}/</p>
            )}
            <p className="mt-2 text-sm text-v10-muted">{p.english}</p>
            <p className="mt-2 text-xs text-v10-muted">
              {fr.phrases.when} : {p.whenToUse}
            </p>
            <a
              href={youtubeSearchUrl(`français professionnel ${p.english}`)}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-v10-ink underline"
            >
              {fr.phrases.youtubePractice} <ExternalLink className="h-3 w-3" />
            </a>
          </ElasticCard>
        ))}
      </div>
    </div>
  )
}
