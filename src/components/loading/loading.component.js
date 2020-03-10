import React from 'react';
import Spinner from '../spinner/spinner.component';

import './loading.styles.scss';

const Loading = () => {

  return(
    <div className="Loading">
      <Spinner />
    </div>
  );
};

export default Loading;
