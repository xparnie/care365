import React from 'react';

import './kebabNav.styles.scss';

const kebabNav = ({ num, active, pinned }) => (
  <div className="kebabNav">
    {[...Array(num)].map((item, index) => {
      return (
        <div
          key={index}
          className={`kebabNav-item ${
            index === active ? 'kebabNav-item_active' : ''
          } ${index === pinned ? 'kebabNav-item_pinned' : ''}`}
        />
      );
    })}
  </div>
);

export default kebabNav;
