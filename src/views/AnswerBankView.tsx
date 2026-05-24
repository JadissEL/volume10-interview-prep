import { useMemo, useState } from 'react'
import { CATEGORIES, questions } from '../data/questions'
import type { CategoryId } from '../data/types'
import { fr } from '../i18n/fr'
import { getCategoryLabel } from '../lib/categories'
import { ElasticCard } from '../components/ElasticCard'
import { PageHero } from '../components/PageHero'
import { QuestionBadges } from '../components/QuestionBadges'
import { PersonalizedAnswerReveal } from '../components/PersonalizedAnswerReveal'
import { StakeholderAccordion } from '../components/StakeholderAccordion'
import { FilterChipMotion } from '../components/motion'
import type { useProgress } from '../hooks/useProgress'

export function AnswerBankView({ progressApi }: { progressApi: ReturnType<typeof useProgress> }) {
  const [category, setCategory] = useState<CategoryId | 'all'>('all')

  const filtered = useMemo(
    () =>
      category === 'all' ? questions : questions.filter((q) => q.categoryId === category),
    [category],
  )

  return (
    <div>
      <PageHero label={fr.answers.title} title={fr.answers.heading} description={fr.answers.desc} />

      <div className="mb-6 flex flex-wrap gap-2">
        <Chip active={category === 'all'} onClick={() => setCategory('all')} label={fr.answers.all} />
        {CATEGORIES.map((c) => (
          <Chip
            key={c.id}
            active={category === c.id}
            onClick={() => setCategory(c.id)}
            label={c.label}
          />
        ))}
      </div>

      <ul className="space-y-4">
        {filtered.map((q) => (
          <ElasticCard key={q.id} className="p-5">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <span className="label-caps-neutral">{q.id}</span>
              <span className="text-xs text-v10-muted">{getCategoryLabel(q.categoryId)}</span>
            </div>
            <h3 className="mt-2 font-semibold leading-snug text-v10-ink">{q.question}</h3>
            {q.context && (
              <p className="mt-1 text-xs italic text-v10-muted">{q.context}</p>
            )}
            {q.interviewerVariants && q.interviewerVariants.length > 0 && (
              <ul className="mt-2 space-y-1 text-xs text-v10-dim">
                {q.interviewerVariants.map((v) => (
                  <li key={v}>↳ {v}</li>
                ))}
              </ul>
            )}
            <QuestionBadges q={q} />
            <PersonalizedAnswerReveal
              questionId={q.id}
              categoryId={q.categoryId}
              genericBullets={q.answerBullets}
              hideGenericUntilHint
              progressHooks={progressApi}
            />
            <StakeholderAccordion categoryId={q.categoryId} />
          </ElasticCard>
        ))}
      </ul>
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
  return <FilterChipMotion active={active} onClick={onClick} label={label} />
}
