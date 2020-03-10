import React from 'react';

import './modal.styles.scss';

const Modal = ({ children }) => (
  <div className="modal">
    <div className="modal-inner">
      {children[0]}
      <div className="modal-inner-trigger">{children[1]}</div>
    </div>
  </div>
);

export default Modal;
