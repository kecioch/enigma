import React from "react";
import { KEY_LAYOUT } from "../../constants/EnigmaLayout";
import InputKey from "./InputKey";

interface Props {
  className?: string;
}

const InputKeys = ({ className }: Props) => {
  const keyRows = KEY_LAYOUT.map((row, i) => (
    <div key={i} className="flex flex-row gap-3 sm:gap-8 justify-center">
      {row.map((key) => (
        <InputKey key={key} char={key} />
      ))}
    </div>
  ));

  return <div className={`flex flex-col gap-2 ${className}`}>{keyRows}</div>;
};

export default InputKeys;
