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
  }, [players]);

  useEffect(() => {
    clear()
  }, [current])

  const getFinishes = () => {
    setFinish({
      1: possibleFinishes[players[0].totalScore[0]],
      2: possibleFinishes[players[1].totalScore[0]]
    });

  };

  const onChange = e => {

    let dart = inputEl.current.value + inputElTwo.current.value;
    let player = players.find(player => player.id === current.id)
    let id = player.id
    
    if(id === 1) {
    setFinish({
      1: possibleFinishes[players[0].totalScore[0] - dart],
      2: possibleFinishes[players[1].totalScore[0]]
      
    })
  } else {
    setFinish({
      1: possibleFinishes[players[0].totalScore[0]],
      2: possibleFinishes[players[1].totalScore[0] - dart]
      
    })
  }

  };

  const clear = () => {
    if(inputElTwo.current && inputEl.current) {
    inputEl.current.value = '';
    inputElTwo.current.value = '';
    }
  };


  return (
    <div>        
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
    <div>
      <div>P1: {finish[1]}</div>
      <div>P2: {finish[2]}</div>
    </div>
    </div>
  );
}

export default FinishSuggestions;
