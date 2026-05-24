import type { CategoryId, StakeholderPerspective, StakeholderRole } from './types'

export const stakeholderRoleLabels: Record<StakeholderRole, string> = {
  recruiter: 'Recruteur / RH',
  partner: 'Associé / Partner',
  manager: 'Manager de mandat',
  colleague: 'Collègue consultant',
  client: 'Client (dirigeant)',
  trainee: 'Stagiaire / junior',
  expertNetwork: 'Réseau d’experts',
  publicSector: 'Client secteur public',
}

export const stakeholderPerspectives: StakeholderPerspective[] = [
  {
    role: 'recruiter',
    whatTheyProbe:
      'Fit culture, mobilité, français, cohérence parcours, motivation réelle vs opportuniste',
    howToAnswer:
      'Volume Dix = boutique hands-on ; Grèce → Montréal administratif ; départ fin juillet planifié ; français natif ; ENCG + Deloitte ; The Compound Effect ; réponses candidature alignées.',
    redFlags: ['Critiquer Deloitte', 'Minimiser la relocalisation', 'Vague sur le français'],
    categoryIds: ['firm-culture', 'relocation', 'compensation'],
  },
  {
    role: 'partner',
    whatTheyProbe:
      'Livrable client, jugement, autonomie, représentation firme, capacité à vendre la suite',
    howToAnswer:
      'Matrice 42 filiales adoptée client ; QCER ; due diligence sponsoring ; toujours livrer à l’heure ; cross-sell/up-sell seulement si valeur client (pure play boutique).',
    redFlags: ['Trop technique sans business', 'Pas d’exemple client concret'],
    categoryIds: ['case-style', 'strategy', 'behavioral'],
  },
  {
    role: 'manager',
    whatTheyProbe:
      'Charge, qualité, coordination équipe, escalade, onboarding juniors',
    howToAnswer:
      'Smartsheet pour tenir deadlines ; formation recrues ; support Task Force ; communication transparente sur risques ; PM avec manager sur mandat santé.',
    redFlags: ['Hero solo sans équipe', 'Ignorer charge boutique'],
    categoryIds: ['small-team', 'behavioral'],
  },
  {
    role: 'colleague',
    whatTheyProbe:
      'Collaboration, partage de fichiers, ego, fiabilité en workstream',
    howToAnswer:
      'Matrice comme asset partagé ; documentation claire ; relectures QCER constructives ; Superprof = pédagogie.',
    redFlags: ['Garde le savoir', 'Critique peers publiquement'],
    categoryIds: ['behavioral', 'small-team'],
  },
  {
    role: 'client',
    whatTheyProbe:
      'Résultat concret, langage dirigeant, respect politique interne, ROI',
    howToAnswer:
      'Recommandations actionnables lundi ; dashboards exécutifs Qlik/Excel ; compréhension client (Teleperformance, Assistwise) ; pas de jargon audit inutile.',
    redFlags: ['Slides sans décision', 'Ignorer contraintes ressources client'],
    categoryIds: ['strategy', 'innovation', 'case-style'],
  },
  {
    role: 'trainee',
    whatTheyProbe:
      'Mentorat, patience, clarté des consignes — ou comment vous étiez en début',
    howToAnswer:
      'Onboarding recrues Deloitte ; Superprof ; Visio appris en 24h — je me souviens d’être junior ; je documente (matrice template).',
    redFlags: ['Arrogance', 'Impossible à suivre'],
    categoryIds: ['behavioral', 'small-team'],
  },
  {
    role: 'expertNetwork',
    whatTheyProbe:
      'Quand mobiliser un expert vs répondre en interne ; respect de la confidentialité',
    howToAnswer:
      'Je comprends réseaux d’experts Volume Dix / externes ; je mobilise si gap technique court délai ; je prépare brief expert pour protéger le client.',
    redFlags: ['Prétendre tout savoir', 'Fuite d’info client'],
    categoryIds: ['ecosystem', 'intelligence'],
  },
  {
    role: 'publicSector',
    whatTheyProbe:
      'Conformité, financement, parties prenantes politiques, délais institutionnels',
    howToAnswer:
      '6 mois analyste finance Belgique — formation continue secteur public ; contrôles multi-millions € ; prudence rédactionnelle ; recherche verticale secteur.',
    redFlags: ['Vitesse startup sans gouvernance', 'Mépris processus public'],
    categoryIds: ['sectors', 'strategy', 'case-style'],
  },
]

export function getPerspectivesForCategory(categoryId: CategoryId): StakeholderPerspective[] {
  return stakeholderPerspectives.filter(
    (p) => !p.categoryIds || p.categoryIds.includes(categoryId),
  )
}

export const interviewScenarios = [
  {
    id: 'sc-panel',
    title: 'Panel associé + manager',
    description: '45 min — fit + STAR + cas léger',
    roles: ['partner', 'manager', 'recruiter'] as StakeholderRole[],
    tips: 'Ouvrir avec Volume Dix 4 piliers ; fermer avec question sur mandats 12 mois.',
  },
  {
    id: 'sc-client',
    title: 'Atelier client simulé',
    description: 'Présenter une recommandation en 5 min',
    roles: ['client', 'partner'] as StakeholderRole[],
    tips: '3 actions priorisées ; pas de jargon QCER ; citez CUSM ou Transplant si santé/public.',
  },
  {
    id: 'sc-debrief',
    title: 'Debrief manager post-mission',
    description: 'Feedback qualité livrable',
    roles: ['manager', 'colleague'] as StakeholderRole[],
    tips: 'Smartsheet comme exemple amélioration continue ; proposer template pour juniors.',
  },
]
