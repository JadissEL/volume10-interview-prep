import { useState } from 'react'
import { Sparkles, FileText } from 'lucide-react'
import { applicationQuestions } from '../data/applicationQuestions'
import { fr } from '../i18n/fr'
import { ElasticCard } from '../components/ElasticCard'
import { PageHero } from '../components/PageHero'
import { StorySnippetCards } from '../components/StorySnippetCards'
import { getStoryCardsForApplication } from '../lib/storyCardsForQuestion'
import type { useProgress } from '../hooks/useProgress'

type ProgressApi = ReturnType<typeof useProgress>

type RevealStep = 'hidden' | 'cards' | 'full'

export function ApplicationPrepView({ progressApi }: { progressApi?: ProgressApi }) {
  const [stepById, setStepById] = useState<Record<string, RevealStep>>({})

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHero
        label={fr.application.title}
        title={fr.application.heading}
        description={fr.application.desc}
        accent
      />

      <ol className="space-y-6">
        {applicationQuestions.map((aq, i) => {
          const step = stepById[aq.id] ?? 'hidden'
          const cards = getStoryCardsForApplication(
            aq.question,
            aq.proofPointIds,
            [],
            progressApi?.getHiddenSnippets() ?? [],
          )
          return (
            <ElasticCard key={aq.id} className="p-6">
              <p className="label-caps-neutral">Question {i + 1}</p>
              <h3 className="mt-2 text-lg font-semibold leading-snug text-v10-ink">
                {aq.question}
              </h3>
              {aq.pillarMapping && (
                <p className="mt-2 text-xs text-v10-muted">
                  {fr.application.pillars} : {aq.pillarMapping.join(' · ')}
                </p>
              )}
              <details className="mt-4 text-sm text-v10-dim">
                <summary className="cursor-pointer font-medium text-v10-ink">
                  {fr.application.submitted}
                </summary>
                <p className="mt-2 whitespace-pre-wrap leading-relaxed">{aq.yourSubmittedAnswer}</p>
              </details>
              {step === 'hidden' && (
                <button
                  type="button"
                  onClick={() => setStepById((s) => ({ ...s, [aq.id]: 'cards' }))}
                  className="btn-cta mt-4"
                >
                  <Sparkles className="h-4 w-4" />
                  {fr.personalized.revealCardsButton}
                </button>
              )}
              {step !== 'hidden' && (
                <div className="mt-4 space-y-4 border-l-2 border-v10-red pl-4">
                  <StorySnippetCards
                    cards={cards}
                    showMatchScore
                    onCardExpand={(id) => progressApi?.recordCardUsage(id, aq.id)}
                    onDismiss={progressApi ? (id) => progressApi.dismissSnippet(id) : undefined}
                  />
                  {step === 'cards' && (
                    <button
                      type="button"
                      onClick={() => setStepById((s) => ({ ...s, [aq.id]: 'full' }))}
                      className="link-underline-up inline-flex items-center gap-1.5 text-sm font-medium text-v10-ink"
                    >
                      <FileText className="h-4 w-4 text-v10-red" />
                      {fr.personalized.revealFullScript}
                    </button>
                  )}
                  {step === 'full' && (
                    <div className="space-y-3 border-t border-v10-line pt-4">
                      <p className="label-caps">{fr.application.optimized}</p>
                      <p className="whitespace-pre-wrap text-sm leading-relaxed text-v10-ink">
                        {aq.optimizedInterviewAnswer}
                      </p>
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => setStepById((s) => ({ ...s, [aq.id]: 'hidden' }))}
                    className="text-xs font-medium text-v10-muted hover:text-v10-ink"
                  >
                    {fr.personalized.hideAnswer}
                  </button>
                </div>
              )}
            </ElasticCard>
          )
        })}
      </ol>
    </div>
  )
}
