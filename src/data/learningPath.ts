import type { LearningPhase } from './types'

export const learningPhases: LearningPhase[] = [
  {
    id: 'phase-1',
    dayRange: 'Jours 1–2',
    title: 'Connaître la firme',
    focus: 'Marque, modèle boutique, Québec bilingue, rebrand VolumE Dix',
    categoryIds: ['firm-culture'],
    questionIds: ['q001', 'q002', 'q003', 'q004', 'q005', 'q006', 'q007', 'q008', 'q009', 'q010'],
  },
  {
    id: 'phase-2',
    dayRange: 'Jours 3–4',
    title: 'Les quatre piliers',
    focus: 'Stratégie, Innovation, Écosystème, Intelligence',
    categoryIds: ['strategy', 'innovation', 'ecosystem', 'intelligence'],
    questionIds: [],
  },
  {
    id: 'phase-3',
    dayRange: 'Jours 5–6',
    title: 'Études de cas et secteurs',
    focus: 'Portefeuille, MUHC, secteur public, huit secteurs',
    categoryIds: ['case-style', 'sectors'],
    questionIds: [],
  },
  {
    id: 'phase-4',
    dayRange: 'Jour 7',
    title: 'Votre histoire (STAR)',
    focus: 'Comportementales avec métriques',
    categoryIds: ['behavioral'],
    questionIds: [],
  },
  {
    id: 'phase-5',
    dayRange: 'Jours 8–9',
    title: 'Grèce → Montréal sur place',
    focus: 'Visa, engagement, plan français, attentes hybrides',
    categoryIds: ['relocation'],
    questionIds: [],
  },
  {
    id: 'phase-6',
    dayRange: 'Jour 10',
    title: 'Opérateur boutique',
    focus: 'Petite équipe, rémunération, questions pièges',
    categoryIds: ['small-team', 'compensation', 'curveball'],
    questionIds: [],
  },
]
