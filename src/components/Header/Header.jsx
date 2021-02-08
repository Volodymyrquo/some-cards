import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.logo}>
        <h1>infinity</h1>
      </div>
      <div>
        <ul className={s.list}>
          <li className={s.item}>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
          <li className={s.item}>
            <Link to='/users'>Users</Link>
          </li>
          <li className={s.item}>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
