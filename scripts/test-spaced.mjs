/** Tests légers pour la répétition espacée (node scripts/test-spaced.mjs) */
const REVIEW_DAYS = { 1: 1, 2: 2, 3: 3, 4: 5, 5: 7 }

function scheduleNextReview(confidence, from = Date.now()) {
  const days = REVIEW_DAYS[confidence]
  return new Date(from + days * 86400000).toISOString()
}

function isQuestionDue(progress, now = Date.now()) {
  if (!progress) return true
  if (progress.confidence !== undefined && progress.confidence <= 2) return true
  if (progress.nextReviewAt) {
    const next = new Date(progress.nextReviewAt).getTime()
    if (!Number.isNaN(next) && now < next) return false
  }
  if (!progress.lastSeen) return !progress.studied
  const last = new Date(progress.lastSeen).getTime()
  return now - last >= 48 * 3600000
}

let failed = 0

function assert(name, cond) {
  if (!cond) {
    console.error('FAIL:', name)
    failed++
  } else {
    console.log('OK:', name)
  }
}

const now = Date.now()
const future = scheduleNextReview(5, now)
assert('confiance 5 → révision dans le futur', new Date(future).getTime() > now)

assert(
  'nextReviewAt futur → pas due si confiance 4',
  !isQuestionDue({ studied: true, confidence: 4, nextReviewAt: future }, now),
)

assert(
  'confiance 1 toujours due',
  isQuestionDue({ studied: true, confidence: 1, nextReviewAt: future }, now),
)

if (failed) {
  process.exit(1)
}
console.log('Tous les tests passés.')
