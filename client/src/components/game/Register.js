import React, { useState, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import GameContext from '../../context/game/gameContext';
import ChevronDown from '../icons/ChevronDown';
import classNames from 'classnames'

const Register = () => {
  const gameContext = useContext(GameContext);
  const { addPlayers, game, players } = gameContext;
  const [menu, setMenu] = useState(false)

  const [redirect, setRedirect] = useState(false);
  const [names, setNames] = useState({
    p1: '',
    p2: ''
  });
  const filterOptions = ['DXC', 'DXT', 'Interactive']
  
  const { p1, p2 } = names;

  useEffect(() => {
    if (players) {
      setNames({
        p1: players[0].name,
        p2: players[1].name
      });
    }   
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = e => {
    setNames({
      ...names,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    addPlayers(names);
    setRedirect(true);
    setTimeout(() => {
      setRedirect(false);
    }, 2000);
  };
  
  const menuClasses = classNames({
    "is-unfolded": menu
  })
   
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
              // onChange={handleChange}
            />
     
     <div className={`menu ${menuClasses}`}>
        <div  onClick={() => setMenu(!menu)} class="dropdown-menu">
          <div className="dropdown-menu__header"><h4>Kies je vestiging</h4> <ChevronDown /></div>
          
        {menu && filterOptions.map((title, index) => {
          return <ul className="dropdown-menu__wrapper">
              <li key={index} className="dropdown-menu__item">
                {title}
                </li>
            </ul>
        })}
        
          
          
        </div>
        
      
      </div>
        
        
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
