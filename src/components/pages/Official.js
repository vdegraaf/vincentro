import React, { useContext, useEffect } from 'react';
import Names from '../official/Names';
import AddScore from '../official/AddScore';
import TurnScore from '../official/TurnScore';

const Official = () => {
  return (
    <div>
      <h1>Official darts: 501</h1>
      <Names />
      <TurnScore />
      <AddScore />
    </div>
  );
};

export default Official;
