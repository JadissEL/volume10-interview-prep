import type { ApplicationQuestion } from './types'

export const applicationQuestions: ApplicationQuestion[] = [
  {
    id: 'app-1',
    question:
      'Pouvez-vous décrire, selon votre compréhension, le type de services offerts par Volume Dix ?',
    yourSubmittedAnswer: `Volume Dix déploie une gamme de services de conseil de haut niveau, articulée autour de quatre piliers fondamentaux : définition de la vision, pilotage de la transformation, architecture de positionnement, alignement stratégique. Ces interventions s'appliquent à des enjeux industriels, institutionnels, créatifs et professionnels (santé, éducation, culture, juridique).`,
    optimizedInterviewAnswer: `Votre offre décrit exactement ce que je cherche : cabinet-conseil exécutif pour dirigeants — vision, transformation, positionnement, alignement — secteurs de la deep tech à la santé, clients Canada et Europe. Ce n’est pas une usine à slides : travail direct, recherche, analyse, animation, rédaction. Je relie chaque pilier à mon vécu : vision = cartographie 42 filiales ; transformation = Smartsheet + app mobile ; écosystème = due diligence sponsoring ; alignement = QCER. Je postule pour l’un des 4 postes en présentiel Vieux-Montréal parce que je veux tous ces types de mandats, pas un silo compliance.`,
    proofPointIds: ['pp-42-matrix', 'pp-smartsheet', 'pp-sponsorship-dd'],
    pillarMapping: ['Vision', 'Transformation', 'Positionnement', 'Alignement'],
  },
  {
    id: 'app-2',
    question:
      'Racontez un projet que vous avez initié par vous-même et dont vous êtes fier (professionnel ou autre).',
    yourSubmittedAnswer: `Mission 42 filiales : matrice centrale de conformité + Smartsheet pour automatiser échanges sur centaines d'échantillons mensuels. Impact humain et technique — processus fluide pour équipe et client.`,
    optimizedInterviewAnswer: `STAR oral : Situation — client santé mondial, 42 filiales, processus lourd. Tâche — réduire friction sans sacrifier QCER. Action — j'initie la matrice pays + config Smartsheet (non demandé au départ). Résultat — référentiel adopté par le client à ce jour, réunions fluidifiées, manager enthousiaste. Fierté humaine : équipe moins stressée ; fierté technique : outil vivant. C'est exactement l'intrapreneuriat que je veux chez Volume Dix.`,
    proofPointIds: ['pp-42-matrix', 'pp-smartsheet'],
    pillarMapping: ['Transformation', 'Innovation processus'],
  },
  {
    id: 'app-3',
    question:
      'Quelle est votre expertise ou expérience dans le raisonnement quantitatif ou qualitatif ?',
    yourSubmittedAnswer: `Quantitatif : données financières, tableaux de bord Excel/Qlik. Qualitatif : QCER, audit processus, recommandations stratégiques.`,
    optimizedInterviewAnswer: `Quantitatif : ENCG finance d'entreprise, finance des groupes ; Deloitte — modélisation datasets, dashboards Qlik/Excel, tests Python/R sur mandats. Qualitatif : QCER — revue livrables, cartographie risques, rédaction recommandations pour seniors, due diligence sponsoring. Je ne sépare pas les deux : une matrice conformité est qualitative dans la structure et quantitative dans le suivi volumes. Volume Dix Intelligence demande ce binôme.`,
    proofPointIds: ['pp-qcer', 'pp-ect-encg', 'pp-public-funding'],
    pillarMapping: ['Intelligence'],
  },
  {
    id: 'app-4',
    question:
      "Quel livre avez-vous lu récemment que vous recommanderiez à l'équipe de Volume Dix, et pourquoi ?",
    yourSubmittedAnswer: `The Compound Effect — petites actions rigoureuses et constantes génèrent des transformations massives et durables pour les dirigeants.`,
    optimizedInterviewAnswer: `The Compound Effect de Darren Hardy. Pourquoi pour Volume Dix : vos mandats transforment des organisations sur 3–5 ans — les dirigeants gagnent quand les équipes cumulent de micro-disciplines (revues qualité, rituels atelier, métriques simples). Mon exemple : Smartsheet n'était pas une révolution unique, c'était un rituel mensuel mieux outillé — effet composé sur 18 mois. Je peux en discuter 2 minutes sans spoiler tout le livre.`,
    proofPointIds: ['pp-smartsheet'],
  },
  {
    id: 'app-5',
    question:
      "Quel aspect du rôle de consultant chez Volume Dix risque de vous demander le plus d'adaptation au départ ?",
    yourSubmittedAnswer: `Passage solutions théoriques/standardisées → recommandations ultra-pragmatiques actionnables pour dirigeants. Culture résultat concret chez Volume Dix vs focus processus audit Deloitte.`,
    optimizedInterviewAnswer: `Votre offre dit explicitement : sortir de sa zone de confort, initiative, prise de risque, recommandations pragmatiques pour dirigeants. Mon adaptation : l'audit m'a entraînée à la conformité ; Volume Dix exige « qu'est-ce que le CEO fait lundi ? ». Plan : chaque livrable se termine par 3 actions priorisées ; shadow associés ; feedback après chaque atelier. Preuve : Smartsheet et matrice — j'ai déjà basculé du processus vers l'action. C'est le cœur de pourquoi je postule aux 4 postes consultants exécutifs.`,
    proofPointIds: ['pp-smartsheet', 'pp-qcer'],
  },
  {
    id: 'app-6',
    question: 'Souhaitez-vous ajouter un message ou une précision à votre candidature ?',
    yourSubmittedAnswer: `Parcours contrainte → opportunité ; pragmatisme ; relocalisation Grèce ; énergie pour Volume Dix ; relation confiance durable.`,
    optimizedInterviewAnswer: `Je ne fuis pas Deloitte — je forme mes remplaçants, départ fin juillet. Je choisis Montréal et Volume Dix pour mobilité et impact dirigeant. Mon parcours Taza → ECT → ENCG → Big Four prouve résilience. Investir en moi = personne qui apprend Visio en 24h, crée des outils adoptés par clients mondiaux, parle FR/EN/AR, et livre à l'heure. Je veux une relation long terme, pas un pivot tactique.`,
    proofPointIds: ['pp-relocation', 'pp-visio-24h', 'pp-42-matrix'],
  },
]
