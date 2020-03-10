import React from 'react';

import './toggler.styles.scss';

const Toggler = ({ children, className }) => (
  <button className={`toggler ${className}`}>{children}</button>
);

export default Toggler;
