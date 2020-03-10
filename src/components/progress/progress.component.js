import React from 'react';
import { Link } from 'react-router-dom';

import './progress.styles.scss';

const Progress = ({
  goTo,
  classNames = 'progress',
  text = 'Select',
  active = 0
}) => (
  <>
    <Link
      className={classNames}
      to={{
        pathname: `${goTo.toString()}`,
        state: { active: active }
      }}
    >
      <span className="progress-text">{text}</span>
      <span className="progress-arrow">
        <i className="fas fa-chevron-down"></i>
      </span>
    </Link>
  </>
);

export default Progress;
