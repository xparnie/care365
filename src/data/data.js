const DATA = [
  {
    id: 0,
    questions: {
      questionId: 0,
      questionText: 'that best describe you.',
      options: [
        {
          id: 0,
          text: 'Active',
          benefit: 1,
          techLevel: 1,
          icon: 'active'
        },
        {
          id: 1,
          text: 'Sociable',
          benefit: 1,
          techLevel: 1,
          icon: 'sociable'
        },
        {
          id: 2,
          text: 'Comfortable with technology',
          benefit: 1,
          techLevel: 1,
          icon: 'comfortable'
        },
        {
          id: 3,
          text: 'Inactive',
          benefit: -1,
          techLevel: 2,
          icon: 'inactive'
        },
        {
          id: 4,
          text: 'Reserved',
          benefit: -1,
          techLevel: 3,
          icon: 'reserved'
        },
        {
          id: 5,
          text: 'Need help with technology',
          benefit: -1,
          techLevel: 2,
          icon: 'technology'
        }
      ]
    }
  },
  {
    id: 1,
    questions: {
      questionId: 1,
      questionText: 'that best describe your favorite activities',
      options: [
        {
          id: 0,
          text: 'Exercising, playing golf or tennis',
          benefit: -1,
          techLevel: 1,
          icon: 'exercise'
        },
        {
          id: 1,
          text: 'Spending time alone, reading, cooking, or gardening',
          benefit: -1,
          techLevel: 2,
          icon: 'reserved'
        },
        {
          id: 2,
          text: 'Playing games or cards',
          benefit: 1,
          techLevel: 2,
          icon: 'cards'
        },
        {
          id: 3,
          text: 'Spending time with friends, family, or grandchildren',
          benefit: 1,
          techLevel: 2,
          icon: 'family'
        },
        {
          id: 4,
          text: 'Going to restaurants or social events',
          benefit: 1,
          techLevel: 1,
          icon: 'restaurants'
        },
        { id: 5, text: 'Watching TV', benefit: 1, techLevel: 3, icon: 'tv' }
      ]
    }
  },
  {
    id: 2,
    questions: {
      questionId: 2,
      questionText: 'that respresent your concerns about your well being.',
      options: [
        {
          id: 0,
          text: 'Maintaining independence',
          benefit: 1,
          techLevel: 1,
          icon: 'independence'
        },
        {
          id: 1,
          text: 'Having dementia or cognitive issues',
          benefit: -1,
          techLevel: 2,
          icon: 'brain'
        },
        {
          id: 2,
          text: 'Being unhappy, sad or feeling lonely',
          benefit: -1,
          techLevel: 1,
          icon: 'unhappy'
        },
        {
          id: 3,
          text: 'Not being able to move around easily',
          benefit: 1,
          techLevel: 1,
          icon: 'cane'
        },
        {
          id: 4,
          text: 'Being at risk of falling',
          benefit: 1,
          techLevel: 1,
          icon: 'fall'
        },
        {
          id: 5,
          text: 'Maintaining my appearance',
          benefit: 0,
          techLevel: 3,
          icon: 'happy'
        }
      ]
    }
  },
  {
    id: 3,
    questions: {
      questionId: 3,
      questionText: 'What goals do you have for your health?',
      options: [
        {
          id: 0,
          text: 'Have more energy',
          benefit: 0,
          techLevel: 1,
          icon: 'bolt'
        },
        {
          id: 1,
          text: 'Lose weight',
          benefit: 0,
          techLevel: 1,
          icon: 'scale'
        },
        {
          id: 2,
          text: 'Stay mentally sharp',
          benefit: 0,
          techLevel: 1,
          icon: 'bulb'
        },
        {
          id: 3,
          text: 'Be more socially active',
          benefit: 0,
          techLevel: 2,
          icon: 'chat'
        },
        {
          id: 4,
          text: 'Feel more confident',
          benefit: 0,
          techLevel: 3,
          icon: 'winning'
        },
        {
          id: 5,
          text: 'Stay physically active',
          benefit: 0,
          techLevel: 2,
          icon: 'bowling'
        }
      ]
    }
  },
  {
    id: 4,
    questions: {
      hasIcon: true,
      questionId: 4,
      questionText: 'What hearing challenges do you experience most?',
      options: [
        {
          id: 0,
          text: 'Hearing the TV',
          techLevel: 3,
          icon: 'tv'
        },
        {
          id: 1,
          text: 'Asking others to repeat themselves',
          techLevel: 2,
          icon: 'repeat'
        },
        {
          id: 2,
          text: 'Hearing women & children',
          techLevel: 2,
          icon: 'women'
        },
        {
          id: 3,
          text: 'Hearing in restaurants',
          techLevel: 1,
          icon: 'restaurants'
        },
        {
          id: 4,
          text: 'Hearing on the telephone',
          techLevel: 1,
          icon: 'telephone'
        },
        {
          id: 5,
          text: 'Missing important information',
          techLevel: 1,
          icon: 'questionMark'
        }
      ]
    }
  }
];

export default DATA;
