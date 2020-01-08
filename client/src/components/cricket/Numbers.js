import React from 'react';

const Numbers = () => {
  let numbers = [];
  for (let index = 20; index > 13; index--) {
    numbers = [...numbers, index === 14 ? 'Bull' : index];
  }

  return (
    <div className='numberContainer'>
      {numbers.map(number => (
        <div className='numberContainer--number' key={number.toString()}>{number}</div>
      ))}
    </div>
  );
};

export default Numbers;
