import React from 'react';

import { Link } from 'react-router-dom';

import './button.styles.scss';

const Button = ({ children, link }) => (
  <Link className="button" to={link}>
    {children}
  </Link>
);

export default Button;
