import React, { useContext } from 'react';
import Backspace from '../icons/BackSpace'


const Keyboard = ({onChange, onBackspace}) => {

  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', ' ', '0']
  
  
  
  return (
    <div className="keyboard-container">
      {keys.map((key, i) => {
        return <div 
        onClick={(e) => onChange(e.currentTarget.dataset.value)} 
        key={i} data-value={key}
        className="keyboard-item"
        >{key}</div>
      })}
      <div onClick={() => onBackspace()}className="keyboard-item">
        <Backspace />
        </div>
    </div>
  )
};

export default Keyboard;
 