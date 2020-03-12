import React, { useContext } from 'react';
import OfficialContext from '../../context/official/officialContext';
import Svg301 from '../icons/301';

const Set301 = () => {
  const officialContext = useContext(OfficialContext);
  const { set301, players } = officialContext;
  const show301Switch = players.map(player => (player.totalScore.length === 1) ? true : false).includes(false);

  return (
    <>
      {
        !show301Switch && <div className="gameSwitch" onClick={() => set301()}>
          <Svg301 />
        </div>
      }
    </>
  );
};

export default Set301;
