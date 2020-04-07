import React from 'react';

function Warning({message}) {
  return (
    <div className='warning'>
      <div className="warning-inner">
      {message}
      </div>
    </div>
  );
}

export default Warning;
