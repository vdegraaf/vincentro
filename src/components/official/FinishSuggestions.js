import React, { useContext, useState, useEffect } from 'react';
import OfficialContext from '../../context/official/officialContext';
import GameContext from '../../context/game/gameContext';
import possibleFinishes from './FinishSuggestionsData';

function FinishSuggestions({totalScore}) {
  const officialContext = useContext(OfficialContext);
  const gameContext = useContext(GameContext);
  // let { players } = officialContext;
  // const { current } = gameContext;
  let dart1;

  let possibleFinish = possibleFinishes[totalScore]

  return (
    <div className='finish'>
      <p style={{ fontSize: '12px' }}>Possible finish:</p> {possibleFinish}
      <input
        type='number'
        placeholder='dart 1'
        name='dart1'
        value={dart1}
        // onChange={getPossibleFinish}
      />
    </div>
  );
}

export default FinishSuggestions;
