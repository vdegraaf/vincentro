import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='container container--header'>
      <div className='menu'>
        <Link to='/'>Home</Link>
      </div>
      <header className='header'></header>
    </div>
  );
};

export default NavBar;
