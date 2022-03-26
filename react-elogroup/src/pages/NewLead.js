import React from 'react';
import { Redirect } from 'react-router';
import Checkbox from '../components/checkbox';

class NewLead extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      tel: '',
      email: '',
      redirect: false,
      required: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  saveList() {
    localStorage.setItem('username', JSON.stringify(this.state.username))
  }

  async handleClick(event) {
    event.preventDefault();
    this.setState({ redirect: true });
    this.saveList();
    alert("lead cadastrado com sucesso")
  }

  render() {
    const { username, tel, email, redirect, required } = this.state;

    if (redirect) return <Redirect to="/leadpanel" />;

    return (
      <main data-testid="page-login">
        <div >
          <div>
            <label>Nome*</label>
            <input
              type="text"
              data-testid="login-name-input"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Telefone*</label>
            <input
              type="text"
              data-testid="login-tel-input"
              name="tel"
              value={tel}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Email*</label>
            <input
              type="mail"
              data-testid="login-email-input"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <Checkbox />
          </div>

          <div>
            <button
              type="button"
              data-testid="login-submit-button"
              disabled={!email || !username || !tel}
              onClick={this.handleClick}
              
            >
              Salvar
            </button>
          </div>
        </div>
      </main >
    );
  }
}

export default NewLead;