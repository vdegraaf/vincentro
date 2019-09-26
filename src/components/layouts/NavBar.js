import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Fragment>
      <h1 className='header'></h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NavBar;
