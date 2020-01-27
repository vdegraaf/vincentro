import React from 'react';

const SvgCricketMinus = ({id, number, decreaseScore }) => {
  
  return (<svg viewBox="0 0 36 8" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {decreaseScore(id, number)}} className="input-icon">
  <rect width="36" height="8" rx="3" fill="white" fill-opacity="0.6"/>
  </svg>
  )
}

export default SvgCricketMinus