import React, { useState } from 'react';
import { Redirect } from 'react-router';
import Checkbox from '../components/checkbox';
import elogroup from '../elogroup.png';
import '../css/NewLead.css';

export default function NewLead() {
  const [form, setForm] = useState({ username: '', tel: '', email: '' });
  const [redirect, setRedirect] = useState(false)

  const saveLocalStorage = () => {
    if (localStorage.getItem('user') === null) {
      localStorage.setItem('user', JSON.stringify([form.username]))
    } else {
      localStorage.setItem('user', JSON.stringify([...JSON.parse(localStorage.getItem('user')), form.username]))
    }
  }

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const handleClick = (event) => {
    event.preventDefault();
    setRedirect({ redirect: true });
    saveLocalStorage();
    alert('Lead cadastrado com sucesso!');
  }

  if (redirect) return <Redirect to='/leadpanel' />;

  return (
    <main>
      <div className='newlead' data-testid='newlead' >
        <div className='center'>
          <img src={elogroup} alt='elogroup' className='elogroup' />
          <br></br>
          <div className='input' data-testid='nome'>
            <label>Nome*</label>
            <input
              type='text'
              name='username'
              value={form.username}
              onChange={handleChange}
            />
          </div>
          <div className='input' data-testid='tel'>
            <label>Telefone*</label>
            <input
              type='text'
              name='tel'
              value={form.tel}
              onChange={handleChange}
            />
          </div>
          <div className='input' data-testid='email'>
            <label>Email*</label>
            <input
              type='mail'
              name='email'
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className='checkbox' data-testid='checkbox' >
            <Checkbox />
          </div>
          <div className='button'>
            <button
              type='button'
              disabled={!form.username || !form.tel || !form.email}
              onClick={handleClick}
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </main >
  );
}
