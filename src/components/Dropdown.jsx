import React from "react";

import "./Dropdown.css";

export const Dropdown = (props) => {
  const options = props.options;

  console.log(options);

  return (
    <select
      className="dropdown"
      onmousedown="if(this.options.length>8){this.size=8;}"
      onchange="this.size=0;"
      onblur="this.size=0;"
    >
      >
      {options.map(({ optionLabel, optionValue, key }) => {
        return (
          <option key={key} value={optionValue}>
            {optionLabel}
          </option>
        );
      })}
    </select>
  );
};
