import React, { useContext } from 'react';
import OfficialContext from '../../context/official/officialContext';
import ResetSvg from '../icons/Reset'


const ResetButton = () => {
  const officialContext = useContext(OfficialContext);
  const { resetOfficial, players } = officialContext;
  
  return (
    <>
      {
        <div className="resetBtn" onClick={() => resetOfficial(players[0], players[1])}>
        <ResetSvg />
        </div>
      }
    </>
  );
};

export default ResetButton;
