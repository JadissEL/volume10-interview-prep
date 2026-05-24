import { motion } from 'framer-motion'
import { Check, Circle, Mic, PlayCircle } from 'lucide-react'
import { spacedRepetitionTips } from '../data/edgeContent'
import { jobOfferMeta } from '../data/jobOffer'
import { learningPhases } from '../data/learningPath'
import { CATEGORIES } from '../data/questions'
import type { CategoryId } from '../data/types'
import type { useProgress } from '../hooks/useProgress'
import { fr } from '../i18n/fr'
import { getPhaseQuestions } from '../lib/learningPathUtils'
import { ElasticCard } from '../components/ElasticCard'
import { PageHero } from '../components/PageHero'
import { ProgressRing } from '../components/ProgressRing'
import { YourEdgeSidebar } from '../components/YourEdgeSidebar'
import { DueTodayQueue } from '../components/DueTodayQueue'
import { CategoryProgress } from '../components/CategoryProgress'

type ProgressApi = ReturnType<typeof useProgress>

type DashboardProps = {
  progressApi: ProgressApi
  onPracticeDue: () => void
  onOpenQuestion: (id: string) => void
  onPracticePhase: (categoryIds: CategoryId[], phaseTitle: string) => void
  onGoOpening: () => void
}

export function DashboardView({
  progressApi,
  onPracticeDue,
  onOpenQuestion,
  onPracticePhase,
  onGoOpening,
}: DashboardProps) {
  const { stats, progress, togglePhase } = progressApi

  const deadlineMs = new Date(jobOfferMeta.deadline).getTime()
  const daysUntilDeadline = Math.ceil((deadlineMs - Date.now()) / 86400000)

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
      <div className="space-y-8">
        <ElasticCard className="border-v10-red/40 bg-v10-red/5 p-4">
          <p className="text-sm font-semibold text-v10-ink">
            {fr.dashboard.deadlineBanner(daysUntilDeadline, jobOfferMeta.deadlineLabel)}
          </p>
          {stats.dueCount > 0 && (
            <button type="button" onClick={onPracticeDue} className="btn-cta mt-3">
              {fr.dashboard.deadlineCta} ({stats.dueCount})
            </button>
          )}
        </ElasticCard>

        <PageHero
          label={fr.dashboard.learningPath}
          title={fr.dashboard.sprintTitle}
          description={fr.dashboard.sprintDesc}
          accent
        />

        <ElasticCard className="border-v10-red/25 bg-v10-bg/40 p-6">
          <p className="label-caps text-v10-red">{fr.dashboard.openingBadge}</p>
          <p className="mt-2 text-sm leading-relaxed text-v10-ink">{fr.dashboard.openingTeaser}</p>
          <button type="button" onClick={onGoOpening} className="btn-cta mt-4">
            <Mic className="h-4 w-4" />
            {fr.dashboard.openingCta}
          </button>
        </ElasticCard>

        <div className="flex flex-wrap items-end gap-8 border-y border-v10-line py-8">
          <ProgressRing percent={stats.percent} />
          <div className="grid min-w-[12rem] grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-1">
            <div>
              <p className="stat-value text-v10-red">{stats.studied}</p>
              <p className="label-caps mt-1">
                / {stats.total} {fr.dashboard.studied}
              </p>
            </div>
            <div>
              <p className="stat-value">{stats.weak}</p>
              <p className="label-caps mt-1">{fr.dashboard.weak}</p>
            </div>
            <div>
              <p className="stat-value">{stats.strongPercent}%</p>
              <p className="label-caps mt-1">{fr.dashboard.strongLabel}</p>
            </div>
            <div>
              <p className="stat-value">
                {progress.completedPhases.length}
                <span className="text-lg text-v10-muted">/{learningPhases.length}</span>
              </p>
              <p className="label-caps mt-1">{fr.dashboard.phasesComplete}</p>
            </div>
          </div>
        </div>

        <DueTodayQueue
          due={stats.duePreview}
          totalDue={stats.dueCount}
          onPractice={onPracticeDue}
          onOpenQuestion={onOpenQuestion}
        />

        <CategoryProgress byCategory={stats.byCategory} />

        <ElasticCard className="p-6 md:p-8">
          <p className="label-caps-accent mb-6">{fr.dashboard.phases}</p>
          <ol className="space-y-0 divide-y divide-v10-line">
            {learningPhases.map((phase, i) => {
              const done = progress.completedPhases.includes(phase.id)
              const count = getPhaseQuestions(phase).length
              return (
                <motion.li
                  key={phase.id}
                  layout
                  className="flex gap-5 py-6 first:pt-0 last:pb-0"
                >
                  <button
                    type="button"
                    onClick={() => togglePhase(phase.id)}
                    className="mt-1 shrink-0 text-v10-red"
                    aria-label={done ? fr.dashboard.markIncomplete : fr.dashboard.markComplete}
                  >
                    {done ? (
                      <Check className="h-5 w-5" strokeWidth={2} />
                    ) : (
                      <Circle className="h-5 w-5 text-v10-muted/60" />
                    )}
                  </button>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <span className="label-caps-neutral">
                        {phase.dayRange}
                      </span>
                      <h3 className="text-xl font-semibold text-v10-ink md:text-2xl">
                        {phase.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-v10-muted">{phase.focus}</p>
                    <p className="mt-2 text-xs font-medium text-v10-muted">
                      {phase.categoryIds
                        .map((id) => CATEGORIES.find((c) => c.id === id)?.label)
                        .join(' · ')}{' '}
                      · {count} Q
                    </p>
                    <button
                      type="button"
                      onClick={() => onPracticePhase(phase.categoryIds, phase.title)}
                      className="btn-cta mt-4"
                    >
                      <PlayCircle className="h-3.5 w-3.5" />
                      {fr.dashboard.practicePhase}
                    </button>
                  </div>
                  <span
                    className="hidden text-5xl font-light text-v10-light-gray sm:block"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </motion.li>
              )
            })}
          </ol>
        </ElasticCard>

        <ElasticCard className="p-6 md:p-8" flat>
          <p className="label-caps mb-4">{fr.dashboard.spacedRep}</p>
          <ul className="space-y-3 border-l-2 border-v10-red/40 pl-4 text-sm leading-relaxed text-v10-muted">
            {spacedRepetitionTips.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </ElasticCard>
      </div>

      <YourEdgeSidebar progressApi={progressApi} />
    </div>
  )
}
