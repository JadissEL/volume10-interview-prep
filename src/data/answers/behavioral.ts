import { A } from './_helpers'

/** Comportemental STAR q061–q070 — bilingue (storyScriptEn requis) */
export const behavioralAnswers = [
  A(
    'q061',
    'STAR',
    'J’ai dirigé sans titre : matrice 42 filiales + Smartsheet — initiative, pas assignation.',
    `Situation : mandat compliance santé, 42 filiales, exigences locales dispersées, équipe sous pression QCER. Tâche : personne ne m’avait nommée chef de projet — il fallait fluidifier sans baisser la qualité. Action : j’ai cartographié les exigences dans une matrice unique, puis configuré Smartsheet pour les échantillons mensuels — formation des pairs, adoption client, itérations sans attendre la hiérarchie. Résultat : référentiel encore utilisé, temps de réunion réduit, reconnaissance manager et base de ma nomination QCER. Leadership sans autorité formelle = rendre l’équipe et le client plus efficaces avec des faits, pas un titre.`,
    ['dirigé', 'autorité', 'formelle', 'initiative'],
    ['pp-42-matrix', 'pp-smartsheet', 'pp-qcer'],
    {
      snippetIds: ['frag-leadership-matrix', 'card-pp-smartsheet'],
      storyScriptEn:
        'Led without title | 42 affiliates matrix | Smartsheet adoption | QCER path | measurable client use',
      followUps: [
        'Racontez un projet initié par vous-même — pas assigné.',
        'Et si le client n’avait pas adopté Smartsheet ?',
      ],
      volumeDixLink: 'Donner de l’espace aux idées — outil concret',
    },
  ),
  A(
    'q062',
    'STAR',
    'Décrivez un projet raté : première version Smartsheet trop complexe — le client n’aurait pas adopté sans simplification.',
    `Situation : j’avais livré une première version Smartsheet trop lourde — trop de colonnes, workflow incompréhensible pour les filiales. Tâche : livrer les échantillons à temps sans perdre le client. Action : j’assume l’erreur — j’ai interviewé trois utilisateurs clés, simplifié à l’essentiel (statut, owner, échéance, preuve), testé sur un pilote avant déploiement global. Résultat : adoption réelle, relation client préservée, leçon gravée : l’innovation processus ne vaut que si l’humain l’utilise lundi. Ce que je referais : co-conception dès la semaine 1, pas perfection technique en silo.`,
    ['projet', 'raté', 'tiré', 'apprentissage', 'responsabilité'],
    ['pp-smartsheet', 'pp-42-matrix'],
    {
      snippetIds: ['frag-smartsheet-failure'],
      storyScriptEn:
        'Failed first Smartsheet | too complex | user interviews | pilot then scale | adoption saved',
    },
  ),
  A(
    'q063',
    'STAR',
    'Conflit méthodologie : échantillonnage manuel vs automatisation — tranché par les données.',
    `Situation : un collègue senior voulait garder des échanges Excel manuels ; je poussais Smartsheet et la matrice comme source unique. Tâche : trancher sans fragiliser l’équipe ni le client. Action : atelier comparatif sur 2 cycles — temps passé, erreurs, traçabilité QCER — chiffres, pas opinions. Proposition : hybride court terme (export contrôlé) + bascule progressive. Résultat : accord sur le référentiel commun, relation préservée, moins de « deux vérités » en réunion client. Après coup, on se parle encore — le conflit était sur la méthode, pas la personne.`,
    ['conflit', 'collègue', 'méthodologie', 'résolution'],
    ['pp-smartsheet', 'pp-qcer', 'pp-42-matrix'],
    {
      snippetIds: ['frag-conflict-excel-smartsheet'],
      storyScriptEn:
        'Methodology conflict | Excel vs Smartsheet | data-driven workshop | phased compromise | relationship intact',
    },
  ),
  A(
    'q064',
    'STAR',
    'Échéance serrée : clôture mensuelle QCER — priorisation impact vs effort.',
    `Situation : clôture mensuelle compliance, volume d’échantillons élevé, délai non négociable. Tâche : tout livrer sans sacrifier les tests critiques. Action : matrice impact/effort — d’abord risques réglementaires et filiales à historique d’écarts, puis échantillons à faible risque avec workflow Smartsheet ; alerte client J-3 sur tout risque de glissement. Garde-fous : revue QCER sur échantillon à haut risque avant envoi. Résultat : livraison à l’heure, zéro surprise majeure, client informé en continu. Pression = transparence tôt, pas héroïsme silencieux.`,
    ['échéance', 'serrée', 'priorisé', 'priorisation', 'délai'],
    ['pp-qcer', 'pp-smartsheet', 'pp-42-matrix'],
    {
      storyScriptEn:
        'Tight deadline | monthly QCER close | impact vs effort | Smartsheet workflow | early client flag',
    },
  ),
  A(
    'q065',
    'STAR',
    'Rétroaction qui a changé mon style : « moins de grille, plus de recommandation exécutive ».',
    `Situation : mon manager m’a dit textuellement : « Ta matrice est excellente, mais le partner veut une décision en trois lignes en haut de page. » Tâche : garder la rigueur sans noyer le lecteur. Action : j’ai ajouté systématiquement un encadré « décision / prochaine étape / risque résiduel » avant l’annexe détaillée — format inspiré de mes cours ENCG finance d’entreprise. Résultat : moins de allers-retours, livrables adoptés plus vite en comité. Aujourd’hui, chez Volume Dix, je garderais la profondeur en annexe et la clarté en une page — c’est le registre conseil québécois que je renforce.`,
    ['rétroaction', 'style', 'conseil', 'changement'],
    ['pp-ect-encg', 'pp-42-matrix', 'pp-qcer'],
    {
      storyScriptEn:
        'Feedback changed style | executive summary first | matrix in appendix | faster partner buy-in',
    },
  ),
  A(
    'q066',
    'STAR',
    'Prise de position éthique : refus de valider un échantillon sans preuve complète.',
    `Situation : pression pour clôturer un dossier — échantillon presque conforme mais pièce justificative manquante. Tâche : protéger le standard QCER et le client. Action : j’ai dit non clairement, documenté l’écart et le risque résiduel, proposé alternative : délai court pour obtenir la preuve ou reclassement explicite en exception approuvée par le manager — jamais de signature « pour faire passer ». Résultat : preuve obtenue sous 48h, audit trail propre, crédibilité renforcée. Principe : l’intégrité du test prime sur la commodité du calendrier — c’est différent d’une simple ambiguïté multi-pays.`,
    ['éthique', 'position', 'principe', 'situation'],
    ['pp-qcer', 'pp-smartsheet'],
    {
      snippetIds: ['frag-ethics-qcer-signoff'],
      storyScriptEn:
        'Ethical stance | refused sign-off | missing evidence | documented alternative | integrity over speed',
    },
  ),
  A(
    'q067',
    'STAR',
    'Sponsor exécutif difficile : changements de scope — empathie, limites, victoires rapides.',
    `Situation : sponsor client changeait les priorités chaque semaine — équipe Deloitte frustrée, risque de retard. Tâche : réaligner sans confrontation publique. Action : rendez-vous 30 min bihebdo — « décisions prises / décisions reportées / ce dont j’ai besoin de vous » ; petites victoires visibles (pilote Smartsheet sur 3 filiales) pour regagner confiance ; escalade documentée seulement quand le risque réglementaire devenait réel. Résultat : scope stabilisé sur le référentiel matrice, sponsor cite l’outil en comité. Sponsor difficile ≠ mauvaise personne — souvent manque de traduction entre urgence opérationnelle et exigence compliance.`,
    ['sponsor', 'exécutif', 'difficile', 'gestion'],
    ['pp-smartsheet', 'pp-42-matrix', 'pp-qcer'],
    {
      storyScriptEn:
        'Difficult executive sponsor | scope creep | biweekly decision log | quick win pilot | documented escalation',
    },
  ),
  A(
    'q068',
    'STAR',
    'Apprendre à pêcher : former le client sur Smartsheet plutôt que faire les échantillons à sa place.',
    `Situation : le client demandait que notre équipe saisisse tout — dépendance, pas renforcement des capacités. Tâche : livrer la qualité sans créer de consultant permanent. Action : sessions coaching 45 min, guide une page, modèles verrouillés pour les champs critiques ; je faisais les premiers cycles avec eux, puis retrait progressif. Quand prendre du recul : quand le taux d’erreur pilote < seuil et qu’un owner client est nommé. Résultat : client autonome sur le flux mensuel, notre équipe recentrée sur jugement QCER et exceptions. Volume Dix « donner de l’espace » — leur donner l’outil, pas notre main sur le clavier.`,
    ['pêcher', 'travail', 'client', 'capacités', 'coaching'],
    ['pp-smartsheet', 'pp-qcer'],
    {
      storyScriptEn:
        'Teach to fish | Smartsheet coaching | one-pager playbook | phased handoff | client ownership',
      volumeDixLink: 'Renforcement des capacités client',
    },
  ),
  A(
    'q069',
    'STAR',
    'Équipe multiculturelle — ajustement communication : adapter canal et rythme selon les cultures.',
    `Situation : coordination Athènes–Europe–stakeholders francophones (Teleperformance, filiales FR/BE), styles directs vs indirects. Tâche : éviter les malentendus sur les délais et le ton. Action : écoute active en réunion, synthèse écrite sous 24h avec décisions et owners ; pour profils à communication indirecte, validation 1:1 avant email groupe ; fuseaux horaires bloqués en amont. Résultat : moins de rework, confiance accrue — mon parcours Taza→Fès→Marrakech→Athènes m’a appris qu’il faut adapter le canal, pas exiger qu’on me parle comme à Deloitte US. Écrit > oral quand la culture a besoin de temps de réflexion.`,
    ['multiculturelle', 'équipe', 'communication', 'ajustement'],
    ['pp-teleperformance', 'pp-42-matrix', 'pp-relocation'],
    {
      storyScriptEn:
        'Multicultural team | Greece EU FR/BE | written recap 24h | 1:1 before group email | timezone discipline',
    },
  ),
  A(
    'q070',
    'STAR',
    'Livrable le plus fier : la matrice conformité 42 filiales — impact durable et crédit équipe.',
    `Situation : chaos réglementaire multi-pays, fatigue équipe. Tâche : un livrable que le client utilise sans nous. Action : matrice vivante + Smartsheet — co-construit avec pairs et filiales, pas mon chef-d’œuvre solo. Résultat : adoption client, réduction des réunions de clarification, base de ma trajectoire QCER. Pourquoi fier : impact mesurable, orienté action lundi, aligné Volume Dix — pas un rapport de 200 pages. Je crédite l’équipe locale et le client pour les retours terrain ; mon rôle était de structurer et tenir le cap. C’est le livrable que j’ai cité en candidature — je le porte avec les mêmes chiffres en entrevue.`,
    ['livrable', 'fier', 'impact', 'pourquoi'],
    ['pp-42-matrix', 'pp-smartsheet', 'pp-qcer'],
    {
      storyScriptEn:
        'Proudest deliverable | 42-country matrix | client adoption | team credit | action-not-slides',
      volumeDixLink: 'Résultats prêts à l’action',
    },
  ),
]
