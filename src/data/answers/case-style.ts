import { A } from './_helpers'
import type { PersonalizedAnswer } from '../types'

/** Études de cas q039–q050 — format CASE (clarification, approche, ancre) */
export const caseStyleAnswers: PersonalizedAnswer[] = [
  A(
    'q039',
    'CASE',
    'Deux premières semaines au CUSM : écouter les sites, trier le portefeuille d\'innovation, lancer un pilote mesurable — pas un plan directeur en slide.',
    `Questions de clarification :
1. Quels projets d'innovation sont déjà financés mais bloqués à l'adoption terrain — et où exactement (site, service, rôle) ?
2. Qui décide réellement du « go » sur site : direction médicale, gestion, TI, ou les trois en parallèle ?
3. Quels critères de succès le comité exécutif retiendrait-il dans 90 jours — temps gagné, satisfaction clinique, conformité ?
4. Y a-t-il des champions identifiés par site, ou l'innovation est-elle perçue comme « projet du siège » ?

Approche (semaines 1–2) :
1. Cartographier parties prenantes et parcourir 2–3 sites — entrevues courtes, pas audit lourd.
2. Inventorier le portefeuille : idée / pilote / déployé / abandonné — avec barrières d'adoption (formation, workflow, données).
3. Rédiger un mémo diagnostic une page : 3 goulots, 2 quick wins, 1 pilote recommandé avec critères d'arrêt ou de scale.
4. Proposer gouvernance légère : sponsor exécutif, owner opérationnel par site, revue bihebdomadaire 30 min.

Ancre : sur un mandat compliance santé à 42 filiales, j'ai vu que l'innovation échoue sans traduction locale — ma matrice et Smartsheet ont accéléré l'adoption parce qu'on a d'abord écouté le terrain, sans prétendre connaître le détail du dossier Volume Dix au CUSM.`,
    ['CUSM', 'innovation', 'semaines', 'adoption', 'sites'],
    ['pp-42-matrix', 'pp-smartsheet', 'pp-qcer'],
    {
      volumeDixLink: 'Études de cas santé — adoption innovation',
      followUps: ['Quel mandat Volume Dix citeriez-vous pour un client santé ?'],
    },
  ),
  A(
    'q040',
    'CASE',
    'Griffintown : avant toute recommandation, je clarifie la vision économique, sociale, la mobilité et qui paie quoi — en équilibre promoteurs vs communauté.',
    `Questions de clarification :
1. Quel est l'objectif prioritaire : densification résidentielle, emplois, patrimoine industriel, ou mix explicite avec pondération ?
2. Quels indicateurs de succès à 5–10 ans — loyers abordables, fréquentation commerces, mobilité active, satisfaction résidents ?
3. Qui sont les propriétaires fonciers clés et quels leviers la Ville contrôle réellement (zonage, incitatifs, transport) ?
4. Quels irritants communautaires actuels dominent — bruit, gentrification, services, sécurité ?
5. Y a-t-il des phases déjà budgétées, ou faut-il structurer gains par vague (infrastructure → animation → ancrage) ?

Approche :
1. Cadrer le mandat en quatre axes : économique, social, mobilité, patrimoine — une page par axe avec hypothèses.
2. Ateliers parties prenantes : promoteurs, OBNL, résidents, mobilité — cartographier intérêts et trade-offs.
3. Identifier quick wins visibles (espaces publics, programmation culturelle temporaire) vs investissements long terme.
4. Proposer feuille de route par phases avec métriques et risques (déplacement, exclusion).

Ancre : en financement public en Belgique, j'ai appris qu'un plan crédible commence par des questions sur qui bénéficie et qui assume le risque — même logique ici, sans prétendre maîtriser le dossier Griffintown de Volume Dix.`,
    ['Griffintown', 'revitaliser', 'questions', 'Ville', 'promoteurs'],
    ['pp-public-funding', 'pp-42-matrix'],
    {
      volumeDixLink: 'Écosystème urbain — équilibre parties prenantes',
    },
  ),
  A(
    'q041',
    'CASE',
    'Plan Transplant Québec 2023–2027 : aligner mission et capacités, modéliser la demande, puis séquencer gouvernance, ressources et mise en œuvre.',
    `Questions de clarification :
1. Quelle est la définition opérationnelle du succès — délais d'attente, taux de dons, équité régionale, qualité post-transplant ?
2. Quelles contraintes réglementaires ou ententes fédérales/provinciales verrouillent certaines options ?
3. Quelles données de demande et d'offre sont fiables aujourd'hui — et quels écarts de qualité entre régions ?
4. Qui doit « posséder » le plan côté clinique vs administratif — et quel niveau de détail le conseil d'administration attend ?

Approche :
1. Phase 0 — alignement mission : entrevues direction, cliniciens, partenaires (CHU, ONT, MSSS).
2. Diagnostic capacité/demande : scénarios bas, médian, stress — avec hypothèses explicites.
3. Ateliers parties prenantes pour valider priorités stratégiques et séquence 2023–2027.
4. Livrables : vision + piliers, feuille de route par trimestre/année, modèle de gouvernance et indicateurs de suivi.
5. Mémo exécutif trois pages avant l'annexe — décision, risque résiduel, prochaine étape.

Ancre : coordonner 42 filiales autour d'exigences communes m'a habituée à structurer des plans multi-acteurs en santé — je transpose cette rigueur à Transplant Québec sans revendiquer la connaissance interne du mandat Volume Dix.`,
    ['Transplant', 'Québec', '2023', '2027', 'plan'],
    ['pp-qcer', 'pp-42-matrix', 'pp-public-funding'],
    {
      volumeDixLink: 'Planification institution santé publique',
    },
  ),
  A(
    'q042',
    'CASE',
    'Engagement des ménages vulnérables qui stagne : je diagnostique d\'abord confiance, langue et bureaucratie — puis je repense le parcours avec des partenaires de canal crédibles.',
    `Questions de clarification :
1. Quel programme visé exactement — tarification sociale, efficacité énergétique, paiement différé — et où le taux de conversion chute ?
2. Qui sont les ménages « vulnérables » dans vos données : revenu, logement, langue, rural/urbain ?
3. Quels canaux ont déjà été testés (courrier, web, OBNL, municipalités) et avec quels coûts d'acquisition ?
4. Y a-t-il des barrières de confiance envers le distributeur — historique de coupure, complexité du formulaire, stigmatisation ?
5. Quel objectif réglementaire ou réputationnel fixe l'échéance — plaintes, cibles MSSS, pression médiatique ?

Approche :
1. Parcours client actuel : cartographie touchpoints, délais, taux d'abandon par étape.
2. Entrevues qualitatives ciblées (via partenaires communautaires) — pas seulement sondage interne.
3. Benchmark programmes comparables et partenaires de canal (CLSC, OBNL énergie, associations de quartier).
4. Repenser le parcours : simplification, langue, preuve revenu allégée, relance humaine.
5. Pilote géographique ou segment avec KPI avant déploiement large.

Ancre : sur des mandats publics et compliance, j'ai vu que l'adhésion stagne quand le processus parle aux régulateurs mais pas aux utilisateurs — même réflexe ici, sans prétendre connaître les chiffres internes du distributeur.`,
    ['ménages', 'vulnérables', 'distributeur', 'énergie', 'engagement'],
    ['pp-public-funding', 'pp-42-matrix'],
    {
      volumeDixLink: 'Diagnostic engagement citoyen',
    },
  ),
  A(
    'q043',
    'CASE',
    'Plan directeur innovation CHU de Québec : trois livrables prioritaires — gouvernance + portefeuille, alignement clinique-administratif, carte de financement et indicateurs.',
    `Questions de clarification :
1. L'innovation visée est-elle clinique, administratif, numérique, ou les trois — avec quel budget enveloppe ?
2. Existe-t-il déjà un comité innovation formel — ou faut-il le créer et lui donner des pouvoirs réels ?
3. Quels projets sont en concurrence pour les mêmes ressources TI ou cliniques ?
4. Quels indicateurs le CA retient-il aujourd'hui — et lesquels manquent pour arbitrer le portefeuille ?

Approche :
1. Livrable 1 — Modèle de gouvernance et portefeuille : critères d'entrée/sortie, pipeline idée→pilote→scale, comité avec mandat clair.
2. Livrable 2 — Cadre d'alignement clinique + administratif : owners par domaine, règles de priorisation, liens avec recherche et formation.
3. Livrable 3 — Carte de financement et indicateurs : sources (ministère, recherche, partenariats), KPI adoption et impact patient.
4. Séquencer livraison sur 90 jours : gouvernance d'abord, portefeuille ensuite, financement en parallèle.

Ancre : en compliance santé multi-sites, j'ai structuré gouvernance et indicateurs avant d'ajouter des outils — même discipline pour le CHU, sans prétendre connaître le fichier Volume Dix ligne par ligne.`,
    ['CHU', 'Québec', 'innovation', 'livrables', 'directeur'],
    ['pp-qcer', 'pp-smartsheet', 'pp-42-matrix'],
    {
      volumeDixLink: 'Innovation institutionnelle santé',
    },
  ),
  A(
    'q044',
    'CASE',
    'Secteur viticole québécois : dimensionner l\'opportunité via marché, réglementation, tourisme et options de mise en marché — avec scénarios explicites.',
    `Questions de clarification :
1. Quelle est la définition du « secteur » — vignobles, transformateurs, tourisme viticole, export ?
2. Quel horizon — 3 ans tactique ou 10 ans stratégique — et quel niveau de certitude attendu ?
3. Quelles contraintes SAQ, AOP/IGP, quotas ou règles d'importation structurent la croissance ?
4. Qui est le client cible prioritaire — touriste local, restauration, export, vente directe ?
5. Quels acteurs détiennent les données fiables — IVQ, MAPAQ, Statistique Canada, opérateurs privés ?

Approche :
1. Taille marché actuel : volume, valeur, marge par canal — top-down et bottom-up pour triangulation.
2. Analyse réglementaire et barrières (licences, distribution, étiquetage, climat).
3. Cartographie concurrentielle : Québec vs Ontario, imports, positionnement prix/qualité.
4. Lien tourisme et ancrage territorial — elasticité demande, saisonnalité.
5. Scénarios croissance (bas/médian/haut) avec leviers : capacité vignoble, mise en marché, partenariats hôteliers.

Ancre : dimensionner un secteur, c'est comme agréger des exigences hétérogènes sur 42 filiales — rigueur ENCG + expérience finance publique Belgique pour croiser données publiques et jugement, sans revendiquer l'étude viticole Volume Dix.`,
    ['viticole', 'québécois', 'croissance', 'dimensionnez', 'opportunité'],
    ['pp-ect-encg', 'pp-public-funding'],
    {
      volumeDixLink: 'Dimensionnement sectoriel',
    },
  ),
  A(
    'q045',
    'CASE',
    'Plan directeur TI public : équilibrer patrimoine et infonuagique via risque, coût total, talents — migration par phases et cybersécurité non négociable.',
    `Questions de clarification :
1. Quel est l'inventaire applicatif critique — et quelles dépendances legacy bloquent le cloud ?
2. Quelles exigences souveraineté, résidence des données ou loi 25 imposent des contraintes ?
3. Quel niveau de maturité cybersécurité aujourd'hui — incidents récents, audits, compétences internes ?
4. Budget capex/opex sur 5 ans — et appétit au changement des directions métier ?
5. Y a-t-il des projets cloud déjà lancés en silo — à harmoniser ou arrêter ?

Approche :
1. Cartographie applications : criticité, risque, coût, dette technique — matrice 2×2 hébergement cible.
2. Scénarios migration : lift-and-shift vs refonte — par vagues avec critères go/no-go.
3. Modèle coût total 5 ans : patrimoine vs cloud hybride vs cloud cible.
4. Plan talents et gouvernance TI : PMO, architecture, sécurité, change management.
5. Feuille de route avec jalons cybersécurité à chaque phase.

Ancre : en organismes publics et compliance, j'ai arbitré entre standard central et réalité locale — même posture pour patrimoine vs infonuagique, sans prétendre connaître l'architecture interne du client Volume Dix.`,
    ['directeur', 'organisme', 'public', 'patrimoine', 'infonuagique'],
    ['pp-public-funding', 'pp-qcer'],
    {
      volumeDixLink: 'Transformation TI secteur public',
    },
  ),
  A(
    'q046',
    'CASE',
    'Encombrement minimal sur chantiers : je retiens des KPI temps, coût, perturbation communautaire, adoption innovation et incitatifs entrepreneurs — liés à la décision.',
    `Questions de clarification :
1. Quelle définition opérationnelle d'« encombrement minimal » — occupation voie, délais, plaintes, CO₂ ?
2. Quels types de chantiers — voirie, aqueduc, bâtiment — et quelles variances de performance actuelles ?
3. Les entrepreneurs sont-ils mesurés aujourd'hui — bonus/malus, ou seulement pénalités contractuelles ?
4. Quelles innovations (modularisation, horaires décalés, coordination utilities) sont déjà testées ?
5. Quel est le seuil de perturbation acceptable pour citoyens et commerces — par quartier ?

Approche :
1. Définir arbre KPI : résultat (temps/coût/perturbation) → conducteurs (planification, coordination, adoption).
2. KPI temps : durée occupation, respect fenêtre, retards récurrents par type travaux.
3. KPI coût : dépassement budget, coût social indirect (commerce, mobilité).
4. KPI communauté : plaintes, accessibilité PMR, communication proactive.
5. KPI innovation/adoption : % chantiers avec méthode basse perturbation, taux bonus entrepreneurs.

Ancre : sur des mandats à forte contrainte opérationnelle, j'ai appris que les KPI utiles sont ceux qui changent un comportement lundi — même rigueur ici, sans prétendre maîtriser le détail de l'étude encombrement Volume Dix.`,
    ['encombrement', 'chantiers', 'indicateurs', 'minimal'],
    ['pp-public-funding', 'pp-42-matrix'],
    {
      volumeDixLink: 'Infrastructure — mesure d\'impact',
    },
  ),
  A(
    'q047',
    'CASE',
    'CCOMTL avec Santé Québec : cartographier cliniciens, ministère, patients — clarifier proposition de valeur et preuves avant tout positionnement.',
    `Questions de clarification :
1. Quel mandat précis du CCOMTL dans le réseau — coordination oncologique, accès, recherche, qualité ?
2. Quelles attentes explicites de Santé Québec — gouvernance, indicateurs, financement, territorialité ?
3. Qui sont les influenceurs clés côté clinique (chefs de service, comités tumoraux) vs administratif ?
4. Quelle douleur patient ou délai d'accès le positionnement doit-il résoudre en premier ?
5. Quelles preuves existent déjà — données, témoignages, comparables hors Québec ?

Approche :
1. Carte parties prenantes : pouvoir vs intérêt — Santé Québec, MSSS, CHU, médecins, patients, OBNL.
2. Proposition de valeur par audience : pour Santé Québec (alignement réseau), pour cliniciens (charge/clarté), pour patients (accès).
3. Inventaire preuves : outcomes, capacité, modèle de gouvernance, financement durable.
4. Messages différenciants vs statu quo — 3 piliers testables en entrevue stakeholder.
5. Plan d'engagement 90 jours : séquences d'ateliers, quick wins, indicateurs de confiance.

Ancre : cartographier 42 filiales m'a appris que le positionnement institutionnel tient quand chaque acteur voit son gain — je transpose cette logique écosystème au CCOMTL sans prétendre connaître les négociations internes Volume Dix.`,
    ['CCOMTL', 'Santé', 'Québec', 'parties', 'prenantes'],
    ['pp-42-matrix', 'pp-qcer', 'pp-sponsorship-dd'],
    {
      volumeDixLink: 'Positionnement écosystème santé',
    },
  ),
  A(
    'q048',
    'CASE',
    'Place des Arts : les indicateurs culturels diffèrent — fréquentation seule ne suffit pas ; il faut communauté, mix de financement et tension artistique vs commercial.',
    `Questions de clarification :
1. Quelle mission prioritaire — excellence artistique, accessibilité, ancrage montréalais, rayonnement ?
2. Comment le CA définit-il le succès aujourd'hui — billetterie, dons, subventions, impact social ?
3. Quels conflits objectifs artistiques vs commerciaux sont déjà visibles (programmation, sponsors) ?
4. Quels partenaires publics/privés conditionnent le mix de financement sur 5 ans ?
5. Faut-il des KPI qualitatifs (diversité programmation, artistes émergents) en plus du quantitatif ?

Approche :
1. Grille KPI en trois familles : fréquentation et reach, engagement communauté (éducation, accessibilité), santé financière (mix revenus).
2. KPI culturels spécifiques : diversité offre, résidence artistique, satisfaction publics sous-représentés.
3. KPI partenaires : rétention mécènes, subventions renouvelées, co-programmation.
4. Tableau de bord avec tension explicite artistique/commercial — pas moyenne unique.
5. Aligner indicateurs au plan stratégique 2023–2027 par pilier.

Ancre : en financement public Belgique, j'ai vu que les indicateurs « culture » exigent qualitatif + quantitatif — même approche pour Place des Arts, sans prétendre connaître le plan stratégique Volume Dix mot pour mot.`,
    ['Place', 'Arts', 'stratégique', 'culturels', 'indicateurs'],
    ['pp-public-funding', 'pp-ect-encg'],
    {
      volumeDixLink: 'Plan stratégique culturel',
    },
  ),
  A(
    'q049',
    'CASE',
    'Mandat 2 M$ chez une firme de 40 personnes : j\'estime 4–7 ETP consultants + supervision associée, avec marge risque — jamais 100 % de l\'effectif.',
    `Questions de clarification :
1. Quelle durée et quelle intensité — 6 mois à temps plein ou 18 mois avec ramp-up ?
2. Quel mix senior/junior implicite — ou exigence associé à 20 %+ du temps ?
3. Le 2 M$ est-il honoraires bruts, ou inclut sous-traitance, déplacements, outils ?
4. Combien de mandats parallèles la firme absorbe déjà — capacité réelle vs nominale ?
5. Quel profil de risque — client public, données sensibles, échéances réglementaires ?

Approche :
1. Hypothèse taux journalier boutique : fourchette réaliste × jours facturables = enveloppe consommée.
2. Structure type : 1 associé/directeur (10–20 %), 1 manager (40–60 %), 2–4 consultants (70–100 %), 0–1 analyste.
3. Règle pouce : mandat 2 M$ ≈ 4–7 ETP moyens sur 12 mois — ajusté durée et marge 15–25 %.
4. Réserver capacité non facturable : QA, direction mandat, contingence scope.
5. Valider faisabilité vs pipeline firme 40 personnes — ne pas sur-allouer >25–30 % effectif.

Ancre : co-gérer un mandat santé à six personnes chez Deloitte m'a appris le levier réel vs effectif nominal — j'applique la même prudence d'estimation, sans prétendre connaître la grille tarifaire interne Volume Dix.`,
    ['consultants', 'mandat', 'personnes', 'estimation', 'firme'],
    ['pp-qcer', 'pp-ect-encg'],
    {
      volumeDixLink: 'Staffing mandat boutique',
    },
  ),
  A(
    'q050',
    'CASE',
    '24 h pour une offre client santé : hypothèse centrale, 3 insights publics, phase 0 proposée, équipe et échéancier — livrable exécutif, pas un RFP de 40 pages.',
    `Questions de clarification :
1. Quel est le problème client en une phrase — gouvernance, adoption, planification, positionnement ?
2. Quelle deadline réelle de soumission — 24 h ou 24 h ouvrables avec extensions possibles ?
3. Quels critères de sélection pèsent le plus — expérience santé, méthode, prix, équipe ?
4. Avons-nous un contact interne ou seulement documents publics ?
5. Quel niveau d'engagement prix en phase 0 — forfait découverte vs fourchette honoraires ?

Approche :
1. Heures 0–4 : lecture RFP + recherche publique (rapports, communiqués, organigramme) — 3 insights actionnables.
2. Heures 4–10 : hypothèse de mandat, périmètre phase 0 (2–4 semaines), livrables, risques.
3. Heures 10–16 : équipe proposée (rôles, % temps), calendrier, méthode Volume Dix en une page.
4. Heures 16–22 : rédaction offre — executive summary, approche, phase 0, références transposables (sans sur-vendre).
5. Heures 22–24 : relecture associé, cohérence chiffres, envoi.

Ancre : Visio maîtrisé en 24 h et compliance santé 42 filiales m'ont habituée à livrer sous pression avec rigueur — je mobilise la même discipline pour une offre santé, sans prétendre connaître le client cible du mandat Volume Dix.`,
    ['offre', 'client', 'santé', 'préparer', 'plan'],
    ['pp-visio-24h', 'pp-qcer', 'pp-42-matrix'],
    {
      volumeDixLink: 'Réponse RFP express santé',
    },
  ),
]
