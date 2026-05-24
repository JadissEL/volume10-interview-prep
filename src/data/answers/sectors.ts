import { A } from './_helpers'
import type { PersonalizedAnswer } from '../types'

/** Connaissance sectorielle q051–q060 */
export const sectorsAnswers: PersonalizedAnswer[] = [
  A(
    'q051',
    'DIRECT',
    'Infrastructure et construction au Québec : trois thèmes d\'innovation me semblent structurants — encombrement minimal, durabilité des approvisionnements, et cycles d\'infrastructure publique.',
    `Au Québec, l'innovation en infrastructure ne se résume pas à la technologie : c'est d'abord exécuter des grands chantiers avec moins de perturbation citoyenne. J'ai lu l'étude Volume Dix sur l'encombrement minimal — temps, coût, adoption d'innovations sur chantier, incitatifs entrepreneurs — et je vois le même enjeu qu'en secteur public : livrer sous contrainte politique avec des indicateurs clairs.

Deuxième thème : durabilité et chaîne d'approvisionnement — matériaux bas carbone, planification intégrée, résilience face aux retards. Troisième : les cycles d'infrastructure publique — appels d'offres, reddition de comptes, phases longues où la gouvernance compte autant que l'ingénierie.

Mon angle consultant : je ne prétends pas être ingénieure de chantier, mais j'apporte la rigueur parties prenantes et contrôles que j'ai pratiquée sur des financements publics multi-millions en Belgique — cartographier acteurs, risques, échéances, preuves. Avant un atelier client infrastructure, je ferais une recherche verticale sur les programmes québécois en cours et j'arriverais avec trois questions qui ouvrent l'espace aux idées, pas une liste générique.`,
    ['infrastructure', 'construction', 'innovation', 'Québec', 'encombrement', 'chantiers'],
    ['pp-public-funding', 'pp-42-matrix'],
    {
      volumeDixLink: 'Étude encombrement minimal — indicateurs chantier',
    },
  ),
  A(
    'q052',
    'DIRECT',
    'Santé numérique et soins connectés : les risques de mise en œuvre passent par le flux clinique, la gestion du changement, l\'interopérabilité — plus la Loi 25 et l\'équité d\'accès.',
    `J'ai vécu la santé côté compliance mondiale chez Deloitte — pas le détail clinique québécois, mais la même dynamique : une solution technologique échoue si le workflow clinique n'est pas respecté. Risque numéro un : perturber le soin pour « digitaliser » — adoption refusée par le terrain.

Deuxième risque : interopérabilité et gouvernance des données — silos, doubles saisies, responsabilité floue. Troisième : conformité et confiance — au Québec, la Loi sur la protection des renseignements personnels et l'équité d'accès ne sont pas des annexes ; elles conditionnent le déploiement.

Quatrième : gestion du changement — formation, champions cliniques, métriques d'usage réel, pas seulement de déploiement. J'ai contribué à la compliance d'une app mobile physiothérapie : leçon gravée — l'innovation utile est celle que le praticien utilise lundi. Volume Dix sur le CUSM pose exactement ces questions gouvernance + adoption ; c'est le registre où je peux contribuer dès J1 avec humilité sectorielle et rigueur QCER.`,
    ['santé', 'numérique', 'soins', 'connectés', 'risques', 'mise', 'œuvre'],
    ['pp-qcer', 'pp-smartsheet', 'pp-42-matrix'],
    {
      volumeDixLink: 'Innovation CUSM — gouvernance et adoption',
    },
  ),
  A(
    'q053',
    'DIRECT',
    'Scale-ups vs grandes entreprises en tech et génie : je conseille l\'efficacité du capital et la vitesse d\'exécution aux premières ; gouvernance, talents et partenariats structurés aux secondes.',
    `Une scale-up a besoin de focus : où investir le prochain dollar, quels partenariats accélèrent sans diluer la vision, comment recruter et retenir sans bureaucratie. Mon expérience Swikat marketplace m'a habituée à cette logique — trésorerie, coûts, décisions rapides avec peu de marge d'erreur.

Une grande entreprise ou un groupe international, c'est l'inverse : gouvernance, conformité multi-juridiction, alignement centrale–filiales, gestion des talents à l'échelle. Ma matrice 42 filiales compliance santé est un exemple : sans référentiel commun, chaque filiale « innove » dans son coin et le client central noie.

Le pont Volume Dix : traduire le vocabulaire startup (vitesse, MVP, capital) et le vocabulaire institution (risque, audit trail, parties prenantes). Je ne vends pas la même recette — je pose d'abord : quel est le vrai goulot, capital, talent ou gouvernance ? Puis je structure options avec conséquences mesurables.`,
    ['technologie', 'ingénierie', 'scale-ups', 'grandes', 'entreprises', 'conseillez'],
    ['pp-swikat', 'pp-42-matrix', 'pp-sponsorship-dd'],
    {
      volumeDixLink: 'Pont startup ↔ institution',
    },
  ),
  A(
    'q054',
    'DIRECT',
    'Énergie et mobilité : les programmes publics québécois pivotent sur l\'électrification, l\'équité, le financement — avec une obligation de mesurer l\'engagement des ménages vulnérables.',
    `Les tendances que je surveille : électrification des transports et des bâtiments, mais avec une question politique forte — qui paie, qui bénéficie, comment éviter que la transition creuse les inégalités. Les programmes publics ne peuvent plus promettre sans mesurer : taux d'adoption, abandon, coût par ménage, satisfaction des collectivités.

Deuxième axe : engagement des ménages vulnérables — information, accès, financement progressif — pas seulement des subventions pour les early adopters. Troisième : reddition de comptes — indicateurs d'impact, pas seulement de dépenses.

Mon expérience contrôles financement formation continue en Belgique — multi-millions d'euros, parties prenantes publiques, preuves d'impact — est transposable : structurer des programmes où l'équité et la mesure sont dans le design initial, pas ajoutées en fin de mandat. Volume Dix sur l'engagement énergétique des ménages va dans cette direction ; c'est le type de mandat où je combine analyse quantitative et sensibilité politique.`,
    ['énergie', 'mobilité', 'programmes', 'publics', 'électrification', 'équité'],
    ['pp-public-funding', 'pp-ect-encg'],
    {
      volumeDixLink: 'Programmes publics — équité et mesure',
    },
  ),
  A(
    'q055',
    'DIRECT',
    'Développement socioéconomique : je mesure le succès sur l\'emploi qualifié, l\'inclusion, l\'impact régional — avec des horizons longs et une sensibilité politique explicite.',
    `Le succès n'est pas un seul KPI vanity. J'utilise un cadre en trois niveaux : outputs (projets livrés, emplois créés à court terme), outcomes (revenus, rétention, diversité des bénéficiaires), impact (transformation régionale durable sur 5–10 ans). Les horizons longs imposent des indicateurs intermédiaires — sinon les décideurs abandonnent avant les effets.

Inclusion : qui est touché, qui est exclu, comment on corrige. Impact régional : / hors Montréal — le Québec est sensible aux disparités territoriales. Sensibilité politique : je documente les hypothèses et les trade-offs — pas de promesses floues.

En Belgique, j'ai contrôlé des subventions formation continue avec logique emploi + reddition de comptes. En conseil Volume Dix, je proposerais un tableau de bord exécutif : 5 indicateurs max, une page de décision, annexe preuves — le même format que mes livrables QCER « décision en trois lignes + détail ».`,
    ['développement', 'socioéconomique', 'mesurez', 'succès', 'emplois', 'inclusion'],
    ['pp-public-funding', 'pp-qcer'],
    {
      snippetIds: ['frag-socio-kpi', 'frag-strategy-executive-summary', 'card-pp-public-funding'],
      volumeDixLink: 'Indicateurs long terme — secteur public',
    },
  ),
  A(
    'q056',
    'DIRECT',
    'Planification stratégique pour les cégeps : nuances entre étudiants, personnel et gouvernement — avec des plans de réussite et une gouvernance collégiale spécifique.',
    `Un cégep n'est pas une entreprise : la planification stratégique doit concilier trois mandats — réussite étudiante, conditions de travail du personnel, attentes du gouvernement et des communautés. Nuance clé : les plans de réussite ne sont pas un appendice RH ; ils sont le cœur de la légitimité publique.

Deuxième nuance : gouvernance collégiale — décisions partagées, cycles politiques, financement par enveloppes. Troisième : tension innovation pédagogique vs capacité opérationnelle — numérique, stages, employabilité régionale.

Je réfère le cas collégial Volume Dix comme preuve que j'ai lu au-delà du titre : parties prenantes multiples, indicateurs de réussite, arbitrages budgétaires. Mon ENCG finance d'entreprise et mon expérience secteur public Belgique me donnent le binôme quanti-qualitatif pour structurer des scénarios — pas pour prétendre connaître chaque cégep, mais pour faciliter des ateliers où chaque voix compte.`,
    ['cégeps', 'planification', 'stratégique', 'éducation', 'réussite', 'collégial'],
    ['pp-public-funding', 'pp-ect-encg'],
    {
      volumeDixLink: 'Cas collégial — gouvernance multi-parties',
    },
  ),
  A(
    'q057',
    'DIRECT',
    'Vitalité du centre-ville : leviers usage mixte, événements, sécurité perçue, transport — benchmarkés avec des parties prenantes locales, pas copiés d\'ailleurs.',
    `Un centre-ville vivant combine quatre leviers : usage mixte (habiter, travailler, consommer culturellement sur le même territoire), programmation d'événements qui attirent au-delà du 9–17, sentiment de sécurité et propreté, mobilité active et transport collectif fiable. Griffintown et le centre-ville montréalais montrent qu'on ne revitalise pas avec un seul promoteur — c'est un écosystème.

Je benchmarkerais des villes comparables (taille, climat, francophonie) mais je refuserais la copie-coller : les parties prenantes locales — commerçants, artistes, résidents, ville — définissent le succès. Volume Dix sur Griffintown pose les bonnes questions économiques, sociales, mobilité, patrimoine.

Mon apport : cartographie stakeholders et indicateurs par phase — gains rapides vs transformation structurelle — comme j'ai structuré l'engagement 42 filiales autour d'un référentiel commun. Vitalité = mesurer fréquentation, diversité commerciale, temps passé, pas seulement les m² construits.`,
    ['centre-ville', 'vitalité', 'immobilier', 'leviers', 'Griffintown', 'usage'],
    ['pp-public-funding', 'pp-42-matrix'],
    {
      snippetIds: ['frag-centre-ville-ecosystem', 'card-pp-42-matrix', 'card-pp-public-funding'],
      volumeDixLink: 'Revitalisation Griffintown — écosystème local',
    },
  ),
  A(
    'q058',
    'DIRECT',
    'Culture et hôtellerie post-pandémie : développement d\'audiences, événements hybrides, diversification du financement — en s\'inspirant des modèles Place des Arts.',
    `La reprise n'est pas « revenir à 2019 ». Stratégies qui tiennent : développer des audiences plus jeunes et plus diversifiées, combiner présentiel et hybride sans cannibaliser l'expérience live, diversifier les revenus — mécénat, billetterie, partenariats, contenus.

Place des Arts illustre la tension indicateurs culturels vs commerciaux : fréquentation, communauté, mix de financement, objectifs artistiques. En hôtellerie, c'est occupation, RevPAR, mais aussi main-d'œuvre et expérience client — j'ai de l'expérience audit tourisme/hospitalité au Maroc.

Volume Dix sur la planification Place des Arts 2023–2027 montre comment un institutionnel articule mission artistique et durabilité financière. Mon angle : faciliter des ateliers où les dirigeants culturels et financiers partagent un langage — pas deux plans parallèles. Innovation ici = modèle économique + lien communauté, pas gadget tech.`,
    ['culture', 'hôtellerie', 'reprise', 'pandémie', 'Place', 'Arts', 'audiences'],
    ['pp-public-funding', 'pp-teleperformance'],
    {
      volumeDixLink: 'Plan stratégique Place des Arts',
    },
  ),
  A(
    'q059',
    'DIRECT',
    'Huit secteurs sans superficialité : expertise en T, recherche rapide structurée, habitudes Intelligence Volume Dix — plus un réseau d\'experts que j\'active, pas que j\'imite.',
    `Je ne prétends pas être experte en huit secteurs le jour un. Ma méthode : expertise en T — profondeur santé, public, compliance internationale ; largeur via recherche rapide et validation humaine. Avant chaque mandat : 2–3 heures de recherche verticale (secteur, acteurs Québec, dossiers Volume Dix) + horizontale (benchmark processus, indicateurs).

Habitudes pilier Intelligence : lire les rapports Volume Dix, sources primaires (budgets, rapports annuels, lois), synthèse une page « ce qui compte pour le dirigeant ». Agents IA pour accélérer la collecte — jamais pour remplacer le jugement ni citer sans vérifier.

Réseau d'experts : en boutique, je sais quand dire « je ne suis pas clinicienne / ingénieure, voici ce que j'apporte et voici qui complète ». Superficialité = parler sans limites ; profondeur = cadre clair, questions pertinentes, recommandation actionnable. C'est la promesse « donner de l'espace aux idées » avec rigueur.`,
    ['secteurs', 'superficiel', 'à jour', 'Intelligence', 'experts', 'huit'],
    ['pp-ai', 'pp-qcer', 'pp-public-funding'],
    {
      volumeDixLink: 'Pilier Intelligence — recherche structurée',
    },
  ),
  A(
    'q060',
    'DIRECT',
    'Secteur que je mènerais : santé et institutions publiques. Secteur où j\'apprends vite : infrastructure et culture — avec un plan 90 jours explicite.',
    `Force honnête : je mène santé et secteur public — 42 filiales compliance santé, QCER, app mobile, financement formation continue Belgique, reddition de comptes. C'est là que je peux challenger avec des faits dès la semaine 2.

J'apprends vite infrastructure/construction et culture/hôtellerie — j'ai lu encombrement minimal, Griffintown, Place des Arts ; expérience adjacente audit tourisme et contrôles publics. Plan 90 jours : semaines 1–4 shadow + vocabulaire client ; 5–8 contribution analyse sur dossier réel ; 9–12 ownership partiel workstream avec revue associé.

Je ne choisis pas selon ce qui « impressionne » en entrevue — je choisis selon l'écart portefeuille Volume Dix vs mes preuves. Là où je mène, j'apporte Smartsheet-like rigueur ; là où j'apprends, j'arrive avec questions sharp et humilité. C'est cohérent avec une boutique qui valorise l'initiative sans bluff sectoriel.`,
    ['secteur', 'mèneriez', 'apprendriez', 'santé', 'plan', '90 jours'],
    ['pp-qcer', 'pp-public-funding', 'pp-42-matrix', 'pp-relocation'],
    {
      volumeDixLink: 'Montée en charge sectorielle — honnêteté + plan',
      followUps: ['Et si le premier mandat est en énergie ?'],
    },
  ),
]
