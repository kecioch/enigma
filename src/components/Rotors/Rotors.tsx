import React from "react";
import Rotor from "./Rotor";
import { faArrowRotateLeft, faGear } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../UI/IconButton";
import { RotorPositions, RotorSelection } from "../../hooks/useEnigma";

interface Props {
  positions: RotorPositions;
  onIncrement: (rotor: RotorSelection) => void;
  onDecrement: (rotor: RotorSelection) => void;
  onReset: () => void;
}

const Rotors = ({ positions, onIncrement, onDecrement, onReset }: Props) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex gap-10 justify-center relative items-center">
        <div className="absolute -left-10">
          <IconButton
            icon={faGear}
            title="Configure rotor settings"
            iconClassName="w-5 h-5"
            onClick={() => {alert("To be implemented")}}
          />
        </div>
        <Rotor
          position={positions.posC}
          onIncrement={() => onIncrement("C")}
          onDecrement={() => onDecrement("C")}
        />
        <Rotor
          position={positions.posB}
          onIncrement={() => onIncrement("B")}
          onDecrement={() => onDecrement("B")}
        />
        <Rotor
          position={positions.posA}
          onIncrement={() => onIncrement("A")}
          onDecrement={() => onDecrement("A")}
        />
        <div className="absolute -right-10">
          <IconButton
            icon={faArrowRotateLeft}
            title="Reset positions"
            iconClassName="w-5 h-5"
            onClick={onReset}
          />
        </div>
      </div>
    </div>
  );
};

export default Rotors;
