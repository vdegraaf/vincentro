import React, { useContext, useState, useEffect, useRef } from 'react';
import GameContext from '../../context/game/gameContext';
import possibleFinishes from './FinishSuggestionsData';

function FinishSuggestions({ totalScore }) {
  const gameContext = useContext(GameContext);
  let dart1;
  let dart2;
  const { current } = gameContext;

  const [possibleFinish, setPossibleFinish] = useState(
    possibleFinishes[totalScore]
  );
  let inputEl = useRef(null);
  let inputElTwo = useRef(null);

  useEffect(() => {
    setPossibleFinish(possibleFinishes[totalScore]);
  }, [totalScore]);

  useEffect(() => {
    clear();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const onChange = e => {
    let dart = e.target.value;

    if (totalScore - dart > 100 || totalScore - dart === 99) {
      setPossibleFinish('Not Possible')
    } else {
      setPossibleFinish(possibleFinishes[totalScore - e.target.value]);
    }
  };

  const clear = () => {
    setPossibleFinish(possibleFinishes[totalScore])
    inputEl.current.value = '';
    inputElTwo.current.value = '';
  };

  return (
    <div className='finish'>
      {possibleFinish && (
        <p style={{ fontSize: '14px', marginTop: '20px' }}>
          finish: <b style={{ fontSize: '20px' }}>{possibleFinish}</b>
        </p>
      )}
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
