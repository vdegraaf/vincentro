import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Logo from '../icons/Logo';
import HomeBtn from '../icons/HomeBtn';

const NavBar = ({ history }) => {
  return (
    <div className='menu'>
      <Link to='/'>
        {history.location.pathname === '/' ?
          <Logo /> :
          <HomeBtn />
        }
      </Link>
    </div>
  );
};

export default withRouter(NavBar);
