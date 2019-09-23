import React from 'react';
import Names from '../official/Names';
import AddScore from '../official/AddScore';
import TurnScore from '../official/TurnScore';
import TotalScore from '../official/TotalScore';

const Official = () => {
  return (
    <div>
      <h1>Official darts: 501</h1>
      <Names />
      <TurnScore />
      <TotalScore />
      <AddScore />
    </div>
  );
};

export default Official;
