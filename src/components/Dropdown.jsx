import React from "react";

import "./Dropdown.css";

export const Dropdown = (props) => {
  const { options, ...rest } = props;

  return (
    <select className="dropdown" {...rest}>
      {options.map(({ optionLabel, optionValue }, key) => {
        return (
          <option key={key} value={optionValue}>
            {optionLabel}
          </option>
        );
      })}
    </select>
  );
};
