/** Offre Volume Dix — 4 postes consultants exécutifs (recrutement mai 2026) */

export const jobOfferMeta = {
  title: 'Consultants exécutifs',
  openings: 4,
  experienceLevels: 'Niveaux variés — minimum : études supérieures ou 2+ ans d’expérience',
  deadline: '2026-05-22',
  deadlineLabel: 'Vendredi 22 mai 2026',
  location: '100 % en présentiel — bureaux du Vieux-Montréal',
  languages: 'Français et anglais essentiels',
  compensation: 'Compétitive / supérieure au marché',
  confidentiality: 'Processus strictement confidentiel',
  clientGeography: 'Clients au Canada, part croissante en Europe',
} as const

export const jobOfferMission = {
  positioning:
    'Cabinet-conseil exécutif dédié aux décisions stratégiques — dirigeants et comités de direction',
  pillars: [
    'Vision',
    'Transformation',
    'Positionnement',
    'Alignement',
  ] as const,
  sectors: [
    'Deep tech',
    'Culture',
    'Éducation',
    'Services juridiques',
    'Génie',
    'Santé',
    'Industrie',
    'Institutions',
  ],
  deliverables: [
    'Clarifier une vision',
    'Arbitrer entre priorités concurrentes',
    'Transformer un modèle',
    'Structurer des projets complexes',
    'Études et pièces d’intelligence sur enjeux émergents',
    'Projets entrepreneuriaux sur mesure',
  ],
} as const

export const jobOfferResponsibilities = [
  'Travail direct avec les clients',
  'Recherche et analyse',
  'Animation d’ateliers et réunions',
  'Rédaction de livrables',
  'Contribution active à la croissance du cabinet',
] as const

export const jobOfferProfile = {
  environment:
    'Défis rapides, courbe d’apprentissage soutenue, sortir souvent de sa zone de confort',
  workWith: 'Dirigeants d’entreprise directement',
  culture: 'Performance, initiative et prise de risque encouragées',
  traits: [
    'Naviguer dans l’ambiguïté',
    'Grande curiosité intellectuelle',
    'Solide culture générale',
    'Excellentes capacités analytiques et quantitatives',
    'Très bonne communication écrite et orale',
  ],
  welcome:
    'Profils divergents et atypiques — sciences, économie, génie, sciences sociales quantitatives, ou toute formation démontrant rigueur, polyvalence et esprit analytique',
  selection:
    'Excellence académique + réalisations concrètes (initiative, leadership, esprit entrepreneurial)',
} as const

/** Exigence offre → preuves Dina (ids candidateProfile) */
export const jobOfferFitMap = [
  {
    requirement: 'Travail direct avec dirigeants / comités',
    dinaProof: 'QCER, livrables seniors, due diligence sponsoring, Assistwise conseil financier',
    proofPointIds: ['pp-qcer', 'pp-sponsorship-dd'],
    interviewLine:
      'Chez Deloitte je rédigeais des recommandations pour des managers et clients — je veux passer au dialogue dirigeant boutique Volume Dix.',
  },
  {
    requirement: 'Recherche, analyse, rédaction',
    dinaProof: 'ENCG GFC, Qlik/Excel, Python/R, Volume Dix Intelligence',
    proofPointIds: ['pp-ect-encg', 'pp-public-funding'],
    interviewLine:
      'Quantitatif : finance des groupes, dashboards. Qualitatif : QCER, due diligence, synthèses actionnables.',
  },
  {
    requirement: 'Animation / facilitation',
    dinaProof: 'Réunions 42 filiales, Smartsheet, Superprof',
    proofPointIds: ['pp-smartsheet', 'pp-42-matrix'],
    interviewLine:
      'La matrice a remplacé des débats flous par des ateliers structurés — même logique qu’un mandat vision ou transformation.',
  },
  {
    requirement: 'Ambiguïté et priorités concurrentes',
    dinaProof: '42 juridictions, interprétations locales vs centrale',
    proofPointIds: ['pp-42-matrix'],
    interviewLine:
      'Quand deux filiales interprètent la même règle différemment, je documente faits, risque et arbitrage — pas de slides génériques.',
  },
  {
    requirement: 'Initiative, leadership, entrepreneurial',
    dinaProof: 'Matrice + Smartsheet non demandés, Swikat, progression L1→QCER',
    proofPointIds: ['pp-smartsheet', 'pp-42-matrix', 'pp-swikat'],
    interviewLine:
      'Mon meilleur travail est né quand personne ne m’avait donné la permission — c’est le cœur de votre annonce.',
  },
  {
    requirement: 'Courbe d’apprentissage / zone de confort',
    dinaProof: 'Visio 24h, secteur public Belgique puis santé AML, relocalisation',
    proofPointIds: ['pp-visio-24h', 'pp-public-funding', 'pp-relocation'],
    interviewLine:
      'ECT → ENCG → Big Four → Grèce → Montréal : chaque étape était un saut, pas une ligne droite.',
  },
  {
    requirement: 'Français et anglais essentiels',
    dinaProof: 'Natif FR/AR, EN professionnel, clients FR/BE',
    proofPointIds: ['pp-teleperformance', 'pp-relocation'],
    interviewLine:
      'Français natif ; anglais sur mandats internationaux et livrables Deloitte — prête au bilinguisme Montréal dès J1.',
  },
  {
    requirement: '100 % présentiel Vieux-Montréal',
    dinaProof: 'Choix relocalisation, fin juillet, passation équipe',
    proofPointIds: ['pp-relocation'],
    interviewLine:
      'Je cherche précisément la proximité boutique — pas le télétravail d’un grand cabinet.',
  },
  {
    requirement: 'Contribution croissance cabinet',
    dinaProof: 'Outils réutilisables, onboarding recrues, playbooks',
    proofPointIds: ['pp-smartsheet', 'pp-qcer'],
    interviewLine:
      'Smartsheet et la matrice sont des actifs que le client réutilise — je veux en créer pour Volume Dix aussi.',
  },
  {
    requirement: 'Profil atypique bienvenu',
    dinaProof: 'Finance + compliance + centres d’appels + marketplace',
    proofPointIds: ['pp-swikat', 'pp-teleperformance', 'pp-qcer'],
    interviewLine:
      'Je ne suis pas une ligne McKinsey standard : ECT quanti, ENCG, audit, Deloitte, terrain client — polyvalence réelle.',
  },
] as const
