import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import AppHeader from './components/AppHeader';
import HomeView from './pages/HomeView';
import ContactsView from './pages/ContactsView';
import LoginView from './pages/LoginView';
import RegisterView from './pages/RegisterView';

const App = () => (
  <>
    <AppHeader />
    <Switch>
      <Route exact path={routes.home} component={HomeView} />;
      <Route path={routes.contacts} component={ContactsView} />;
      <Route path={routes.login} component={LoginView} />;
      <Route path={routes.registration} component={RegisterView} />;
      <Route component={HomeView} />
    </Switch>
  </>
);

export default App;
