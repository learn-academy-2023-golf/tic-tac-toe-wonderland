import React, { useState } from "react";

const ChooseMarker1 = (props) => {
  return (
    <div>
      <select onChange={(e) => props.setSelectedOption1(e.target.value)}>
        {props.options1.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p>Selected option: {props.selectedOption1}</p>
    </div>
  );
};

export default ChooseMarker1;
