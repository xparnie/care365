import React from 'react';

import './checkbox.styles.scss';

const Checkbox = ({ id, checked, text, onClick }) => (
  <div className="checkbox" onClick={onClick}>
    <label className="visually-hidden" htmlFor={id}>{text}</label>
    <input
      id={id}
      className="checkbox-input"
      readOnly
      checked={checked}
      type="checkbox"
    />
    <div className="checkbox-custom" />
  </div>
);

export default Checkbox;
