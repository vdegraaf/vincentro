import React, { useState, useContext, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import GameContext from '../../context/game/gameContext';
import ChevronDown from '../icons/ChevronDown';
import classNames from 'classnames';

const Register = () => {
  const gameContext = useContext(GameContext);
  const { addPlayers, game, players } = gameContext;
  const [menu, setMenu] = useState(false);

  const [redirect, setRedirect] = useState(false);
  const [names, setNames] = useState({});
  const [department, setDepartment] = useState(null);
  const [nickname, setNickname] = useState('');

  const filterOptions = ['DXC', 'DXT', 'Interactive'];

  const menuClasses = classNames({
    "is-unfolded": menu
  });

  const departmentInput = useRef(null);
  const addPlayer = () => {

    setDepartment(departmentInput.current.innerText);

    if (department === "Kies je vestiging") {
      return console.error('Choose a department');
    }

    console.log(nickname, 'from', department);

    // setRedirect(true);
    // setTimeout(() => {
    //   setRedirect(false);
    // }, 2000);
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

  const styles = {
    color: "white"
  };
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
        <button style={styles} onClick={addPlayer}>Add Player</button>



        {/* <input
            type='text'
            name='p1'
            placeholder='PLAYERONE'
            value={p1}
            onChange={onChange}
            required
            spellCheck='false'
            className='input input__players'
          />
          <input
            type='text'npm run st
            name='p2'
            placeholder='PLAYERTWO'
            value={p2}
            onChange={onChange}
            required
            spellCheck='false'
            className='input input__players'
          /> */}
      </div>
    );
  }
};

export default Register;
