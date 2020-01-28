import React, { useContext } from 'react';
import OfficialContext from '../../context/official/officialContext';

const TurnScore = () => {
  const officialContext = useContext(OfficialContext);
  let { players } = officialContext;
  
  return ( <div className='turnScore-container'>  
    {
      players.map(player => (<div className='turnScore-score' key={player.id}>
            {player.turnScore.slice(0).reverse().map((score, index) => <h3 key={index} >{score}</h3>)}
          </div>)
      )
    }
  </div>)
  
  

  // return (
  //   <div className='container-l'>
  //     {players.map(player => {
  //       return (
  //         <div
  //           className={`container-m container-m--turn ${
  //             current.id === player.id ? `turn` : null
  //           }`}
  //           key={player.id.toString()}
  //         >
  //           hoi
  //           {player.turnScore
  //             .slice(0)
  //             .reverse()
  //             .map((points, index) => {
  //               if (points === 0) {
  //                 points = '-';
  //               }
  //               return (
  //                 <div key={index} className='box box-s'>
  //                   {points}lala
  //                 </div>
  //               );
  //             })}
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
};

export default TurnScore;
