import React from "react";
import { ALPHABET } from "../../services/enigma/constants";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../UI/IconButton";

interface Props {
  position: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const Rotor = ({ position, onIncrement, onDecrement }: Props) => {
  return (
    <div className="flex flex-col gap-3 w-16 justify-center items-center">
      <IconButton
        icon={faChevronUp}
        onClick={() => onIncrement()}
        iconClassName="h-6 w-6"
      />
      <input
        type="text"
        value={ALPHABET[position]}
        className="text-center h-9 w-16 font-mono"
        disabled
      />
      <IconButton
        icon={faChevronDown}
        onClick={() => onDecrement()}
        iconClassName="h-6 w-6"
      />
    </div>
  );
};

export default Rotor;
