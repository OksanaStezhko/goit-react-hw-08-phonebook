import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

const Navigation = () => {
  return (
    <ul className={style.nav}>
      <li className={style.nav__item}>
        <NavLink
          exact
          to="/"
          className={style.nav__link}
          activeClassName={style.nav__link_active}
        >
          Home
        </NavLink>
      </li>
      <li className={style.nav__item}>
        <NavLink
          to="/contacts"
          className={style.nav__link}
          activeClassName={style.nav__link_active}
        >
          My contacts
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
