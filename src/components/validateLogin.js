import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const PASSWORD_VALID = /^(.{0,8}|[^0-9]*|[^a-z]*|[a-zA-Z0-9]*)$/;

function Login() {
  const history = useHistory();
  const [form, setForm] = useState({ name: '', password: '' });

  const handleForm = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const validation = (pass) => PASSWORD_VALID.test(pass)

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
        <input
          type="text"
          name="name"
          placeholder="Digite o nome:"
          data-testid="name-input"
          value={form.name}
          onChange={(e) => handleForm(e)}
        />
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            data-testid="password-input"
            value={form.password}
            onChange={(e) => handleForm(e)}
          />
        </div>
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={validation(form.password)}
          onClick={moveAndSaveLocalStorage}
        >
          Entrar
        </button>
      </div>
    </div>
  );
}

export default Login;