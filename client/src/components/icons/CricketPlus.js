import React from 'react';

const SvgCricketPlus = ({id, number, counter, addScore, className}) => {
  
  return (<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => addScore(id, number)} className={` input-icon ${counter}`}>
  <path fillRule="evenodd" clipRule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM16.0002 23.619C20.2081 23.619 23.6193 20.2079 23.6193 16C23.6193 11.7921 20.2081 8.38094 16.0002 8.38094C11.7923 8.38094 8.38118 11.7921 8.38118 16C8.38118 20.2079 11.7923 23.619 16.0002 23.619Z" fill={className} fillOpacity="0.6"/>
  </svg>
  
  )
}

export default SvgCricketPlus