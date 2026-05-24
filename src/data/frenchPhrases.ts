export interface FrenchPhrase {
  id: string
  category: 'greeting' | 'clarify' | 'structure' | 'pushback' | 'close' | 'bilingual'
  french: string
  english: string
  phonetic?: string
  whenToUse: string
}

export const frenchPhrases: FrenchPhrase[] = [
  {
    id: 'fr-01',
    category: 'greeting',
    french: 'Bonjour, merci de me recevoir. Je suis ravi(e) d’échanger avec vous aujourd’hui.',
    english: 'Hello, thank you for meeting with me. I’m glad to speak with you today.',
    phonetic: 'bon-ZHOOR, mer-SEE duh muh suh-vwahr',
    whenToUse: 'Ouverture en français',
  },
  {
    id: 'fr-02',
    category: 'greeting',
    french: 'Je peux continuer en français ou en anglais, selon votre préférence.',
    english: 'I can continue in French or English, whichever you prefer.',
    whenToUse: 'Proposer le choix de langue dès le début',
  },
  {
    id: 'fr-03',
    category: 'clarify',
    french: 'Pour m’assurer de bien comprendre, pourriez-vous préciser…?',
    english: 'To make sure I understand, could you clarify…?',
    whenToUse: 'Gagner du temps avec précision',
  },
  {
    id: 'fr-04',
    category: 'clarify',
    french: 'Pouvez-vous reformuler la question, s’il vous plaît?',
    english: 'Could you rephrase the question, please?',
    whenToUse: 'Besoin d\'un moment pour réfléchir',
  },
  {
    id: 'fr-05',
    category: 'structure',
    french: 'Je vais structurer ma réponse en trois parties.',
    english: 'I’ll structure my answer in three parts.',
    whenToUse: 'Avant une réponse longue',
  },
  {
    id: 'fr-06',
    category: 'structure',
    french: 'D’abord le contexte, ensuite mon approche, et enfin l’impact.',
    english: 'First context, then my approach, then impact.',
    whenToUse: 'Structure STAR / étude de cas',
  },
  {
    id: 'fr-07',
    category: 'structure',
    french: 'En résumé, ma recommandation serait de…',
    english: 'In summary, my recommendation would be to…',
    whenToUse: 'Conclusion d\'une réponse structurée',
  },
  {
    id: 'fr-08',
    category: 'pushback',
    french: 'C’est une excellente question — voici comment je vois les compromis.',
    english: 'That’s an excellent question — here’s how I see the trade-offs.',
    whenToUse: 'Question piège / tension',
  },
  {
    id: 'fr-09',
    category: 'pushback',
    french: 'Je comprends la préoccupation; voici ce que les données suggèrent.',
    english: 'I understand the concern; here’s what the data suggests.',
    whenToUse: 'Intervieweur sceptique',
  },
  {
    id: 'fr-10',
    category: 'bilingual',
    french: 'Mon français professionnel progresse — je suis inscrit(e) à des cours et je pratique au quotidien.',
    english: 'My professional French is improving — I’m in courses and practice daily.',
    whenToUse: 'Niveau de français honnête + plan',
  },
  {
    id: 'fr-11',
    category: 'bilingual',
    french: 'D’ici six mois, je vise la fluidité en réunions clients bilingues.',
    english: 'Within six months I aim for fluency in bilingual client meetings.',
    whenToUse: 'Engagement sur un échéancier',
  },
  {
    id: 'fr-12',
    category: 'close',
    french: 'Merci pour cet échange. Je suis très motivé(e) par Volume10 et par Montréal.',
    english: 'Thank you for this conversation. I’m very motivated by Volume10 and Montreal.',
    whenToUse: 'Clôture de l\'entrevue',
  },
  {
    id: 'fr-13',
    category: 'close',
    french: 'Avez-vous des questions sur mon plan de relocalisation?',
    english: 'Do you have questions about my relocation plan?',
    whenToUse: 'Grèce → Canada',
  },
  {
    id: 'fr-14',
    category: 'greeting',
    french: 'Ravi(e) de vous rencontrer — j’ai beaucoup lu sur vos mandats récents.',
    english: 'Pleased to meet you — I’ve read a lot about your recent mandates.',
    whenToUse: 'Montrer votre préparation',
  },
  {
    id: 'fr-15',
    category: 'structure',
    french: 'Donner de l’espace aux idées, pour moi, ça commence par écouter les parties prenantes.',
    english: 'Giving space to ideas, for me, starts with listening to stakeholders.',
    whenToUse: 'Accroche signature Volume10 en français',
  },
  {
    id: 'fr-16',
    category: 'clarify',
    french: 'Si je puis me permettre, quel serait le critère de succès pour ce mandat?',
    english: 'If I may, what would success criteria be for this mandate?',
    whenToUse: 'Maturité consultant',
  },
  {
    id: 'fr-17',
    category: 'pushback',
    french: 'Dans une boutique, je m’attends à porter plusieurs chapeaux — c’est ce qui m’attire.',
    english: 'In a boutique I expect to wear many hats — that’s what attracts me.',
    whenToUse: 'Petite équipe (<50)',
  },
  {
    id: 'fr-18',
    category: 'bilingual',
    french: 'Je consomme Les Affaires, La Presse et des balados québécois pour m’immerger.',
    english: 'I follow Les Affaires, La Presse, and Quebec podcasts to immerse myself.',
    whenToUse: 'Intégration culturelle québécoise',
  },
  {
    id: 'fr-19',
    category: 'structure',
    french: 'Permettez-moi un exemple concret de mon expérience.',
    english: 'Allow me a concrete example from my experience.',
    whenToUse: 'Transition vers une histoire STAR',
  },
  {
    id: 'fr-20',
    category: 'close',
    french: 'Je serais honoré(e) de contribuer à la croissance de VolumE Dix.',
    english: 'I would be honoured to contribute to VolumE Dix’s growth.',
    whenToUse: 'Mention du rebrand VolumE Dix',
  },
]

export const FRENCH_CATEGORY_LABELS: Record<FrenchPhrase['category'], string> = {
  greeting: 'Salutations',
  clarify: 'Clarification',
  structure: 'Structurer la réponse',
  pushback: 'Tension et objections',
  close: 'Conclusion',
  bilingual: 'Bilinguisme / niveau de français',
}
