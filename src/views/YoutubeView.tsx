import { ExternalLink } from 'lucide-react'
import { youtubeSearchUrl, youtubeTopics } from '../data/youtubeKeywords'
import { fr } from '../i18n/fr'
import { ElasticCard } from '../components/ElasticCard'
import { PageHero } from '../components/PageHero'

export function YoutubeView() {
  return (
    <div>
      <PageHero label={fr.youtube.title} title={fr.youtube.heading} description={fr.youtube.desc} />

      <div className="grid gap-4 md:grid-cols-2">
        {youtubeTopics.map((topic) => (
          <ElasticCard key={topic.id} className="p-5">
            <p className="label-caps">{topic.id}</p>
            <h3 className="mt-2 text-lg font-semibold text-v10-ink">{topic.title}</h3>
            <p className="mt-1 text-sm text-v10-muted">{topic.description}</p>
            <ul className="mt-4 space-y-3">
              {topic.keywords.map((kw) => (
                <li key={kw} className="flex items-start justify-between gap-2 text-sm">
                  <span className="text-v10-ink">{kw}</span>
                  <a
                    href={youtubeSearchUrl(kw)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-v10-muted hover:text-v10-ink"
                  >
                    {fr.youtube.search} <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
              {topic.keywordsFr?.map((kw) => (
                <li
                  key={`fr-${kw}`}
                  className="flex items-start justify-between gap-2 border-t border-black/5 pt-2 text-sm"
                >
                  <span className="text-v10-ink">
                    <span className="text-xs text-v10-muted">{fr.youtube.frLabel} </span>
                    {kw}
                  </span>
                  <a
                    href={youtubeSearchUrl(kw)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-v10-muted hover:text-v10-ink"
                  >
                    {fr.youtube.search} <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </ElasticCard>
        ))}
      </div>
    </div>
  )
}
