import React from "react";
import Lamp from "./Lamp";
import { KEY_LAYOUT } from "../../constants/EnigmaLayout";

interface Props {
  output?: string;
  className?: string;
}

const OutputLights = ({ output, className }: Props) => {
  const lampRows = KEY_LAYOUT.map((row, i) => (
    <div key={i} className="flex flex-row justify-center gap-2 sm:gap-5">
      {row.map((key) => (
        <Lamp
          key={key}
          char={key}
          on={key.toUpperCase() === output?.toUpperCase()}
        />
      ))}
    </div>
  ));

  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>{lampRows}</div>
  );
};

export default OutputLights;
