import React from "react";
import { KEY_LAYOUT } from "../../constants/EnigmaLayout";
import Plug from "./Plug";
import { PlugConfig } from "../../hooks/useEnigma";

interface Props {
  wiring: PlugConfig[];
  onPress: (char: string) => void;
  className?: string;
}

const Plugboard = ({ wiring, onPress, className }: Props) => {
  const plugRows = KEY_LAYOUT.map((row, i) => (
    <div key={i} className="flex flex-row justify-center gap-4 sm:gap-10">
      {row.map((key) => {
        const wiringEl = wiring.find((el) => el.connected.includes(key));
        return (
          <Plug
            key={key}
            char={key}
            connected={!!wiringEl}
            color={wiringEl?.colorCode}
            onPress={onPress}
          />
        );
      })}
    </div>
  ));

  return <div className={`flex flex-col gap-2 ${className}`}>{plugRows}</div>;
};

export default Plugboard;
