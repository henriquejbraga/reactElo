import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import elogroup from '../elogroup.png'
import '../css/Login.css'


const PASSWORD_VALID = /^(.{0,8}|[^0-9]*|[^a-z]*|[a-zA-Z0-9]*)$/;

export default function Login() {
  const history = useHistory();
  const [form, setForm] = useState({ name: '', password: '', cpassword: '' });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const validation = (pass) => PASSWORD_VALID.test(pass);

  const validationEqual = () => form.password === form.cpassword;

  const validationName = () => form.name.length > 1;

  const moveAndSaveLocalStorage = () => {
    if (localStorage.getItem('name') === null) {
      localStorage.setItem('name', JSON.stringify([form.name]))
    } else {
      localStorage.setItem('name', JSON.stringify([...JSON.parse(localStorage.getItem('name')), form.name]))
    }
    return history.push('/leadpanel');
  };

  return (
    <main className='login' data-testid='login'>
      <div className='center'>
        <img src={elogroup} alt='elogroup' className='elogrouplogin' />
          <label>Nome*</label>
        <div>
          <input
            type="text"
            name="name"
            data-testid="name-input"
            value={form.name}
            onChange={handleChange}
          />
        </div>
          <label>Password*</label>
        <div>
          <input
            type="password"
            name="password"
            data-testid="password-input"
            value={form.password}
            onChange={handleChange}
          />
        </div>
          <label>Confirmação Password*</label>
        <div>
          <input
            type="password"
            name="cpassword"
            data-testid="cpassword-input"
            value={form.cpassword}
            onChange={handleChange}
          />
        </div>
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={validation(form.password && form.cpassword) || !validationEqual() | !validationName()}
          onClick={moveAndSaveLocalStorage}
        >
          Registrar
        </button>
      </div>
    </main>
  );
}
