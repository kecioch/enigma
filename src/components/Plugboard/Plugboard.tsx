import React from "react";
import { KEY_LAYOUT } from "../../constants/EnigmaLayout";
import Plug from "./Plug";

interface Props {
  className?: string;
}

const COLORS = [
  "#F24405",
  "#FA7F08",
  "#22BABB",
  "#9EF8EE",
  "#44803F",
  "#FFEC5C",
  "#146152",
  "#400036",
  "#105057",
  "#898C8B",
];

const Plugboard = ({ className }: Props) => {
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];

  const plugRows = KEY_LAYOUT.map((row, i) => (
    <div key={i} className="flex flex-row justify-center gap-4 sm:gap-10">
      {row.map((key) => (
        <Plug
          key={key}
          char={key}
          connected={key === "A" || key === "H"}
          color={color}
        />
      ))}
    </div>
  ));

  return <div className={`flex flex-col gap-2 ${className}`}>{plugRows}</div>;
};

export default Plugboard;
