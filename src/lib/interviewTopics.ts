import type { StakeholderRole } from '../data/types'

/** Thèmes d’entrevue — vocabulaire partagé questions ↔ cartes d’expertise */
export type InterviewTopic =
  | 'leadership'
  | 'failure'
  | 'conflict'
  | 'ethics'
  | 'deadline'
  | 'feedback'
  | 'teamwork'
  | 'innovation'
  | 'client-adoption'
  | 'affiliates-42'
  | 'compliance'
  | 'qcer-quality'
  | 'public-sector'
  | 'due-diligence'
  | 'healthcare'
  | 'pme-operations'
  | 'tools-adaptability'
  | 'relocation'
  | 'visa-immigration'
  | 'family-distance'
  | 'french-quebec'
  | 'remote-clients'
  | 'bilingual'
  | 'compensation'
  | 'boutique-fit'
  | 'volume-dix'
  | 'strategy'
  | 'positioning'
  | 'case-practical'
  | 'ai-innovation'
  | 'stress'
  | 'education-quant'
  | 'communication'
  | 'entrepreneurship'
  | 'banking'
  | 'mentoring'
  | 'deloitte-experience'
  | 'small-team'
  | 'presentiel'
  | 'sponsorship'
  | 'project-management'

export const topicLabelsFr: Record<InterviewTopic, string> = {
  leadership: 'leadership sans titre',
  failure: 'échec / apprentissage',
  conflict: 'conflit / résolution',
  ethics: 'éthique / intégrité',
  deadline: 'échéance / priorisation',
  feedback: 'rétroaction / évolution',
  teamwork: 'équipe / collaboration',
  innovation: 'innovation processus',
  'client-adoption': 'adoption client',
  'affiliates-42': '42 filiales / international',
  compliance: 'conformité / AML',
  'qcer-quality': 'qualité QCER',
  'public-sector': 'secteur public',
  'due-diligence': 'due diligence',
  healthcare: 'santé / réglementé',
  'pme-operations': 'PME / opérations',
  'tools-adaptability': 'outils / apprentissage rapide',
  relocation: 'relocalisation Montréal',
  'visa-immigration': 'visa / permis travail',
  'family-distance': 'famille / éloignement',
  'french-quebec': 'français québécois',
  'remote-clients': 'clients à distance',
  bilingual: 'bilinguisme EN/FR',
  compensation: 'rémunération',
  'boutique-fit': 'culture boutique',
  'volume-dix': 'Volume Dix / firme',
  strategy: 'stratégie',
  positioning: 'positionnement',
  'case-practical': 'cas pratique',
  'ai-innovation': 'IA / intelligence',
  stress: 'pression / stress',
  'education-quant': 'formation ENCG / quanti',
  communication: 'communication client',
  entrepreneurship: 'entrepreneuriat',
  banking: 'banque / finance',
  mentoring: 'mentorat / discipline',
  'deloitte-experience': 'expérience Deloitte',
  'small-team': 'petite équipe',
  presentiel: 'présentiel sur site',
  sponsorship: 'sponsoring / partenariats',
  'project-management': 'gestion de projet',
}

/** Mot-clé d’alignement réponse (addresses) → thèmes */
export const addressTopicMap: Record<string, InterviewTopic[]> = {
  dirigé: ['leadership', 'affiliates-42', 'project-management'],
  autorité: ['leadership'],
  formelle: ['leadership'],
  initiative: ['leadership', 'innovation', 'affiliates-42'],
  projet: ['failure', 'innovation', 'client-adoption'],
  raté: ['failure', 'innovation'],
  tiré: ['failure', 'feedback'],
  apprentissage: ['failure', 'feedback'],
  responsabilité: ['failure', 'ethics'],
  conflit: ['conflict', 'teamwork'],
  collègue: ['conflict', 'teamwork'],
  méthodologie: ['conflict', 'innovation'],
  résolution: ['conflict'],
  échéance: ['deadline', 'qcer-quality'],
  serrée: ['deadline', 'stress'],
  priorisé: ['deadline', 'project-management'],
  priorisation: ['deadline', 'project-management'],
  délai: ['deadline'],
  rétroaction: ['feedback', 'communication'],
  style: ['feedback', 'communication'],
  conseil: ['feedback', 'boutique-fit', 'volume-dix'],
  changement: ['feedback'],
  éthique: ['ethics', 'qcer-quality'],
  position: ['ethics'],
  principe: ['ethics'],
  situation: ['ethics', 'case-practical'],
  grèce: ['relocation'],
  montréal: ['relocation', 'presentiel', 'french-quebec'],
  présentiel: ['presentiel', 'relocation', 'boutique-fit'],
  'vieux-montréal': ['presentiel', 'relocation'],
  engagement: ['relocation', 'boutique-fit'],
  croire: ['relocation', 'boutique-fit'],
  autorisation: ['visa-immigration'],
  travail: ['visa-immigration'],
  canada: ['relocation', 'visa-immigration'],
  permis: ['visa-immigration', 'relocation'],
  eim: ['visa-immigration'],
  'entrée express': ['visa-immigration'],
  quitter: ['relocation'],
  boutique: ['boutique-fit', 'volume-dix', 'small-team'],
  famille: ['family-distance', 'relocation'],
  éloignement: ['family-distance'],
  soutien: ['family-distance'],
  'long terme': ['family-distance', 'relocation'],
  'nord-américains': ['remote-clients', 'bilingual'],
  distance: ['remote-clients'],
  preuves: ['remote-clients', 'deloitte-experience'],
  fuseaux: ['remote-clients', 'affiliates-42'],
  français: ['french-quebec', 'bilingual'],
  québécois: ['french-quebec'],
  bilingue: ['bilingual'],
  anglais: ['bilingual'],
  smartsheet: ['innovation', 'client-adoption'],
  matrice: ['affiliates-42', 'compliance'],
  filiales: ['affiliates-42'],
  qcer: ['qcer-quality', 'healthcare'],
  aml: ['compliance', 'healthcare'],
  santé: ['healthcare', 'compliance'],
  public: ['public-sector'],
  sponsoring: ['sponsorship', 'due-diligence'],
  diligence: ['due-diligence'],
  visio: ['tools-adaptability'],
  swikat: ['pme-operations', 'entrepreneurship'],
  salaire: ['compensation'],
  rémunération: ['compensation'],
  vendeur: ['client-adoption', 'boutique-fit'],
  suivi: ['client-adoption', 'project-management'],
  négocier: ['compensation'],
  accepter: ['compensation'],
  moins: ['compensation', 'relocation'],
  géographique: ['compensation', 'relocation'],
  ia: ['ai-innovation'],
  intelligence: ['ai-innovation'],
  volume: ['volume-dix'],
  idées: ['volume-dix', 'boutique-fit'],
  big: ['boutique-fit', 'deloitte-experience'],
  four: ['boutique-fit'],
  pragmatique: ['boutique-fit', 'case-practical'],
  encg: ['education-quant'],
  ect: ['education-quant'],
  quantitatif: ['education-quant'],
  stratégie: ['strategy', 'positioning'],
  positionnement: ['positioning', 'strategy'],
  mandat: ['case-practical', 'deloitte-experience'],
  secteur: ['case-practical', 'public-sector'],
}

/** Patterns dans le libellé de la question → thèmes (poids fort) */
export const questionLexicon: { pattern: RegExp; topics: InterviewTopic[]; weight: number }[] = [
  { pattern: /sans titre|diriger|leadership|initiative|pas assign/i, topics: ['leadership', 'affiliates-42'], weight: 3 },
  { pattern: /raté|échec|erreur|tiré|leçon|apprentissage/i, topics: ['failure', 'innovation'], weight: 3 },
  { pattern: /conflit|désaccord|tension|collègue|méthodologie/i, topics: ['conflict', 'teamwork'], weight: 3 },
  { pattern: /éthique|intégrité|principe|refus/i, topics: ['ethics', 'qcer-quality'], weight: 3 },
  { pattern: /échéance|délai|serré|prioris|urgence|pression/i, topics: ['deadline', 'stress', 'qcer-quality'], weight: 3 },
  { pattern: /rétroaction|feedback|style|changement/i, topics: ['feedback', 'communication'], weight: 3 },
  { pattern: /équipe|collabor|petite équipe|moins de 50/i, topics: ['teamwork', 'small-team'], weight: 2 },
  { pattern: /smartsheet|automatisation|outil|digital|innovation/i, topics: ['innovation', 'client-adoption'], weight: 2 },
  { pattern: /42 filiales|filiale|international|multi-pays|affili/i, topics: ['affiliates-42', 'compliance'], weight: 3 },
  { pattern: /qcer|qualité|aml|conformité|compliance/i, topics: ['qcer-quality', 'compliance', 'healthcare'], weight: 2 },
  { pattern: /secteur public|gouvernement|institution/i, topics: ['public-sector'], weight: 3 },
  { pattern: /due diligence|sponsoring|transaction/i, topics: ['due-diligence', 'sponsorship'], weight: 3 },
  { pattern: /santé|healthcare|hôpital|médical/i, topics: ['healthcare', 'compliance'], weight: 2 },
  { pattern: /pme|marketplace|swikat|entrepreneur/i, topics: ['pme-operations', 'entrepreneurship'], weight: 2 },
  { pattern: /visio|apprendre|24\s*h|outil inconnu/i, topics: ['tools-adaptability'], weight: 3 },
  { pattern: /relocalis|montréal|grèce|athènes|déménag|mobilité/i, topics: ['relocation'], weight: 3 },
  { pattern: /visa|permis|immigration|autorisation de travail|entrée express|eim/i, topics: ['visa-immigration'], weight: 3 },
  { pattern: /famille|éloignement|proche|parent/i, topics: ['family-distance'], weight: 3 },
  { pattern: /français|québécois|langue|bilingue|anglais/i, topics: ['french-quebec', 'bilingual'], weight: 3 },
  { pattern: /distance|fuseau|nord-américain|remote|à distance/i, topics: ['remote-clients', 'communication'], weight: 3 },
  { pattern: /salaire|rémunération|compensation|négoci/i, topics: ['compensation'], weight: 3 },
  { pattern: /volume\s*dix|volume10|donner de l'espace|boutique|idéesfx/i, topics: ['volume-dix', 'boutique-fit'], weight: 3 },
  { pattern: /big four|deloitte|grande firme/i, topics: ['deloitte-experience', 'boutique-fit'], weight: 2 },
  { pattern: /présentiel|sur site|vieux-montréal|bureau/i, topics: ['presentiel', 'relocation'], weight: 2 },
  { pattern: /ia\b|intelligence artificielle|agent/i, topics: ['ai-innovation'], weight: 3 },
  { pattern: /stratégie|positionnement|vision|transformation/i, topics: ['strategy', 'positioning'], weight: 2 },
  { pattern: /cas pratique|mandat|étude de cas|scénario/i, topics: ['case-practical'], weight: 2 },
  { pattern: /encg|ect|formation|master|quanti/i, topics: ['education-quant'], weight: 2 },
  { pattern: /service client|téléphone|appel|communication client/i, topics: ['communication'], weight: 2 },
  { pattern: /banque|al barid|contrôle de gestion/i, topics: ['banking', 'mentoring'], weight: 2 },
  { pattern: /stress|piège|curveball|pourquoi pas/i, topics: ['stress', 'boutique-fit'], weight: 2 },
]

/** Catégorie → thèmes faibles (seuls si rien d’autre ne matche) */
export const categoryTopicHints: Partial<Record<string, InterviewTopic[]>> = {
  'firm-culture': ['volume-dix', 'boutique-fit'],
  strategy: ['strategy', 'positioning'],
  innovation: ['innovation', 'ai-innovation'],
  ecosystem: ['affiliates-42', 'sponsorship'],
  intelligence: ['ai-innovation', 'due-diligence'],
  'case-style': ['case-practical', 'deloitte-experience'],
  sectors: ['public-sector', 'healthcare', 'pme-operations'],
  behavioral: ['leadership', 'teamwork'],
  relocation: ['relocation', 'presentiel'],
  'small-team': ['small-team', 'teamwork'],
  compensation: ['compensation'],
  curveball: ['stress', 'boutique-fit'],
}

/** Rôle interviewer → thèmes pour cartes stakeholder lab */
export const stakeholderTopicMap: Record<StakeholderRole, InterviewTopic[]> = {
  recruiter: ['relocation', 'boutique-fit', 'french-quebec', 'compensation', 'volume-dix'],
  partner: ['affiliates-42', 'qcer-quality', 'due-diligence', 'case-practical', 'client-adoption'],
  manager: ['project-management', 'deadline', 'teamwork', 'qcer-quality', 'innovation'],
  colleague: ['conflict', 'teamwork', 'innovation', 'feedback'],
  client: ['client-adoption', 'communication', 'boutique-fit', 'case-practical'],
  trainee: ['teamwork', 'feedback', 'tools-adaptability'],
  expertNetwork: ['due-diligence', 'ai-innovation'],
  publicSector: ['public-sector', 'case-practical', 'compliance'],
}

/** Thèmes incompatibles (pénalité si la question porte sur A mais la carte est surtout B) */
export const topicExclusions: Partial<Record<InterviewTopic, InterviewTopic[]>> = {
  relocation: ['pme-operations', 'entrepreneurship', 'banking'],
  'visa-immigration': ['pme-operations', 'entrepreneurship'],
  'family-distance': ['innovation', 'pme-operations', 'entrepreneurship'],
  compensation: ['affiliates-42', 'visa-immigration'],
  ethics: ['compensation', 'relocation'],
  failure: ['relocation', 'visa-immigration'],
}
