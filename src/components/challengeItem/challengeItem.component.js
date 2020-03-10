import React from 'react';

import '../../styles/checkbox/checkbox.scss';

const ChallengeItem = ({ item, activeItem, checkedItem }) => (
  <>
    <div className={`challenges-list-icon ${activeItem}`}>
      <label className="checkbox">
        <input
          className="checkbox-input"
          type="checkbox"
          readOnly
          name="challenges"
          checked={checkedItem}
        />
        <div className="checkbox-custom" />
      </label>
    </div>
    <span className="challenges-list-text">{item}</span>
  </>
);

export default ChallengeItem;
