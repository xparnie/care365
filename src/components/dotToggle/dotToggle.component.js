import React from 'react';

import './dotToggle.styles.scss';

const DotToggle = ({ toggled, onClick }) => (
  <div className={`dotToggle ${toggled ? 'toggled' : ''}`} onClick={onClick} />
);

export default DotToggle;
