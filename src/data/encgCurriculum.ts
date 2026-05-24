/** Modules ENCG Marrakech — Gestion financière et comptable (S7–S10, spécialisation) */

export interface EncgModule {
  id: string
  semester: 7 | 8 | 9 | 10
  nameFr: string
  linkToInterview: string
}

export const encgModules: EncgModule[] = [
  {
    id: 'encg-s7-lc',
    semester: 7,
    nameFr: 'Langues et communication 6',
    linkToInterview:
      'Communication bilingue client Volume Dix — rapports et ateliers en français professionnel',
  },
  {
    id: 'encg-s7-oad',
    semester: 7,
    nameFr: 'Outils d’aide à la décision',
    linkToInterview:
      'Tableaux de bord Qlik/Excel chez Deloitte — appui décision dirigeants',
  },
  {
    id: 'encg-s7-tg2',
    semester: 7,
    nameFr: 'Techniques de gestion II',
    linkToInterview: 'Contrôle de gestion, variance — stage Al Barid Bank',
  },
  {
    id: 'encg-s7-mo6',
    semester: 7,
    nameFr: 'Management des organisations VI',
    linkToInterview: 'Gestion d’équipe projet, parties prenantes multi-filiales',
  },
  {
    id: 'encg-s8-fe',
    semester: 8,
    nameFr: 'Finance d’entreprise',
    linkToInterview:
      'Modélisation, valorisation — pont vers M&A et due diligence mentionnés en candidature',
  },
  {
    id: 'encg-s8-dpp',
    semester: 8,
    nameFr: 'Développement personnel et professionnel III',
    linkToInterview: 'Soft skills, présentation executive, culture consulting',
  },
  {
    id: 'encg-s9-intl',
    semester: 9,
    nameFr: 'Environnement international de l’entreprise',
    linkToInterview: '42 filiales, exigences locales, contexte Deloitte international',
  },
  {
    id: 'encg-s9-logiciels',
    semester: 9,
    nameFr: 'Logiciels de gestion',
    linkToInterview: 'Smartsheet, outils collaboratifs, digitalisation processus compliance',
  },
  {
    id: 'encg-s9-fg',
    semester: 9,
    nameFr: 'Finance des groupes',
    linkToInterview:
      'Consolidation, structure groupe — analogie directe mandat 42 affiliates',
  },
  {
    id: 'encg-s9-cf',
    semester: 9,
    nameFr: 'Comptabilité et finance',
    linkToInterview: 'IFRS, reporting — audits et QCER Deloitte',
  },
  {
    id: 'encg-s10-stage',
    semester: 10,
    nameFr: 'Stage de fin d’études (3 mois) + mémoire',
    linkToInterview:
      'Capacité à livrer un livrable structuré sous deadline — culture livraison client',
  },
]

export const encgEssentialIds = [
  'encg-s9-fg',
  'encg-s9-cf',
  'encg-s8-fe',
  'encg-s7-oad',
  'encg-s9-intl',
]
