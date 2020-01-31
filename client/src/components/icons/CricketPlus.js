import React from 'react';

const SvgCircleCricket = ({id, number, counter, addScore}) => {  
    return (<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => addScore(id, number)} className={` input-icon ${counter}`}>
      <defs>
        <clipPath id="second-circle">
          <polygon points="24,-10 24,24 0,50 -100,50" />
        </clipPath>
        <clipPath id="third-circle">     
          <polygon points="24,-10 24,24 50,50 -100,50" />
        </clipPath>
        <clipPath id="fourth-circle">     
          <polygon points="0,0 0,0 100,100 100,100" />
        </clipPath>
      </defs>}
  
      <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM11.9409 24C11.9409 30.6601 17.3399 36.0591 24 36.0591C30.6601 36.0591 36.0591 30.6601 36.0591 24C36.0591 17.3399 30.6601 11.9409 24 11.9409C17.3399 11.9409 11.9409 17.3399 11.9409 24Z" fill={'#C4C4C4'} fillOpacity="0.4"   />
      <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM11.9409 24C11.9409 30.6601 17.3399 36.0591 24 36.0591C30.6601 36.0591 36.0591 30.6601 36.0591 24C36.0591 17.3399 30.6601 11.9409 24 11.9409C17.3399 11.9409 11.9409 17.3399 11.9409 24Z" fill={!counter ? ' #C4C4C4' : "#FE5000" } clipPath={`url(${counter === 1 ? '#second-circle' : counter === 2 ? '#third-circle' : ''})`} fillOpacity={!counter ? '0.6' : '1'} />
    </svg>

  );
};

export default SvgCircleCricket;