/** Liens vers les études de cas dans volume10-scrape/information/ */
const CASE_STUDY_PATHS: Record<string, string> = {
  'MUHC innovation strategy':
    '../volume10-scrape/information/case-studies/en/muhc-innovation-strategy.md',
  'MUHC':
    '../volume10-scrape/information/case-studies/en/muhc-innovation-strategy.md',
  'CUSM':
    '../volume10-scrape/information/case-studies/fr/strategie-dinnovation-pour-le-cusm-muhc.md',
  'Transplant Québec':
    '../volume10-scrape/information/case-studies/fr/planification-strategique-2023-2027-de-transplant-quebec.md',
  'Place des Arts':
    '../volume10-scrape/information/case-studies/fr/planification-strategique-2023-2027-de-la-place-des-arts.md',
  'Griffintown':
    '../volume10-scrape/information/case-studies/fr/projet-de-revitalisaiton-pour-griffintown.md',
  'Minimum Blockage':
    '../volume10-scrape/information/case-studies/en/minimum-blockage-innovative-worksite-management.md',
  'Propulsion Québec':
    '../volume10-scrape/information/case-studies/fr/planification-strategique-2024-2027-de-propulsion-quebec.md',
  'La Table ronde':
    '../volume10-scrape/information/case-studies/fr/etude-economique-de-la-gastronomie-et-propulsion-du-collectif-la-table-ronde.md',
}

export function getCaseStudyLink(title: string | undefined): string | undefined {
  if (!title) return undefined
  if (CASE_STUDY_PATHS[title]) return CASE_STUDY_PATHS[title]
  const key = Object.keys(CASE_STUDY_PATHS).find((k) =>
    title.toLowerCase().includes(k.toLowerCase()),
  )
  return key ? CASE_STUDY_PATHS[key] : undefined
}
