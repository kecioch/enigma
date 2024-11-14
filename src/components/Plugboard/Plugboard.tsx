import React from "react";
import { KEY_LAYOUT } from "../../constants/EnigmaLayout";
import Plug from "./Plug";
import { COLOR_PALETTE } from "../../constants/Colors";

interface WiringColor {
  connected: string[];
  colorCode: string;
}

interface Props {
  wiring: Map<string, string>;
  onPress: (char: string) => void;
  className?: string;
}

const Plugboard = ({ wiring, onPress, className }: Props) => {
  const colorsAvail = [...COLOR_PALETTE];
  const wiringColor: WiringColor[] = [];

  // Create color wiring array
  wiring.forEach((val, key) => {
    const color = colorsAvail.splice(0, 1).join();
    wiringColor.push({ connected: [val, key], colorCode: color });
  });

  const plugRows = KEY_LAYOUT.map((row, i) => (
    <div key={i} className="flex flex-row justify-center gap-4 sm:gap-10">
      {row.map((key) => {
        const wiringEl = wiringColor.find((el) => el.connected.includes(key));
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
