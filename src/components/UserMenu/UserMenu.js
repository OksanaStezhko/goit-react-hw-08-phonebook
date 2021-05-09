import React from 'react';
// import { connect } from 'react-redux';
// import { authSelectors, authOperations } from '../../redux/auth';
import style from './UserMenu.module.css';

const UserMenu = () => (
  <div style={style.container}>
    <span style={style.email}>dd@ukr.net</span>
    <button type="button">Logout</button>
  </div>
);

export default UserMenu;
