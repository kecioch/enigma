import React, { Dispatch, SetStateAction } from "react";
import Rotor from "./Rotor";

export type RotorPositions = { posA: number; posB: number; posC: number };

interface Props {
  positions: RotorPositions;
  setPositions: Dispatch<SetStateAction<RotorPositions>>;
}

const Rotors = ({ positions, setPositions }: Props) => {
  const handleChangeRotorA = (value: number) => {
    setPositions((prev) => {
      return { ...prev, posA: value };
    });
  };

  const handleChangeRotorB = (value: number) => {
    setPositions((prev) => {
      return { ...prev, posB: value };
    });
  };

  const handleChangeRotorC = (value: number) => {
    setPositions((prev) => {
      return { ...prev, posC: value };
    });
  };

  return (
    <div className="flex gap-10 justify-center">
      <Rotor position={positions.posC} onChange={handleChangeRotorC} />
      <Rotor position={positions.posB} onChange={handleChangeRotorB} />
      <Rotor position={positions.posA} onChange={handleChangeRotorA} />
    </div>
  );
};

export default Rotors;
