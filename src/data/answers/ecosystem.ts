import { A } from './_helpers'
import type { PersonalizedAnswer } from '../types'

export const ecosystemAnswers: PersonalizedAnswer[] = [
  A(
    'q027',
    'DIRECT',
    'Cartographier un écosystème d\'infrastructure ? Même méthode que mes 42 filiales — acteurs, incitatifs, pouvoir, flux — puis un plan d\'engagement par cluster.',
    `Pour un projet d'infrastructure — chantier innovant, encombrement minimal — je ne commence pas par un organigramme. Je cartographie en quatre couches : acteurs (qui décide, qui subit, qui bloque), incitatifs (coût, délai, réputation, conformité), pouvoir (formel vs informel — maire, entrepreneur, riverains, syndicats) et flux (information, argent, matériaux, plaintes).

Chez Deloitte, j'ai fait exactement ça sur un écosystème réglementaire : 42 filiales, centrale, client, régulateurs. J'ai produit une matrice unique — règle / pratique locale / owner / risque / prochaine action — puis Smartsheet pour les flux mensuels. Ce n'était pas de l'infrastructure, mais la logique est identique : voir où l'écosystème s'étouffe et où intervenir.

Pour un chantier Volume Dix, j'ajouterais l'angle encombrement minimal : cluster riverains (bruit, accès), cluster livraisons (fenêtres horaires), cluster autorités (permis, inspections). Plan d'engagement par cluster — pas une réunion géante — avec indicateurs partagés : plaintes, retards, conformité site. Transposable depuis mon référentiel multi-pays : une carte vivante, pas un PowerPoint figé.`,
    ['cartographie', 'écosystème', 'parties prenantes', 'infrastructure', 'acteurs', 'incitatifs', 'pouvoir', 'flux', 'cluster', 'encombrement'],
    ['pp-42-matrix', 'pp-smartsheet', 'pp-sponsorship-dd'],
    {
      storyScriptEn:
        'Four-layer stakeholder map: actors, incentives, power, flows. 42-affiliate matrix = same logic for infrastructure clusters. Engagement plan per cluster + shared KPIs — living map not static deck.',
      volumeDixLink: 'Pilier Écosystème — encombrement minimal / chantier innovant',
      followUps: ['Comment mobiliser des parties prenantes externes ?'],
    },
  ),
  A(
    'q028',
    'DIRECT',
    'Ménages vulnérables en efficacité énergétique — je n\'ai pas mené ce programme, mais j\'ai mobilisé des publics difficiles à joindre avec confiance et mesure de participation.',
    `Je serai honnête : je n'ai pas dirigé un programme d'efficacité énergétique au Québec. Ce que j'ai fait de transposable, c'est mobiliser des publics qui ne font pas confiance aux institutions ou qui n'ont pas le temps de remplir des formulaires.

Chez Teleperformance, j'ai servi des clients France et Belgique — populations variées, parfois en situation précaire, canal téléphonique où la confiance se gagne en deux minutes ou se perd. Leçon : langage simple, promesses tenues, pas de jargon administratif. En Belgique chez Deloitte, sur financement formation continue secteur public, j'ai vu comment les subventions échouent quand le récit est « installation » et pas « participation durable » — taux d'abandon, pas seulement dossiers approuvés.

Pour un mandat Volume Dix sur ménages vulnérables, j'appliquerais les thèmes de vos études de cas : partenaires communautaires de confiance (OSBL, associations de quartier) comme relais — pas le distributeur seul en porte-à-porte froid. Mesurer la participation : taux de rendez-vous honorés, rétention à six mois, pas seulement le nombre de thermostats installés. Co-conception avec des utilisateurs pilotes avant déploiement massif — même discipline que mon pilote Smartsheet simplifié après un échec de première version trop complexe.`,
    ['ménages', 'vulnérables', 'efficacité', 'énergétique', 'mobilisation', 'confiance', 'participation', 'partenaires'],
    ['pp-teleperformance', 'pp-public-funding', 'pp-smartsheet'],
    {
      storyScriptEn:
        'No direct energy program — transposable: TP FR/BE trust-building; Belgium public funding = measure participation not installs. Community partners as relay; pilot before scale.',
      volumeDixLink: 'Études de cas — engagement ménages vulnérables',
      followUps: ['Comment adapter si le client veut des chiffres d\'installation uniquement ?'],
    },
  ),
  A(
    'q029',
    'DIRECT',
    'Présentations de financement sans surpromettre ? Récit + preuves + demande claire — et je dis non aux chiffres que je ne peux pas défendre, comme en contrôle financement public Belgique.',
    `Soutenir un client en présentation de financement, c'est tenir trois fils : récit (pourquoi maintenant, pour qui), preuves (données, témoignages, comparables) et demande (montant, usage, jalons). Le piège du consultant, c'est embellir le récit pour « aider » — chez Volume Dix, la crédibilité boutique se perd en une slide optimiste.

Mon expérience la plus directe : analyste finance secteur public en Belgique — investissement formation continue, contrôles multi-millions d'euros, reddition de comptes devant des instances exigeantes. J'ai appris à structurer : hypothèse / preuve / limite de confiance / risque résiduel. Si le chiffre n'est pas sourcé, il n'est pas dans le deck.

Concrètement je co-construis avec le sponsor : une page « ce que nous promettons » vs « ce que nous ne promettons pas » ; divulgation des risques en langage exécutif, pas en annexe cachée ; coaching de la prestation — répétition, Q&R difficiles, règle : ne jamais répondre au-delà du dossier. Même discipline que QCER : dire non à un échantillon presque conforme plutôt que signer. Le financeur respecte l'honnêteté ; il punit la surpromesse au mois six.`,
    ['financement', 'présentation', 'surpromettre', 'récit', 'preuves', 'risques', 'coaching'],
    ['pp-public-funding', 'pp-qcer', 'pp-ect-encg'],
    {
      storyScriptEn:
        'Funding deck = narrative + evidence + clear ask. Belgium public controls: proof / confidence limit / residual risk. Promises vs non-promises page; QCER discipline on unsupported numbers.',
      volumeDixLink: 'Pilier Écosystème — financement et reddition de comptes',
    },
  ),
  A(
    'q030',
    'STAR',
    'Pensée systémique qui a changé la stratégie client ? Les boucles manuelles entre 42 filiales — jusqu\'à ce que la matrice + Smartsheet déplacent le point d\'intervention.',
    `Situation : mandat compliance santé, 42 filiales — chaque filiale échangeait avec la centrale par email et Excel, créant une boucle de rétroaction lente : erreur → clarification → retard → pression → raccourci → nouvelle erreur. Le client pensait qu'il fallait « plus de contrôle » ; le système disait qu'il fallait moins de friction.

Tâche : identifier le point d'intervention à plus fort levier sans sacrifier QCER.

Action : j'ai cartographié les boucles — où l'information se perd, où le pouvoir bloque — puis proposé un référentiel unique (matrice) et un flux automatisé (Smartsheet) comme nouvelle boucle : filiale saisit → alerte → revue QCER → clôture visible. J'ai provoqué la question systémique : « combien d'heures par mois brûle-t-on en réunions de clarification ? »

Résultat : stratégie client déplacée de « renforcer les contrôles manuels » vers « une source de vérité partagée » — adoption outil, réunions réduites, relation préservée. C'est pensée systémique appliquée : pas un framework académique, un changement de boucle.`,
    ['pensée', 'systémique', 'stratégie', 'boucles', 'rétroaction', 'intervention'],
    ['pp-42-matrix', 'pp-smartsheet', 'pp-qcer'],
    {
      storyScriptEn:
        'Systemic loop: manual affiliate emails → slow feedback. Intervention: single matrix + Smartsheet. Client strategy shifted from more manual control to shared source of truth.',
      volumeDixLink: 'Pilier Écosystème — changement de boucle, pas plus de slides',
    },
  ),
  A(
    'q031',
    'DIRECT',
    'Conflits entre partenaires d\'écosystème ? Facilitation neutre, indicateurs partagés, voies d\'escalade — comme filiale vs centrale ou due diligence sponsoring.',
    `Les conflits d'écosystème naissent quand chaque partenaire optimise son indicateur local sans voir le système. Ma méthode : facilitation neutre, indicateurs partagés, escalade claire.

Exemple 1 — filiale vs centrale sur une interprétation QCER : tension politique forte. J'ai documenté faits, options et conséquences dans la matrice — langage commun, pas accusation. Atelier court : critères de décision visibles pour tous. Résultat : arbitrage factuel, référentiel enrichi.

Exemple 2 — due diligence sponsoring : partenaire externe vs exigences compliance internes. J'ai structuré risque / bénéfice / condition de poursuite — pas « oui/non » binaire. Escalade au sponsor seulement si risque résiduel au-delà du seuil approuvé.

Pour un mandat type CUSM — innovation, acteurs cliniques, industriels, recherche — j'appliquerais la même discipline Volume Dix : tableau de bord partagé (délais, adoption, incidents), règles d'escalade (qui tranche quoi), rétro neutre mensuelle. Provocation avec tact : « quel indicateur local vous fait vous opposer ? »`,
    ['conflits', 'partenaires', 'écosystème', 'facilitation', 'indicateurs', 'escalade'],
    ['pp-42-matrix', 'pp-qcer', 'pp-sponsorship-dd'],
    {
      storyScriptEn:
        'Neutral facilitation + shared KPIs + clear escalation. QCER affiliate conflict; sponsorship DD structured risk/benefit. CUSM-style: shared dashboard, escalation rules, monthly neutral retro.',
      volumeDixLink: 'Étude de cas CUSM — gouvernance écosystème innovation',
    },
  ),
  A(
    'q032',
    'DIRECT',
    'Alignement public-privé ? Rôles explicites, gouvernance partagée, confiance long terme — mon vécu Belgique secteur public + coordination 42 filiales client international.',
    `Un partenariat public-privé réussit quand les rôles sont explicites avant le premier dollar — pas quand le contrat de cent pages remplace la conversation.

Mon expérience la plus proche : six mois analyste finance secteur public en Belgique — formation continue, financement gouvernemental, contrôles multi-parties. J'ai vu l'alignement public-privé par la gouvernance : qui approuve, qui rend compte, quel calendrier de reddition, quels indicateurs partagés. Communications : un interlocuteur nommé par bord, synthèse écrite sous 24h après chaque comité.

Côté Deloitte international : 42 filiales sous un client mondial — analogue P3 : mandant central, opérateurs locaux, régulateurs. Matrice + Smartsheet ont créé la confiance long terme : même langage, moins de surprises. Pour le contexte québécois, je lirais d'abord les études Volume Dix encombrement minimal et partenariats institutionnels — puis j'adapterais, sans prétendre connaître chaque cadre juridique P3 du Québec.

Principe boutique : donner de l'espace aux idées des acteurs sur le terrain, structurer la gouvernance pour que la confiance survive au changement d'administration ou de CEO.`,
    ['public-privé', 'alignement', 'parties prenantes', 'gouvernance', 'confiance', 'Québec'],
    ['pp-public-funding', 'pp-42-matrix', 'pp-smartsheet'],
    {
      storyScriptEn:
        'Explicit roles before funding. Belgium public governance + 42-affiliate coordination = P3 analogue. Read Volume10 Quebec case studies first; shared language builds long-term trust.',
      volumeDixLink: 'Encombrement minimal — partenariats institutionnels',
      followUps: ['Comment gérer un changement de gouvernement en cours de mandat ?'],
    },
  ),
]
