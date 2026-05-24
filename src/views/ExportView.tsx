import { Download, Printer, Upload, RotateCcw } from 'lucide-react'
import type { useProgress } from '../hooks/useProgress'
import { fr } from '../i18n/fr'
import { downloadNightBefore, printNightBefore } from '../lib/nightBeforeExport'
import { downloadProgress } from '../lib/progressIO'
import { ElasticCard } from '../components/ElasticCard'
import { PageHero } from '../components/PageHero'
import { StarStoriesEditor } from '../components/StarStoriesEditor'
import { EdgeProfileForm } from '../components/EdgeProfileForm'

type ProgressApi = ReturnType<typeof useProgress>

export function ExportView({ progressApi }: { progressApi: ProgressApi }) {
  const { stats, progress, updateStarStory, setEdgeProfile, importProgress, resetAll } =
    progressApi

  const onImportFile = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'application/json,.json'
    input.onchange = async () => {
      const file = input.files?.[0]
      if (!file) return
      const text = await file.text()
      try {
        importProgress(text)
      } catch {
        window.alert('JSON invalide')
      }
    }
    input.click()
  }

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <PageHero label={fr.export.title} title={fr.export.heading} description={fr.export.desc} />

      <ElasticCard className="p-6">
        <dl className="grid gap-2 text-sm">
          <div className="flex justify-between">
            <dt className="text-v10-muted">{fr.export.studied}</dt>
            <dd className="font-medium">
              {stats.studied} / {stats.total}
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-v10-muted">{fr.export.weak}</dt>
            <dd className="font-medium">{stats.weak}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-v10-muted">{fr.export.strongPercent}</dt>
            <dd className="font-medium">{stats.strongPercent}%</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-v10-muted">{fr.export.due}</dt>
            <dd className="font-medium">{stats.dueCount}</dd>
          </div>
        </dl>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => downloadNightBefore(progress)}
            className="btn-cta"
          >
            <Download className="h-4 w-4" />
            {fr.export.download}
          </button>
          <button
            type="button"
            onClick={() => printNightBefore(progress)}
            className="btn-cta-outline"
          >
            <Printer className="h-4 w-4" />
            {fr.export.print}
          </button>
        </div>
      </ElasticCard>

      <StarStoriesEditor stories={progress.starStories} onUpdate={updateStarStory} />

      <EdgeProfileForm profile={progress.edgeProfile} onChange={setEdgeProfile} />

      <ElasticCard className="p-6">
        <p className="label-caps mb-3">{fr.export.importExport}</p>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => downloadProgress(progress)}
            className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm ring-1 ring-black/5"
          >
            <Download className="h-4 w-4" />
            {fr.export.exportJson}
          </button>
          <button
            type="button"
            onClick={onImportFile}
            className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm ring-1 ring-black/5"
          >
            <Upload className="h-4 w-4" />
            {fr.export.importJson}
          </button>
          <button
            type="button"
            onClick={() => {
              if (window.confirm(fr.export.resetConfirm)) resetAll()
            }}
            className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm text-red-900 ring-1 ring-red-200"
          >
            <RotateCcw className="h-4 w-4" />
            {fr.export.reset}
          </button>
        </div>
      </ElasticCard>
    </div>
  )
}
