import { Languages, Briefcase, ExternalLink } from 'lucide-react'
import type { InterviewQuestion } from '../data/types'
import { fr } from '../i18n/fr'
import { getCaseStudyLink } from '../lib/caseStudyLinks'

export function QuestionBadges({ q }: { q: InterviewQuestion }) {
  const caseLink = getCaseStudyLink(q.relatedCaseStudy)

  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {q.bilingualRequired && (
        <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-900">
          <Languages className="h-3 w-3" aria-hidden />
          {fr.badges.frenchAnswer}
        </span>
      )}
      {q.relatedCaseStudy && (
        <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-xs text-amber-950">
          <Briefcase className="h-3 w-3" aria-hidden />
          {q.relatedCaseStudy}
        </span>
      )}
      {caseLink && (
        <a
          href={caseLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-xs font-medium text-v10-ink ring-1 ring-black/10 hover:bg-v10-bg-deep/50"
        >
          {fr.badges.caseStudy}
          <ExternalLink className="h-3 w-3" aria-hidden />
        </a>
      )}
    </div>
  )
}
