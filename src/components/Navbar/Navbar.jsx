import React from 'react';
import { Link } from 'react-router-dom';
import s from './Navbar.module.css';
const Navbar = () => {
  return (
    <div className={s.nav}>
      <ul className={s.list}>
        <li className={`${s.item} ${s.active}`}>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li className={s.item}>
          <Link to='/cardstypes'>Cards Types</Link>
        </li>
        <li className={s.item}>
          <Link to='/cards'>Cards</Link>
        </li>
        <li className={s.item}>
          <Link to='/contacts'>Contacts</Link>
        </li>
        <li className={s.item}>
          <Link to='/currencies'>Currencies</Link>
        </li>
        <li className={s.item}>
          <Link to='/operations'>Operations</Link>
        </li>
        <li className={s.item}>
          <Link to='/requisites'>Requisites</Link>
        </li>
        <li className={s.item}>
          <Link to='/tariffs'>Tariffs</Link>
        </li>
        <li className={s.item}>
          <Link to='/users'>Users</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
