// import React, { useState, useEffect } from "react";

import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

import elogroup from '../elogroup.png'
import '../css/LeadPanel.css'

export default function LeadPanel() {
  const [lead, setLead] = useState([]);


  const username = JSON.parse(localStorage.getItem('user'))
  const render = () => {
    return !username ? null : username.map((( name ) => {
      console.log(name);
      return (
        <tr key={name}>
          <td>
            {name}
          </td>
        </tr>
      )
    }))
  }

  return (
    <div className="leadpanel">
      <img src={elogroup} alt="elogroup" className="elogroupleadpanel" />
      <h3 className="h3"> Painel de Leads</h3>
      <div className="link">
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
        <tbody>
          {render()}
          {/* <tr>
            <td>
              {username}
            </td>
          </tr>
          <tr>
            <td>
              {username}
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  )
}
