export const initialAssessmentState = {
  patient: {
    firstName: null,
    lastInitial: null
  },
  assessmentID: 0,
  assessment: [],
  assessmentCompleted: false,
  impactsOfHearingLoss: [],
  hearingLoss: {
    text: 'Normal',
    current: 0
  },
  frustrationLevel: {
    text: 'Neutral',
    current: null
  },
  technologyLevel: 'Best',
  typesOfHearingLoss: {
    text: 'Normal',
    current: 0
  },
  hearingAidStyle: '',
  accessories: [
    { id: 0, text: 'TV', checked: false },
    { id: 1, text: 'Remote Microphone +', checked: false },
    { id: 2, text: 'Mini Remote Microphone', checked: false },
    { id: 3, text: 'Remote', checked: false },
    { id: 4, text: 'Table Mic', checked: false }
  ],
  provider: {
    email: '',
    id: '',
    ip: '',
    emailSentOnce: false
  }
};

export const assessmentReducer = (state = initialAssessmentState, action) => {
  switch (action.type) {
    case 'SET_PATIENT_NAME':
      return {
        ...state,
        patient: {
          firstName: action.payload[0],
          lastInitial: action.payload[1]
        }
      };

    /**
     * PROVIDER
     */
    case 'SET_PROVIDER_EMAIL':
      return {
        ...state,
        provider: {
          ...state.provider,
          email: action.payload.data
        }
      };
    case 'SET_PROVIDER_IP':
      return {
        ...state,
        provider: {
          ...state.provider,
          ip: action.payload.data
        }
      };
    case 'SET_PROVIDER_ID':
      return {
        ...state,
        provider: {
          ...state.provider,
          id: action.payload.data
        }
      };
    case 'SET_PROVIDER_EMAILSENTONCE':
      return {
        ...state,
        provider: {
          ...state.provider,
          emailSentOnce: action.payload
        }
      };
    /**
     * ASSESSMENT
     */
    case 'MERGE_DB_DATA':
      return {
        ...state,
        assessment: action.payload.map((item, i) => {
          return {
            answers: [],
            benefit: 0,
            completed: false,
            guid: item.CategoryID,
            id: i,
            options: item.Cards.map((card, j) => {
              return {
                features: {
                  ai: questionSupplement[i].features.ai[j],
                  techLevel: questionSupplement[i].features.techLevel[j]
                },
                benefit: card.Score,
                guid: card.CardID,
                icon: questionSupplement[i].icons[j],
                id: j,
                text: card.Name
              };
            }),
            question: item.Name,
            selectedTiles: new Array(item.Cards.length + 1)
              .join('0')
              .split('')
              .map(parseFloat)
          };
        })
      };
    case 'SET_ASSESSMENT_ANSWERS':
      return {
        ...state,
        assessment: [...state.assessment].map((item, index) => {
          if (index !== action.payload.id) return item;
          return {
            ...item,
            answers: action.payload.data
          };
        })
      };

    case 'SET_ASSESSMENT_ANSWERS_BENEFIT':
      return {
        ...state,
        assessment: [...state.assessment].map((item, index) => {
          if (index !== action.payload.id) return item;
          return {
            ...item,
            benefit: action.payload.data
          };
        })
      };

    case 'SET_ASSESSMENT_QUESTION_COMPLETED':
      return {
        ...state,
        assessment: [...state.assessment].map((item, index) => {
          if (index !== action.payload.id) return item;
          return {
            ...item,
            completed: action.payload.data
          };
        })
      };

    case 'SET_ASSESSMENT_ACTIVE_TILE':
      return {
        ...state,
        assessment: [...state.assessment].map((item, index) => {
          if (index !== action.payload.id) return item;
          return {
            ...item,
            selectedTiles: action.payload.data
          };
        })
      };

    case 'SET_ASSESSMENT_COMPLETED':
      return {
        ...state,
        assessmentCompleted: action.payload.data
      };

    case 'SET_ASSESSMENT_ID':
      return {
        ...state,
        assessmentID: action.payload
      };
    /**
     * CHALLENGES
     */
    case 'SET_ASSESSMENT_CHALLENGE_VALUE':
      return {
        ...state,
        challengeSelection: {
          ...state.challengeSelection,
          value: action.payload
        }
      };

    case 'SET_ASSESSMENT_CHALLENGE_GUID':
      return {
        ...state,
        challengeSelection: {
          ...state.challengeSelection,
          guid: action.payload
        }
      };

    case 'SET_ASSESSMENT_CHALLENGE_COMPLETED':
      return {
        ...state,
        challengeSelection: {
          ...state.challengeSelection,
          completed: action.payload
        }
      };
    /**
     * HEARING LOSS
     */
    case 'SET_HEARINGLOSS_PAGE_CURRENT':
      return {
        ...state,
        hearingLoss: { ...state.hearingLoss, current: action.payload }
      };
    case 'SET_HEARINGLOSS_PAGE_TEXT':
      return {
        ...state,
        hearingLoss: { ...state.hearingLoss, text: action.payload }
      };
    /**
     * TYPES OF HEARING LOSS
     */
    case 'SET_TYPESOFHEARINGLOSS_PAGE_TEXT':
      return {
        ...state,
        typesOfHearingLoss: {
          ...state.typesOfHearingLoss,
          text: action.payload
        }
      };
    case 'SET_TYPESOFHEARINGLOSS_PAGE_CURRENT':
      return {
        ...state,
        typesOfHearingLoss: {
          ...state.typesOfHearingLoss,
          current: action.payload
        }
      };
    case 'SET_HEARINGAIDSTYLES_PAGE':
      return {
        ...state,
        hearingAidStyle: action.payload
      };

    case 'SET_IMPACTSOFHEARINGLOSS':
      return {
        ...state,
        impactsOfHearingLoss: action.payload
      };

    case 'SET_FRUSTRATIONLEVEL_TEXT':
      return {
        ...state,
        frustrationLevel: {
          ...state.frustrationLevel,
          text: action.payload
        }
      };

    case 'SET_FRUSTRATIONLEVEL_CURRENT':
      return {
        ...state,
        frustrationLevel: {
          ...state.frustrationLevel,
          current: action.payload
        }
      };
    /**
     * Accessories
     */
    case 'SET_ACCESSORIES_PAGE_ADD':
    case 'SET_ACCESSORIES_PAGE_REMOVE':
      return {
        ...state,
        accessories: state.accessories.map((item, index) => {
          if (index !== action.payload.id) return item;

          return {
            ...item,
            checked: action.payload.checked
          };
        })
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const questionSupplement = [
  {
    features: {
      ai: ['BOT', 'BOT', 'BOT', 'BOT', 'BOT', 'BOT'],
      techLevel: [1, 1, 1, 2, 3, 2]
    },
    icons: [
      'active',
      'sociable',
      'comfortable',
      'inactive',
      'reserved',
      'technology'
    ]
  },
  {
    features: {
      ai: ['BOT', 'BRT', 'BRT', 'BOT', 'BRT', 'TC'],
      techLevel: [1, 2, 2, 2, 1, 3]
    },
    icons: ['exercise', 'reserved', 'cards', 'family', 'restaurants', 'tv']
  },
  {
    features: {
      ai: ['FD', 'BRT', 'BRT', 'BRT', 'FD', 'BRT'],
      techLevel: [1, 2, 1, 1, 1, 3]
    },
    icons: ['independence', 'brain', 'unhappy', 'cane', 'fall', 'happy']
  },
  {
    features: {
      ai: ['BOT', 'BOT', 'BRT', 'BRT', 'BRT', 'BOT'],
      techLevel: [1, 1, 1, 2, 3, 2]
    },
    icons: ['bolt', 'scale', 'bulb', 'chat', 'winning', 'bowling']
  },
  {
    features: {
      ai: ['TC', 'TR', 'TR', 'BOT', 'BOT', 'TR'],
      techLevel: [3, 3, 3, 3, 3, 3]
    },
    icons: ['tv', 'repeat', 'women', 'restaurants', 'telephone', 'questionMark']
  }
];
