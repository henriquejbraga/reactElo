import React from 'react';
import { Link } from "react-router-dom";
import elogroup from '../elogroup.png'
import '../css/LeadPanel.css'

export default function LeadPanel() {

  const username = JSON.parse(localStorage.getItem('user'));

  const renderLead = () => {
    return !username ? null : username.map(((name) => {
      return (
        <tr key={name}>
          <td draggable>
            {name}
          </td>
        </tr>
      )
    }))
  }

  return (
    <div className='leadpanel'>
      <img src={elogroup} alt='elogroup' className='elogroupleadpanel' />
      <h3 className='h3'> Painel de Leads</h3>
      <div className='link' data-testid='link'>
        <Link to='/newlead'>Novo Lead (+)</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Cliente em Potencial</th>
            <th>Dados Confirmados</th>
            <th>Reunião Agendada</th>
          </tr>
        </thead>
        <tbody data-testid='panellead'
        >
          {renderLead()}
        </tbody>
      </table>
      <Link to='/'>Login</Link>
    </div >
  )
}
