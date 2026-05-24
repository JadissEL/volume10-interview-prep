import { A } from './_helpers'
import type { PersonalizedAnswer } from '../types'

/** Relocalisation q071–q082 — présentiel Vieux-Montréal, visa, engagement */
export const relocationAnswers: PersonalizedAnswer[] = [
  A(
    'q071',
    'DIRECT',
    'Grèce → Montréal : choix administratif et professionnel, pas fuite — je quitte avec passation fin juillet et je m\'engage au 100 % présentiel Vieux-Montréal.',
    `Votre annonce est claire : 100 % en présentiel au Vieux-Montréal. Je ne demande pas d'exception. Après plus de 30 mois d'attente de permis en Grèce, ma mobilité professionnelle est bloquée — ce n'est pas un rejet de Deloitte ni de mon équipe. J'ai prévenu mon employeur, je forme mes remplaçants, je pars fin juillet avec un échéancier concret : logement, visa, passation dossiers.

Montréal combine francophonie, secteurs publics et santé où j'ai de l'expérience, et Volume Dix comme boutique où je veux toucher stratégie et écosystème — pas une firme où je disparaîtrais dans le bench. Je suis marocaine : Taza → Fès → Marrakech → Athènes — ce n'est pas ma première relocalisation ; j'ai prouvé l'adaptation multiculturelle et la livraison dans l'incertitude.

Pourquoi croire mon engagement ? Parce que j'ai candidaté en connaissance de cause sur le présentiel, pas en espérant négocier le télétravail après coup. Proximité associés–consultants et ateliers dirigeants, c'est exactement ce que je cherche — pas ce que je subis.`,
    ['Grèce', 'Montréal', 'présentiel', 'Vieux-Montréal', 'engagement', 'croire'],
    ['pp-relocation'],
    {
      snippetIds: ['card-pp-relocation', 'frag-presentiel-commitment'],
      storyScriptEn:
        'Greece→Montreal deliberate | 30+ mo visa block | Deloitte handoff end July | 100% in-person non-negotiable | mobility Taza→Athens | boutique choice not escape',
      volumeDixLink: 'Présence sur site + confiance client',
      followUps: [
        'Pourquoi quitter la Grèce maintenant ?',
        'N\'est-ce pas un risque de recruter quelqu\'un en transition visa ?',
      ],
    },
  ),
  A(
    'q072',
    'DIRECT',
    'Plan d\'autorisation de travail Canada : transparence, voies Entrée express / EIM employeur, échéancier honnête — sans bluffer un délai.',
    `Citoyenne marocaine, parcours international prouvé — Maroc, Belgique, Grèce. Je m'informe activement sur les voies : Entrée express si admissible, permis de travail employeur soutenu (EIM selon catégorie), et toute voie que vos RH ou avocats immigration recommandent pour un profil conseil bilingue.

Ce que je peux promettre : transparence totale sur mon statut, documents prêts, réactivité aux demandes employeur, flexibilité sur date de début réaliste. Ce que je ne blufferai pas : un délai immigration exact — après 30+ mois en Grèce, je connais l'administratif.

Ouverture : si Volume Dix peut appuyer une EIM, je facilite chaque étape — preuves d'expérience, diplômes, lettres. Parallèlement : départ Deloitte fin juillet confirmé, préparation Montréal dès maintenant.`,
    ['autorisation', 'travail', 'Canada', 'permis', 'EIM', 'Entrée express'],
    ['pp-relocation'],
    {
      snippetIds: ['frag-visa-transparency'],
      storyScriptEn:
        'Moroccan citizen | exploring Express Entry + employer-supported work permit | transparent timeline, no fake deadlines | ready to support EIM paperwork | leaving Deloitte end July',
      volumeDixLink: 'Mobilité — honnêteté visa',
      followUps: ['Quel est votre plan B si le visa tarde ?'],
    },
  ),
  A(
    'q073',
    'DIRECT',
    'Pourquoi quitter la Grèce pour une boutique au Canada maintenant ? Mobilité bloquée après 30+ mois de permis, et Volume Dix = conseil exécutif pragmatique que je veux — pas une fuite.',
    `Maintenant, c'est une inflexion honnête. En Grèce, mon permis de séjour n'arrive pas après plus de trente mois — ma mobilité professionnelle est limitée. Ce n'est pas un rejet de Deloitte : j'ai progressé, je forme mes remplaçants, je pars fin juillet.

Pourquoi une boutique canadienne ? Volume Dix offre travail direct avec dirigeants, mandats vision/transformation/positionnement, présentiel Vieux-Montréal — exactement ce que ma candidature décrit. Le marché local grec ne me donne pas cette courbe en conseil exécutif bilingue.

Je ne « fuis » pas — j'« vais vers » : secteurs publics/santé, intelligence, boutique où mon profil atypique ECT–ENCG–compliance est un atout. Thèse de carrière alignée, pas opportunisme LinkedIn.`,
    ['quitter', 'Grèce', 'boutique', 'Canada', 'maintenant', 'Volume Dix'],
    ['pp-relocation', 'pp-qcer'],
    {
      volumeDixLink: 'Relocalisation — aller vers, pas fuir',
    },
  ),
  A(
    'q074',
    'DIRECT',
    'Éloignement familial : plan de soutien structuré, intention long terme à Montréal, rythme de communication réaliste — pas une période d\'essai mentale.',
    `Je comprends le risque perçu : famille au Maroc et en Europe, nouvelle ville, pression mandats. Ma réponse n'est pas « je verrai » — c'est un plan explicite.

Soutien familial : conversations franches avant le départ, alignement sur la durée et les visites — fenêtres planifiées, pas des promesses vagues. Je ne minimise pas la distance ; je la gère avec un calendrier de communication hebdomadaire (visio) et des regroupements familiaux aux pauses stratégiques.

Intention long terme : Montréal n'est pas un stopover visa. Je construis ici — logement stable, réseau professionnel local, français québécois, contribution boutique. Signaux concrets : départ Deloitte planifié, candidature réfléchie, pas opportunisme post-LinkedIn.

Communication avec Volume Dix : transparence si un imprévu familial majeur — je ne disparaîtrais pas ; je lèverais tôt avec options de couverture mandat. Mon parcours Taza → Athènes prouve que je tiens les engagements multiannuels ; la famille est un facteur, pas un motif de départ silencieux après trois mois.`,
    ['famille', 'éloignement', 'départ', 'soutien', 'long terme', 'communication'],
    ['pp-relocation'],
    {
      snippetIds: ['frag-family-plan'],
      volumeDixLink: 'Stabilité personnelle — risque départ',
      followUps: ['Et si un parent tombe malade ?'],
    },
  ),
  A(
    'q075',
    'DIRECT',
    'Clients nord-américains à distance : oui — Deloitte international, fuseaux gérés, communication structurée ; preuves concrètes.',
    `Oui — preuves. Chez Deloitte : client santé mondial, équipes Europe et Amériques, réunions multi-fuseaux sur la matrice 42 filiales — comptes-rendus écrits systématiques, ordre du jour partagé, décisions tracées dans Smartsheet pour compenser l'absence de couloir.

Teleperformance : clients France et Belgique depuis le Maroc — écoute, reformulation, gestion de conflits à distance. Habitudes : synthèse « décision / owner / échéance » après chaque appel ; pas de courriel flou.

Pour Volume Dix : je préfère le présentiel Montréal, mais je sais livrer à distance quand le mandat l'exige — discipline horaire, bilinguisme, interculturalité Grèce–UE–Maghreb. Références Deloitte manager sur demande.`,
    ['nord-américains', 'distance', 'preuves', 'fuseaux', 'communication'],
    ['pp-42-matrix', 'pp-smartsheet', 'pp-teleperformance'],
    {
      snippetIds: ['frag-remote-smartsheet-trace', 'card-pp-teleperformance'],
      volumeDixLink: 'Collaboration à distance — preuves',
    },
  ),
  A(
    'q076',
    'DIRECT',
    'Niveau de français actuel et plan à 6 mois : natif, registre conseil québécois en construction — plan structuré.',
    `Français maternel — CECR honnête : expression générale C1+, registre « conseil exécutif québécois » en progression vers C1 formel client. Je ne prétends pas un français parfait cabinet dès J1.

Plan 6 mois : (1) lectures Volume Dix Intelligence + médias québécois ; (2) simulations d'ateliers bilingues avec pairs ; (3) feedback écrit sur synthèses « décision en 3 lignes » ; (4) partenaires de conversation sur tournures administratives si besoin.

Preuves : Teleperformance FR/BE, livrables Deloitte en français, candidature Volume Dix en français. Engagement croissance face au client institutionnel québécois.`,
    ['français', 'niveau', 'plan', 'mois', 'québécois', 'CECR'],
    ['pp-teleperformance', 'pp-relocation'],
    {
      snippetIds: ['frag-french-6mo-plan', 'card-pp-teleperformance'],
      volumeDixLink: 'Bilinguisme — français client',
    },
  ),
  A(
    'q077',
    'DIRECT',
    'Avant le jour 1 : logement et quartiers ciblés, réseau conseil montréalais amorcé, rapports Intelligence Volume Dix lus — pour arriver utile, pas en découverte.',
    `Les 90 premiers jours commencent avant l'embauche. Avant le jour 1 : (1) logement — repérage quartiers Vieux-Montréal, Plateau, Rosemont avec transit vers bureaux ; bail ou plan temporaire dès que visa le permet ; (2) réseau — conversations informelles consultants québécois, événements sectoriels publics/santé, pas seulement LinkedIn ; (3) contenu Volume Dix — rapports Intelligence, dossiers CUSM/Transplant/Griffintown, vocabulaire client.

Semaine 1 sur site : écouter mandats en cours, shadow associé, cartographier templates et normes rédaction. Semaines 2–4 : contribution analyses sur dossier réel. Mois 2–3 : ownership partiel workstream. Modèle passé : Smartsheet proposé semaine 2 chez Deloitte après écoute de la douleur client.

Je n'attends pas qu'on m'assigne pour être utile — j'arrive avec des questions pertinentes et une synthèse une page sur un secteur du portefeuille. C'est le même esprit que ma matrice 42 filiales : préparer le terrain avant la réunion décision.`,
    ['90', 'premiers', 'jours', 'jour', 'logement', 'Intelligence'],
    ['pp-relocation', 'pp-smartsheet', 'pp-ai'],
    {
      volumeDixLink: 'Montée en charge — préparation avant J1',
    },
  ),
  A(
    'q078',
    'DIRECT',
    'Atelier client dans les deux semaines post-embauche : oui — passeport prêt, préparation à distance, flexibilité totale, zéro hésitation.',
    `Si vous avez besoin de moi en atelier client dans les deux semaines suivant l'embauche, ma réponse est oui — pas « on verra ». Passeport valide, disponibilité soir/week-end si fuseau client, préparation structurée avant le vol : brief interne, lecture dossier, hypothèses et questions d'ouverture.

Logistique réaliste : je prépare à distance (recherche, slides, facilitation plan), j'arrive la veille si déplacement Québec/région, je débrief le jour même avec synthèse écrite. Preuves passées : Teleperformance clients FR/BE sous pression ; Deloitte réunions multi-fuseaux 42 filiales ; Visio maîtrisé en 24h quand il fallait livrer.

En boutique, les deux premières semaines comptent — je ne me cache pas derrière l'onboarding. Je viens pour être en salle avec le dirigeant, pas seulement derrière un laptop. Si immigration retarde l'entrée physique, je propose une contribution remote temporaire en attendant — mais l'objectif reste présentiel immédiat dès que possible.`,
    ['atelier', 'client', 'semaines', 'embauche', 'flexibilité', 'passeport'],
    ['pp-visio-24h', 'pp-teleperformance', 'pp-relocation'],
    {
      volumeDixLink: 'Animation ateliers — disponibilité immédiate',
    },
  ),
  A(
    'q079',
    'DIRECT',
    'Coût de vie Montréal : j\'ai fait mes recherches — la rémunération ne me distraira pas du rôle ; adéquation mandat d\'abord, fourchette marché comprise.',
    `Je ne minimise pas Montréal — loyer, transport, impôts, relocalisation internationale ont un coût. J'ai regardé les fourchettes conseil montréalais et le coût de vie par quartier ; je viens avec des attentes réalistes, pas des chiffres déconnectés du marché local.

Ma priorité reste l'adéquation au rôle : mandats dirigeants, quatre piliers, présentiel boutique — pas maximiser un salaire court terme. L'offre mentionne une rémunération compétitive / supérieure au marché : j'y lis reconnaissance mutuelle, pas négociation perpétuelle.

Discussions rémunération ne me distrairont pas de la livraison : mon historique Deloitte L1→QCER en 24 mois montre que je performe d'abord. Si nous alignons package et statut immigration, je me concentre à 100 % sur le client — pas sur comparer Toronto ou renegotier au mois 3. Transparence oui ; distraction non.`,
    ['coût', 'vie', 'rémunération', 'distrairont', 'Montréal', 'fourchette'],
    ['pp-relocation', 'pp-qcer'],
    {
      volumeDixLink: 'Package — réalisme Montréal',
    },
  ),
  A(
    'q080',
    'DIRECT',
    'Marché talent conseil Montréal : concurrence féroce pour seniors bilingues — je me différencie par international, santé/public, et loyauté mission boutique.',
    `Montréal attire des consultants bilingues — Big Four, boutiques, cabinets stratégie. Les seniors avec français natif et expérience secteur public/santé sont rares et sollicités. Je le sais — je ne prétends pas ignorer la guerre des talents.

Mon différenciateur : parcours Maroc–Belgique–Grèce — compliance santé 42 filiales, financement public, QCER, intrapreneuriat Smartsheet — plus francophonie native et anglais opérationnel. Pas un profil linéaire « Montréal only », mais quelqu'un qui a choisi Montréal et Volume Dix délibérément.

Loyauté : je ne vois pas Volume Dix comme étape vers McKinsey Toronto. Je cherche courbe d'apprentissage boutique, proximité associés, mandats intelligence — exactement ce que les grandes firmes ne me donneraient pas à mon stade. Pour vous : ROI rapide sur dossiers mal documentés, playbooks réutilisables, pas turnover à 18 mois.`,
    ['talent', 'conseil', 'Montréal', 'marché', 'bilingues', 'différenciez'],
    ['pp-relocation', 'pp-qcer', 'pp-42-matrix'],
    {
      volumeDixLink: 'Recrutement — profil international rare',
    },
  ),
  A(
    'q081',
    'DIRECT',
    'Hybride vs vos besoins : l\'offre est 100 % présentiel — je m\'aligne ; pas de télétravail par défaut, déplacements clients Québec acceptés, limites claires seulement sur l\'exceptionnel.',
    `Question pertinente alors que beaucoup négocient l'hybride. Votre offre : 100 % en présentiel Vieux-Montréal. Mes besoins personnels s'alignent — je ne cherche pas deux jours télétravail par semaine. Ce dont j'ai besoin : un bureau ou espace équipe stable, accès associés, culture où l'on apprend en observant les mandats — exactement le modèle boutique.

Ce dont vous avez besoin : quelqu'un en escaliers, en atelier, disponible dernière minute — je m'y engage. Déplacements clients au Québec ou ailleurs au Canada si requis : oui, avec préavis raisonnable. Limites claires : imprévus familiaux majeurs ou maladie — communication immédiate et couverture mandat, pas disparition.

Je ne vends pas fausse flexibilité : si la politique évolue un jour, je m'adapterai ; aujourd'hui je postule sur vos règles actuelles et je les respecte. C'est cohérent avec ma candidature Grèce→Montréal — je viens pour être là.`,
    ['hybride', 'attentes', 'présentiel', 'besoin', 'déplacements', 'limites'],
    ['pp-relocation'],
    {
      volumeDixLink: '100 % présentiel — alignement explicite',
    },
  ),
  A(
    'q082',
    'DIRECT',
    'Volume10 plutôt que Toronto pour le visa : impact boutique et adéquation culture prime sur la vitesse administrative — Volume Dix n\'est pas mon plan B.',
    `Une firme globale à Toronto pourrait, sur le papier, sponsoriser plus vite — je ne l'ignore pas. Ma réponse : je ne choisis pas un employeur comme proxy immigration. Je choisis Volume Dix parce que les secteurs, la signature « donner de l'espace aux idées », la proximité associés et les mandats intelligence correspondent à ma thèse de carrière — conseil exécutif pragmatique, pas armée de slides.

Impact boutique : ownership visible, contribution croissance cabinet, mandats CUSM/Transplant/public — je n'aurais pas la même courbe à Toronto dans une tour anonyme. Adéquition culture : provocation avec tact, livrable lundi matin — ce que j'ai pratiqué en initiative Smartsheet et matrice 42 filiales.

Je ne postule pas chez vous en attendant une offre ontarienne. Si le visa exige patience, je préfère attendre avec la bonne firme que partir vite dans la mauvaise. Proximité Montréal francophone + Volume Dix > raccourci Toronto pour un titre.`,
    ['Volume10', 'Toronto', 'visa', 'firme', 'globale', 'boutique'],
    ['pp-relocation', 'pp-42-matrix', 'pp-smartsheet'],
    {
      volumeDixLink: 'Choix délibéré — pas plan B Toronto',
      followUps: ['Et si le visa tarde six mois ?'],
    },
  ),
]
