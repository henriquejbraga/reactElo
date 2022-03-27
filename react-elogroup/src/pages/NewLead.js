import React, { useState } from 'react';
import { Redirect } from 'react-router';
import Checkbox from '../components/checkbox';
import { useHistory } from 'react-router-dom';
import elogroup from '../elogroup.png'

// import useLocalStorage from '../components/localStorage';

export default function NewLead() {
  const history = useHistory();
  const [form, setForm] = useState({ username:'', tel:'', email:''});
  const [redirect, setRedirect] = useState(false)
  // this.state = {
  //   username: '',
  //   tel: '',
  //   email: '',
  //   redirect: false,
  //   required: false,
  // };

  // const handleChange = ({ target: { name, value } }) => {
  //   setState({ [name]: value });
  // }

  const localStoragess = () => {
    localStorage.setItem('user', JSON.stringify( form.username))
    return history.push('/leadpanel');
  }

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  // const saveList = () => {
  //   const { username } = this.state
  //   localStorage.setItem('username', JSON.stringify(username))
  // }

  const handleClick = (event) => {
    event.preventDefault();
    setRedirect({ redirect: true });
    localStoragess()
    alert("lead cadastrado com sucesso")
  }

  if (redirect) return <Redirect to="/leadpanel" />;

  return (
    <main data-testid="page-login">
      <div >
      <img src={elogroup} alt="elogroup" className="elogroup" />
        <div>
          <label>Nome*</label>
          <input
            type="text"
            data-testid="login-name-input"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Telefone*</label>
          <input
            type="text"
            data-testid="login-tel-input"
            name="tel"
            value={form.tel}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email*</label>
          <input
            type="mail"
            data-testid="login-email-input"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <Checkbox />
        </div>

        <div>
          <button
            type="button"
            data-testid="login-submit-button"
            disabled={!form.email || !form.username || !form.tel}
            onClick={handleClick}

          >
            Salvar
          </button>
        </div>
      </div>
    </main >
  );

}
