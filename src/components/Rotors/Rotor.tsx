import React, { useState } from "react";
import { ALPHABET } from "../../services/enigma/constants";

const Rotor = () => {
  const [position, setPosition] = useState(0);

  const handleUp = () =>
    setPosition((prev) => (prev >= ALPHABET.length - 1 ? 0 : ++prev));

  const handleDown = () =>
    setPosition((prev) => (prev <= 0 ? ALPHABET.length - 1 : --prev));

  return (
    <div className="flex flex-col gap-3 w-16 justify-center items-center">
      <button onClick={handleUp}>UP</button>
      <input
        type="text"
        value={ALPHABET[position]}
        className="text-center h-9 w-16"
        disabled
      />
      <button onClick={handleDown}>DOWN</button>
    </div>
  );
};

export default Rotor;
