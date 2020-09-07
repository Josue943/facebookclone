import React from 'react';
import { CircularProgress } from '@material-ui/core';

import '../css/LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className='loading'>
      <CircularProgress color='primary' size='3rem' />
    </div>
  );
};

export default LoadingScreen;
