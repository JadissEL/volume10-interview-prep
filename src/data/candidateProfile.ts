/** Profil candidat Dina Bouabdallah — source de vérité pour réponses personnalisées */

export type ProofPointTag =
  | 'deloitte'
  | 'compliance'
  | '42-affiliates'
  | 'smartsheet'
  | 'healthcare'
  | 'public-sector'
  | 'due-diligence'
  | 'qcer'
  | 'project-management'
  | 'tools'
  | 'encg'
  | 'morocco'
  | 'relocation'
  | 'client-service'
  | 'entrepreneurship'
  | 'audit'
  | 'ai'
  | 'consulting'

export interface ProofPoint {
  id: string
  label: string
  tags: ProofPointTag[]
  whenToUse: string
}

export const candidateProfile = {
  identity: {
    name: 'Dina Bouabdallah',
    age: 26,
    citizenship: 'Marocaine',
    currentLocation: 'Athènes, Grèce',
    trajectory: 'Taza → prépa ECT Fès → ENCG Marrakech → Casablanca → Thessaloniki / Athènes',
  },

  education: {
    master: {
      school: 'ENCG Marrakech',
      degree: 'Master Gestion financière et comptable (FMA)',
      period: 'Oct 2020 – Juin 2023',
    },
    prepa: {
      school: 'Lycée Moulay Idriss, Fès',
      track: 'Classes préparatoires ECT (économie, maths quantitatives)',
      period: '2018 – 2020',
    },
  },

  deloitte: {
    totalMonths: 24,
    roles: [
      {
        title: 'Financial Analyst',
        team: 'Belgique',
        duration: '6 mois',
        focus:
          'Secteur public — investissement dans la formation continue, audits de contrôles financiers, financement gouvernemental',
      },
      {
        title: 'Consultant → QCER (Quality Control Evaluator)',
        team: 'Suisse / international',
        duration: '18 mois',
        focus:
          'Compliance monitoring, QCER, gestion de projet, AML santé — client mondial leader, 42 filiales',
      },
    ],
    highlights: [
      'Matrice centrale de conformité par pays (42 filiales) — référence utilisée par le client',
      'Configuration Smartsheet pour automatiser échanges sur centaines d’échantillons mensuels',
      'Compliance application mobile clients individuels (physiothérapie)',
      'Due diligence offres de sponsoring',
      'Tests scripts Python et R ; cartographie Visio',
      'Progression Consultant L1 → L3 ; formation et onboarding des recrues',
      'Gestion de projet avec manager : planning, forecasting, parties prenantes',
    ],
  },

  otherExperience: [
    {
      org: 'Teleperformance',
      role: 'Service client automobile',
      market: 'France, Belgique',
      type: 'centre d’appels',
    },
    {
      org: 'Teleperformance / centres d’appels Maroc',
      role: 'Vente télécom',
      duration: '9 mois total',
      market: 'France',
    },
    {
      org: 'Assistwise',
      role: 'Conseillère produits financiers',
      market: 'Moyen-Orient',
      period: 'Mai – Juin 2024',
    },
    {
      org: 'Al Barid Bank',
      role: 'Stage contrôle de gestion',
      duration: '6 mois',
      location: 'Casablanca',
      note: 'Mentor — discipline, résilience, pression structurée',
    },
    {
      org: 'Swikat Craft',
      role: 'Marketplace artisanat Maroc',
      duration: '6 mois',
      tasks: 'Flux de trésorerie, audit livraisons, minimisation des coûts',
    },
    {
      org: 'Cabinet commissariat aux comptes',
      role: 'Stage audit',
      duration: '3 mois',
      sectors: 'Tourisme, hospitalité, associations',
      tasks: 'Audit financier, comptabilité, rapports d’audit',
    },
    {
      org: 'Cabinet comptable',
      role: 'Stage observation',
      duration: '1 mois',
    },
    {
      org: 'Superprof',
      role: 'Formatrice sciences financières',
      since: 'Juil 2023',
      topics: 'Modélisation financière, économétrie, marchés de capitaux',
    },
  ],

  motivationVolumeDix: {
    jobOfferAlignment:
      '4 postes consultants exécutifs — vision, transformation, positionnement, alignement ; 100 % présentiel Vieux-Montréal ; FR+EN essentiels',
    whyBoutique:
      'Responsabilités rapides : clients, recherche, analyse, animation, rédaction, croissance cabinet — courbe d’apprentissage soutenue',
    pragmatism:
      'Passage conformité Deloitte → recommandations ultra-pragmatiques pour dirigeants (exigence explicite de l’offre et de ma candidature)',
    mobility:
      'Relocalisation Grèce → Montréal : présentiel, mobilité professionnelle, clients Canada + Europe',
    atypicalProfile:
      'Profil divergent bienvenu : ECT quanti, ENCG GFC, audit, compliance santé 42 filiales, marketplace Swikat — rigueur + polyvalence',
    book: 'The Compound Effect — petites actions rigoureuses → transformation durable (question candidature Volume Dix)',
  },

  applicationAnswers: {
    services:
      'Quatre piliers : vision, transformation, architecture de positionnement, alignement stratégique — secteurs industriels à institutionnels',
    proudProject:
      'Matrice conformité 42 filiales + Smartsheet — impact humain et technique, processus fluide pour équipe et client',
    quantitative:
      'Données financières, tableaux de bord Excel/Qlik ; qualitatif QCER, audit processus, recommandations',
    book: 'The Compound Effect',
    adaptation:
      'Théorie/processus Deloitte → recommandations ultra-pragmatiques dirigeants Volume Dix',
    closing:
      'Pragmatisme, mobilité, énergie, relation de confiance durable, valeur pour clients',
  },

  coverLetterHighlights: [
    'Parcours Taza → Fès → Marrakech → Casablanca → Grèce',
    'Visio maîtrisé en 24h sur demande manager',
    'Mentor Al Barid Bank — discipline et résilience',
    'Intrapreneuriat Deloitte : initiatives → gestion projet santé mondial, équipe de 6',
    'Départ prévu fin juillet — passation et formation remplaçants',
    '30+ mois attente permis Grèce — contrainte mobilité',
  ],

  consultingLiteracy: [
    'Réseaux d’experts — mobilisation directe ou via expert networks',
    'Recherche verticale (secteur) et horizontale (fonctions, benchmarks)',
    'Cross-selling / up-selling ; pure play vs multi-practice',
    'Agents IA avancés ; conception de solutions technologiques si besoin',
    'Jamais en retard ; livraison à l’heure pour le client',
  ],

  certifications: [
    'Lean Six Sigma Yellow Belt',
    'Business Analytics — Prescriptive Analytics',
    'Qlik Sense',
    'Audit & Due Diligence Foundations',
    'Advanced Visio',
  ],

  languages: {
    french: 'Natif',
    arabic: 'Natif',
    english: 'Professionnel complet',
  },
} as const

export const proofPoints: ProofPoint[] = [
  {
    id: 'pp-42-matrix',
    label: 'Matrice conformité 42 filiales',
    tags: ['deloitte', 'compliance', '42-affiliates'],
    whenToUse: 'Initiative, impact client, coordination internationale, rigueur',
  },
  {
    id: 'pp-smartsheet',
    label: 'Automatisation Smartsheet',
    tags: ['deloitte', 'smartsheet', 'compliance', 'project-management'],
    whenToUse: 'Innovation processus, proactivité, gestion volume d’échantillons',
  },
  {
    id: 'pp-qcer',
    label: 'Nomination QCER',
    tags: ['deloitte', 'qcer', 'healthcare'],
    whenToUse: 'Qualité, leadership technique, standards réglementaires',
  },
  {
    id: 'pp-public-funding',
    label: 'Analyste finance — formation continue secteur public (Belgique)',
    tags: ['deloitte', 'public-sector'],
    whenToUse: 'Secteur public, financement, contrôles multi-millions €',
  },
  {
    id: 'pp-sponsorship-dd',
    label: 'Due diligence offres sponsoring',
    tags: ['due-diligence', 'compliance'],
    whenToUse: 'Risque, transactions, diligence qualitative',
  },
  {
    id: 'pp-visio-24h',
    label: 'Visio maîtrisé en 24h',
    tags: ['tools', 'deloitte'],
    whenToUse: 'Apprentissage rapide, adaptabilité',
  },
  {
    id: 'pp-swikat',
    label: 'Swikat Craft — trésorerie et coûts',
    tags: ['entrepreneurship', 'audit'],
    whenToUse: 'PME, opérations, marketplace, pragmatisme',
  },
  {
    id: 'pp-albarid',
    label: 'Al Barid Bank — contrôle de gestion',
    tags: ['encg', 'audit', 'morocco'],
    whenToUse: 'Banque régulée, reporting, mentorat',
  },
  {
    id: 'pp-teleperformance',
    label: 'Centres d’appels — service & vente FR/BE',
    tags: ['client-service'],
    whenToUse: 'Communication client, marché francophone, résistance au stress',
  },
  {
    id: 'pp-ect-encg',
    label: 'ECT + ENCG GFC',
    tags: ['encg', 'morocco'],
    whenToUse: 'Fondation quantitative et finance d’entreprise',
  },
  {
    id: 'pp-relocation',
    label: 'Grèce → Montréal — mobilité et français',
    tags: ['relocation'],
    whenToUse: 'Présence sur site, visa, plan français 6 mois',
  },
  {
    id: 'pp-ai',
    label: 'Agents IA et solutions technologiques',
    tags: ['ai', 'consulting'],
    whenToUse: 'Innovation, efficacité livrables, différenciation',
  },
]

export function getProofPoint(id: string): ProofPoint | undefined {
  return proofPoints.find((p) => p.id === id)
}
