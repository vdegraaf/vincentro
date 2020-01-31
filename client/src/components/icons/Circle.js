import React from 'react';

const Circle = (props) => {
  return (<svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" >
    <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM11.9409 24C11.9409 30.6601 17.3399 36.0591 24 36.0591C30.6601 36.0591 36.0591 30.6601 36.0591 24C36.0591 17.3399 30.6601 11.9409 24 11.9409C17.3399 11.9409 11.9409 17.3399 11.9409 24Z" fill="#FE5000" {...props} />
  </svg>

  );
};

export default Circle;