import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../redux/authorization/authOperetion';

import Container from '../components/Container';
import style from './LoginView.module.css';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSignIn(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <main>
        <Container>
          <h2>Sign in to Fonebook</h2>
          <p>All fields are required</p>
          <form
            onSubmit={this.handleSubmit}
            style={style.form}
            autoComplete="off"
          >
            <label style={style.label}>
              email:
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>

            <label style={style.label}>
              password:
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </label>

            <button type="submit">Log in</button>
          </form>
        </Container>
      </main>
    );
  }
}

const mapDispatchToProps = {
  onSignIn: authOperations.signIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
