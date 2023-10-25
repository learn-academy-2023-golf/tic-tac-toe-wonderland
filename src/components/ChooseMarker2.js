import React, { useState } from "react";

const ChooseMarker2 = (props) => {
  return (
    <div>
      <select onChange={(e) => props.setSelectedOption2(e.target.value)}>
        {props.options2.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p>Selected option: {props.selectedOption2}</p>
    </div>
  );
};

export default ChooseMarker2;
