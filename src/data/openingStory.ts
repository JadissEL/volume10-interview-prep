/** Histoire d'ouverture entrevue — à placer avant les questions classiques */

export interface OpeningStoryBlock {
  id: string
  label: string
  content: string
  durationSec?: number
}

export const openingStoryFraming = {
  introLine:
    'Je sais que vous avez toutes les informations sur ma carrière dans mon CV — formations, Deloitte, langues. Plutôt que de les répéter, j’aimerais partager une petite histoire pour que vous me connaissiez mieux.',
  transition:
    'Cette histoire, ce n’est pas mon CV — c’est la façon dont je travaille quand la situation est ambiguë et que personne n’a encore la « bonne » procédure.',
} as const

export const openingStoryBlocks: OpeningStoryBlock[] = [
  {
    id: 'situation',
    label: 'Situation',
    durationSec: 25,
    content:
      'Il y a dix-huit mois, sur un mandat compliance pour un client santé mondial : 42 filiales, chacune avec ses règles locales, des centaines d’échantillons chaque mois, et une équipe qui passait plus de temps à s’aligner qu’à décider. Personne ne m’avait demandé de tout réorganiser.',
  },
  {
    id: 'action',
    label: 'Action (initiative)',
    durationSec: 35,
    content:
      'J’ai cartographié les exigences par pays dans une matrice unique — notre langage commun entre centrale, filiales et client. Puis j’ai configuré Smartsheet pour que les échanges quotidiens ne soient plus du courrier informel, mais un processus que l’équipe pouvait tenir à l’heure, mois après mois. Le client utilise encore ce référentiel aujourd’hui.',
  },
  {
    id: 'proof-visio',
    label: 'Preuve — zone de confort',
    durationSec: 15,
    content:
      'La même année, une manager m’a demandé une cartographie Visio pour le lendemain — outil que je ne connaissais pas. J’ai livré le matin suivant. Comme pour la matrice : je n’avais pas « le droit » d’inventer la solution, mais le mandat exigeait qu’on avance.',
  },
  {
    id: 'result',
    label: 'Résultat',
    durationSec: 20,
    content:
      'Résultat humain : moins de stress en réunion, équipe plus sereine. Résultat professionnel : Consultant L1 à QCER en dix-huit mois, co-gestion d’un projet à six, confiance du manager pour des livrables sensibles. Ce n’était pas de la théorie — c’était du travail exécutif sous pression.',
  },
  {
    id: 'bridge-offer',
    label: 'Lien avec Volume Dix',
    durationSec: 30,
    content:
      'C’est exactement ce que décrit votre offre : défis qui se succèdent, ambiguïté, travail direct avec des dirigeants, recherche et analyse, animation, rédaction, initiative et prise de risque. Je quitte la Grèce cet été pour des raisons administratives — pas par insatisfaction — et je choisis Montréal, 100 % en présentiel au Vieux-Montréal, parce que je veux cette proximité boutique, pas une autre couche hiérarchique.',
  },
  {
    id: 'close',
    label: 'Clôture',
    durationSec: 15,
    content:
      'Le CV dit où j’ai été. Cette histoire dit comment je crée de la valeur pour des dirigeants sous pression — et pourquoi je suis convaincue d’être la bonne personne pour l’un de vos quatre postes, dès les premières semaines.',
  },
]

/** Script oral complet ~90–120 s */
export const openingStoryFullScript = `${openingStoryFraming.introLine}

${openingStoryBlocks.map((b) => b.content).join('\n\n')}

${openingStoryFraming.transition}`

/** Version 30 secondes si le panel presse le temps */
export const openingStoryElevator30s = `CV en main, je résume en une image : sur un mandat santé 42 filiales, j’ai créé une matrice et Smartsheet que le client utilise encore — sans qu’on me l’ait demandé. L1 à QCER en dix-huit mois. Je viens à Volume Dix pour l’ambiguïté, le présentiel Vieux-Montréal et les décisions dirigeants — pas pour répéter mon parcours ligne par ligne.`

/** Phrases « pourquoi meilleure candidate » à placer si relance */
export const whyBestCandidateBullets = [
  'Initiative prouvée avant promotion : matrice + Smartsheet adoptés par un client mondial',
  'Binôme analytique quanti (ECT, ENCG, Qlik, Python/R) + qualitatif (QCER, due diligence, rédaction)',
  'Expérience dirigeants-adjacente : livrables seniors, sponsoring, secteur public Belgique',
  'Francophone native + anglais professionnel — marchés FR/BE et mandats internationaux',
  'Profil atypique assumé : audit, banque, marketplace, compliance — pas un clone Big Four',
  'Mobilité volontaire Montréal, présentiel, passation Deloitte fin juillet — engagement long terme',
  'Culture performance : jamais en retard ; The Compound Effect comme philosophie de rigueur cumulative',
] as const
