/**
 * Banque française des 100 questions d'entrevue Volume10.
 * Structure identique à generate-questions.mjs (BANK, CATEGORIES, META).
 */

export const CATEGORIES_FR = [
  { id: 'firm-culture', label: 'Firme et culture', count: 10 },
  { id: 'strategy', label: 'Pilier Stratégie', count: 8 },
  { id: 'innovation', label: 'Pilier Innovation', count: 8 },
  { id: 'ecosystem', label: 'Pilier Écosystème', count: 6 },
  { id: 'intelligence', label: 'Pilier Intelligence', count: 6 },
  { id: 'case-style', label: 'Études de cas et mandats', count: 12 },
  { id: 'sectors', label: 'Connaissance sectorielle', count: 10 },
  { id: 'behavioral', label: 'Comportemental (STAR)', count: 10 },
  { id: 'relocation', label: 'Relocalisation et présence sur site', count: 12 },
  { id: 'small-team', label: 'Petite équipe (<50)', count: 8 },
  { id: 'compensation', label: 'Rémunération', count: 5 },
  { id: 'curveball', label: 'Questions difficiles / pièges', count: 5 },
]

export const BANK_FR = {
  'firm-culture': [
    [
      'Que savez-vous de Volume10 / VolumE Dix, et pourquoi notre signature « Donner de l\'espace aux idées » vous parle-t-elle ?',
      [
        'Relier la signature à la méthode boutique : provocation, acteurs inhabituels, place pour des solutions non évidentes',
        'Mentionner le repositionnement : cabinet-conseil exécutif, décisions sous pression',
        'Lignée IdéesFx — créatif/stratégique, pas le modèle Big Four générique',
      ],
    ],
    [
      'En quoi une boutique comme Volume10 diffère-t-elle de McKinsey ou Accenture, et où vous situez-vous ?',
      [
        'Équipes plus petites, accès aux associés, mandats sur mesure',
        'Vous apportez de la profondeur sans bureaucratie; citez l\'autonomie sur des mandats passés',
        'Respecter leur équipe riche en anciens — vous ajoutez une perspective internationale',
      ],
    ],
    [
      'Volume10 travaille étroitement avec IdéesFx — que signifie cet écosystème pour un consultant ?',
      [
        'Mélange créatif + stratégique; pollinisation croisée des méthodes',
        'À l\'aise avec l\'ambiguïté et la proximité du design thinking',
        'Le client voit une seule équipe intégrée',
      ],
    ],
    [
      'Pourquoi Montréal et le marché bilingue du Québec comptent pour ce rôle.',
      [
        'Gestion des parties prenantes en français et en anglais; normes du secteur public',
        'Vous investirez dans un plan de montée en français professionnel',
        'Exemples de livrables bilingues',
      ],
    ],
    [
      'Quelle est notre mission (« relever les défis autrement ») avec vos propres mots ?',
      [
        'Solutions intelligentes et durables; analyse rigoureuse + étude d\'impact',
        'Pas une usine à slides — outiller le client pour l\'action et l\'alignement',
        'Offrir un manifeste de 30 secondes en écho',
      ],
    ],
    [
      'Comment gérez-vous la tension entre provocation et politique client ?',
      [
        'Volume10 provoque des acteurs inhabituels avec respect',
        'STAR : atelier où vous avez fait émerger une vérité inconfortable avec adhésion',
        'Conclure sur l\'alignement des résultats partagés',
      ],
    ],
    [
      'Qu\'avez-vous retenu de notre portefeuille d\'études de cas qui vous enthousiasme le plus ?',
      [
        'Choisir 2 : innovation CUSM, planification Transplant Québec, revitalisation Griffintown',
        'Lier à votre expérience sectorielle',
        'Montrer que vous avez lu les résultats, pas seulement les titres',
      ],
    ],
    [
      'Comment représenteriez-vous Volume10 lors d\'un premier atelier client ?',
      [
        'Écouter d\'abord — « donner de l\'espace »',
        'Ordre du jour structuré, sensibilité bilingue',
        'Quitter avec prochaines étapes claires et carte des sponsors',
      ],
    ],
    [
      'Où voyez-vous Volume10 dans 3 ans compte tenu du repositionnement VolumE Dix ?',
      [
        'Croissance en conseil exécutif; ligne de produits Intelligence',
        'Guerre des talents à Montréal — vous renforcez l\'effectif',
        'Vous voulez grandir avec la firme, pas l\'utiliser comme tremplin',
      ],
    ],
    [
      'Pourquoi le conseil exécutif chez Volume Dix maintenant — et pourquoi l\'un de nos 4 postes consultants ?',
      [
        'Aligner sur l\'offre : travail direct dirigeants, responsabilités rapides, présentiel Vieux-Montréal',
        'Inflexion : fin mandat Deloitte, mobilité Grèce→Canada, pas pivot opportuniste',
        'Profil atypique ECT/ENCG/compliance comme atout (l\'annonce l\'encourage)',
      ],
    ],
  ],
  strategy: [
    [
      'Comment mèneriez-vous une retraite de planification stratégique pour une institution publique ?',
      [
        'Entrevues préparatoires, arbre de problèmes, scénarios',
        'Animation avec dirigeants et terrain',
        'Livrable : choix, indicateurs, rythme de gouvernance',
      ],
    ],
    [
      'Comment bâtissez-vous un dossier d\'affaires qui résiste à l\'examen du conseil d\'administration ?',
      [
        'Coûts, bénéfices, risques, analyse de sensibilité',
        'Langage de reddition de comptes du secteur public québécois',
        'Pilote avant mise à l\'échelle',
      ],
    ],
    [
      'Décrivez votre approche de diagnostic interne avant de recommander une stratégie.',
      [
        'Carte des parties prenantes, revue des données, touches ethnographiques',
        'Distinguer symptômes et causes profondes',
        'Volume10 : analyse rigoureuse avant solution sur mesure',
      ],
    ],
    [
      'Comment coachez-vous un PDG qui n\'est pas d\'accord avec votre recommandation ?',
      [
        'Identifier la décision qu\'il doit assumer',
        'Preuves + petites expérimentations',
        'Préserver la relation — la boutique vit de la confiance',
      ],
    ],
    [
      'Quels cadres utilisez-vous — et quand les abandonnez-vous ?',
      [
        'SWOT, OKR, chaîne de valeur — selon le contexte',
        'Les cadres servent la conversation, ne la remplacent pas',
        'Exemple où la simplicité a gagné',
      ],
    ],
    [
      'Comment alignez-vous modèles financiers et récit stratégique ?',
      [
        'Un seul fil narratif des chiffres à la mission',
        'Tester les hypothèses avec la finance client',
        'Logique d\'investissement en innovation type CUSM',
      ],
    ],
    [
      'Expérience de plans stratégiques pour la santé ou l\'éducation ?',
      [
        'Réglementation sectorielle, ministères',
        'Résultats vs livrables',
        'Référencer Transplant Québec / modèles collégiaux du site',
      ],
    ],
    [
      'Comment mesurez-vous l\'impact après l\'approbation de la stratégie ?',
      [
        'Indicateurs avancés/retardés, jalons à 90 jours',
        'Étude d\'impact — promesse Volume10',
        'Corriger le cap ouvertement',
      ],
    ],
  ],
  innovation: [
    [
      'Comment définissez-vous l\'innovation dans un réseau hospitalier vs une startup technologique ?',
      [
        'CUSM : gouvernance, adoption clinique, risque',
        'Startup : vitesse; hôpital : sécurité et équité',
        'Vous faites le pont entre les deux vocabulaires',
      ],
    ],
    [
      'Décrivez la construction d\'une feuille de route d\'innovation avec les équipes technologie et opérations.',
      [
        'Horizon 1-2-3 ou équivalent',
        'Dépendances, pilotes, critères de passage à l\'échelle',
        'Gouvernance des données explicite',
      ],
    ],
    [
      'Comment gérez-vous le théâtre de l\'innovation — ateliers sans suite ?',
      [
        'Lier aux indicateurs et aux sponsors',
        'Mettre fin aux projets favoris avec tact',
        'Victoires rapides en 60 jours',
      ],
    ],
    [
      'Expérience en santé numérique ou soins connectés ?',
      [
        'Parcours patient, interopérabilité, gestion du changement',
        'Langage des études de cas en soins connectés',
        'Sensibilisation vie privée / RAMQ',
      ],
    ],
    [
      'Comment instaurer une gouvernance de l\'innovation sans ralentir les équipes ?',
      [
        'Stage-gate léger',
        'Droits de décision clairs',
        'Cadence de revue de portefeuille',
      ],
    ],
    [
      'Parlez-nous d\'une transformation où stratégie numérique et changement culturel se sont rencontrés.',
      [
        'Format STAR',
        'Résistances rencontrées',
        'Mesures d\'adoption',
      ],
    ],
    [
      'Comment clarifieriez-vous les concepts d\'innovation pour des dirigeants non experts ?',
      [
        'Langage clair, métaphores, visuels',
        'Lien avec l\'étude Volume10 : diffusion de concepts',
        'Éviter le jargon',
      ],
    ],
    [
      'Quel rôle jouent les données dans votre travail d\'innovation ?',
      [
        'Preuves pour la priorisation',
        'Éthique et biais',
        'Synergie avec le pilier Intelligence',
      ],
    ],
  ],
  ecosystem: [
    [
      'Comment cartographiez-vous un écosystème de parties prenantes pour un projet d\'infrastructure ?',
      [
        'Acteurs, incitatifs, pouvoir, flux',
        'Angle encombrement minimal / chantier innovant',
        'Plan d\'engagement par cluster',
      ],
    ],
    [
      'Décrivez la mobilisation de ménages vulnérables dans un programme d\'efficacité énergétique.',
      [
        'Thèmes des études de cas Volume10',
        'Confiance, partenaires communautaires',
        'Mesurer la participation, pas seulement les installations',
      ],
    ],
    [
      'Comment soutenez-vous les clients dans des présentations de financement sans surpromettre ?',
      [
        'Récit + preuves + demande',
        'Divulgation des risques',
        'Coaching de la prestation',
      ],
    ],
    [
      'Exemple de pensée systémique qui a changé la stratégie d\'un client.',
      [
        'Boucles de rétroaction identifiées',
        'Point d\'intervention choisi',
        'Résultat',
      ],
    ],
    [
      'Comment gérez-vous les conflits entre partenaires d\'écosystème ?',
      [
        'Facilitation neutre',
        'Indicateurs partagés',
        'Voies d\'escalade',
      ],
    ],
    [
      'Expérience d\'alignement des parties prenantes en partenariat public-privé ?',
      [
        'Rôles, gouvernance, communications',
        'Contexte québécois si applicable',
        'Confiance à long terme',
      ],
    ],
  ],
  intelligence: [
    [
      'En quoi Volume10 Intelligence diffère-t-il du conseil stratégique classique ?',
      [
        'Études sectorielles, prospective, leadership de pensée ciblé',
        'Génération de prospects + crédibilité',
        'Vous savez rédiger des synthèses exécutives',
      ],
    ],
    [
      'Décrivez une analyse sectorielle qui a influencé une stratégie.',
      [
        'Méthode : sources, entrevues, benchmarks',
        'Insight qui a surpris le client',
        'Recommandation',
      ],
    ],
    [
      'Comment faites-vous de la prospective sans paraître spéculatif ?',
      [
        'Scénarios avec signaux faibles',
        'Implications, pas prédictions',
        'Déclencheurs de décision',
      ],
    ],
    [
      'Comment amélioreriez-vous la capture de prospects pour les téléchargements PDF Intelligence ?',
      [
        'Friction du formulaire vs valeur',
        'Nurturing de suivi',
        'Actifs bilingues',
      ],
    ],
    [
      'Quelles tendances d\'innovation en santé au Québec devrions-nous surveiller ?',
      [
        'Vieillissement, main-d\'œuvre, portail numérique, gouvernance de l\'IA',
        'Écosystème Santé Québec',
        'Lien avec le travail CUSM',
      ],
    ],
    [
      'Comment synthétisez-vous les meilleures pratiques mondiales pour la vitalité du centre-ville montréalais ?',
      [
        'Référence à l\'étude de benchmarking d\'attractivité',
        'Filtres de transférabilité',
        'Politique locale',
      ],
    ],
  ],
  'case-style': [
    [
      'Cas : le CUSM demande d\'accélérer l\'adoption de l\'innovation sur les sites — vos 2 premières semaines ?',
      [
        'Entrevues parties prenantes, audit du portefeuille d\'innovation',
        'Mémo de diagnostic rapide',
        'Critères de pilote',
      ],
    ],
    [
      'Cas : la Ville veut revitaliser Griffintown — quelles questions posez-vous en premier ?',
      [
        'Économique, social, mobilité, patrimoine',
        'Équilibre promoteurs vs communauté',
        'Gains par phases',
      ],
    ],
    [
      'Cas : Transplant Québec a besoin du plan 2023–2027 — comment structurez-vous l\'approche ?',
      [
        'Alignement mission, ateliers parties prenantes',
        'Scénarios de demande',
        'Feuille de route de mise en œuvre',
      ],
    ],
    [
      'Cas : l\'engagement des ménages vulnérables d\'un distributeur d\'énergie stagne — diagnostic.',
      [
        'Barrières : confiance, langue, bureaucratie',
        'Partenaires de canal',
        'Repenser le parcours',
      ],
    ],
    [
      'Cas : plan directeur d\'innovation CHU de Québec — 3 livrables prioritaires ?',
      [
        'Gouvernance, portefeuille, indicateurs',
        'Alignement clinique + administratif',
        'Carte de financement',
      ],
    ],
    [
      'Cas : croissance du secteur viticole québécois — comment dimensionnez l\'opportunité ?',
      [
        'Marché, réglementation, lien tourisme',
        'Ensemble concurrentiel',
        'Options de mise en marché',
      ],
    ],
    [
      'Cas : plan directeur TI pour un organisme public — équilibre patrimoine et infonuagique ?',
      [
        'Risque, coût, talents',
        'Migration par phases',
        'Cybersécurité',
      ],
    ],
    [
      'Cas : encombrement minimal sur les chantiers — quels indicateurs comptent ?',
      [
        'Temps, coût, perturbation communautaire',
        'Adoption de l\'innovation',
        'Incitatifs entrepreneurs',
      ],
    ],
    [
      'Cas : positionnement CCOMTL avec Santé Québec — carte des parties prenantes ?',
      [
        'Cliniciens, ministère, patients',
        'Proposition de valeur',
        'Preuves',
      ],
    ],
    [
      'Cas : plan stratégique Place des Arts — en quoi les indicateurs culturels diffèrent ?',
      [
        'Fréquentation, communauté, mix de financement',
        'Objectifs artistiques vs commerciaux',
        'Partenaires',
      ],
    ],
    [
      'Estimation : combien de consultants une firme de 40 personnes affecte-t-elle à un mandat de 2 M$ ?',
      [
        'Composition d\'équipe, modèle de levier',
        'Supervision associée',
        'Marge de risque',
      ],
    ],
    [
      'Vous avez 24 h pour préparer une offre pour un nouveau client santé — plan.',
      [
        'Hypothèse, 3 insights de données publiques',
        'Phase 0 proposée',
        'Équipe + échéancier',
      ],
    ],
  ],
  sectors: [
    [
      'Infrastructure et construction : quels thèmes d\'innovation comptent au Québec ?',
      [
        'Chantiers, approvisionnement, durabilité',
        'Référence à l\'étude encombrement minimal',
        'Cycles d\'infrastructure publique',
      ],
    ],
    [
      'Santé numérique et soins connectés : principaux risques de mise en œuvre ?',
      [
        'Flux clinique, gestion du changement, interopérabilité',
        'Loi sur la protection des renseignements personnels',
        'Équité',
      ],
    ],
    [
      'Technologie et ingénierie : comment conseillez-vous scale-ups vs grandes entreprises ?',
      [
        'Efficacité du capital vs gouvernance',
        'Talents',
        'Partenariats',
      ],
    ],
    [
      'Énergie et mobilité : tendances touchant les programmes publics ?',
      [
        'Électrification, équité, financement',
        'Engagement des ménages vulnérables',
        'Mesure',
      ],
    ],
    [
      'Développement socioéconomique : comment mesurez-vous le succès ?',
      [
        'Emplois, inclusion, impact régional',
        'Horizons longs',
        'Sensibilité politique',
      ],
    ],
    [
      'Savoir et éducation : planification stratégique pour les cégeps — nuances ?',
      [
        'Étudiants, personnel, gouvernement',
        'Plans de réussite',
        'Référence au cas collégial',
      ],
    ],
    [
      'Ville et immobilier : vitalité du centre-ville — quels leviers ?',
      [
        'Usage mixte, événements, sécurité, transport',
        'Benchmarks mondiaux',
        'Parties prenantes locales',
      ],
    ],
    [
      'Culture et hôtellerie : stratégies de reprise post-pandémie ?',
      [
        'Développement d\'audiences, événements hybrides',
        'Diversification du financement',
        'Modèles Place des Arts',
      ],
    ],
    [
      'Comment restez-vous à jour sur huit secteurs sans rester superficiel ?',
      [
        'Expertise en T + recherche rapide',
        'Habitudes du pilier Intelligence',
        'Réseau d\'experts',
      ],
    ],
    [
      'Quel secteur mèneriez-vous ici — et lequel apprendriez-vous vite ?',
      [
        'Force honnête + plan d\'apprentissage',
        'Combiner avec l\'écart du portefeuille Volume10',
        'Montée en charge à 90 jours',
      ],
    ],
  ],
  behavioral: [
    [
      'Parlez-nous d\'une fois où vous avez dirigé sans autorité formelle.',
      [
        'STAR',
        'Mesure de résultat',
        'Ce que vous referiez',
      ],
    ],
    [
      'Décrivez un projet raté et ce que vous en avez tiré.',
      [
        'Responsabilité',
        'Relation client préservée ?',
        'Correction de processus',
      ],
    ],
    [
      'Conflit avec un collègue sur la méthodologie — résolution ?',
      [
        'Données + intérêt client',
        'Compromis ou escalade',
        'Relation après coup',
      ],
    ],
    [
      'Échéance serrée — comment avez-vous priorisé ?',
      [
        'Impact vs effort',
        'Communication au client',
        'Garde-fous qualité',
      ],
    ],
    [
      'Rétroaction qui a changé votre style de conseil.',
      [
        'Citation précise',
        'Changement de comportement',
        'Résultat',
      ],
    ],
    [
      'Situation exigeant une prise de position éthique.',
      [
        'Principe',
        'Comment vous avez dit non',
        'Alternative proposée',
      ],
    ],
    [
      'Gestion d\'un sponsor exécutif difficile.',
      [
        'Empathie, limites, victoires',
        'Décisions documentées',
        'Escalade si nécessaire',
      ],
    ],
    [
      'Apprendre à pêcher vs faire le travail pour le client.',
      [
        'Renforcement des capacités',
        'Modèles, coaching',
        'Quand prendre du recul',
      ],
    ],
    [
      'Équipe multiculturelle — ajustement de communication.',
      [
        'Exemples Grèce + UE + Canada à distance',
        'Écoute active',
        'Synthèses écrites',
      ],
    ],
    [
      'Livrable dont vous êtes le plus fier — pourquoi ?',
      [
        'Impact client',
        'Crédit à l\'équipe',
        'Orientation action Volume10',
      ],
    ],
  ],
  relocation: [
    [
      'L\'offre exige 100 % en présentiel au Vieux-Montréal — pourquoi croire à votre engagement depuis la Grèce ?',
      [
        'Citer l\'annonce : présentiel non négociable pour vous — proximité boutique voulue',
        'Échéancier : départ Deloitte fin juillet, visa/logement en cours, passation équipe',
        'Parcours mobilité Taza→Fès→Marrakech→Athènes — pas première relocalisation',
      ],
    ],
    [
      'Quel est votre plan d\'autorisation de travail pour le Canada ?',
      [
        'Entrée express / catégories de permis recherchées',
        'Ouverture à une EIM appuyée par l\'employeur',
        'Échéancier honnête — ne pas bluffer',
      ],
    ],
    [
      'Pourquoi quitter la Grèce pour une boutique au Canada maintenant ?',
      [
        'Thèse de carrière : secteurs servis par Volume10',
        'Qualité des mandats vs marché local',
        'Préparation personnelle — fuir vs aller vers',
      ],
    ],
    [
      'Comment gérerez-vous l\'éloignement de la famille — risque de départ ?',
      [
        'Plan de soutien',
        'Mentalité période d\'essai',
        'Signaux d\'intention long terme',
      ],
    ],
    [
      'Avez-vous travaillé avec des clients nord-américains à distance ? Preuves.',
      [
        'Fuseaux horaires gérés',
        'Exemples de communication interculturelle',
        'Références si possible',
      ],
    ],
    [
      'Niveau de français — actuel et plan à 6 mois ?',
      [
        'Niveau CECR honnête',
        'Cours, partenaires de conversation, médias québécois',
        'Engagement croissance en français face au client',
      ],
    ],
    [
      '90 premiers jours sur site — que faites-vous avant le jour 1 ?',
      [
        'Quartiers pour le logement, réseau conseil montréalais',
        'Lire les rapports Intelligence',
        'Observer l\'équipe sur un mandat en cours',
      ],
    ],
    [
      'Comment réagissez-vous si nous avons besoin de vous en atelier client dans les 2 semaines suivant l\'embauche ?',
      [
        'Passeport prêt, flexibilité',
        'Préparation à distance puis vol — logistique réaliste',
        'Pas d\'hésitation',
      ],
    ],
    [
      'Coût de vie : les discussions de rémunération vous distrairont-elles ?',
      [
        'Adéquation au rôle d\'abord',
        'Recherche des fourchettes montréalaises',
        'Au-dessus du marché — valeur apportée',
      ],
    ],
    [
      'Que savez-vous du marché du talent conseil à Montréal ?',
      [
        'Concurrence pour les seniors bilingues',
        'Vous vous différenciez : international + secteur X',
        'Loyauté à la mission boutique',
      ],
    ],
    [
      'Attentes hybrides — de quoi avez-vous besoin vs ce dont nous avons besoin ?',
      [
        'Présence par défaut pour la cohésion d\'équipe',
        'Déplacements clients Québec si requis',
        'Limites claires',
      ],
    ],
    [
      'Pourquoi Volume10 plutôt qu\'une firme globale à Toronto qui pourrait sponsoriser le visa plus vite ?',
      [
        'Impact boutique, secteurs, adéquation culture « donner de l\'espace »',
        'Proximité des associés',
        'Ne pas les utiliser comme plan B',
      ],
    ],
  ],
  'small-team': [
    [
      'Notre équipe compte moins de 50 personnes — comment prospérez-vous sans le bench d\'une grande firme ?',
      [
        'Généraliste + expertise pointue',
        'Bâtir votre propre réseau d\'experts',
        'Documenter les méthodes pour réutilisation',
      ],
    ],
    [
      'Décrivez le port de plusieurs chapeaux sur un mandat.',
      [
        'GP + analyste + facilitateur',
        'Contrôle qualité',
        'Exemple',
      ],
    ],
    [
      'Face au client dès la première semaine — niveau de confort ?',
      [
        'Rituels de préparation',
        'Présence exécutive',
        'Demander du coaching',
      ],
    ],
    [
      'Comment éviter l\'épuisement quand tout le monde est à bout ?',
      [
        'Priorisation, dire non avec alternatives',
        'Habitudes de récupération',
        'Signaler les risques tôt',
      ],
    ],
    [
      'Bâtir de la PI pour une petite firme — que contribueriez-vous ?',
      [
        'Modèles, primers sectoriels, rédactions de cas',
        'Sujets Intelligence',
        'Mentorat juniors si applicable',
      ],
    ],
    [
      'Comment obtenir la rétroaction des associés dans une boutique plate ?',
      [
        'Points réguliers',
        'Revue de brouillons',
        'Rétro après les jalons',
      ],
    ],
    [
      'Vendre du travail de suivi sans être « vendeur ».',
      [
        'Valeur livrée visible',
        'Prochaine hypothèse cadrée',
        'Succès client d\'abord',
      ],
    ],
    [
      'Autonomie vs demander de l\'aide — équilibre ?',
      [
        'Quand décider seul',
        'Quand escalader',
        'Exemple de chaque',
      ],
    ],
  ],
  compensation: [
    [
      'Quelles sont vos attentes salariales pour Montréal ?',
      [
        'Fourchette recherchée pour le niveau consultant',
        'Rémunération totale : base + prime si applicable',
        'Flexibilité si la portée du rôle le justifie',
      ],
    ],
    [
      'Ils paient légèrement au-dessus du marché — comment en discuter sans vous sous-vendre ?',
      [
        'Ancrage sur la valeur et la portée',
        'Demander la fourchette, pas seulement le chiffre',
        'Au-delà du salaire : apprentissage, mandats, soutien visa',
      ],
    ],
    [
      'Comment réagissez-vous à « vous êtes en Grèce donc on paie moins » ?',
      [
        'Sur site = marché du travail local',
        'Refuser poliment l\'arbitrage géographique',
        'Focus sur les résultats',
      ],
    ],
    [
      'Avantages et soutien à la relocalisation — qu\'est-ce qui compte pour vous ?',
      [
        'Soutien juridique immigration',
        'Allocation de relocalisation réaliste',
        'Transition assurance maladie',
      ],
    ],
    [
      'Quand négocier vs quand accepter ?',
      [
        'Après adéquation mutuelle claire',
        'Étape de l\'offre écrite',
        'Plusieurs dimensions, pas seulement l\'argent',
      ],
    ],
  ],
  curveball: [
    [
      'Si nous ne vous embauchons pas, que devrions-nous améliorer dans notre processus ?',
      [
        'Réflexion constructive, pas amertume',
        'Montre l\'esprit consultant',
        'Sincère',
      ],
    ],
    [
      'Vendez-moi un stylo — mais pour la marque Volume10.',
      [
        'Métaphore « donner de l\'espace aux idées »',
        'Pas des caractéristiques commoditisées',
        'Spécifique au client',
      ],
    ],
    [
      'Quelle question espériez-vous que nous ne posions pas ?',
      [
        'Honnête + pivot vers une force',
        'Relocalisation ou français si applicable',
        'Bref',
      ],
    ],
    [
      'Un mot que vos collègues utilisent pour vous décrire — défendez-le.',
      [
        'Histoires à l\'appui',
        'Conscience de soi',
        'Humilité',
      ],
    ],
    [
      'Que feriez-vous le premier mois si les mandats sont calmes ?',
      [
        'Soutien au développement d\'affaires',
        'Contenu Intelligence',
        'Construction méthodologique',
      ],
    ],
  ],
}

/** Métadonnées par id de question : mandat lié + entrevue bilingue */
export const META_FR = {
  q001: { bilingualRequired: true },
  q003: { bilingualRequired: true },
  q004: { bilingualRequired: true },
  q007: { relatedCaseStudy: 'Stratégie d\'innovation pour le CUSM' },
  q031: { relatedCaseStudy: 'Stratégie d\'innovation pour le CUSM' },
  q032: { relatedCaseStudy: 'Encombrement minimal — Gestion innovante des chantiers' },
  q033: { relatedCaseStudy: 'Initiative de revitalisation de Griffintown' },
  q034: { relatedCaseStudy: 'Plan stratégique Transplant Québec 2023–2027' },
  q035: { relatedCaseStudy: 'Conception d\'une stratégie d\'engagement pour les ménages vulnérables' },
  q036: { relatedCaseStudy: 'Feuille de route d\'innovation du CHU de Québec' },
  q037: { relatedCaseStudy: 'La Table Ronde — Gastronomie québécoise' },
  q038: { relatedCaseStudy: 'Le retour au bureau — Travail en présentiel au Québec' },
  q039: { relatedCaseStudy: 'Quantum Ahead' },
  q040: { relatedCaseStudy: 'Plan stratégique Place des Arts 2023–2027' },
  q061: { bilingualRequired: true },
  q062: { bilingualRequired: true },
  q063: { bilingualRequired: true },
  q064: { bilingualRequired: true },
  q065: { bilingualRequired: true },
  q066: { bilingualRequired: true },
  q067: { bilingualRequired: true },
  q068: { bilingualRequired: true },
  q069: { bilingualRequired: true },
  q070: { bilingualRequired: true },
  q071: { bilingualRequired: true },
  q072: { bilingualRequired: true },
}

/** Reformulations et contexte entrevue — généré dans questions.ts */
export const VARIANTS_FR = {
  q001: {
    context: 'Question d\'ouverture culture firme — panel associé',
    interviewerVariants: [
      'Que signifie « donner de l\'espace aux idées » pour vous, concrètement ?',
      'Pourquoi cette signature plutôt qu\'un pitch classique de cabinet ?',
    ],
    difficulty: 'standard',
  },
  q061: {
    context: 'Comportemental — même question que candidature Volume Dix',
    interviewerVariants: [
      'Racontez un projet initié par vous-même — pas assigné.',
      'Et si le client n\'avait pas adopté Smartsheet ?',
    ],
    difficulty: 'followUp',
  },
  q071: {
    context: 'Recruteur — mobilité sensible',
    interviewerVariants: [
      'Pourquoi quitter la Grèce maintenant ?',
      'N\'est-ce pas un risque de recruter quelqu\'un en transition visa ?',
    ],
    difficulty: 'stress',
  },
  q096: {
    context: 'Question piège — cohérence parcours',
    interviewerVariants: ['Pourquoi Volume Dix et pas rester chez Deloitte ?'],
    difficulty: 'stress',
  },
  q011: {
    context: 'Pilier Stratégie — manager de mandat',
    interviewerVariants: ['Comment aborderiez-vous un plan stratégique pour un client public ?'],
    difficulty: 'standard',
  },
  q019: {
    context: 'Pilier Innovation',
    interviewerVariants: ['Donnez un exemple d\'innovation processus, pas produit.'],
    difficulty: 'standard',
  },
  q027: {
    context: 'Pilier Écosystème — client institutionnel',
    interviewerVariants: ['Comment mobiliser des parties prenantes externes ?'],
    difficulty: 'standard',
  },
  q033: {
    context: 'Intelligence / quantitatif',
    interviewerVariants: ['Comment combinez-vous données et jugement ?'],
    difficulty: 'followUp',
  },
  q039: {
    context: 'Étude de cas — tester lecture mandats Volume Dix',
    interviewerVariants: ['Quel mandat Volume Dix citeriez-vous pour un client santé ?'],
    difficulty: 'standard',
  },
  q083: {
    context: 'Petite équipe boutique',
    interviewerVariants: ['Comment gérez-vous l\'ambiguïté sans structure Big Four ?'],
    difficulty: 'standard',
  },
  q009: {
    context: 'Aligné offre mai 2026 — 4 consultants exécutifs',
    interviewerVariants: [
      'Pourquoi postuler maintenant alors que vous êtes encore en Grèce ?',
      'Qu\'attendez-vous des responsabilités rapides annoncées ?',
    ],
    difficulty: 'standard',
  },
  q075: {
    context: 'Recruteur — présentiel Vieux-Montréal (exigence offre)',
    interviewerVariants: [
      'Le 100 % présentiel vous convient-il vraiment ?',
      'Avez-vous déjà un plan logement / arrivée ?',
    ],
    difficulty: 'stress',
  },
  q010: {
    context: 'Croissance du cabinet — associé fondateur',
    interviewerVariants: [
      'Comment contribueriez-vous à la croissance dès la première année ?',
      'Que laisseriez-vous au cabinet si vous partez dans 3 ans ?',
    ],
    difficulty: 'followUp',
  },
  q094: {
    context: 'Profil atypique — l\'offre l\'encourage',
    interviewerVariants: [
      'Vous n\'avez pas fait HEC ou McKinsey — pourquoi vous quand même ?',
      'Qu\'apporte un parcours compliance à du conseil exécutif ?',
    ],
    difficulty: 'stress',
  },
  q100: {
    context: 'Clôture — pourquoi vous parmi les candidats',
    interviewerVariants: [
      'Si on ne retient qu\'une raison de vous embaucher ?',
      'Pourquoi vous plutôt qu\'un consultant Big Four classique ?',
    ],
    difficulty: 'stress',
  },
}
