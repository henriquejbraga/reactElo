// import React, { useState, useEffect } from "react";

import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

import elogroup from '../elogroup.png'

export default function LeadPanel() {
  const [lead, setLead] = useState([]);

  const username = JSON.parse(localStorage.getItem('user'))

  return (
    <div>
      <img src={elogroup} alt="elogroup" className="elogroup" />
      <h3> Painel de Leads</h3>
      <div>
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
          <tr>
            <td>
              {username}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
