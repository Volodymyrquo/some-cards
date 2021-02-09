import React, { useState } from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

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
        <button className={cn(s.dropdownBtn)} onClick={handleClick}>
          Operations
          <i class='fa fa-caret-down'></i>
        </button>
        <div
          className={cn(s.dropdownContainer)}
          style={!isActive ? { display: 'none' } : null}>
          <li className={s.item}>
            <NavLink to='/types' activeClassName={s.active}>
              Types
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to='/forusers' activeClassName={s.active}>
              For Users
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to='/forcards' activeClassName={s.active}>
              For Cards
            </NavLink>
          </li>
        </div>
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
