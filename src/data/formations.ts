export const diplomeEtatFormationInitialeItems = [
  'Diplôme d’État de psychomotricien — titre professionnel réglementé, formation initiale dispensée à l\'Institut de Formation en Psychomotricité (IFP) de Paris.',
  'Enseignement théorique et pratique : fondements de la psychomotricité, évaluation, rééducation, médiations corporelles et stages en milieux cliniques.',
] as const;

export const tndFormationSubcategories = [
  {
    title: 'Formations sur les TND',
    items: [
      'Diplôme Universitaire « Les troubles du neurodéveloppement (TND) chez l’enfant et l’adolescent »',
      'TND et rééducation psychomotrice',
    ],
  },
  {
    title: 'Trouble développemental de la coordination (TDC)',
    items: ['TDC et rééducation psychomotrice (Co-op)'],
  },
  {
    title: 'Trouble déficitaire de l’attention avec ou sans hyperactivité (TDA/H)',
    items: [
      'Métacognition et psychomotricité',
      'Programme d’entraînement aux habiletés parentales (PEHP) de type Barkley',
    ],
  },
  {
    title: 'Trouble du spectre de l’autisme (TSA)',
    items: [
      'Le développement des habilités sociales des personnes autistes',
      'Les principes de la conception TEACCH',
      'Cerner le profil sensoriel et perceptif dans l’autisme',
      'Les 9 aptitudes essentielles à la communication',
      'PECS',
      'Évaluation et gestion des comportements problèmes',
      'Collaboration avec les parents et guidance parentale',
    ],
  },
] as const;

export const tndFormationCount = tndFormationSubcategories.reduce((n, cat) => n + cat.items.length, 0);

export const diplomeEtatPointCount = diplomeEtatFormationInitialeItems.length;

export const autresTroublesPsychomoteursItems = [
  'La grapho-psychomotricité pour optimiser la rééducation',
  'Comprendre et accompagner les émotions du jeune enfant à l’adolescent',
] as const;

export const autresTroublesFormationCount = autresTroublesPsychomoteursItems.length;
