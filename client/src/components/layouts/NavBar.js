import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../icons/Logo'

const NavBar = () => {
  return (
    <div className='container container--header'>
      <div className='menu'>
        <Link to='/'>
          <Logo />
        </Link>
      </div>
      <header className='header'></header>
    </div>
  );
};

export default NavBar;
