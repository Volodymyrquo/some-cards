import React from 'react';
import { Link } from 'react-router-dom';
import s from './Navbar.module.css';
const Navbar = () => {
  return (
    <div className={s.nav}>
      <ul>
        <li>
          <Link to='dashboard'>Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
