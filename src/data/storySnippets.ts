import type { CategoryId } from './types'
import type { ProofPointTag } from './candidateProfile'
import { defaultStarStories } from './defaults'
import type { InterviewTopic } from '../lib/interviewTopics'

export type StorySnippetKind = 'star' | 'proof' | 'encg' | 'edge' | 'fragment'

export interface StorySnippetCard {
  id: string
  kind: StorySnippetKind
  title: string
  oralLine: string
  oralLineEn?: string
  detail?: string
  suggestedFollowUps?: string[]
  tags: ProofPointTag[]
  /** Thèmes d’entrevue pour le moteur de pertinence */
  topics: InterviewTopic[]
  keywords: string[]
  categoryIds?: CategoryId[]
  proofPointId?: string
  /** Histoire STAR parente (fragments) */
  parentStarId?: string
}

const proofCards: StorySnippetCard[] = [
  {
    id: 'card-pp-42-matrix',
    kind: 'proof',
    title: 'Matrice conformité — 42 filiales',
    oralLine:
      'J’ai cartographié les exigences par pays dans une matrice unique — le client l’utilise encore comme référentiel entre centrale et filiales.',
    detail:
      'Initiative non demandée · langage commun pour arbitrer les écarts · réunions plus courtes et factuelles.',
    tags: ['deloitte', 'compliance', '42-affiliates'],
    topics: ['affiliates-42', 'compliance', 'leadership', 'client-adoption', 'project-management'],
    keywords: ['matrice', 'filiales', '42', 'conformité', 'pays', 'référentiel', 'international'],
    categoryIds: ['behavioral', 'ecosystem', 'innovation', 'firm-culture'],
    proofPointId: 'pp-42-matrix',
  },
  {
    id: 'card-pp-smartsheet',
    kind: 'proof',
    title: 'Smartsheet — automatisation',
    oralLine:
      'J’ai configuré Smartsheet pour des centaines d’échantillons mensuels — l’équipe et le client ont adopté l’outil au-delà de ma mission initiale.',
    detail: 'Innovation processus · réduction des allers-retours manuels · livraison à l’heure.',
    tags: ['deloitte', 'smartsheet', 'compliance', 'project-management'],
    topics: ['innovation', 'client-adoption', 'compliance', 'project-management', 'failure'],
    keywords: ['smartsheet', 'automatisation', 'échantillons', 'workflow', 'excel', 'processus'],
    categoryIds: ['behavioral', 'innovation', 'small-team'],
    proofPointId: 'pp-smartsheet',
  },
  {
    id: 'card-pp-qcer',
    kind: 'proof',
    title: 'QCER — qualité & leadership',
    oralLine:
      'Nommée QCER sur un mandat santé : je garantis la qualité des livrables et je co-gère un projet à six avec le manager.',
    detail: 'L1 → L3 en 18 mois · revues qualité · standards réglementaires.',
    tags: ['deloitte', 'qcer', 'healthcare'],
    topics: ['qcer-quality', 'healthcare', 'compliance', 'ethics', 'deadline', 'teamwork', 'small-team'],
    keywords: ['qcer', 'qualité', 'aml', 'santé', 'réglementaire', 'revue', 'échantillon'],
    categoryIds: ['behavioral', 'small-team', 'sectors'],
    proofPointId: 'pp-qcer',
  },
  {
    id: 'card-pp-public-funding',
    kind: 'proof',
    title: 'Secteur public Belgique',
    oralLine:
      'Six mois analyste finance sur la formation continue secteur public : contrôles multi-millions €, reddition claire pour instances.',
    detail: 'Pont avec mandats publics québécois · rigueur financière · parties prenantes institutionnelles.',
    tags: ['deloitte', 'public-sector'],
    topics: ['public-sector', 'case-practical', 'deloitte-experience', 'strategy'],
    keywords: ['secteur public', 'belgique', 'financement', 'formation continue', 'institution', 'gouvernement'],
    categoryIds: ['strategy', 'sectors', 'case-style', 'intelligence'],
    proofPointId: 'pp-public-funding',
  },
  {
    id: 'card-pp-sponsorship-dd',
    kind: 'proof',
    title: 'Due diligence sponsoring',
    oralLine:
      'Due diligence sur offres de sponsoring : j’évalue risque réputationnel et alignement avant qu’un dirigeant s’engage.',
    detail: 'Diligence qualitative · synthèse pour seniors · transactions et partenariats.',
    tags: ['due-diligence', 'compliance'],
    topics: ['due-diligence', 'sponsorship', 'case-practical', 'ethics'],
    keywords: ['sponsoring', 'due diligence', 'risque', 'réputation', 'partenariat', 'transaction'],
    categoryIds: ['intelligence', 'ecosystem', 'strategy'],
    proofPointId: 'pp-sponsorship-dd',
  },
  {
    id: 'card-pp-visio-24h',
    kind: 'proof',
    title: 'Visio en 24 h',
    oralLine:
      'On m’a demandé Visio pour le lendemain — outil inconnu. J’ai livré le matin suivant une cartographie processus validée.',
    detail: 'Zone de confort élargie · apprentissage rapide · livrable executive-ready.',
    tags: ['tools', 'deloitte'],
    topics: ['tools-adaptability', 'deadline', 'stress'],
    keywords: ['visio', '24h', 'apprentissage', 'outil', 'cartographie', 'lendemain'],
    categoryIds: ['behavioral', 'innovation', 'small-team'],
    proofPointId: 'pp-visio-24h',
  },
  {
    id: 'card-pp-swikat',
    kind: 'proof',
    title: 'Swikat Craft — PME',
    oralLine:
      'Sur une marketplace artisanat : flux de trésorerie, audit livraisons, minimisation des coûts — pragmatisme opérationnel.',
    detail: 'Esprit entrepreneurial · PME · résultat concret lundi matin.',
    tags: ['entrepreneurship', 'audit'],
    topics: ['pme-operations', 'entrepreneurship', 'case-practical'],
    keywords: ['swikat', 'marketplace', 'pme', 'trésorerie', 'artisanat', 'coûts'],
    categoryIds: ['sectors', 'innovation', 'compensation'],
    proofPointId: 'pp-swikat',
  },
  {
    id: 'card-pp-albarid',
    kind: 'proof',
    title: 'Al Barid Bank',
    oralLine:
      'Stage contrôle de gestion six mois : reporting régulé, discipline sous pression — mentorat qui structure encore ma rigueur.',
    detail: 'Banque · variance · résilience.',
    tags: ['encg', 'audit', 'morocco'],
    topics: ['banking', 'mentoring', 'education-quant', 'stress'],
    keywords: ['al barid', 'banque', 'contrôle de gestion', 'mentor', 'reporting'],
    categoryIds: ['strategy', 'sectors'],
    proofPointId: 'pp-albarid',
  },
  {
    id: 'card-pp-teleperformance',
    kind: 'proof',
    title: 'Service client FR/BE',
    oralLine:
      'Centres d’appels France et Belgique : écoute, gestion de conflit, bilinguisme opérationnel avant Deloitte.',
    detail: 'Communication client · marché francophone · résistance au stress.',
    tags: ['client-service'],
    topics: ['communication', 'remote-clients', 'bilingual', 'conflict', 'stress'],
    keywords: ['teleperformance', 'appel', 'client', 'france', 'belgique', 'conflit', 'distance'],
    categoryIds: ['firm-culture', 'relocation', 'behavioral'],
    proofPointId: 'pp-teleperformance',
  },
  {
    id: 'card-pp-ect-encg',
    kind: 'proof',
    title: 'ECT + ENCG GFC',
    oralLine:
      'ECT Fès puis ENCG finance d’entreprise et finance des groupes : fondation quantitative pour modèles et tableaux de bord.',
    detail: 'Excellence académique · binôme quanti-quali en entrevue.',
    tags: ['encg', 'morocco'],
    topics: ['education-quant', 'strategy', 'feedback'],
    keywords: ['encg', 'ect', 'finance des groupes', 'modélisation', 'quanti', 'master'],
    categoryIds: ['strategy', 'intelligence', 'firm-culture'],
    proofPointId: 'pp-ect-encg',
  },
  {
    id: 'card-pp-relocation',
    kind: 'proof',
    title: 'Grèce → Montréal',
    oralLine:
      'Relocalisation volontaire fin juillet : présentiel Vieux-Montréal, passation Deloitte, français natif et plan québécois six mois.',
    detail: '30+ mois permis Grèce · engagement long terme · pas plan B Toronto.',
    tags: ['relocation'],
    topics: ['relocation', 'presentiel', 'visa-immigration', 'french-quebec', 'boutique-fit'],
    keywords: ['montréal', 'grèce', 'relocalisation', 'présentiel', 'vieux-montréal', 'juillet', 'permis'],
    categoryIds: ['relocation', 'firm-culture', 'curveball'],
    proofPointId: 'pp-relocation',
  },
  {
    id: 'card-pp-ai',
    kind: 'proof',
    title: 'Agents IA — recherche',
    oralLine:
      'J’utilise des agents IA pour accélérer recherche verticale et synthèse — toujours validés humainement avant livrable client.',
    detail: 'Volume Dix Intelligence · gain de temps pour réflexion stratégique.',
    tags: ['ai', 'consulting'],
    topics: ['ai-innovation', 'innovation'],
    keywords: ['ia', 'agent', 'recherche', 'synthèse', 'intelligence'],
    categoryIds: ['intelligence', 'innovation'],
    proofPointId: 'pp-ai',
  },
]

/** Extraits ciblés — morceaux d’histoire plus précis qu’une carte preuve générique */
const fragmentCards: StorySnippetCard[] = [
  {
    id: 'frag-leadership-matrix',
    kind: 'fragment',
    title: 'Leadership — matrice sans mandat formel',
    oralLine:
      'Personne ne m’avait nommée chef de projet : j’ai quand même livré la matrice 42 filiales et fait adopter Smartsheet — leadership par les faits.',
    detail: 'Angle q061 · initiative non assignée.',
    tags: ['42-affiliates', 'smartsheet'],
    topics: ['leadership', 'affiliates-42', 'innovation'],
    keywords: ['dirigé', 'autorité', 'initiative', 'sans titre'],
    parentStarId: 'star-1',
  },
  {
    id: 'frag-smartsheet-failure',
    kind: 'fragment',
    title: 'Échec Smartsheet — trop complexe au départ',
    oralLine:
      'Première version trop lourde : j’ai interviewé trois utilisateurs, simplifié (statut, owner, échéance), pilote puis déploiement — adoption réelle.',
    detail: 'Angle q062 · responsabilité + co-conception.',
    tags: ['smartsheet'],
    topics: ['failure', 'innovation', 'client-adoption', 'feedback'],
    keywords: ['raté', 'projet', 'apprentissage', 'erreur', 'complexe'],
    parentStarId: 'star-1',
  },
  {
    id: 'frag-conflict-excel-smartsheet',
    kind: 'fragment',
    title: 'Conflit méthode — Excel vs Smartsheet',
    oralLine:
      'Collègue senior voulait Excel ; j’ai proposé un atelier chiffré (temps, erreurs, traçabilité QCER) puis hybride court terme + bascule progressive.',
    detail: 'Angle q063 · conflit sur la méthode, pas la personne.',
    tags: ['smartsheet', 'qcer'],
    topics: ['conflict', 'innovation', 'teamwork', 'qcer-quality'],
    keywords: ['conflit', 'collègue', 'méthodologie', 'excel'],
    parentStarId: 'star-1',
  },
  {
    id: 'frag-deadline-qcer',
    kind: 'fragment',
    title: 'Échéance — priorisation impact QCER',
    oralLine:
      'Clôture mensuelle : matrice impact/effort, risques réglementaires d’abord, Smartsheet pour le faible risque, alerte client J-3.',
    detail: 'Angle q064 · transparence, pas héroïsme silencieux.',
    tags: ['qcer', 'smartsheet'],
    topics: ['deadline', 'qcer-quality', 'stress', 'project-management'],
    keywords: ['échéance', 'serrée', 'priorisé', 'délai'],
    parentStarId: 'star-2',
  },
  {
    id: 'frag-feedback-executive-summary',
    kind: 'fragment',
    title: 'Rétroaction — synthèse exécutive en 3 lignes',
    oralLine:
      'Manager : « excellente matrice, mais le partner veut une décision en trois lignes » — j’ai ajouté décision / prochaine étape / risque résiduel avant l’annexe.',
    detail: 'Angle q065 · style conseil québécois.',
    tags: ['encg'],
    topics: ['feedback', 'communication', 'boutique-fit'],
    keywords: ['rétroaction', 'style', 'conseil', 'changement'],
    parentStarId: 'star-2',
  },
  {
    id: 'frag-ethics-qcer-signoff',
    kind: 'fragment',
    title: 'Éthique — refus de signer sans preuve',
    oralLine:
      'Pression pour clôturer : j’ai refusé de valider sans pièce, documenté l’écart, proposé délai 48h ou exception manager — preuve obtenue.',
    detail: 'Angle q066 · intégrité QCER.',
    tags: ['qcer'],
    topics: ['ethics', 'qcer-quality', 'compliance'],
    keywords: ['éthique', 'principe', 'refus', 'intégrité'],
    parentStarId: 'star-2',
  },
  {
    id: 'frag-remote-smartsheet-trace',
    kind: 'fragment',
    title: 'Clients à distance — traçabilité Smartsheet',
    oralLine:
      'Mandat 42 filiales multi-fuseaux : comptes-rendus écrits, ordre du jour partagé, décisions tracées dans Smartsheet — pas de « deux vérités ».',
    detail: 'Angle q075 · preuve collaboration NA/EU.',
    tags: ['42-affiliates', 'smartsheet'],
    topics: ['remote-clients', 'affiliates-42', 'communication', 'project-management'],
    keywords: ['distance', 'fuseaux', 'nord-américains', 'preuves'],
    parentStarId: 'star-1',
  },
  {
    id: 'frag-family-plan',
    kind: 'fragment',
    title: 'Famille — plan explicite, pas « on verra »',
    oralLine:
      'Conversations franches avant départ, visites planifiées, visio hebdo — Montréal = long terme, pas stopover visa.',
    detail: 'Angle q074 · stabilité personnelle.',
    tags: ['relocation'],
    topics: ['family-distance', 'relocation'],
    keywords: ['famille', 'éloignement', 'soutien', 'long terme'],
  },
  {
    id: 'frag-visa-transparency',
    kind: 'fragment',
    title: 'Visa — transparence sans bluffer un délai',
    oralLine:
      'Citoyenne marocaine : Entrée express / EIM employeur selon vos RH — documents prêts, flexibilité date réaliste, zéro promesse fausse après 30 mois en Grèce.',
    detail: 'Angle q072 · honnêteté immigration.',
    tags: ['relocation'],
    topics: ['visa-immigration', 'relocation'],
    keywords: ['permis', 'autorisation', 'canada', 'eim', 'visa'],
  },
  {
    id: 'frag-french-6mo-plan',
    kind: 'fragment',
    title: 'Français — plan 6 mois registre conseil',
    oralLine:
      'Français maternel ; registre « conseil exécutif québécois » en progression — lectures Volume Dix, simulations ateliers, feedback synthèses 3 lignes.',
    detail: 'Angle q076 · pas de prétention C2 cabinet J1.',
    tags: ['relocation'],
    topics: ['french-quebec', 'bilingual', 'communication'],
    keywords: ['français', 'québécois', '6 mois', 'registre'],
    oralLineEn:
      'Native French; Quebec executive register in progress — Volume Dix readings, workshop drills, feedback on 3-line summaries.',
  },
  {
    id: 'frag-strategy-executive-summary',
    kind: 'fragment',
    title: 'Stratégie — décision en 3 lignes + annexe',
    oralLine:
      'Avant toute annexe : décision recommandée, prochaine étape, risque résiduel — puis la profondeur ENCG/Deloitte en support.',
    tags: ['encg'],
    topics: ['strategy', 'feedback', 'positioning'],
    keywords: ['stratégie', 'pilotage', 'retraite', 'dossier', 'pdg'],
  },
  {
    id: 'frag-positioning-pragmatic',
    kind: 'fragment',
    title: 'Positionnement — pragmatisme dirigeant',
    oralLine:
      'Chez Deloitte j’ai appris la rigueur ; chez Volume Dix je livre ce que le dirigeant peut exécuter lundi — pas un rapport pour la bibliothèque.',
    tags: ['consulting'],
    topics: ['positioning', 'boutique-fit', 'case-practical'],
    keywords: ['pragmatique', 'dirigeant', 'transformation', 'positionnement'],
  },
  {
    id: 'frag-sponsorship-dd-risk',
    kind: 'fragment',
    title: 'Sponsoring — risque réputationnel avant signature',
    oralLine:
      'Due diligence sponsoring : je bloque ou j’alerte avant qu’un dirigeant s’engage — alignement valeurs et réputation, pas seulement le montant.',
    tags: ['due-diligence'],
    topics: ['sponsorship', 'due-diligence', 'ethics'],
    keywords: ['sponsoring', 'partenariat', 'écosystème', 'risque'],
    proofPointId: 'pp-sponsorship-dd',
  },
  {
    id: 'frag-public-sector-belgium',
    kind: 'fragment',
    title: 'Secteur public — contrôles multi-millions',
    oralLine:
      'Belgique, formation continue : contrôles sur financements publics, reddition claire — même discipline que mandats institutionnels québécois.',
    tags: ['public-sector'],
    topics: ['public-sector', 'case-practical'],
    keywords: ['secteur public', 'institution', 'gouvernement', 'éducation'],
    proofPointId: 'pp-public-funding',
  },
  {
    id: 'frag-healthcare-aml',
    kind: 'fragment',
    title: 'Santé — AML et 42 filiales',
    oralLine:
      'Client santé mondial : AML, 42 filiales, QCER — je connais la pression réglementaire et la coordination centrale/filiales.',
    tags: ['healthcare', 'compliance'],
    topics: ['healthcare', 'compliance', 'affiliates-42'],
    keywords: ['santé', 'hôpital', 'aml', 'réglementaire', 'numérique'],
  },
  {
    id: 'frag-compound-effect',
    kind: 'fragment',
    title: 'The Compound Effect — micro-disciplines',
    oralLine:
      'Smartsheet n’était pas une révolution unique : rituel mensuel mieux outillé, effet composé sur 18 mois — comme le livre que j’ai cité en candidature.',
    tags: ['smartsheet'],
    topics: ['boutique-fit', 'innovation', 'feedback'],
    keywords: ['livre', 'compound', 'recommand', 'équipe'],
  },
  {
    id: 'frag-boutique-vs-big4',
    kind: 'fragment',
    title: 'Boutique vs Big Four',
    oralLine:
      'Deloitte m’a formée ; Volume Dix me donne le mandat client, la recherche et la ligne directe avec les dirigeants — pas le bench.',
    tags: ['deloitte', 'consulting'],
    topics: ['boutique-fit', 'volume-dix', 'deloitte-experience'],
    keywords: ['boutique', 'big four', 'mckinsey', 'accenture', 'deloitte'],
  },
  {
    id: 'frag-volume-dix-signature',
    kind: 'fragment',
    title: 'Signature — donner de l’espace aux idées',
    oralLine:
      'La matrice 42 filiales, c’est « donner de l’espace » : une structure où des idées différentes par pays peuvent coexister sans chaos.',
    tags: ['42-affiliates'],
    topics: ['volume-dix', 'boutique-fit', 'affiliates-42'],
    keywords: ['espace', 'idées', 'volume', 'signature', 'idéesfx'],
  },
  {
    id: 'frag-ai-research',
    kind: 'fragment',
    title: 'IA — recherche validée humainement',
    oralLine:
      'Agents IA pour recherche verticale et synthèse — toujours relu et validé avant livrable client ; Volume Dix Intelligence, pas gadget.',
    tags: ['ai'],
    topics: ['ai-innovation', 'innovation'],
    keywords: ['ia', 'agent', 'intelligence', 'recherche'],
    proofPointId: 'pp-ai',
  },
  {
    id: 'frag-small-team-six',
    kind: 'fragment',
    title: 'Petite équipe — projet à six',
    oralLine:
      'QCER + co-gestion d’un mandat santé à six avec le manager : visibilité totale, pas de silo — modèle boutique <50 personnes.',
    tags: ['qcer'],
    topics: ['small-team', 'teamwork', 'project-management'],
    keywords: ['petite équipe', 'moins de 50', 'équipe', 'six'],
  },
  {
    id: 'frag-compensation-motivation',
    kind: 'fragment',
    title: 'Rémunération — motivation long terme',
    oralLine:
      'Je négocie pour contribuer sur 3–5 ans : relocalisation planifiée, présentiel, secteurs où je crée de la valeur — pas un saut opportuniste.',
    tags: ['relocation'],
    topics: ['compensation', 'relocation', 'boutique-fit'],
    keywords: ['salaire', 'rémunération', 'compensation', 'négoci'],
  },
  {
    id: 'frag-case-pragmatic-deliverable',
    kind: 'fragment',
    title: 'Cas pratique — livrable actionnable',
    oralLine:
      'Chaque mandat : une décision claire, des owners, des échéances — même sur un cas 90 minutes, je sors un next step testable.',
    tags: ['deloitte'],
    topics: ['case-practical', 'boutique-fit'],
    keywords: ['cas', 'mandat', 'scénario', 'atelier'],
  },
  {
    id: 'frag-ecosystem-ideefx',
    kind: 'fragment',
    title: 'Écosystème IdéesFx',
    oralLine:
      'Volume Dix + IdéesFx : conseil exécutif + créatif — ma due diligence sponsoring montre que j’évalue les partenariats avant engagement.',
    tags: ['due-diligence'],
    topics: ['volume-dix', 'sponsorship', 'boutique-fit'],
    keywords: ['idéesfx', 'écosystème', 'créatif', 'partenariat'],
  },
  {
    id: 'frag-teamwork-onboarding',
    kind: 'fragment',
    title: 'Équipe — formation des recrues',
    oralLine:
      'Sur mandat santé j’ai formé des pairs sur Smartsheet et la matrice — montée en charge rapide sans baisser le standard QCER.',
    tags: ['qcer', 'smartsheet'],
    topics: ['teamwork', 'small-team', 'qcer-quality'],
    keywords: ['recrue', 'onboarding', 'collabor', 'équipe'],
  },
  {
    id: 'frag-stress-deadline',
    kind: 'fragment',
    title: 'Stress — transparence sous pression',
    oralLine:
      'Sous pression je ne disparais pas : alerte J-3, priorisation documentée, pas de signature « pour faire passer » — le client sait où on en est.',
    tags: ['qcer'],
    topics: ['stress', 'deadline', 'ethics'],
    keywords: ['stress', 'pression', 'piège', 'courbe'],
  },
  {
    id: 'frag-swikat-pragmatic',
    kind: 'fragment',
    title: 'Swikat — résultat lundi matin',
    oralLine:
      'Marketplace artisanat : trésorerie et coûts — le dirigeant PME veut un chiffre et une action, pas un modèle théorique.',
    tags: ['entrepreneurship'],
    topics: ['pme-operations', 'entrepreneurship', 'case-practical'],
    keywords: ['pme', 'marketplace', 'swikat', 'opérationnel'],
    proofPointId: 'pp-swikat',
  },
  {
    id: 'frag-presentiel-commitment',
    kind: 'fragment',
    title: 'Présentiel — engagement sans négociation',
    oralLine:
      'J’ai postulé en sachant 100 % Vieux-Montréal — je ne demande pas de télétravail après coup ; proximité associés-clients voulue.',
    tags: ['relocation'],
    topics: ['presentiel', 'relocation', 'boutique-fit'],
    keywords: ['présentiel', 'vieux-montréal', 'bureau', 'sur site'],
    proofPointId: 'pp-relocation',
  },
  {
    id: 'frag-bilingual-client',
    kind: 'fragment',
    title: 'Bilingue — clients FR/BE/NA',
    oralLine:
      'Teleperformance puis Deloitte international : je passe du français client au compte-rendu EN sans perdre le fil décisionnel.',
    tags: ['client-service'],
    topics: ['bilingual', 'communication', 'remote-clients'],
    keywords: ['bilingue', 'anglais', 'français', 'client'],
    oralLineEn: 'FR/BE call centers then Deloitte global — switch languages without losing the decision thread.',
    proofPointId: 'pp-teleperformance',
  },
  {
    id: 'frag-innovation-governance',
    kind: 'fragment',
    title: 'Innovation — gouvernance sans théâtre',
    oralLine:
      'Feuille de route innovation : owners, critères d’arrêt, revue trimestrielle — pas d’atelier post-it sans suite opérationnelle.',
    tags: ['smartsheet'],
    topics: ['innovation', 'project-management'],
    keywords: ['gouvernance', 'feuille de route', 'théâtre', 'atelier'],
  },
  {
    id: 'frag-socio-kpi',
    kind: 'fragment',
    title: 'Socioéconomique — outputs, outcomes, impact',
    oralLine:
      'Je mesure le succès en trois niveaux : livrables et emplois courts termes, revenus et rétention à moyen terme, transformation régionale sur 5–10 ans — avec inclusion explicite.',
    tags: ['public-sector'],
    topics: ['public-sector', 'case-practical', 'strategy'],
    keywords: ['socioéconomique', 'succès', 'emplois', 'inclusion', 'impact'],
    proofPointId: 'pp-public-funding',
  },
  {
    id: 'frag-centre-ville-ecosystem',
    kind: 'fragment',
    title: 'Centre-ville — écosystème local, pas copier-coller',
    oralLine:
      'Vitalité = usage mixte, événements, sécurité perçue, transport — benchmark oui, mais parties prenantes locales définissent le succès, comme mes 42 filiales avec un référentiel commun.',
    tags: ['42-affiliates', 'public-sector'],
    topics: ['public-sector', 'case-practical', 'affiliates-42'],
    keywords: ['centre-ville', 'vitalité', 'Griffintown', 'leviers', 'usage'],
    proofPointId: 'pp-42-matrix',
  },
  {
    id: 'frag-curveball-visa-honest',
    kind: 'fragment',
    title: 'Question piège — visa en toute honnêteté',
    oralLine:
      'J’espérais éviter le sujet visa — après 30 mois en Grèce je ne bluffe pas les délais ; je contrôle passation juillet, logement Montréal, présentiel — et j’ai livré dans l’incertitude.',
    tags: ['relocation'],
    topics: ['relocation', 'visa-immigration', 'stress', 'boutique-fit'],
    keywords: ['question', 'espériez', 'visa', 'honnête', 'piège'],
    proofPointId: 'pp-relocation',
  },
  {
    id: 'frag-upsell-value',
    kind: 'fragment',
    title: 'Suivi mandat — valeur avant facture',
    oralLine:
      'Je ne pitche pas : le client a vu le gain Smartsheet, puis j’ai cadré la prochaine hypothèse à tester — sprint quatre semaines, il choisit.',
    tags: ['smartsheet', 'due-diligence'],
    topics: ['client-adoption', 'boutique-fit', 'sponsorship'],
    keywords: ['suivi', 'vendeur', 'valeur', 'hypothèse', 'suite'],
  },
  {
    id: 'frag-deloitte-handoff',
    kind: 'fragment',
    title: 'Passation Deloitte — fin juillet',
    oralLine:
      'Départ fin juillet : remplaçants formés, dossiers documentés, manager aligné — je ne brûle pas les ponts en partant.',
    tags: ['deloitte', 'relocation'],
    topics: ['relocation', 'deloitte-experience', 'teamwork'],
    keywords: ['passation', 'juillet', 'départ', 'deloitte'],
  },
]

const starOralLines: Record<string, string> = {
  'star-1':
    'Situation : 42 filiales, processus lourd. Action : matrice + Smartsheet. Résultat : adopté par le client, équipe moins stressée.',
  'star-2':
    'Situation : mandat AML santé exigeant. Action : revues QCER, formation recrues. Résultat : nomination QCER, projet à six.',
  'star-3':
    'Situation : livrable Visio pour demain, outil inconnu. Action : formation 24 h. Résultat : livrable validé, crédibilité durable.',
}

const starTopicSets: InterviewTopic[][] = [
  ['leadership', 'affiliates-42', 'innovation', 'client-adoption', 'compliance', 'conflict', 'failure'],
  ['qcer-quality', 'healthcare', 'ethics', 'deadline', 'feedback', 'teamwork', 'small-team'],
  ['tools-adaptability', 'deadline', 'stress', 'innovation'],
]

const starCards: StorySnippetCard[] = defaultStarStories.map((s, i) => ({
  id: `card-${s.id}`,
  kind: 'star' as const,
  title: s.title,
  oralLine: starOralLines[s.id] ?? s.result,
  detail: `S : ${s.situation}\nT : ${s.task}\nA : ${s.action}\nR : ${s.result}`,
  tags:
    i === 0
      ? (['42-affiliates', 'smartsheet', 'compliance'] as ProofPointTag[])
      : i === 1
        ? (['qcer', 'healthcare', 'deloitte'] as ProofPointTag[])
        : (['tools', 'deloitte'] as ProofPointTag[]),
  topics: starTopicSets[i] ?? ['deloitte-experience'],
  keywords:
    i === 0
      ? ['filiales', 'smartsheet', 'matrice', 'leadership', 'conflit', 'raté']
      : i === 1
        ? ['qcer', 'santé', 'éthique', 'échéance', 'rétroaction', 'équipe']
        : ['visio', '24h', 'apprentissage', 'outil'],
  categoryIds:
    i === 0
      ? (['behavioral', 'innovation', 'firm-culture'] as CategoryId[])
      : i === 1
        ? (['behavioral', 'small-team'] as CategoryId[])
        : (['behavioral', 'innovation'] as CategoryId[]),
  parentStarId: s.id,
}))

export const storySnippetCatalog: StorySnippetCard[] = [
  ...proofCards,
  ...fragmentCards,
  ...starCards,
]

const catalogById = new Map(storySnippetCatalog.map((c) => [c.id, c]))
const catalogByProofId = new Map(
  storySnippetCatalog.filter((c) => c.proofPointId).map((c) => [c.proofPointId!, c]),
)

export function getSnippetByProofPointId(proofPointId: string): StorySnippetCard | undefined {
  return catalogByProofId.get(proofPointId)
}

export function getSnippetById(id: string): StorySnippetCard | undefined {
  return catalogById.get(id)
}
