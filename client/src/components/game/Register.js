import React, { useState, useContext, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import GameContext from '../../context/game/gameContext';
import ChevronDown from '../icons/ChevronDown';
import classNames from 'classnames';
import StartGame from '../game/StartGame';


const Register = ({ isActive }) => {
  const gameContext = useContext(GameContext);
  const { game, players, addPlayer } = gameContext;
  const [menu, setMenu] = useState(false);

  const [redirect, setRedirect] = useState(false);
  const [department, setDepartment] = useState(null);
  const [nickname, setNickname] = useState('');

  const filterOptions = ['DXC', 'DXT', 'Interactive'];
  const departmentInput = useRef(null);

  const menuClasses = classNames({
    "is-unfolded": menu
  });

  const savePlayer = () => {
    console.log('save player');
    if (department === "Kies je vestiging") {
      return console.error('Choose a department');
    }
    if (players.length > 0) {
      addPlayer({ id: 2, nickname, department });

    } else addPlayer({ id: 1, nickname, department });
  };

  const onChange = e => {
    setNickname(e.target.value);
  };

  // const onSubmit = e => {
  //   e.preventDefault();
  //   addPlayers(names);
  //   setRedirect(true);
  //   setTimeout(() => {
  //     setRedirect(false);
  //   }, 2000);
  // };


  if (redirect) {
    return <Redirect to={`/${game}`} />;
  } else {
    return (
      <div className='application application__form-input'>

        <label>
          <h4>Nickname</h4>
        </label>
        <input
          type="text"
          name="nickname"
          onChange={onChange}
          value={nickname}
        />

        <div className={`menu ${menuClasses}`}>
          <div onClick={() => setMenu(!menu)} className="dropdown-menu">
            <div className="dropdown-menu__header" ref={departmentInput}>
              {!department ? "Kies je vestiging" : department}
              <ChevronDown />
            </div>

            {menu && <ul className="dropdown-menu__wrapper">
              {filterOptions.map((title, index) => {
                return <li key={index} className="dropdown-menu__item" onClick={() => setDepartment(title)}>
                  {title}
                </li>;
              })}
            </ul>
            }
          </div>
        </div>
        <StartGame onClick={savePlayer} title="Add Player" />
      </div>
    );
  }
};

export default Register;
