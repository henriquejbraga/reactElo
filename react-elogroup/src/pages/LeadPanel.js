// import React, { useState, useEffect } from "react";

import { useState, useEffect } from "react"

export default function LeadPanel() {
  const [lead, setLead] = useState([]);

 const username = JSON.parse(localStorage.getItem('user'))

  return (
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
  )
}
