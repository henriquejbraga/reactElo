import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const PASSWORD_VALID = /^(.{0,8}|[^0-9]*|[^a-z]*|[a-zA-Z0-9]*)$/;

export default function Login() {
  const history = useHistory();
  const [form, setForm] = useState({ name: '', password: '', cpassword: '' });

  const handleForm = ({ target }) => {
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
    return history.push('/newlead');
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label>Nome*</label>
        <input
          type="text"
          name="name"
          placeholder="Digite o nome:"
          data-testid="name-input"
          value={form.name}
          onChange={(e) => handleForm(e)}
        />
        <div>
          <label>Password*</label>
          <input
            type="password"
            name="password"
            data-testid="password-input"
            value={form.password}
            onChange={(e) => handleForm(e)}
          />
        </div>
        <div>
          <label>Confirmação Password*</label>
          <input
            type="password"
            name="cpassword"
            data-testid="password-input"
            value={form.cpassword}
            onChange={(e) => handleForm(e)}
          />
        </div>
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={validation(form.password && form.cpassword) || !validationEqual() | !validationName()}
          onClick={moveAndSaveLocalStorage}
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
