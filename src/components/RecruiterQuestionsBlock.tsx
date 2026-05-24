import { recruiterQuestions } from '../data/recruiterQuestions'
import { fr } from '../i18n/fr'
import { ElasticCard } from './ElasticCard'

export function RecruiterQuestionsBlock() {
  return (
    <ElasticCard className="p-5">
      <p className="label-caps">{fr.recruiter.title}</p>
      <p className="mt-1 text-sm text-v10-muted">{fr.recruiter.desc}</p>
      <ol className="mt-4 list-decimal space-y-4 pl-5">
        {recruiterQuestions.map((r) => (
          <li key={r.id} className="text-sm">
            <p className="font-medium text-v10-ink">{r.question}</p>
            <p className="mt-1 text-xs text-v10-muted">{fr.recruiter.why} : {r.why}</p>
          </li>
        ))}
      </ol>
    </ElasticCard>
  )
}
