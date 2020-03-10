import React from 'react';

import './buttonPlayPause.styles.scss';

const ButtonPlayPause = ({ className, play, onClick }) => {
  const classList =
    'buttonPlayPause' +
    (className === undefined ? '' : ' ' + className) +
    (play ? '' : ' paused');

  return <button className={classList} onClick={onClick} />;
};

export default ButtonPlayPause;
