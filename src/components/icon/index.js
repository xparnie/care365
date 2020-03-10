import React from 'react';

// Global
import Logo from './Logo';

// Question 1 - Self Descriptor
import Active from './Active';
import Sociable from './Sociable';
import Comfortable from './Comfortable';
import Inactive from './Inactive';
import Reserved from './Reserved';
import Technology from './Technology';

// Question 2 - Favorite Activites
import Exercise from './Exercise';
import Cards from './Cards';
import Family from './Family';
import Cane from './Cane';

// Question 3 - Wellness Concerns
import Independence from './Independence';
import Unhappy from './Unhappy';
import Happy from './Happy';

// Question 4 - Healthy Living Goals
import Apple from './Apple';
import Bolt from './Bolt';
import Bulb from './Bulb';
import Chat from './Chat';
import Bowling from './Bowling';
import Winning from './Winning';
import Scale from './Scale';

// Question 5 - Hearing Challenges
import TV from './TV';
import Repeat from './Repeat';
import Women from './Women';
import Restaurants from './Restaurants';
import Telephone from './Telephone';
import QuestionMark from './QuestionMark';

// Other sections
import Fall from './Fall';
import Brain from './Brain';
import Depression from './Depression';
import BodyActivity from './BodyActivity';
import BrainHealth from './BrainHealth';
import FallDetection from './FallDetection';
import HearingCare from './HearingCare';
import Reminders from './Reminders';
import SelfCheck from './SelfCheck';
import ThriveAssistant from './ThriveAssistant';
import Transcribe from './Transcribe';
import Translation from './Translation';
import Checkmark from './Checkmark';
import Tap from './Tap';
import Thrive from './Thrive';
import Plus from './Plus';

import BadFace from './BadFace';
import NeutralFace from './NeutralFace';
import SlightlyFace from './SlightlyFace';
import NotGoodFace from './NotGoodFace';
import VeryBadFace from './VeryBadFace';

import Memories from './Memories';
import Stream from './Stream';
import Adjust from './Adjust';

const Icon = ({ name, ...props }) => {
  switch (name) {
    case 'logo':
      return <Logo {...props} />;
    case 'apple':
      return <Apple {...props} />;
    case 'bulb':
      return <Bulb {...props} />;
    case 'chat':
      return <Chat {...props} />;
    case 'bowling':
      return <Bowling {...props} />;
    case 'winning':
      return <Winning {...props} />;
    case 'scale':
      return <Scale {...props} />;
    case 'tv':
      return <TV {...props} />;
    case 'repeat':
      return <Repeat {...props} />;
    case 'women':
      return <Women {...props} />;
    case 'restaurants':
      return <Restaurants {...props} />;
    case 'telephone':
      return <Telephone {...props} />;
    case 'questionMark':
      return <QuestionMark {...props} />;
    case 'active':
      return <Active {...props} />;
    case 'sociable':
      return <Sociable {...props} />;
    case 'comfortable':
      return <Comfortable {...props} />;
    case 'inactive':
      return <Inactive {...props} />;
    case 'reserved':
      return <Reserved {...props} />;
    case 'technology':
      return <Technology {...props} />;
    case 'fall':
      return <Fall {...props} />;
    case 'brain':
      return <Brain {...props} />;
    case 'depression':
      return <Depression {...props} />;
    case 'bodyActivity':
      return <BodyActivity {...props} />;
    case 'brainHealth':
      return <BrainHealth {...props} />;
    case 'fallDetection':
      return <FallDetection {...props} />;
    case 'hearingCare':
      return <HearingCare {...props} />;
    case 'reminders':
      return <Reminders {...props} />;
    case 'selfCheck':
      return <SelfCheck {...props} />;
    case 'thriveAssistant':
      return <ThriveAssistant {...props} />;
    case 'thrive':
      return <Thrive {...props} />;
    case 'transcribe':
      return <Transcribe {...props} />;
    case 'translation':
      return <Translation {...props} />;
    case 'checkmark':
      return <Checkmark {...props} />;
    case 'exercise':
      return <Exercise {...props} />;
    case 'cards':
      return <Cards {...props} />;
    case 'family':
      return <Family {...props} />;
    case 'independence':
      return <Independence {...props} />;
    case 'unhappy':
      return <Unhappy {...props} />;
    case 'happy':
      return <Happy {...props} />;
    case 'cane':
      return <Cane {...props} />;
    case 'bolt':
      return <Bolt {...props} />;
    case 'tap':
      return <Tap {...props} />;
    case 'plus':
      return <Plus {...props} />;
    case 'badFace':
      return <BadFace {...props} />;
    case 'neutralFace':
      return <NeutralFace {...props} />;
    case 'slightlyFace':
      return <SlightlyFace {...props} />;
    case 'notGoodFace':
      return <NotGoodFace {...props} />;
    case 'veryBadFace':
      return <VeryBadFace {...props} />;
    case 'stream':
      return <Stream {...props} />;
    case 'adjust':
      return <Adjust {...props} />;
    case 'memories':
      return <Memories {...props} />;
    default:
      return;
  }
};

export default Icon;
