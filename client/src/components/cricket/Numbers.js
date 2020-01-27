import React from 'react';

const Numbers = () => {
  let numbers = [];
  for (let index = 20; index > 13; index--) {
    numbers = [...numbers, index === 14 ? 'Bull' : index];
  }

  return (
    <div className="container__three">
      {numbers.map(number => (
        <h3 className="input-score" key={number.toString()}>{number}</h3>
      ))}
    </div>
  );
};

export default Numbers;
