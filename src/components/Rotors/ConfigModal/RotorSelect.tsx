import React, { ChangeEvent } from "react";
import { RotorConfig } from "../../../services/enigma/types";

interface Props {
  label: string;
  options: RotorConfig[];
  value: number;
  onChange: (index: number) => void;
}

const RotorSelect = ({ label, options, value, onChange }: Props) => {
  const selectOptions = options.map((el, i) => (
    <option key={i} value={i}>
      {el.name}
    </option>
  ));

  const handleChange = (ev: ChangeEvent<HTMLSelectElement>) => {
    const index = parseInt(ev.target.value);
    onChange(index);
  };

  return (
    <div className="flex flex-col justify-center gap-2 w-24">
      <label htmlFor={label} className="text-xl text-center uppercase">
        {label}
      </label>
      <select
        name={label}
        id={label}
        className="flex-1 border-[0.1em] border-slate-400 rounded-lg p-1"
        value={value}
        onChange={handleChange}
      >
        {selectOptions}
      </select>
    </div>
  );
};

export default RotorSelect;
