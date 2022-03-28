import React, { useState } from 'react';
import { Redirect } from 'react-router';
import Checkbox from '../components/checkbox';
// import { useHistory } from 'react-router-dom';
import elogroup from '../elogroup.png';
import '../css/NewLead.css';

export default function NewLead() {
  // const history = useHistory();
  const [form, setForm] = useState({ username: '', tel: '', email: '' });
  const [redirect, setRedirect] = useState(false)

  const dataObjeto = (form.username)

  const localStoragess = () => {
    if (localStorage.getItem('user') === null) {
      localStorage.setItem('user', JSON.stringify([dataObjeto]))
    } else {
      localStorage.setItem('user', JSON.stringify([...JSON.parse(localStorage.getItem('user')), dataObjeto]))
    }
  }
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const handleClick = (event) => {
    event.preventDefault();
    setRedirect({ redirect: true });
    localStoragess()
    alert('lead cadastrado com sucesso')
  }

  if (redirect) return <Redirect to='/leadpanel' />;

  return (
    <main>
      <div className='newlead' >
        <div className='center'>
          <img src={elogroup} alt='elogroup' className='elogroup' />
          <br></br>
          <div className='input'>
            <label>Nome*</label>
            <input
              type='text'
              name='username'
              value={form.username}
              onChange={handleChange}
            />
          </div>

          <div className='input'>
            <label>Telefone*</label>
            <input
              type='text'
              name='tel'
              value={form.tel}
              onChange={handleChange}
            />
          </div>

          <div className='input'>
            <label>Email*</label>
            <input
              type='mail'
              name='email'
              value={form.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='checkbox'>
          <Checkbox />
        </div>

        <div className='button'>
          <button
            type='button'
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
