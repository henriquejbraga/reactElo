import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Checkbox from '../components/checkbox';
import elogroup from '../elogroup.png';
import '../css/NewLead.css';

export default function NewLead() {
  const history = useHistory();
  const [form, setForm] = useState({ username: '', tel: '', email: '' });

  const saveLocalStorage = () => {
    if (localStorage.getItem('user') === null) {
      localStorage.setItem('user', JSON.stringify([form.username]))
    } else {
      localStorage.setItem('user', JSON.stringify([...JSON.parse(localStorage.getItem('user')), form.username]))
    }
    alert('Lead cadastrado com sucesso!');
    return history.push('/leadpanel');
  }

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  return (
    <main>
      <div className='newlead' data-testid='newlead' >
        <form className='center' onSubmit={saveLocalStorage}>
          <img src={elogroup} alt='elogroup' className='elogroup'/>
          <div className='link'>
          </div>
          <h3>Novo Lead</h3>
          <div className='input' data-testid='nome'>
            <label>Nome*</label>
            <input
              type='text'
              name='username'
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input' data-testid='tel'>
            <label>Telefone*</label>
            <input
              type='text'
              name='tel'
              value={form.tel}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input' data-testid='email'>
            <label>Email*</label>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='checkbox' data-testid='checkbox' required>
            <Checkbox />
          </div>
          <div className='button'>
            <button
              type='submit'
              // disabled={(!form.username || !form.tel || !form.email)}
              // onClick={saveLocalStorage}
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </main >
  );
}
