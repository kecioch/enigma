import React, { useState } from "react";
import { ALPHABET } from "../../services/enigma/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Rotor = () => {
  const [position, setPosition] = useState(0);

  const handleUp = () =>
    setPosition((prev) => (prev >= ALPHABET.length - 1 ? 0 : ++prev));

  const handleDown = () =>
    setPosition((prev) => (prev <= 0 ? ALPHABET.length - 1 : --prev));

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
        className="text-center h-9 w-16"
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
