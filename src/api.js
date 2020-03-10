/**
 * Add a Patient Assessment to the DB
 * @param {object} data The Assessment data to submit
 * @return {string} respText The response message
 */
export async function addAssessment(data) {
  let body = {
    ProfileID: data.ProfileID,
    ProviderID: data.ProviderID,
    FrustrationLevel: data.FrustrationLevel,
    HearingLossChoice: data.HearingLossChoice,
    HearingLossType: data.HearingLossType,
    HearingAidStyle: data.HearingAidStyle,
    Accessory: data.Accessory,
    ImpactsOfHearingLoss: data.ImpactsOfHearingLoss,
    TechnologyLevel: data.TechnologyLevel,
    CardList: data.CardList
  };

  if (data.AssessmentID !== undefined) {
    body['AssessmentID'] = data.AssessmentID;
  }

  const response = await fetch(
    'https://patientprofilereview.azurewebsites.net/api/AddAssessment',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  );
  const respText = await response.text();
  const id = respText.substring(respText.length - 36);

  return id;
}

/**
 * Add a Patient record to the DB
 * @param {object} data The data to submit
 * @return {string} respText The response message containing Patient ID
 */
export async function addPatientProfile(data) {
  const response = await fetch(
    'https://patientprofilereview.azurewebsites.net/api/AddPatientProfile',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        FirstName: data.FirstName,
        LastInitial: data.LastInitial,
        BirthYear: data.BirthYear,
        EmailAddress: data.EmailAddress,
        CreatedIP: data.CreatedIP,
        ModifiedIP: data.ModifiedIP,
        ProviderID: data.ProviderID
      })
    }
  );
  const respText = await response.text();
  const id = respText.substring(respText.length - 36);

  return id;
}

/**
 * Add/update a Provider record in the DB
 * @param {object} data The Provider data to submit
 * @return {string} id The Provider ID
 */
export async function addProviderRecord(data) {
  const response = await fetch(
    'https://patientprofilereview.azurewebsites.net/api/AddProviderRecord',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        FirstName: data.FirstName,
        LastName: data.LastName,
        EmailAddress: data.EmailAddress,
        AccountNum: data.AccountNum,
        CreatedIP: data.CreatedIP,
        ModifiedIP: data.ModifiedIP
      })
    }
  );
  const resText = await response.text();
  const id = resText.substring(resText.length - 36);

  return id;
}

/**
 * Get all cards (choices) within categories
 * @return {object} data The data containing cards & categories
 */
export async function getAllCardsPerCategory() {
  const response = await fetch(
    'https://patientprofilereview.azurewebsites.net/api/GetAllCardsPerCategory'
  );
  const data = await response.json();

  return data;
}

/**
 * Get details of an Assessment based on AssessmentID
 * @param {string} id The Assessment ID
 * @return {object} data The Assessment data
 */
export async function getAssessment(id) {
  const response = await fetch(
    'https://patientprofilereview.azurewebsites.net/api/GetAssessment?AssessmentID=' +
      id
  );
  const data = await response.json();

  return data;
}

/**
 * Send Assessment Summary to Provider via email
 * @param {string} id The Assessment ID
 * @param {string} email The Provider's email address
 * @return {string} res The request response
 */
export async function sendAppointmentSummary(id, email) {
  let response = await fetch(
    'https://patientprofilereview.azurewebsites.net/api/SendAppointmentSummary',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        AssessementID: id,
        ProviderEmail: email
      })
    }
  );
  let data = await response.text();

  return data;
}

/**
 * Get client IP address
 * @return {object} data Client IP address
 */
export async function getIpAddress() {
  let response = await fetch('https://api.ipify.org/?format=json');
  let data = await response.json();

  return data;
}
