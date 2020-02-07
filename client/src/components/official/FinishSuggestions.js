import React, { useContext, useState, useEffect, useRef } from 'react';
import GameContext from '../../context/game/gameContext';
import OfficialContext from '../../context/official/officialContext';
import possibleFinishes from './FinishSuggestionsData';

function FinishSuggestions() {
  const gameContext = useContext(GameContext);
  const officialContext = useContext(OfficialContext);

  const { current } = gameContext;
  const { players } = officialContext;
  let dart1;
  let dart2;

  let inputEl = useRef(null);
  let inputElTwo = useRef(null);

  const [finish, setFinish] = useState({
    1: '',
    2: ''
  });

  useEffect(() => {
    getFinishes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [players]);

  useEffect(() => {
    clear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const getFinishes = () => {
    setFinish({
      1: possibleFinishes[players[0].totalScore[0]],
      2: possibleFinishes[players[1].totalScore[0]]
    });
  };

  const onChange = e => {
    let dart = inputEl.current.value + inputElTwo.current.value;
    let player = players.find(player => player.id === current.id);
    let id = player.id;

    if (id === 1) {
      setFinish({
        1: possibleFinishes[players[0].totalScore[0] - dart],
        2: possibleFinishes[players[1].totalScore[0]]
      });
    } else {
      setFinish({
        1: possibleFinishes[players[0].totalScore[0]],
        2: possibleFinishes[players[1].totalScore[0] - dart]
      });
    }
  };

  const clear = () => {
    if (inputElTwo.current && inputEl.current) {
      inputEl.current.value = '';
      inputElTwo.current.value = '';
    }
  };

  return (
    <div className='finish'>
      
        {finish[1] && <div className='finish-P1'>{finish[1].map(score => <div key={score}>{score}</div>)}</div>}
        {finish[2] && <div className='finish-P2'>{finish[2].map(score => <div key={score}>{score}</div>)}</div>}
      
      {/* {(finish[1] || finish[2]) && (
        <div className={'input-501 input-501-' + current.id}>
          <input
            type='number'
            placeholder='dart 1'
            name='dart1'
            value={dart1}
            onChange={onChange}
            ref={inputEl}
            className='input-dartOne'
          />
          <input
            type='number'
            placeholder='dart 2'
            name='dart2'
            value={dart2}
            onChange={onChange}
            ref={inputElTwo}
            className='input-dartTwo'
          />
        </div>
      )} */}
    </div>
  );
}

export default FinishSuggestions;
