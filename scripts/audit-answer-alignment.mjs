/**
 * Audit alignement question ↔ réponse personnalisée.
 * Usage: node scripts/audit-answer-alignment.mjs [--strict]
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const strict = process.argv.includes('--strict')

const questionsText = readFileSync(join(root, 'src/data/questions.ts'), 'utf8')
const qRe =
  /"id": "(q\d+)",\s*"categoryId": "([^"]+)",\s*"question": "((?:\\.|[^"\\])*)"/g
const questions = []
let m
while ((m = qRe.exec(questionsText))) {
  const start = m.index
  const slice = questionsText.slice(start, start + 1200)
  questions.push({
    id: m[1],
    categoryId: m[2],
    question: m[3].replace(/\\'/g, "'").replace(/\\"/g, '"'),
    bilingual: slice.includes('"bilingualRequired": true'),
  })
}

const answersDir = join(root, 'src/data/answers')
const answerFiles = [
  'firm-culture.ts',
  'strategy.ts',
  'innovation.ts',
  'ecosystem.ts',
  'intelligence.ts',
  'case-style.ts',
  'sectors.ts',
  'behavioral.ts',
  'relocation.ts',
  'small-team.ts',
  'compensation.ts',
  'curveball.ts',
].map((f) => join(answersDir, f))

const allAnswerText = answerFiles
  .filter((f) => {
    try {
      readFileSync(f)
      return true
    } catch {
      return false
    }
  })
  .map((f) => readFileSync(f, 'utf8'))
  .join('\n')

const idRe = /A\(\s*'(q\d+)'/g
const dedicatedIds = new Set()
while ((m = idRe.exec(allAnswerText))) dedicatedIds.add(m[1])

function parseAddresses(block) {
  const m = block.match(/addresses:\s*\[([\s\S]*?)\]/)
  if (!m) return []
  return [...m[1].matchAll(/'([^']+)'/g)].map((x) => x[1].toLowerCase())
}

const hooks = new Map()
const scripts = new Map()

for (const file of answerFiles) {
  let text
  try {
    text = readFileSync(file, 'utf8')
  } catch {
    continue
  }
  const blocks = text.split(/(?=A\(\s*'q\d+')/g)
  for (const block of blocks) {
    const idM = block.match(/A\(\s*'(q\d+)'/)
    if (!idM) continue
    const id = idM[1]
    const hookM = block.match(
      /A\(\s*'q\d+',\s*'(?:STAR|CASE|DIRECT|CURVEBALL)',\s*'((?:\\'|[^'])*)'/,
    )
    const scriptM = block.match(/storyScript:\s*`([\s\S]*?)`/)
    const addr = parseAddresses(block)
    if (hookM) hooks.set(id, hookM[1].replace(/\\'/g, "'"))
    if (scriptM) scripts.set(id, scriptM[1])
    if (addr.length) hooks.set(`${id}__addr`, addr.join('|'))
  }
}

const addressMap = new Map()
for (const [k, v] of hooks.entries()) {
  if (k.endsWith('__addr')) {
    addressMap.set(k.replace('__addr', ''), v.split('|'))
    hooks.delete(k)
  }
}

function stemWords(q) {
  return q
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 4 && !['comment', 'decrivez', 'parlez', 'quelle', 'quelles', 'comment'].includes(w))
}

function hookMismatch(q, hook, addresses = []) {
  const words = stemWords(q.question).slice(0, 6)
  if (words.length === 0) return false
  const hay = [hook, ...addresses]
    .join(' ')
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
  const hits = words.filter((w) => hay.includes(w))
  return hits.length < 1
}

const scriptHashes = new Map()
const lines = []
let fallbacks = 0
let dupes = 0
let hookWarn = 0
let missingEn = 0

for (const q of questions) {
  const dedicated = dedicatedIds.has(q.id)
  const hook = hooks.get(q.id) ?? '(fallback)'
  const script = scripts.get(q.id) ?? ''
  const flags = []

  if (!dedicated) {
    flags.push('FALLBACK')
    fallbacks++
  }
  if (script) {
    const hash = script.slice(0, 200)
    if (scriptHashes.has(hash) && scriptHashes.get(hash) !== q.id) {
      flags.push(`DUPLICATE:${scriptHashes.get(hash)}`)
      dupes++
    } else scriptHashes.set(hash, q.id)
  }
  if (dedicated && hook !== '(fallback)' && hookMismatch(q, hook, addressMap.get(q.id) ?? [])) {
    flags.push('HOOK_KEYWORDS')
    hookWarn++
  }
  if (q.bilingual && dedicated && !allAnswerText.includes(`questionId: '${q.id}'`) ) {
    // checked per block below
  }
  if (q.bilingual && dedicated) {
    const blockMatch = allAnswerText.match(
      new RegExp(`A\\(\\s*'${q.id}'[\\s\\S]{0,8000}?\\n  \\),`),
    )
    const block = blockMatch?.[0] ?? ''
    if (!block.includes('storyScriptEn')) {
      flags.push('MISSING_EN')
      missingEn++
    }
  }

  lines.push(
    `| ${q.id} | ${q.categoryId} | ${dedicated ? 'oui' : '**non**'} | ${flags.join(', ') || 'OK'} | ${q.question.slice(0, 70).replace(/\|/g, '/')}… |`,
  )
}

const md = `# Audit alignement Q↔A

Généré: ${new Date().toISOString()}

| Métrique | Valeur |
|----------|--------|
| Questions | ${questions.length} |
| Réponses dédiées | ${dedicatedIds.size} |
| FALLBACK | ${fallbacks} |
| DUPLICATE | ${dupes} |
| HOOK_KEYWORDS | ${hookWarn} |
| MISSING_EN | ${missingEn} |

| ID | Catégorie | Dédiée | Alertes | Question (extrait) |
|----|-----------|--------|---------|-------------------|
${lines.join('\n')}
`

mkdirSync(join(root, 'docs'), { recursive: true })
writeFileSync(join(root, 'docs/answer-audit.md'), md, 'utf8')
console.log(md.split('\n').slice(0, 12).join('\n'))
console.log(`\nÉcrit docs/answer-audit.md`)

const failed = fallbacks + dupes + (strict ? hookWarn + missingEn : 0)
if (strict && failed > 0) {
  console.error(`\nÉchec audit strict: ${failed} problème(s)`)
  process.exit(1)
}
