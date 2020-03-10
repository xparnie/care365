import { commaSeparatedListUtility, searchArrayOfObjects } from './helpers';

/**
 * Sort data from DB by SortOrder on Categories, then on Cards
 * @param {object} data The unsorted data from the DB
 * @return {object} sortedData The sorted data
 */
export function sortDataFromDB(data) {
  let sortedData = [];

  // For each Category...
  for (let i = 0; i < data.length; i++) {
    let cat = data[i];
    let cards = cat.Cards;
    let sortedCards = [];

    // For the length of Cards...
    for (let j = 0; j < cards.length; j++) {
      // Find Card SortOrder that matches j
      sortedCards.push(searchArrayOfObjects(cards, j + 1, 'SortOrder'));
    }

    // Replace the sorted list of Cards into the data
    data[i].Cards = sortedCards;
  }

  // For the length of Categories...
  for (let k = 0; k < data.length; k++) {
    // Find Card SortOrder that matches k
    sortedData.push(searchArrayOfObjects(data, k + 1, 'SortOrder'));
  }

  return sortedData;
}

/**
 * Assemble Patient data to send to DB
 * @param {object} data The assessmentState
 * @return {object} assebledData The assembled Patient data
 */
export function assemblePatientData(data) {
  const assembledData = {
    FirstName: data.patient.firstName,
    LastInitial: data.patient.lastInitial,
    BirthYear: 1234,
    EmailAddress: 'none',
    CreatedIP: data.provider.ip,
    ModifiedIP: data.provider.ip,
    ProviderID: data.provider.id
  };
  return assembledData;
}

/**
 * Assemble Assessment data to send to DB
 * @param {object} data The assessmentState
 * @return {object} assebledData The assembled Assessment data
 */
export function assembleAssessmentData(data, profileID, assessmentID) {
  /////
  // 1. Create Card choices array
  /////
  let cardsData = [];

  // For each category...
  for (let i = 0; i < data.assessment.length; i++) {
    let category = data.assessment[i];
    let cardsList = { CategoryID: category.guid };

    // For each answer...
    for (let j = 0; j < category.answers.length; j++) {
      cardsList['Card' + (j + 1)] = category.answers[j].guid;
    }

    cardsData.push(cardsList);
  }

  /////
  // 2. Create the Accessories list
  /////
  let accessoriesString = '';

  const checkedAccessories = data.accessories.filter(
    item => item.checked === true
  );

  if (checkedAccessories.length) {
    accessoriesString = commaSeparatedListUtility(checkedAccessories);
  } else {
    accessoriesString = 'None';
  }

  /////
  // 3. Create the Impacts list
  /////
  let impactsString = '';

  const impactsArr = data.impactsOfHearingLoss;

  if (!(impactsArr === undefined) && impactsArr.length > 0) {
    impactsString = impactsArr
      .map(item => item)
      .reduce((prev, curr) => prev + ', ' + curr);
  } else {
    impactsString = 'None';
  }

  /////
  // 4. Create the final data object
  /////
  const assembledData = {
    ProfileID: profileID,
    ProviderID: data.provider.id,
    FrustrationLevel: data.frustrationLevel.text,
    HearingLossChoice: data.hearingLoss.text,
    HearingLossType: data.typesOfHearingLoss.text,
    HearingAidStyle: data.hearingAidStyle,
    Accessory: accessoriesString,
    ImpactsOfHearingLoss: impactsString,
    TechnologyLevel: data.technologyLevel,
    CardList: cardsData
  };

  /////
  // 3.1. Add AssessmentID to assembledData if assessmentID is provided
  /////
  if (assessmentID !== undefined) {
    assembledData.AssessmentID = assessmentID;
  }

  return assembledData;
}
