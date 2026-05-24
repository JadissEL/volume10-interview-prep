import type { YoutubeTopic } from './types'

export const youtubeTopics: YoutubeTopic[] = [
  {
    id: 'yt-1',
    title: 'Fondamentaux du conseil en stratégie',
    description: 'Cadres, arbres de problèmes et communication exécutive',
    keywords: [
      'strategy consulting case interview framework',
      'issue tree consulting explained',
      'McKinsey style case interview preparation',
    ],
    keywordsFr: [
      'entrevue cas conseil stratégie cadre',
      'arbre de problèmes conseil',
      'préparation entrevue cabinet conseil Montréal',
    ],
  },
  {
    id: 'yt-2',
    title: 'Innovation en santé (Québec)',
    description: 'Innovation hospitalière, santé numérique, gouvernance',
    keywords: [
      'healthcare innovation strategy hospital',
      'digital health transformation Canada',
    ],
    keywordsFr: [
      'innovation santé Québec hôpital',
      'transformation numérique santé Canada',
      'gouvernance innovation clinique',
    ],
  },
  {
    id: 'yt-3',
    title: 'Secteur public et infrastructure',
    description: 'Grands projets, écosystèmes de parties prenantes, chantiers',
    keywords: [
      'public sector strategic planning consulting',
      'infrastructure stakeholder engagement',
    ],
    keywordsFr: [
      'planification stratégique secteur public Québec',
      'mobilisation parties prenantes infrastructure',
    ],
  },
  {
    id: 'yt-4',
    title: 'Contexte professionnel bilingue',
    description: 'Français/anglais en affaires à Montréal',
    keywords: [
      'business French Quebec professional',
      'bilingual workplace Montreal',
    ],
    keywordsFr: [
      'français des affaires Québec professionnel',
      'milieu de travail bilingue Montréal',
      'entrevue emploi français professionnel',
    ],
  },
  {
    id: 'yt-5',
    title: 'Relocalisation à Montréal',
    description: 'Voies de visa, coût de la vie, s\'installer',
    keywords: [
      'moving to Montreal work permit Canada',
      'Express Entry Canada skilled worker',
    ],
    keywordsFr: [
      'déménager Montréal permis travail Canada',
      'Entrée express travailleur qualifié',
      'coût de la vie Montréal',
    ],
  },
  {
    id: 'yt-6',
    title: 'Boutique vs Big Four',
    description: 'Culture, autonomie, compromis de carrière',
    keywords: [
      'boutique consulting firm vs big four',
      'life at boutique strategy firm',
    ],
    keywordsFr: [
      'cabinet boutique conseil vs big four',
      'culture cabinet conseil boutique',
    ],
  },
  {
    id: 'yt-7',
    title: 'Entrevues comportementales STAR',
    description: 'Structurer des histoires avec métriques',
    keywords: [
      'STAR method behavioral interview',
      'consulting behavioral interview examples',
    ],
    keywordsFr: [
      'méthode STAR entrevue comportementale',
      'exemples entrevue comportementale conseil',
    ],
  },
  {
    id: 'yt-8',
    title: 'Prospective et intelligence sectorielle',
    description: 'Tendances, scénarios, leadership d\'opinion',
    keywords: [
      'strategic foresight scenarios planning',
      'sector analysis consulting method',
    ],
    keywordsFr: [
      'prospective stratégique scénarios',
      'analyse sectorielle méthode conseil',
    ],
  },
  {
    id: 'yt-9',
    title: 'Négociation de rémunération (conseil)',
    description: 'Fourchettes montréalaises sans se sous-vendre',
    keywords: [
      'management consulting salary Montreal',
      'salary negotiation boutique firm',
    ],
    keywordsFr: [
      'salaire conseil gestion Montréal',
      'négociation salaire offre emploi Québec',
    ],
  },
  {
    id: 'yt-10',
    title: 'Énergie et programmes socioéconomiques',
    description: 'Engagement, équité, conception de programmes',
    keywords: [
      'energy efficiency vulnerable households program',
      'stakeholder engagement community programs',
    ],
    keywordsFr: [
      'efficacité énergétique ménages vulnérables Québec',
      'engagement communautaire programme public',
    ],
  },
]

export function youtubeSearchUrl(keyword: string): string {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(keyword)}`
}
