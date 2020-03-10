import React, { useEffect, useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import assessmentContext from '../../assessmentStore';

import './start.styles.scss';
import Icon from '../../components/icon';

const Start = ({ history }) => {
  const { assessmentDispatch } = useContext(assessmentContext);

  const [patData, setPatData] = useState({
    fname: '',
    linitial: ''
  });
  const [disabled, setDisabled] = useState(true);

  const handleInputChange = function(event) {
    const target = event.currentTarget;

    if (target.id === 'fname') {
      setPatData(patData => ({ ...patData, fname: target.value }));
    }

    if (target.id === 'linitial') {
      setPatData(patData => ({ ...patData, linitial: target.value }));
    }
  };

  const handleSubmit = function(event) {
    event.preventDefault();

    assessmentDispatch({
      type: 'SET_PATIENT_NAME',
      payload: [patData.fname, patData.linitial]
    });

    history.push('/intro');
  };

  useEffect(() => {
    if (patData.fname !== '' && patData.linitial !== '') {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [patData]);

  return (
    <div className="start">
      <div className="start-header">
        <Icon name="logo" />
      </div>
      <form className="start-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fname">Patient First Name</label>
          <input
            type="text"
            name="fname"
            id="fname"
            value={patData.fname}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="linitial">Patient Last Initial</label>
          <input
            type="text"
            name="linitial"
            id="linitial"
            value={patData.linitial}
            onChange={handleInputChange}
            maxLength="1"
          />
        </div>
        <div className="form-group form-group-centered">
          <button className="start-button" type="submit" disabled={disabled}>
            Submit
          </button>
        </div>
      </form>
      <div className="start-disclaimer">
        <p>Apple is a registered trademark of Apple Inc.</p>
        <p>Google Play is a trademark of Google, LLC.</p>
        <p>
          The Bluetooth&reg; word mark is a registered trademark owned by
          Bluetooth SIG, Inc. and any use of such marks by Starkey is under
          license.
        </p>
        <p>
          Hear Better. Live Better. and the Starkey logo are registered
          trademarks of Starkey Laboratories, Inc.
        </p>
      </div>
    </div>
  );
};

export default withRouter(Start);
