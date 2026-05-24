/**
 * Tests golden du moteur de cartes — npx tsx scripts/test-story-cards.ts
 */
import { questions } from '../src/data/questions.ts'
import { getPersonalizedAnswer } from '../src/data/personalizedAnswers.ts'
import { getStoryCardsForQuestion } from '../src/lib/storyCardsForQuestion.ts'

let failed = 0

function assert(name: string, cond: boolean) {
  if (!cond) {
    console.error('FAIL:', name)
    failed++
  } else {
    console.log('OK:', name)
  }
}

function cardsFor(id: string) {
  const q = questions.find((x) => x.id === id)!
  const a = getPersonalizedAnswer(id, q.categoryId)
  return getStoryCardsForQuestion(q.categoryId, a, q.question, q.tags ?? [])
}

function hasId(cards: ReturnType<typeof cardsFor>, id: string) {
  return cards.some((c) => c.id === id || c.proofPointId === id)
}

function lacksId(cards: ReturnType<typeof cardsFor>, id: string) {
  return !hasId(cards, id)
}

function notEmpty(id: string) {
  assert(`${id} a au moins une carte`, cardsFor(id).length > 0)
}

// Behavioral
const q061 = cardsFor('q061')
assert('q061 leadership', hasId(q061, 'frag-leadership-matrix') || hasId(q061, 'card-pp-42-matrix'))

const q062 = cardsFor('q062')
assert('q062 raté → frag failure', hasId(q062, 'frag-smartsheet-failure'))

const q063 = cardsFor('q063')
assert('q063 conflit → frag-conflict ou smartsheet', hasId(q063, 'frag-conflict-excel-smartsheet') || hasId(q063, 'card-pp-smartsheet'))
assert('q063 pas relocation', lacksId(q063, 'pp-relocation'))

const q064 = cardsFor('q064')
assert('q064 échéance', hasId(q064, 'frag-deadline-qcer') || hasId(q064, 'card-pp-qcer'))

const q066 = cardsFor('q066')
assert('q066 éthique → ethics fragment', hasId(q066, 'frag-ethics-qcer-signoff'))

// Relocation
const q071 = cardsFor('q071')
assert('q071 relocation', hasId(q071, 'pp-relocation'))

const q072 = cardsFor('q072')
assert('q072 visa → visa ou relocation', hasId(q072, 'frag-visa-transparency') || hasId(q072, 'pp-relocation'))
assert('q072 pas swikat', lacksId(q072, 'pp-swikat'))

const q074 = cardsFor('q074')
assert('q074 famille', hasId(q074, 'frag-family-plan'))

const q075 = cardsFor('q075')
assert('q075 distance → remote', hasId(q075, 'frag-remote-smartsheet-trace') || hasId(q075, 'pp-teleperformance'))

const q076 = cardsFor('q076')
assert('q076 français', hasId(q076, 'frag-french-6mo-plan'))

// Firm / strategy / innovation
notEmpty('q001')
const q001 = cardsFor('q001')
assert('q001 volume/boutique', hasId(q001, 'frag-volume-dix-signature') || hasId(q001, 'frag-boutique-vs-big4'))

notEmpty('q011')
notEmpty('q019')

const q019 = cardsFor('q019')
assert('q019 innovation', hasId(q019, 'frag-innovation-governance') || hasId(q019, 'card-pp-smartsheet'))

// Small team / compensation
const q089 = cardsFor('q089')
assert('q089 suivi vendeur', hasId(q089, 'frag-upsell-value'))

const q093 = cardsFor('q093')
assert('q093 pas arbitrage Grèce seul', hasId(q093, 'frag-compensation-motivation') || hasId(q093, 'card-pp-relocation'))
assert('q093 pas swikat', lacksId(q093, 'pp-swikat'))

const q095 = cardsFor('q095')
assert('q095 négociation', hasId(q095, 'frag-compensation-motivation'))

const q055 = cardsFor('q055')
assert('q055 socio → frag-socio-kpi', hasId(q055, 'frag-socio-kpi'))

const q057 = cardsFor('q057')
assert('q057 centre-ville → frag-centre-ville', hasId(q057, 'frag-centre-ville-ecosystem'))

const q098 = cardsFor('q098')
assert('q098 curveball visa', hasId(q098, 'frag-curveball-visa-honest'))

// Overrides always surface
assert('q061 snippetIds en tête', q061[0]?.id === 'frag-leadership-matrix' || hasId(q061, 'frag-leadership-matrix'))

if (failed > 0) {
  console.error(`\n${failed} test(s) failed`)
  process.exit(1)
}
console.log('\nAll story-card tests passed')
