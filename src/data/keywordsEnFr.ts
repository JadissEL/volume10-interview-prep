export type KeywordCategory =
  | 'strategy'
  | 'innovation'
  | 'consulting'
  | 'health'
  | 'project'
  | 'finance'
  | 'hr'
  | 'encg'
  | 'deloitte'
  | 'tools'
  | 'application'

export interface KeywordPair {
  id: string
  category: KeywordCategory
  english: string
  french: string
  note?: string
  linkedQuestionIds?: string[]
  essentialDina?: boolean
}

export const KEYWORD_CATEGORY_LABELS: Record<KeywordCategory, string> = {
  strategy: 'Stratégie',
  innovation: 'Innovation',
  consulting: 'Conseil général',
  health: 'Santé',
  project: 'Gestion de projet',
  finance: 'Finance',
  hr: 'RH / équipe',
  encg: 'ENCG / formation',
  deloitte: 'Deloitte / compliance',
  tools: 'Outils',
  application: 'Candidature Volume Dix',
}

export const keywordsEnFr: KeywordPair[] = [
  { id: 'k01', category: 'strategy', english: 'Stakeholder', french: 'Partie prenante', note: 'Acteur ayant intérêt ou influence sur le mandat' },
  { id: 'k02', category: 'strategy', english: 'Value chain', french: 'Chaîne de valeur', note: 'Séquence d\'activités créant de la valeur' },
  { id: 'k03', category: 'strategy', english: 'Issue tree', french: 'Arbre de problèmes', note: 'Décomposition MECE d\'un enjeu' },
  { id: 'k04', category: 'strategy', english: 'Strategic planning', french: 'Planification stratégique', note: 'Horizon 3–5 ans, priorités, gouvernance' },
  { id: 'k05', category: 'strategy', english: 'Business case', french: 'Analyse de rentabilité / dossier d\'affaires', note: 'Coûts, bénéfices, risques' },
  { id: 'k06', category: 'strategy', english: 'Executive advisory', french: 'Conseil aux dirigeants', note: 'Accompagnement CODIR / CA' },
  { id: 'k07', category: 'strategy', english: 'Impact study', french: 'Étude d\'impact', note: 'Promesse Volume10 après livrable' },
  { id: 'k08', category: 'strategy', english: 'Tailor-made', french: 'Sur mesure', note: 'Mandat boutique, non standardisé' },
  { id: 'k09', category: 'innovation', english: 'Innovation roadmap', french: 'Feuille de route d\'innovation', note: 'Horizons, pilotes, passage à l\'échelle' },
  { id: 'k10', category: 'innovation', english: 'Digital transformation', french: 'Transformation numérique', note: 'Technologie + culture + processus' },
  { id: 'k11', category: 'innovation', english: 'Governance', french: 'Gouvernance', note: 'Rôles, comités, décisions' },
  { id: 'k12', category: 'innovation', english: 'Pilot project', french: 'Projet pilote', note: 'Test à petite échelle avant déploiement' },
  { id: 'k13', category: 'innovation', english: 'Change management', french: 'Gestion du changement', note: 'Adoption, formation, résistance' },
  { id: 'k14', category: 'innovation', english: 'Connected care', french: 'Soins connectés', note: 'Santé numérique, parcours patient' },
  { id: 'k15', category: 'innovation', english: 'Artificial intelligence', french: 'Intelligence artificielle', note: 'Gouvernance IA en milieu hospitalier' },
  { id: 'k16', category: 'consulting', english: 'Mandate', french: 'Mandat', note: 'Mission client chez Volume10' },
  { id: 'k17', category: 'consulting', english: 'Deliverable', french: 'Livrable', note: 'Produit concret remis au client' },
  { id: 'k18', category: 'consulting', english: 'Workshop', french: 'Atelier', note: 'Session collaborative facilitée' },
  { id: 'k19', category: 'consulting', english: 'Facilitation', french: 'Animation / facilitation', note: 'Guider un groupe vers des décisions' },
  { id: 'k20', category: 'consulting', english: 'Benchmark', french: 'Benchmark / étalonnage', note: 'Comparaison aux meilleures pratiques' },
  { id: 'k21', category: 'consulting', english: 'Best practices', french: 'Meilleures pratiques', note: 'Référentiels internationaux' },
  { id: 'k22', category: 'consulting', english: 'Thought leadership', french: 'Leadership de pensée', note: 'Volume10 Intelligence' },
  { id: 'k23', category: 'consulting', english: 'Foresight', french: 'Prospective', note: 'Scénarios, signaux faibles' },
  { id: 'k24', category: 'consulting', english: 'Ecosystem', french: 'Écosystème', note: 'Réseau d\'acteurs interconnectés' },
  { id: 'k25', category: 'consulting', english: 'System thinking', french: 'Pensée systémique', note: 'Boucles de rétroaction, effets indirects' },
  { id: 'k26', category: 'health', english: 'Public health', french: 'Santé publique', note: 'Population, prévention, politiques' },
  { id: 'k27', category: 'health', english: 'Clinical adoption', french: 'Adoption clinique', note: 'Mise en pratique par les soignants' },
  { id: 'k28', category: 'health', english: 'Hospital network', french: 'Réseau hospitalier', note: 'MUHC, CHU, établissements liés' },
  { id: 'k29', category: 'health', english: 'Health innovation', french: 'Innovation en santé', note: 'Pilier fort de Volume10' },
  { id: 'k30', category: 'health', english: 'Organ donation', french: 'Don d\'organes', note: 'Transplant Québec' },
  { id: 'k31', category: 'project', english: 'Worksite management', french: 'Gestion de chantier', note: 'Blocage minimum / construction' },
  { id: 'k32', category: 'project', english: 'Infrastructure', french: 'Infrastructure', note: 'Secteur clé Volume10' },
  { id: 'k33', category: 'project', english: 'Public-private partnership', french: 'Partenariat public-privé (PPP)', note: 'Aménagement, grands projets' },
  { id: 'k34', category: 'project', english: 'Stakeholder engagement', french: 'Mobilisation des parties prenantes', note: 'Consultation, concertation' },
  { id: 'k35', category: 'project', english: 'Revitalization', french: 'Revitalisation', note: 'Griffintown, centre-ville' },
  { id: 'k36', category: 'finance', english: 'Financial model', french: 'Modèle financier', note: 'Projections, sensibilité' },
  { id: 'k37', category: 'finance', english: 'ROI', french: 'Retour sur investissement (RSI)', note: 'Justification économique' },
  { id: 'k38', category: 'finance', english: 'Funding pitch', french: 'Présentation de financement', note: 'Levée, subventions, investisseurs' },
  { id: 'k39', category: 'finance', english: 'Above market compensation', french: 'Rémunération au-dessus du marché', note: 'Volume10 paie légèrement plus — justifier votre valeur' },
  { id: 'k40', category: 'hr', english: 'On-site', french: 'Sur place', note: 'Présence physique à Montréal' },
  { id: 'k41', category: 'hr', english: 'Work permit', french: 'Permis de travail', note: 'Immigration Canada' },
  { id: 'k42', category: 'hr', english: 'Relocation', french: 'Relocalisation', note: 'Grèce → Canada' },
  { id: 'k43', category: 'hr', english: 'Bilingual', french: 'Bilingue', note: 'Français et anglais — marché québécois' },
  { id: 'k44', category: 'hr', english: 'Boutique firm', french: 'Firme boutique', note: '<50 employés, proximité associés' },
  { id: 'k45', category: 'hr', english: 'Wear many hats', french: 'Jouer plusieurs rôles', note: 'Petite équipe, polyvalence' },
  { id: 'k46', category: 'strategy', english: 'Giving space to ideas', french: 'Donner de l\'espace aux idées', note: 'Signature Volume10 — écouter, provoquer, livrer' },
  { id: 'k47', category: 'strategy', english: 'Decisions under pressure', french: 'Décisions qui tiennent la route', note: 'Rebrand VolumE Dix' },
  { id: 'k48', category: 'consulting', english: 'Action-ready', french: 'Prêt à l\'action', note: 'Livrable opérationnel, pas théorique' },
  { id: 'k49', category: 'consulting', english: 'Alignment', french: 'Alignement', note: 'Équipes et partenaires sur la même vision' },
  { id: 'k50', category: 'innovation', english: 'Innovation theatre', french: 'Théâtre de l\'innovation', note: 'Ateliers sans suivi — éviter' },
  { id: 'k51', category: 'encg', english: 'Corporate finance', french: 'Finance d\'entreprise', note: 'ENCG S8 — modélisation, valorisation', essentialDina: true, linkedQuestionIds: ['q011'] },
  { id: 'k52', category: 'encg', english: 'Group finance', french: 'Finance des groupes', note: 'ENCG S9 — analogie 42 filiales', essentialDina: true, linkedQuestionIds: ['q027'] },
  { id: 'k53', category: 'encg', english: 'Management accounting', french: 'Comptabilité de gestion', note: 'ENCG — contrôle de gestion', linkedQuestionIds: ['q011'] },
  { id: 'k54', category: 'encg', english: 'Decision support tools', french: 'Outils d\'aide à la décision', note: 'ENCG S7 — tableaux de bord', essentialDina: true },
  { id: 'k55', category: 'encg', english: 'IFRS', french: 'Normes IFRS', note: 'Reporting — audits Deloitte', essentialDina: true },
  { id: 'k56', category: 'encg', english: 'Consolidation', french: 'Consolidation comptable', note: 'Finance des groupes' },
  { id: 'k57', category: 'deloitte', english: 'Quality Control Evaluator', french: 'Évaluateur contrôle qualité (QCER)', note: 'Nomination Dina — santé', essentialDina: true, linkedQuestionIds: ['q061'] },
  { id: 'k58', category: 'deloitte', english: 'AML', french: 'Lutte contre le blanchiment (AML)', note: 'Mandat santé international' },
  { id: 'k59', category: 'deloitte', english: 'Affiliate compliance', french: 'Conformité des filiales', note: '42 affiliates — matrice référence', essentialDina: true, linkedQuestionIds: ['q061'] },
  { id: 'k60', category: 'deloitte', english: 'Sponsorship due diligence', french: 'Due diligence sponsoring', note: 'Offres de partenariat — compliance', essentialDina: true },
  { id: 'k61', category: 'deloitte', english: 'Continuous education funding', french: 'Financement formation continue', note: 'Secteur public Belgique — 6 mois', essentialDina: true },
  { id: 'k62', category: 'tools', english: 'Smartsheet', french: 'Smartsheet', note: 'Automatisation échantillons compliance', essentialDina: true, linkedQuestionIds: ['q061'] },
  { id: 'k63', category: 'tools', english: 'Qlik Sense', french: 'Qlik Sense', note: 'Dashboards exécutifs Deloitte' },
  { id: 'k64', category: 'tools', english: 'Visio', french: 'Microsoft Visio', note: 'Cartographie processus — appris en 24h', essentialDina: true },
  { id: 'k65', category: 'tools', english: 'Python scripting', french: 'Scripts Python', note: 'Tests automatisés mandats' },
  { id: 'k66', category: 'consulting', english: 'Cross-selling', french: 'Vente croisée', note: 'Uniquement si valeur client — boutique', essentialDina: true },
  { id: 'k67', category: 'consulting', english: 'Up-selling', french: 'Montée en gamme', note: 'Extension mandat justifiée' },
  { id: 'k68', category: 'consulting', english: 'Pure play', french: 'Spécialiste pur (pure play)', note: 'Volume Dix boutique vs généraliste' },
  { id: 'k69', category: 'consulting', english: 'Vertical research', french: 'Recherche verticale', note: 'Approfondir un secteur', essentialDina: true },
  { id: 'k70', category: 'consulting', english: 'Horizontal research', french: 'Recherche horizontale', note: 'Benchmark fonctions / processus', essentialDina: true },
  { id: 'k71', category: 'consulting', english: 'Expert network', french: 'Réseau d\'experts', note: 'Mobiliser expertise externe', essentialDina: true },
  { id: 'k72', category: 'application', english: 'Executive consultancy', french: 'Conseil exécutif', note: 'Repositionnement VolumE Dix', essentialDina: true },
  { id: 'k73', category: 'application', english: 'Pragmatic recommendation', french: 'Recommandation pragmatique', note: 'Actionnable lundi — vs théorie audit', essentialDina: true },
  { id: 'k74', category: 'application', english: 'Compound effect', french: 'Effet composé', note: 'Livre The Compound Effect', essentialDina: true },
  { id: 'k75', category: 'application', english: 'Vision definition', french: 'Définition de la vision', note: 'Pilier candidature Volume Dix', essentialDina: true },
  { id: 'k76', category: 'application', english: 'Transformation steering', french: 'Pilotage de la transformation', note: 'Pilier candidature' },
  { id: 'k77', category: 'application', english: 'Positioning architecture', french: 'Architecture de positionnement', note: 'Pilier candidature' },
  { id: 'k78', category: 'application', english: 'Strategic alignment', french: 'Alignement stratégique', note: 'Pilier candidature' },
  { id: 'k79', category: 'consulting', english: 'Intrapreneurship', french: 'Intrapreneuriat', note: 'Initiatives matrice + Smartsheet', essentialDina: true },
  { id: 'k80', category: 'hr', english: 'Classes préparatoires ECT', french: 'Classes préparatoires ECT', note: 'Fondation quantitative Fès', essentialDina: true },
  { id: 'k81', category: 'finance', english: 'Treasury flows', french: 'Flux de trésorerie', note: 'Swikat Craft marketplace' },
  { id: 'k82', category: 'finance', english: 'Cost minimization', french: 'Minimisation des coûts', note: 'Swikat — stratégies opérationnelles' },
  { id: 'k83', category: 'consulting', english: 'AI agents', french: 'Agents IA', note: 'Recherche et synthèse — validation humaine', essentialDina: true, linkedQuestionIds: ['q099'] },
  { id: 'k84', category: 'health', english: 'Physiotherapy app compliance', french: 'Conformité app physiothérapie', note: 'Clients individuels — mandat Deloitte' },
  { id: 'k85', category: 'project', english: 'Onboarding', french: 'Intégration / onboarding', note: 'Formation recrues Deloitte' },
  { id: 'k86', category: 'deloitte', english: 'Task Force', french: 'Task force', note: 'Support transversal équipes' },
  { id: 'k87', category: 'consulting', english: 'Client perspective', french: 'Perspective client', note: 'Centres d\'appels + Assistwise' },
  { id: 'k88', category: 'encg', english: 'Audit internship', french: 'Stage commissariat aux comptes', note: 'Tourisme, hospitalité, OSBL — 3 mois' },
  { id: 'k89', category: 'finance', english: 'Management control', french: 'Contrôle de gestion', note: 'Al Barid Bank — 6 mois' },
  { id: 'k90', category: 'application', english: 'Hands-on consulting', french: 'Conseil hands-on', note: 'Motivation boutique Volume Dix', essentialDina: true },
  { id: 'k91', category: 'application', english: 'Executive consultant', french: 'Consultant exécutif', note: 'Titre offre mai 2026 — 4 postes', essentialDina: true },
  { id: 'k92', category: 'application', english: 'In-person only', french: '100 % en présentiel', note: 'Vieux-Montréal — exigence offre', essentialDina: true, linkedQuestionIds: ['q075'] },
  { id: 'k93', category: 'application', english: 'Intellectual curiosity', french: 'Curiosité intellectuelle', note: 'Trait explicite offre recrutement', essentialDina: true },
  { id: 'k94', category: 'application', english: 'Navigate ambiguity', french: 'Naviguer dans l\'ambiguïté', note: 'Compétence clé annonce Volume Dix', essentialDina: true, linkedQuestionIds: ['q066'] },
  { id: 'k95', category: 'application', english: 'Emerging issues', french: 'Enjeux émergents', note: 'Études d\'intelligence — offre', essentialDina: true },
  { id: 'k96', category: 'application', english: 'Steep learning curve', french: 'Courbe d\'apprentissage soutenue', note: 'Environnement offre — défis rapides', essentialDina: true },
  { id: 'k97', category: 'application', english: 'Entrepreneurial projects', french: 'Projets entrepreneuriaux sur mesure', note: 'Mission cabinet — offre 2026', essentialDina: false },
]
