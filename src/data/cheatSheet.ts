export interface CaseStudyRef {
  title: string
  client?: string
  pillars: string[]
  summary: string
}

export const companyFacts = {
  names: ['VOLUME10', 'VolumE Dix', 'IdéesFx'],
  tagline: 'Donner de l\'espace aux idées',
  positioning:
    'Cabinet-conseil exécutif — décisions stratégiques avec dirigeants et comités (offre mai 2026 : 4 consultants, Vieux-Montréal, 100 % présentiel)',
  hiring2026: {
    roles: 4,
    title: 'Consultants exécutifs',
    deadline: '22 mai 2026',
    location: 'Vieux-Montréal, présentiel',
    languages: 'Français et anglais essentiels',
  },
  mission: 'Aborder vos défis différemment pour donner vie à des solutions intelligentes et durables',
  promise:
    'Un livrable à fort impact qui équipe pour l\'action concrète et mobilise l\'engagement des équipes et partenaires',
  manifesto:
    'Le monde change vite ; les problèmes sont nouveaux et complexes. Volume10 questionne des acteurs inhabituels, invente de nouveaux repères de réussite et provoque les idées dans un espace reinventé.',
  addresses: [
    '400, av. Atlantic, Outremont, QC H2V 1A5',
    '400-50, rue Queen, Montréal, QC H3C 2N5 (Intelligence)',
  ],
  contact: 'info@volume10.com',
}

export const servicePillars = [
  {
    name: 'Stratégie',
    items: [
      'Diagnostic interne, vision, objectifs',
      'Planification stratégique, retraites, ateliers',
      'Modèles d\'affaires et financiers, plans d\'affaires',
      'Conseil et coaching aux dirigeants',
    ],
  },
  {
    name: 'Innovation',
    items: [
      'Cadres d\'innovation et feuilles de route technologiques',
      'Gouvernance liée à l\'innovation et aux données',
      'Transformation d\'affaires et stratégie numérique',
      'Capacités organisationnelles et opérationnelles',
    ],
  },
  {
    name: 'Écosystème',
    items: [
      'Pensée systémique et cartographie',
      'Mobilisation des parties prenantes',
      'Appui au financement (pitch)',
    ],
  },
  {
    name: 'Intelligence',
    items: [
      'Analyses sectorielles, économiques, d\'impact',
      'Prospective et veille',
      'Publications Volume10 Intelligence',
    ],
  },
]

export const keySectors = [
  'Infrastructure et construction',
  'Santé numérique et connectée',
  'Technologie et ingénierie',
  'Énergie et mobilité',
  'Développement socioéconomique',
  'Savoir et éducation',
  'Ville et immobilier',
  'Culture et hospitalité',
]

export const flagshipCaseStudies: CaseStudyRef[] = [
  {
    title: 'Stratégie d\'innovation pour le CUSM (MUHC)',
    client: 'Centre universitaire de santé McGill',
    pillars: ['Innovation', 'Stratégie'],
    summary:
      'Vision innovation, étude comparative, équipe dédiée — modèle pour les hôpitaux du Québec.',
  },
  {
    title: 'Blocage minimum — Gestion innovante des chantiers',
    client: 'Chambre de commerce du Montréal métropolitain',
    pillars: ['Écosystème', 'Intelligence'],
    summary: 'Innovation en chantier ; milieu des affaires et mobilité urbaine.',
  },
  {
    title: 'Plan stratégique Transplant Québec 2023–2027',
    pillars: ['Stratégie'],
    summary: 'Planification stratégique pluriannuelle en santé.',
  },
  {
    title: 'Plan stratégique Place des Arts 2023–2027',
    pillars: ['Stratégie', 'Culture'],
    summary: 'Planification pour institution culturelle.',
  },
  {
    title: 'Plan directeur innovation CHU de Québec',
    pillars: ['Innovation', 'Santé'],
    summary: 'Feuille de route innovation hospitalière.',
  },
  {
    title: 'Propulsion Québec — grappe véhicules zéro émission',
    pillars: ['Stratégie', 'Énergie'],
    summary: 'Planification stratégique 2024–2027 cleantech.',
  },
  {
    title: 'La Table ronde — Gastronomie québécoise',
    pillars: ['Écosystème', 'Intelligence'],
    summary: 'Étude économique et propulsion du collectif (lancé par Volume10).',
  },
  {
    title: 'Le temps du retour — Travail en personne au Québec',
    pillars: ['Intelligence', 'Innovation'],
    summary: 'Productivité et innovation après la pandémie.',
  },
  {
    title: 'Quantique en tête',
    pillars: ['Intelligence', 'Stratégie'],
    summary: 'Leadership québécois en technologies quantiques.',
  },
  {
    title: 'Savoirs sans frontières',
    pillars: ['Intelligence', 'Éducation'],
    summary: 'Impact des étudiant·e·s internationaux au Québec.',
  },
]

export const interviewHooks = [
  '« Donner de l\'espace aux idées » — écouter, provoquer, livrer des résultats prêts à l\'action',
  'Analyse rigoureuse avant solution sur mesure + étude d\'impact après',
  'Boutique = accès aux associés, moins de bureaucratie, autonomie senior tôt',
  'Marché bilingue québécois — investir en français avec un plan daté',
  'VolumE Dix — des décisions qui tiennent la route',
]
