import React from 'react';

import './horizontalList.styles.scss';

const HorizontalList = ({ children, className }) => (
  <ul className={`hList ${className ? className : ''}`}>{children}</ul>
);

export default HorizontalList;
