import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../icons/Logo'
import HomeBtn from '../icons/HomeBtn'

const NavBar = () => {
  return (
    <div className='container container--header'>
      <div className='menu'>
        <Link to='/'>
          <Logo />
          {/* // TODO: 
          HomeBtn should be shown when gameplay is on. */}
          {/* <HomeBtn /> */}
        </Link>
      </div>
      <header className='header'></header>
    </div>
  );
};

export default NavBar;
