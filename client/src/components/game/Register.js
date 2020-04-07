import React, { useState, useContext, useRef, useEffect } from 'react';
import GameContext from '../../context/game/gameContext';
import ChevronDown from '../icons/ChevronDown';
import classNames from 'classnames';
import StartGame from './StartGame';

const Register = ({ setIsActive }) => {
  const gameContext = useContext(GameContext);
  const { addPlayer } = gameContext;
  const [menu, setMenu] = useState(false);

  const [department, setDepartment] = useState('Planet Earth');
  const [nickname, setNickname] = useState('');
  const [disabled, setDisabled] = useState(true);

  const filterOptions = ['Planet Earth', 'DXC', 'DXT', 'Interactive', 'DC', 'Next', 'BA'];
  const departmentInput = useRef(null);

  const menuClasses = classNames({
    "is-unfolded": menu,
    "is-folded": !menu
  });

  useEffect(() => {
    if (department && nickname.length > 0) {
      setDisabled(false);
    } else setDisabled(true);
  }, [department, nickname]);

  const savePlayer = () => {
    if(!nickname) {
      return alert('Enter a nickname')
    }

    addPlayer({ id: Math.random(), nickname, department });
    setIsActive(false);

  };

  const onChange = e => {
    setNickname(e.target.value);
  };

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
      <label>
        <h4>Vestiging</h4>
      </label>
      <div className={`dropdown ${menuClasses}`}>
        <div onClick={() => setMenu(!menu)} className="dropdown-menu">
          <div className="dropdown-menu__header" ref={departmentInput}>
            <ChevronDown /> {!department ? "" : department}
          </div>
          <ul className={`dropdown-menu__wrapper ${menuClasses}`}>
            {filterOptions.map((title, index) => {
              return <li key={index} className="dropdown-menu__item" onClick={() => setDepartment(title)}>
                <h5>{title}</h5>
              </li>;
            })}
          </ul>
        </div>
      </div>
      <StartGame onClick={savePlayer} title="Add Player" disabled={disabled} />
    </div>
  );

};

export default Register;
