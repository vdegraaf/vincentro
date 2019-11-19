import React, { useContext, useState, useEffect, useRef } from 'react';
import OfficialContext from '../../context/official/officialContext';
import GameContext from '../../context/game/gameContext';
import possibleFinishes from './FinishSuggestionsData';

function FinishSuggestions({totalScore}) {
  const officialContext = useContext(OfficialContext);
  const gameContext = useContext(GameContext);
  let dart1;
  let dart2;
  const {current } = gameContext

  const [possibleFinish, setPossibleFinish] = useState(possibleFinishes[totalScore])
  let inputEl = useRef(null)
  let inputElTwo = useRef(null)

  useEffect(() => {
    setPossibleFinish(possibleFinishes[totalScore])
  }, [totalScore])

  useEffect(() => {
    clear()
  }, [current])

  const onChange = (e) => {
    
    setPossibleFinish(possibleFinishes[totalScore - e.target.value])
  }

  const clear = () => {
    
    inputEl.current.value = ""
    inputElTwo.current.value = ""
  }

  return (
    <div className='finish'>
      <button onClick={clear}>CLEAR</button>
      <p style={{ fontSize: '12px' }}>Possible finish: {possibleFinish}</p> 
      <input
        type='number'
        placeholder='dart 1'
        name='dart1'
        value={dart1}
        onChange={onChange}
        ref={inputEl}
      />
      <input
        type='number'
        placeholder='dart 2'
        name='dart2'
        value={dart2}
        onChange={onChange}
        ref={inputElTwo}
      />
    </div>
  );
}

export default FinishSuggestions;
