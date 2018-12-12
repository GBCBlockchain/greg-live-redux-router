import React from 'react';

import Header from '../components/header/header';

const Fallback = () => {
  return (
    <div>
      <Header title="Page not found!" />
      <h1>404!</h1>
    </div>
  )
}

export default Fallback;
