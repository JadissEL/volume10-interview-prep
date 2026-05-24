import type { EdgeProfile, StarStory } from './types'

export const defaultEdgeProfile: EdgeProfile = {
  visaStatus:
    'Citoyenne marocaine — plus de 30 mois d’attente permis de séjour en Grèce ; mobilité restreinte',
  relocationDate: 'Disponible pour relocalisation Montréal — départ Deloitte fin juillet',
  frenchLevel: 'Français natif — anglais professionnel complet',
  frenchPlan:
    'Renforcer le registre conseil exécutif en français québécois : lectures sectorielles, simulations d’ateliers, pairs francophones chez Volume Dix',
  pitchNotes: `OUVERTURE (90 s) : « Je sais que vous avez mon CV… » → histoire 42 filiales + matrice + Smartsheet (initiative) + Visio 24h (zone de confort) → lien offre Volume Dix (4 consultants exécutifs, présentiel Vieux-Montréal, ambiguïté, dirigeants).

Corps : Taza → ECT → ENCG → Deloitte 24 mois. Je quitte la Grèce (administratif, fin juillet, passation). Je choisis Volume Dix pour travail direct dirigeants, recherche/analyse/rédaction, initiative — pas Big Four process.

Preuves : matrice 42 filiales, Smartsheet, QCER, public Belgique, due diligence sponsoring, Swikat, FR/EN natif/pro.`,
}

export const defaultStarStories: StarStory[] = [
  {
    id: 'star-1',
    title: 'Initiative — Matrice conformité & Smartsheet (42 filiales)',
    situation:
      'Mission compliance pour un client santé mondial avec 42 filiales : processus lourd, allers-retours constants sur les exigences locales.',
    task:
      'Réduire la friction entre équipe centrale, filiales et client tout en maintenant la qualité QCER.',
    action:
      'J’ai initié une matrice centrale cartographiant les règles par pays, puis proposé et configuré Smartsheet pour automatiser les échanges sur des centaines d’échantillons mensuels.',
    result:
      'Réunions plus fluides, référentiel adopté par le client à ce jour, charge mentale réduite pour l’équipe — mon manager a salué la proactivité.',
  },
  {
    id: 'star-2',
    title: 'Qualité & leadership — Passage QCER',
    situation:
      'Évolution de Consultant L1 à L3 sur mandat AML/compliance santé à fort enjeu réglementaire.',
    task:
      'Garantir la qualité des livrables et devenir référence QCER au sein de l’équipe.',
    action:
      'Renforcement des revues qualité, frameworks de contrôles internes, support Task Force et formation des recrues.',
    result:
      'Nomination QCER ; confiance du manager pour co-gérer le projet avec une équipe de six personnes.',
  },
  {
    id: 'star-3',
    title: 'Apprentissage rapide — Visio en 24h',
    situation:
      'Une manager d’une autre équipe demande une livraison cartographiée sous Visio le lendemain — outil inconnu pour moi.',
    task: 'Produire un livrable processus de qualité executive-ready sous 24h.',
    action:
      'Formation intensive autonome sur Visio, livraison le matin suivant avec cartographie claire.',
    result:
      'Livrable validé ; perception durable de ma capacité à monter en compétence sur n’importe quel outil rapidement.',
  },
]
