import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
const Navbar = () => {
  return (
    <div className={s.nav}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink to='/dashboard' activeClassName={s.active}>
            Dashboard
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to='/cardstypes' activeClassName={s.active}>
            Cards Types
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to='/cards' activeClassName={s.active}>
            Cards
          </NavLink>
        </li>
        <li className={s.item} activeClassName={s.item}>
          <NavLink to='/contacts' activeClassName={s.active}>
            Contacts
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to='/currencies' activeClassName={s.active}>
            Currencies
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to='/operations' activeClassName={s.active}>
            Operations
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to='/requisites' activeClassName={s.active}>
            Requisites
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to='/tariffs' activeClassName={s.active}>
            Tariffs
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to='/users' activeClassName={s.active}>
            Users
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
