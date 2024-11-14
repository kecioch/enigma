import React from "react";
import { KEY_LAYOUT } from "../../constants/EnigmaLayout";
import InputKey from "./InputKey";

interface Props {
  onKeyPressed: (value: string) => void;
  className?: string;
}

const InputKeys = ({ onKeyPressed, className }: Props) => {
  const keyRows = KEY_LAYOUT.map((row, i) => (
    <div key={i} className="flex flex-row gap-3 sm:gap-8 justify-center">
      {row.map((key) => (
        <InputKey key={key} char={key} onKeyPressed={onKeyPressed} />
      ))}
    </div>
  ));

  return <div className={`flex flex-col gap-2 ${className}`}>{keyRows}</div>;
};

export default InputKeys;
