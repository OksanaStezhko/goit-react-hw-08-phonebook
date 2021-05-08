import React from 'react';
import Navigation from '../Navigation';
import Authorization from '../Authorization';
import Container from '../Container';
// import style from './AppHeader.module.css';

const AppHeader = () => {
  return (
    <header>
      <Container>
        <Navigation />
        <Authorization />
      </Container>
    </header>
  );
};
export default AppHeader;
