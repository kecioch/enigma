import React from "react";
import { ALPHABET } from "../../services/enigma/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface Props {
  position: number;
  onChange: (value: number) => void;
}

const Rotor = ({ position, onChange }: Props) => {
  const handleUp = () =>
    onChange(position >= ALPHABET.length - 1 ? 0 : ++position);

  const handleDown = () =>
    onChange(position <= 0 ? ALPHABET.length - 1 : --position);

  return (
    <div className="flex flex-col gap-3 w-16 justify-center items-center">
      <button
        onClick={handleUp}
        className="flex justify-center items-center text-[#0b1a1a] active:text-[#1f3f3f]"
      >
        <FontAwesomeIcon icon={faChevronUp} className="w-6 h-6" />
      </button>
      <input
        type="text"
        value={ALPHABET[position]}
        className="text-center h-9 w-16 font-mono"
        disabled
      />
      <button
        onClick={handleDown}
        className="flex justify-center items-center text-[#0b1a1a] active:text-[#1f3f3f]"
      >
        <FontAwesomeIcon icon={faChevronDown} className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Rotor;
