import React, { useContext, useState, useEffect, useRef } from 'react';
import GameContext from '../../context/game/gameContext';
import OfficialContext from '../../context/official/officialContext';
import possibleFinishes from './FinishSuggestionsData';

function FinishSuggestions() {
  const gameContext = useContext(GameContext);
  const officialContext = useContext(OfficialContext);
  let dart1;
  let dart2;
  const { current } = gameContext;
  const { players } = officialContext;

  const [possibleFinish, setPossibleFinish] = useState(null);
  const [possibleFinish2, setPossibleFinish2] = useState(null);

  let inputEl = useRef(null);
  let inputElTwo = useRef(null);

  useEffect(() => {
    console.log('useEffect');
    // getFinishes()
  }, []);

  useEffect(() => {
    // clear();
    getFinishes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const getFinishes = () => {
    console.log('players:', players);
  console.log('possibleFinishes', possibleFinishes[players[0].totalScore])
    players.forEach(player => {
      if (player.id === 1) {
        setPossibleFinish(possibleFinishes[player.totalScore]);
      } else {
        setPossibleFinish2(possibleFinishes[player.totalScore]);
      }
    });
  };

  // const onChange = e => {
  //   let dart = e.target.value;

  //   if (totalScore - dart > 100 || totalScore - dart === 99) {
  //     setPossibleFinish('Not Possible')
  //   } else {
  //     setPossibleFinish(possibleFinishes[totalScore - e.target.value]);
  //   }
  // };

  // const clear = () => {
  //   setPossibleFinish(possibleFinishes[totalScore])
  //   if(inputElTwo.current && inputEl.current) {
  //   inputEl.current.value = '';
  //   inputElTwo.current.value = '';
  //   }
  // };

  // let displayClass = possibleFinish ? 'show' : 'hide'

  return (
    <div>
      {players.map(player => {
        console.log('player:', player);
        console.log('possibleFinish', possibleFinish);



        return (
          <div className={'finish'}>
            <div className='finish__container'>
              <span style={{ fontSize: '14px', marginTop: '20px' }}>
                <b style={{ fontSize: '20px' }}>{possibleFinish}</b>
              </span>
              {/*       
      <input
        type='number'
        placeholder='dart 1'
        name='dart1'
        value={dart1
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
      /> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FinishSuggestions;
