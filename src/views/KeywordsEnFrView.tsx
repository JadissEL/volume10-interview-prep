import { useMemo, useState } from 'react'
import { Copy, Check, Eye } from 'lucide-react'
import {
  KEYWORD_CATEGORY_LABELS,
  keywordsEnFr,
  type KeywordPair,
} from '../data/keywordsEnFr'
import { fr } from '../i18n/fr'
import { ElasticCard } from '../components/ElasticCard'
import { PageHero } from '../components/PageHero'

export function KeywordsEnFrView() {
  const [cat, setCat] = useState<KeywordPair['category'] | 'all' | 'essential'>('all')
  const [query, setQuery] = useState('')
  const [copied, setCopied] = useState<string | null>(null)
  const [quizMode, setQuizMode] = useState(false)
  const [revealedFr, setRevealedFr] = useState<Record<string, boolean>>({})

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return keywordsEnFr.filter((k) => {
      if (cat === 'essential' && !k.essentialDina) return false
      if (cat !== 'all' && cat !== 'essential' && k.category !== cat) return false
      if (!q) return true
      return (
        k.english.toLowerCase().includes(q) ||
        k.french.toLowerCase().includes(q) ||
        (k.note?.toLowerCase().includes(q) ?? false)
      )
    })
  }, [cat, query])

  const copyPair = async (k: KeywordPair) => {
    const text = `${k.english} → ${k.french}${k.note ? ` (${k.note})` : ''}`
    await navigator.clipboard.writeText(text)
    setCopied(k.id)
    setTimeout(() => setCopied(null), 1500)
  }

  return (
    <div className="space-y-6">
      <PageHero label={fr.keywords.title} title={fr.keywords.heading} description={fr.keywords.desc} />

      <div className="flex flex-wrap gap-3">
        <input
          type="search"
          placeholder={fr.keywords.search}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md border border-v10-line bg-v10-paper px-4 py-2 text-sm"
        />
        <button
          type="button"
          onClick={() => {
            setQuizMode((q) => !q)
            setRevealedFr({})
          }}
          className={`btn-cta-outline ${quizMode ? 'border-v10-red' : ''}`}
        >
          <Eye className="h-4 w-4" />
          {quizMode ? 'Mode liste' : fr.keywords.quizReveal}
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        <Chip active={cat === 'all'} onClick={() => setCat('all')} label={fr.keywords.all} />
        <Chip
          active={cat === 'essential'}
          onClick={() => setCat('essential')}
          label={fr.keywords.essentialDina}
        />
        {(Object.keys(KEYWORD_CATEGORY_LABELS) as KeywordPair['category'][]).map((c) => (
          <Chip
            key={c}
            active={cat === c}
            onClick={() => setCat(c)}
            label={KEYWORD_CATEGORY_LABELS[c]}
          />
        ))}
      </div>

      <p className="text-sm text-v10-muted">{filtered.length} terme(s)</p>

      <div className="grid gap-3 sm:grid-cols-2">
        {filtered.map((k) => (
          <ElasticCard key={k.id} className="p-4">
            <p className="label-caps-neutral">{KEYWORD_CATEGORY_LABELS[k.category]}</p>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-xs font-medium text-v10-muted">{fr.keywords.english}</p>
                <p className="font-semibold text-v10-ink">{k.english}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-v10-muted">{fr.keywords.french}</p>
                {quizMode && !revealedFr[k.id] ? (
                  <button
                    type="button"
                    onClick={() => setRevealedFr((r) => ({ ...r, [k.id]: true }))}
                    className="text-xs font-medium text-v10-red underline"
                  >
                    {fr.keywords.quizReveal}
                  </button>
                ) : (
                  <p className="font-semibold text-v10-ink">{k.french}</p>
                )}
              </div>
            </div>
            {k.note && (
              <p className="mt-2 text-xs text-v10-muted">
                <span className="font-medium">{fr.keywords.context} :</span> {k.note}
              </p>
            )}
            {k.linkedQuestionIds && k.linkedQuestionIds.length > 0 && (
              <p className="mt-1 text-[0.65rem] text-v10-dim">
                {fr.keywords.linkedQuestions} : {k.linkedQuestionIds.join(', ')}
              </p>
            )}
            <button
              type="button"
              onClick={() => copyPair(k)}
              className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-v10-ink hover:underline"
            >
              {copied === k.id ? (
                <>
                  <Check className="h-3 w-3" /> {fr.keywords.copied}
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" /> {fr.keywords.copy}
                </>
              )}
            </button>
          </ElasticCard>
        ))}
      </div>
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
      className={`px-3 py-1.5 text-xs font-medium ${
        active ? 'bg-v10-ink text-v10-paper' : 'bg-v10-paper text-v10-muted ring-1 ring-v10-line'
      }`}
    >
      {label}
    </button>
  )
}
