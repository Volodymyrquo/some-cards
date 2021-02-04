import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
  return (
    <div className={s.header}>
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
  );
};

export default Header;
