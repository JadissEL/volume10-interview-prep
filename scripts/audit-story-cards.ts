/**
 * Audit cartes d’expertise par question — npx tsx scripts/audit-story-cards.ts [--strict]
 */
import { writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { questions } from '../src/data/questions.ts'
import { getPersonalizedAnswer } from '../src/data/personalizedAnswers.ts'
import { getStoryCardsForQuestion } from '../src/lib/storyCardsForQuestion.ts'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const strict = process.argv.includes('--strict')

/** Si la question matche, ces cartes (id ou proofPointId) sont interdites */
const forbiddenRules: { questionPattern: RegExp; forbiddenIds: string[] }[] = [
  {
    questionPattern: /visa|permis|autorisation de travail|immigration|entrée express/i,
    forbiddenIds: ['pp-swikat', 'card-pp-swikat', 'frag-swikat-pragmatic'],
  },
  {
    questionPattern: /famille|éloignement|parent/i,
    forbiddenIds: ['pp-smartsheet', 'card-pp-smartsheet', 'frag-smartsheet-failure'],
  },
  {
    questionPattern: /conflit|désaccord|collègue/i,
    forbiddenIds: ['pp-relocation', 'card-pp-relocation', 'frag-visa-transparency'],
  },
  {
    questionPattern: /salaire|rémunération|compensation/i,
    forbiddenIds: ['pp-42-matrix', 'card-pp-42-matrix'],
  },
]

type Flag = 'EMPTY' | 'FORBIDDEN' | 'LOW_SCORE_TOP'

interface Row {
  id: string
  categoryId: string
  flags: Flag[]
  cards: string
  question: string
}

const rows: Row[] = []
let emptyCount = 0
let forbiddenCount = 0
let lowScoreCount = 0

for (const q of questions) {
  const answer = getPersonalizedAnswer(q.id, q.categoryId)
  const cards = getStoryCardsForQuestion(q.categoryId, answer, q.question, q.tags ?? [])
  const flags: Flag[] = []

  if (cards.length === 0) {
    flags.push('EMPTY')
    emptyCount++
  }

  const top = cards[0]
  if (top && top.score < 60 && !answer.snippetIds?.length) {
    flags.push('LOW_SCORE_TOP')
    lowScoreCount++
  }

  for (const rule of forbiddenRules) {
    if (!rule.questionPattern.test(q.question)) continue
    const hit = cards.some(
      (c) =>
        rule.forbiddenIds.includes(c.id) ||
        (c.proofPointId && rule.forbiddenIds.includes(c.proofPointId)),
    )
    if (hit) {
      flags.push('FORBIDDEN')
      forbiddenCount++
      break
    }
  }

  rows.push({
    id: q.id,
    categoryId: q.categoryId,
    flags,
    cards: cards.map((c) => `${c.title} (${c.score})`).join(' · ') || '—',
    question: q.question.slice(0, 70) + (q.question.length > 70 ? '…' : ''),
  })
}

const md = [
  '# Audit cartes d’expertise par question',
  '',
  `Généré: ${new Date().toISOString()}`,
  '',
  '| Métrique | Valeur |',
  '|----------|--------|',
  `| Questions | ${questions.length} |`,
  `| EMPTY | ${emptyCount} |`,
  `| FORBIDDEN | ${forbiddenCount} |`,
  `| LOW_SCORE_TOP | ${lowScoreCount} |`,
  '',
  '| ID | Catégorie | Alertes | Cartes (top) | Question |',
  '|----|-----------|---------|--------------|----------|',
  ...rows.map(
    (r) =>
      `| ${r.id} | ${r.categoryId} | ${r.flags.length ? r.flags.join(', ') : 'OK'} | ${r.cards.replace(/\|/g, '/')} | ${r.question.replace(/\|/g, '/')} |`,
  ),
].join('\n')

mkdirSync(join(root, 'docs'), { recursive: true })
writeFileSync(join(root, 'docs/story-cards-audit.md'), md, 'utf8')
console.log('Wrote docs/story-cards-audit.md')
console.log(`EMPTY=${emptyCount} FORBIDDEN=${forbiddenCount} LOW_SCORE_TOP=${lowScoreCount}`)

if (strict && (emptyCount > 0 || forbiddenCount > 0 || lowScoreCount > 0)) {
  process.exit(1)
}
