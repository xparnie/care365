import React from 'react';

import './horizontalListItem.styles.scss';

const HorizontalListItem = ({ children }) => (
  <li className="hList-item">{children}</li>
);

export default HorizontalListItem;
