export const calculateImpactsHandler = (questionOne, questionTwo) => {
  let array = [];

  if (questionOne.benefit > 0 || questionTwo.benefit < 0)
    array.push('Brain Health / Cognition');

  if (questionOne.benefit < 0) array.push('Physical Health');

  if (questionOne.benefit > 0) array.push('Social Engagement');

  if (questionOne.benefit > 0 && questionTwo.benefit < 0) {
    array.push('Depression / Isolation');
  }

  if (
    questionOne.benefit < 0 ||
    questionTwo.answers.some(item => item.text === 'Being at risk of falling')
  ) {
    array.push('Balance / Safety');
  }

  return array;
};
