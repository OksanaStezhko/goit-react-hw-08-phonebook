import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../redux/authorization/authOperetion';
import Container from '../components/Container';
// import style from './RegisterView.module.css';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.OnRegistration(this.state);

    this.setState({ name: '', email: '', password: '' });
  };
  render() {
    const { name, email, password } = this.state;
    return (
      <main>
        <Container>
          <h2>Registration</h2>
          <form onSubmit={this.handleSubmit} autoComplete="off">
            <label>
              Имя
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </label>

            <label>
              Почта
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>

            <label>
              Пароль
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </label>

            <button type="submit">Зарегистрироваться</button>
          </form>
        </Container>
      </main>
    );
  }
}
const mapDispatchToProps = {
  OnRegistration: authOperations.registration,
};

export default connect(null, mapDispatchToProps)(RegisterView);
