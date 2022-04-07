import React, { useEffect, useState } from "react";
import '../css/checkbox.css'

const checkList = [{ name: "RPA" }, { name: "Produto Digital" }, { name: "Analytics" }, { name: "BPM" }];

export default function Checkbox() {

  const [leads, setLeads] = useState([]);

  useEffect(() => {
    setLeads(checkList);
  }, []);

  const handleChange = (event) => {
    const { name, checked } = event.target;
    if (name === "allSelect") {
      let tempLead = leads.map((lead) => {
        return { ...lead, isChecked: checked };
      });
      setLeads(tempLead);
    } else {
      let tempLead = leads.map((lead) =>
        lead.name === name ? { ...lead, isChecked: checked } : lead
      );
      setLeads(tempLead);
    }
  };

  return (
    <div className="container">
      <form className="form">
        <h3>Oportunidades*</h3>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="allSelect"
            checked={!leads.some((lead) => lead.isChecked !== true)}
            onChange={handleChange}
          />
          <label className="form-check-label">Selecionar todos</label>
        </div>
        {leads.map((lead, index) => (
          <div className="form-check" key={index}>
            <input
              type="checkbox"
              className="form-check-input"
              name={lead.name}
              checked={lead.isChecked || false}
              onChange={handleChange}
            />
            <label className="form-check-label">{lead.name}</label>
          </div>
        ))}
      </form>
    </div>
  );
}