import { useMemo, useState, type ReactNode } from 'react'
import { RecruiterQuestionsBlock } from '../components/RecruiterQuestionsBlock'
import { ArrowRight, PlayCircle, Timer, Download, FileCheck } from 'lucide-react'
import type { CategoryId } from '../data/types'
import type { useProgress } from '../hooks/useProgress'
import { fr } from '../i18n/fr'
import { getRevisionBundle } from '../lib/lastRevision'
import { getCategoryLabel } from '../lib/categories'
import { ElasticCard } from '../components/ElasticCard'
import { PageHero } from '../components/PageHero'
import { ProgressRing } from '../components/ProgressRing'
import { PersonalizedAnswerReveal } from '../components/PersonalizedAnswerReveal'
import { storySnippetCatalog } from '../data/storySnippets'

type ProgressApi = ReturnType<typeof useProgress>

type Props = {
  progressApi: ProgressApi
  onPracticeWeak: () => void
  onPracticeDue: () => void
  onOpenQuestion: (id: string) => void
  onGoMock: () => void
  onGoExport: () => void
  onGoApplication: () => void
}

export function LastRevisionView({
  progressApi,
  onPracticeWeak,
  onPracticeDue,
  onOpenQuestion,
  onGoMock,
  onGoExport,
  onGoApplication,
}: Props) {
  const { stats, progress, setRevisionCheck } = progressApi
  const bundle = useMemo(() => getRevisionBundle(progress), [progress])
  const [appRevealed, setAppRevealed] = useState<Record<string, boolean>>({})

  const checklist = fr.revision.checklistItems
  const doneCount = checklist.filter(
    (item) => progress.revisionChecklist[item.id],
  ).length

  const unusedSnippets = useMemo(() => {
    const used = new Set(Object.keys(progress.cardUsage ?? {}))
    return storySnippetCatalog.filter((c) => !used.has(c.id)).slice(0, 12)
  }, [progress.cardUsage])

  return (
    <div className="space-y-8">
      <PageHero
        label={fr.revision.title}
        title={fr.revision.heading}
        description={fr.revision.desc}
        accent
      />

      <div className="flex flex-wrap items-center gap-6">
        <ProgressRing percent={stats.percent} />
        <div className="space-y-1 text-sm">
          <p>
            <span className="font-semibold text-v10-ink">{stats.weak}</span>
            <span className="text-v10-muted"> {fr.revision.weakLabel}</span>
          </p>
          <p>
            <span className="font-semibold text-v10-ink">{stats.dueCount}</span>
            <span className="text-v10-muted"> {fr.revision.dueLabel}</span>
          </p>
          <p className="text-v10-muted">
            {fr.revision.checklistProgress(doneCount, checklist.length)}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <ActionButton onClick={onPracticeWeak} icon={PlayCircle} label={fr.revision.practiceWeak} />
          <ActionButton onClick={onPracticeDue} icon={PlayCircle} label={fr.revision.practiceDue} />
          <ActionButton onClick={onGoMock} icon={Timer} label={fr.revision.runMock} />
          <ActionButton onClick={onGoApplication} icon={FileCheck} label={fr.tabs.application} />
          <ActionButton onClick={onGoExport} icon={Download} label={fr.revision.goExport} secondary />
        </div>
      </div>

      {unusedSnippets.length > 0 && (
        <ElasticCard className="p-5">
          <p className="label-caps mb-3">{fr.revision.unusedSnippets}</p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {unusedSnippets.map((s) => (
              <li key={s.id} className="border border-v10-line p-3 text-xs">
                <p className="font-semibold text-v10-ink">{s.title}</p>
                <p className="mt-1 text-v10-dim line-clamp-2">{s.oralLine}</p>
              </li>
            ))}
          </ul>
        </ElasticCard>
      )}

      <ElasticCard className="p-5">
        <p className="label-caps mb-3">{fr.revision.checklistTitle}</p>
        <ul className="space-y-2">
          {checklist.map((item) => (
            <li key={item.id}>
              <label className="flex cursor-pointer gap-3 text-sm">
                <input
                  type="checkbox"
                  checked={!!progress.revisionChecklist[item.id]}
                  onChange={() =>
                    setRevisionCheck(item.id, !progress.revisionChecklist[item.id])
                  }
                  className="mt-0.5"
                />
                <span
                  className={
                    progress.revisionChecklist[item.id]
                      ? 'text-v10-muted line-through'
                      : 'text-v10-ink'
                  }
                >
                  {item.label}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </ElasticCard>

      <Section title={fr.timeline.heading}>
        <ol className="space-y-3 border-l-2 border-v10-red pl-4">
          {bundle.timeline.map((t) => (
            <li key={t.period} className="text-sm">
              <p className="font-semibold text-v10-ink">{t.period} — {t.label}</p>
              <p className="text-v10-muted">{t.detail}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title={fr.revision.applicationSection}>
        <p className="mb-3 text-xs text-v10-muted">{fr.revision.blindMode}</p>
        <ul className="space-y-4">
          {bundle.applicationQuestions.slice(0, 3).map((aq) => (
            <li key={aq.id} className="border-b border-v10-line pb-4 last:border-0">
              <p className="text-sm font-medium text-v10-ink">{aq.question}</p>
              {!appRevealed[aq.id] ? (
                <button
                  type="button"
                  className="btn-cta mt-2"
                  onClick={() => setAppRevealed((r) => ({ ...r, [aq.id]: true }))}
                >
                  {fr.application.reveal}
                </button>
              ) : (
                <p className="mt-2 text-sm text-v10-dim">{aq.optimizedInterviewAnswer.slice(0, 280)}…</p>
              )}
            </li>
          ))}
        </ul>
        <button type="button" onClick={onGoApplication} className="link-underline-up mt-3 text-sm font-medium">
          Voir les 6 questions →
        </button>
      </Section>

      <Section title={fr.revision.encgSection}>
        <ul className="space-y-3">
          {bundle.encgModules.map((m) => (
            <li key={m.id} className="text-sm">
              <p className="font-semibold text-v10-ink">
                {fr.encg.semester(m.semester)} — {m.nameFr}
              </p>
              <p className="text-v10-muted">{m.linkToInterview}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title={fr.revision.proofSection}>
        <ul className="space-y-2">
          {bundle.proofPoints.map((p) => (
            <li key={p.id} className="text-sm">
              <span className="font-medium text-v10-ink">{p.label}</span>
              <span className="text-v10-muted"> — {p.whenToUse}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title={fr.revision.hooks}>
        <ul className="list-inside list-disc space-y-2 text-sm text-v10-muted">
          {bundle.hooks.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </Section>

      <div className="grid gap-6 md:grid-cols-2">
        <Section title={fr.revision.pillars}>
          <ul className="space-y-3">
            {bundle.pillars.map((p) => (
              <li key={p.name}>
                <p className="text-sm font-semibold text-v10-ink">{p.name}</p>
                <ul className="mt-1 list-inside list-disc text-xs text-v10-muted">
                  {p.items.slice(0, 2).map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Section>

        <Section title={fr.revision.mandates}>
          <ul className="space-y-3">
            {bundle.mandates.map((m) => (
              <li key={m.title} className="text-sm">
                <p className="font-medium text-v10-ink">{m.title}</p>
                <p className="text-xs text-v10-muted">{m.summary}</p>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <Section title={fr.revision.edge}>
        <ul className="space-y-3">
          {bundle.edge.points.map((p) => (
            <li key={p.title}>
              <p className="text-sm font-medium text-v10-ink">{p.title}</p>
              <p className="mt-1 text-sm text-v10-muted">{p.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {bundle.weak.length > 0 && (
        <QuestionSection
          title={fr.revision.weakSection(bundle.weak.length)}
          items={bundle.weak.slice(0, 8)}
          onOpen={onOpenQuestion}
          blind
          progressApi={progressApi}
        />
      )}

      {bundle.due.length > 0 && (
        <QuestionSection
          title={fr.revision.dueSection(bundle.due.length)}
          items={bundle.due}
          onOpen={onOpenQuestion}
          blind
          progressApi={progressApi}
        />
      )}

      <QuestionSection
        title={fr.revision.relocation}
        items={bundle.relocation}
        onOpen={onOpenQuestion}
        blind
        progressApi={progressApi}
      />

      <QuestionSection
        title={fr.revision.star}
        items={bundle.star}
        onOpen={onOpenQuestion}
        blind
        progressApi={progressApi}
      />

      {bundle.curveball.length > 0 && (
        <QuestionSection
          title={fr.revision.curveball}
          items={bundle.curveball}
          onOpen={onOpenQuestion}
          blind
          progressApi={progressApi}
        />
      )}

      <RecruiterQuestionsBlock />

      <div className="grid gap-6 md:grid-cols-2">
        <Section title={fr.revision.phrases}>
          <ul className="space-y-3">
            {bundle.phrases.map((p) => (
              <li key={p.id} className="text-sm">
                <p className="font-medium text-v10-ink">{p.french}</p>
                <p className="text-xs text-v10-muted">{p.english}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section title={fr.revision.keywords}>
          <ul className="space-y-2">
            {bundle.keywords.map((k) => (
              <li key={k.id} className="flex justify-between gap-2 text-sm">
                <span className="text-v10-muted">{k.english}</span>
                <span className="font-medium text-v10-ink">{k.french}</span>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <ElasticCard className="p-5">
      <p className="label-caps mb-3">{title}</p>
      {children}
    </ElasticCard>
  )
}

function QuestionSection({
  title,
  items,
  onOpen,
  blind = false,
  progressApi,
}: {
  title: string
  items: { id: string; categoryId: CategoryId; question: string; answerBullets: string[] }[]
  onOpen: (id: string) => void
  blind?: boolean
  progressApi: ProgressApi
}) {
  return (
    <ElasticCard className="p-5">
      <p className="label-caps mb-3">{title}</p>
      <ul className="space-y-4">
        {items.map((q) => (
          <li key={q.id} className="border border-v10-line bg-v10-paper p-3">
            <span className="text-xs text-v10-muted">
              {q.id} · {getCategoryLabel(q.categoryId)}
            </span>
            <p className="mt-1 text-sm font-medium text-v10-ink">{q.question}</p>
            {blind ? (
              <PersonalizedAnswerReveal
                questionId={q.id}
                categoryId={q.categoryId}
                genericBullets={q.answerBullets}
                hideGenericUntilHint
                compact
                progressHooks={progressApi}
              />
            ) : null}
            <button
              type="button"
              onClick={() => onOpen(q.id)}
              className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-v10-ink"
            >
              {fr.revision.openInPractice} <ArrowRight className="h-3 w-3" />
            </button>
          </li>
        ))}
      </ul>
    </ElasticCard>
  )
}

function ActionButton({
  onClick,
  icon: Icon,
  label,
  secondary = false,
}: {
  onClick: () => void
  icon: typeof PlayCircle
  label: string
  secondary?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={secondary ? 'btn-cta-outline' : 'btn-cta'}
    >
      <Icon className="h-3.5 w-3.5" />
      {label}
    </button>
  )
}
