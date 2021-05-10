import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from './routes';
import authOperations from './redux/authorization/authOperetion';
import AppHeader from './components/AppHeader';
import HomeView from './pages/HomeView';
import ContactsView from './pages/ContactsView';
import LoginView from './pages/LoginView';
import RegisterView from './pages/RegisterView';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
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
  }
}
const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};
export default connect(null, mapDispatchToProps)(App);
