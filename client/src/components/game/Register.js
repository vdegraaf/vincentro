import React, { useState, useContext, useRef, useEffect } from 'react';
import GameContext from '../../context/game/gameContext';
import ChevronDown from '../icons/ChevronDown';
import classNames from 'classnames';
import StartGame from './StartGame';
import { saveUser } from '../../queries/saveUser';

const Register = ({ setIsActive }) => {
  const gameContext = useContext(GameContext);
  const { addPlayer } = gameContext;
  const [menu, setMenu] = useState(false);

  const [department, setDepartment] = useState(null);
  const [nickname, setNickname] = useState('');
  const [disabled, setDisabled] = useState(true);

  const filterOptions = ['DXC', 'DXT', 'Interactive', 'DC', 'Next', 'BA'];
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

  const savePlayer = async () => {
    if (!department) {
      return console.error('Choose a department');
    }

    const cb = (data) => {
      const name = data.user.name;
      const vestiging = data.user.vestiging;
      addPlayer({ id: Math.random(), nickname: name, department: vestiging });
      setIsActive(false);

    };


    const user = await saveUser(nickname, department, cb);
    console.log("---   user", user);




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

      <div className={`dropdown ${menuClasses}`}>
        <div onClick={() => setMenu(!menu)} className="dropdown-menu">
          <div className="dropdown-menu__header" ref={departmentInput}>
            {!department ? "Kies je vestiging" : department}
            <ChevronDown />
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
