import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='container'>
      <div className='menu'>
        <Link to='/'>Home</Link>
      </div>
      <header className='header'></header>
    </div>
  );
};

export default NavBar;
