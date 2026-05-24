import { questions } from '../data/questions'
import type { AppProgress } from '../data/types'
import { yourEdge } from '../data/edgeContent'
import { applicationQuestions } from '../data/applicationQuestions'
import { proofPoints } from '../data/candidateProfile'
import { encgModules, encgEssentialIds } from '../data/encgCurriculum'
import { careerTimeline } from './lastRevision'
import { getPersonalizedAnswer } from '../data/personalizedAnswers'
import { getStoryCardsForQuestion } from './storyCardsForQuestion'
import { openingStoryElevator30s, openingStoryFraming } from '../data/openingStory'
import { jobOfferMeta } from '../data/jobOffer'

export function buildNightBeforeMarkdown(progress: AppProgress): string {
  const weak = questions.filter((q) => {
    const p = progress.byQuestion[q.id]
    return p?.confidence !== undefined && p.confidence <= 2
  })

  const relocation = questions.filter((q) => q.categoryId === 'relocation')
  const starQs = questions.filter((q) => q.categoryId === 'behavioral').slice(0, 5)
  const ep = progress.edgeProfile

  const lines: string[] = [
    '# Volume10 — Veille de nuit',
    '',
    `Généré : ${new Date().toLocaleString('fr-CA')}`,
    '',
    '## Votre atout (Grèce → Montréal)',
    '',
    ...yourEdge.points.map((p) => `- **${p.title} :** ${p.body}`),
    '',
  ]

  if (ep.visaStatus || ep.pitchNotes) {
    lines.push('### Profil personnalisé', '')
    if (ep.visaStatus) lines.push(`- **Visa :** ${ep.visaStatus}`)
    if (ep.relocationDate) lines.push(`- **Relocalisation :** ${ep.relocationDate}`)
    if (ep.frenchLevel) lines.push(`- **Français :** ${ep.frenchLevel}`)
    if (ep.frenchPlan) lines.push(`- **Plan FR :** ${ep.frenchPlan}`)
    if (ep.pitchNotes) lines.push(`- **Pitch :** ${ep.pitchNotes}`)
    lines.push('')
  }

  lines.push('## Vos histoires STAR', '')
  for (const s of progress.starStories) {
    const filled = [s.situation, s.task, s.action, s.result].some((x) => x.trim())
    if (!filled) continue
    lines.push(`### ${s.title}`, '')
    lines.push(`- **S :** ${s.situation}`)
    lines.push(`- **T :** ${s.task}`)
    lines.push(`- **A :** ${s.action}`)
    lines.push(`- **R :** ${s.result}`)
    lines.push('')
  }

  lines.push('## Cartes faibles (confiance 1–2)', '')
  if (weak.length === 0) {
    lines.push('_Aucune carte faible — révisez la file « à réviser »._')
  } else {
    for (const q of weak) {
      lines.push(`### ${q.id}`)
      lines.push(q.question)
      lines.push('')
      const pa = getPersonalizedAnswer(q.id, q.categoryId)
      const cards = getStoryCardsForQuestion(
        q.categoryId,
        pa,
        q.question,
        q.tags ?? [],
        progress.hiddenSnippetIds ?? [],
      )
      if (cards[0]) {
        lines.push(`**Extrait oral :** ${cards[0].title}`)
        lines.push(`> ${cards[0].oralLine}`)
        lines.push('')
      }
      q.answerBullets.slice(0, 2).forEach((b) => lines.push(`- ${b}`))
      lines.push('')
    }
  }

  lines.push('## 5 questions STAR (banque)', '')
  for (const q of starQs) {
    lines.push(`- ${q.question}`)
  }

  lines.push('')
  lines.push('## Relocalisation', '')
  for (const q of relocation.slice(0, 6)) {
    lines.push(`- **Q :** ${q.question}`)
    lines.push(`  - ${q.answerBullets[0]}`)
  }

  const mockEntries = Object.entries(progress.mockScores)
  if (mockEntries.length) {
    lines.push('', '## Notes simulation', '')
    for (const [id, m] of mockEntries) {
      const q = questions.find((x) => x.id === id)
      lines.push(`- ${q?.question ?? id} : **${m.score}/10**${m.note ? ` — ${m.note}` : ''}`)
    }
  }

  lines.push('')
  lines.push('## Offre Volume Dix (rappel)', '')
  lines.push(`- **Postes :** ${jobOfferMeta.openings} consultants exécutifs`)
  lines.push(`- **Lieu :** ${jobOfferMeta.location}`)
  lines.push(`- **Langues :** ${jobOfferMeta.languages}`)
  lines.push(`- **Date limite :** ${jobOfferMeta.deadlineLabel}`)
  lines.push('')

  lines.push('## Ouverture entrevue (à dire en premier)', '')
  lines.push(`> ${openingStoryFraming.introLine}`)
  lines.push('')
  lines.push(openingStoryElevator30s)
  lines.push('')

  lines.push('## Accroches Volume10', '')
  lines.push('- Donner de l\'espace aux idées')
  lines.push('- Analyse rigoureuse → solution sur mesure → étude d\'impact')
  lines.push('- VolumE Dix : des décisions qui tiennent la route')
  lines.push('')

  lines.push('## Timeline carrière Dina', '')
  for (const t of careerTimeline) {
    lines.push(`- **${t.period}** — ${t.label} : ${t.detail}`)
  }
  lines.push('')

  lines.push('## Questions candidature Volume Dix (oral optimisé)', '')
  for (const aq of applicationQuestions) {
    lines.push(`### ${aq.question}`, '')
    lines.push(aq.optimizedInterviewAnswer)
    lines.push('')
  }

  lines.push('## Modules ENCG essentiels', '')
  for (const m of encgModules.filter((x) => encgEssentialIds.includes(x.id))) {
    lines.push(`- **${m.nameFr}** : ${m.linkToInterview}`)
  }
  lines.push('')

  lines.push('## Index des preuves', '')
  for (const p of proofPoints) {
    lines.push(`- **${p.label}** — ${p.whenToUse}`)
  }
  lines.push('')

  if (weak.length > 0) {
    lines.push('## Réponses personnalisées — cartes faibles (extraits)', '')
    for (const q of weak.slice(0, 5)) {
      const pa = getPersonalizedAnswer(q.id, q.categoryId)
      lines.push(`### ${q.id}`, '')
      lines.push(`> ${pa.hook}`, '')
      lines.push(pa.storyScript.slice(0, 400) + '…')
      lines.push('')
    }
  }

  return lines.join('\n')
}

export function downloadNightBefore(progress: AppProgress) {
  const md = buildNightBeforeMarkdown(progress)
  const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `volume10-veille-${new Date().toISOString().slice(0, 10)}.md`
  a.click()
  URL.revokeObjectURL(url)
}

export function printNightBefore(progress: AppProgress) {
  const md = buildNightBeforeMarkdown(progress)
  const w = window.open('', '_blank')
  if (!w) return
  const html = `<!DOCTYPE html><html lang="fr"><head><title>Veille de nuit</title>
<style>body{font-family:Georgia,serif;max-width:720px;margin:2rem auto;line-height:1.5}
h1,h2,h3{color:#1a1a1a}pre{white-space:pre-wrap}</style></head>
<body><pre>${md.replace(/</g, '&lt;')}</pre></body></html>`
  w.document.write(html)
  w.document.close()
  w.print()
}
