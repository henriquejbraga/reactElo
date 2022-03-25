import React, { useState } from "react";


export default function Checkbox() {
  const [checked, setChecked] = useState([]);
  const checkList = ["RPA", "Produto Digital", "Analytics", "BPM"];

  return (
    <div>
      <label>
        <input type="checkbox"
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
        />

        <div className="list-container">
          {checkList.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={() => setChecked(!checked)} />
              <span >{item}</span>
            </div>
          ))}
        </div>
      </label>
    </div>

  );
}