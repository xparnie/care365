import React, { useContext, useEffect, useState } from 'react';
import { sendAppointmentSummary } from '../../api';
import { commaSeparatedListUtility } from '../../functions/helpers';

import assessmentContext from '../../assessmentStore';

import Shelf from '../../components/shelf/shelf.component';
import Heading from '../../components/heading/heading.component';

import './summary.styles.scss';

const Summary = ({ data }) => {
  const { assessmentDispatch, assessmentState } = useContext(assessmentContext);

  const accessoriesSummaryHandler = () => {
    const checkedAccessories = data.accessories.filter(
      item => item.checked === true
    );

    if (checkedAccessories.length)
      return commaSeparatedListUtility(checkedAccessories);

    return 'None';
  };

  const [emailButtonState, setEmailButtonState] = useState(1);

  const sendEmailHandler = id => {
    setEmailButtonState(1);
    sendAppointmentSummary(id, data.provider.email)
      .then(res => {
        console.log(res);
        // "Email sent successfully"
        // or
        // "Failure to send email"
        if (res === 'Email sent successfully') {
          setEmailButtonState(2);

          assessmentDispatch({
            type: 'SET_PROVIDER_EMAILSENTONCE',
            payload: true
          });
        } else {
          setEmailButtonState(3);
        }
      })
      .catch(err => {
        console.log(err);
        console.log('email no go');
        setEmailButtonState(3);
      });
  };

  useEffect(() => {
    if (data.provider.email === '') {
      console.warn(
        'No email address set for Provider. Must visit start page for global Provider data to be set'
      );
      setEmailButtonState(3);
    }

    if (assessmentState.assessmentID.length === 36) {
      setEmailButtonState(0);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [assessmentState.assessmentID.length]);

  return (
    <>
      <Shelf xlarge>
        <Heading large blue>
          Appointment Summary
        </Heading>
        <Heading small>
          {data.patient.firstName || data.patient.lastInitial
            ? `${data.patient.firstName} ${data.patient.lastInitial}`
            : ''}
        </Heading>
      </Shelf>
      <div className="summary">
        <Shelf xlarge>
          <div className="summary-cols">
            <div className="summary-col">
              <div className="summary-hd">
                <span className="summary-hd-text">Lifestyle Results</span>
              </div>
              {!data.assessmentCompleted ? (
                <p className="summary-item">Please complete assessment</p>
              ) : (
                <ul className="summary-list">
                  {data.assessment.map(({ answers, question }) => (
                    <li key={question}>
                      <div className="summary-item">
                        <span className="summary-item-hd">{question}: </span>

                        {answers.length && commaSeparatedListUtility(answers)}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="summary-col summary-col-flex">
              <div className="summary-col-item">
                <div className="summary-hd">
                  <span className="summary-hd-text">Hearing Results</span>
                </div>
                <ul className="summary-list">
                  <li>
                    <div className="summary-item">
                      <span className="summary-item-hd">Hearing Loss: </span>
                      {data.hearingLoss.text}
                    </div>
                  </li>
                  <li>
                    <div className="summary-item">
                      <span className="summary-item-hd">
                        Type of Hearing Loss:{' '}
                      </span>
                      {data.typesOfHearingLoss.text}
                    </div>
                  </li>
                </ul>
              </div>
              <div className="summary-col-item summary-col-rec">
                <div className="summary-hd">
                  <span className="summary-hd-text">Recommendation</span>
                </div>
                <ul className="summary-list">
                  <li>
                    <div className="summary-item">
                      <span className="summary-item-hd">
                        Technology Level:{' '}
                      </span>
                      {data.technologyLevel}
                    </div>
                  </li>
                  <li>
                    <div className="summary-item">
                      <span className="summary-item-hd">
                        Hearing Aid Solution:{' '}
                      </span>
                      {data.hearingAidStyle}
                    </div>
                  </li>
                  <li>
                    <div className="summary-item">
                      <span className="summary-item-hd">Accessories: </span>
                      {accessoriesSummaryHandler()}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Shelf>
        <Shelf large>
          <div className="summary-email">
            <button
              className={`summary-email-button${
                emailButtonState > 0 ? ' clicked' : ''
              }${emailButtonState === 2 ? ' success' : ''}`}
              type="submit"
              onClick={() => {
                sendEmailHandler(assessmentState.assessmentID);
              }}
              disabled={emailButtonState > 0 ? true : false}
            >
              {emailButtonState === 0 && (
                <span className="email-button-send">
                  {assessmentState.provider.emailSentOnce
                    ? 'Send Again'
                    : 'Send to Provider'}
                </span>
              )}
              {emailButtonState === 1 && (
                <span className="email-button-spinner">
                  <i className="fas fa-spinner" />
                </span>
              )}
              {emailButtonState === 2 && (
                <span className="email-button-sent">
                  <i className="fas fa-check" />
                </span>
              )}
              {emailButtonState === 3 && (
                <span className="email-button-warn">
                  <i className="fas fa-exclamation-triangle" />
                </span>
              )}
            </button>
          </div>
        </Shelf>
      </div>
    </>
  );
};

export default Summary;
