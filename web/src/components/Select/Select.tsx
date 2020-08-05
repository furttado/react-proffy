import React, { SelectHTMLAttributes } from "react";

import "./style.css";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<{ value: string; label: string }>;
}

const Select: React.FunctionComponent<SelectProps> = ({
  label,
  name,
  options,
  ...rest
}) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select id={name} {...rest} defaultValue="">
        <option value="" disabled hidden>
          pick one
        </option>
        {options.map((option) => (
          <option value={option.value} key={`${option}` + `${option.value}`}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
