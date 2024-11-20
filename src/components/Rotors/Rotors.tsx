import React, { useState } from "react";
import Rotor from "./Rotor";
import { faArrowRotateLeft, faGear } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../UI/IconButton";
import {
  ModelIndexSelection,
  RotorPositions,
  RotorSelection,
} from "../../hooks/useEnigma";
import RotorConfigModal from "./ConfigModal/RotorConfigModal";

interface Props {
  positions: RotorPositions;
  modelIndex: ModelIndexSelection;
  onIncrement: (rotor: RotorSelection) => void;
  onDecrement: (rotor: RotorSelection) => void;
  onModelIndexChange: (config: ModelIndexSelection) => void;
  onReset: () => void;
}

const Rotors = ({
  positions,
  modelIndex,
  onIncrement,
  onDecrement,
  onModelIndexChange,
  onReset,
}: Props) => {
  const [showConfigModal, setShowConfigModal] = useState(false);

  const handleOpenConfig = () => setShowConfigModal(true);

  return (
    <div className="flex justify-center items-center">
      {showConfigModal && (
        <RotorConfigModal
          modelIndex={modelIndex}
          onModelIndexChange={onModelIndexChange}
          onClose={() => setShowConfigModal(false)}
        />
      )}
      <div className="flex gap-10 justify-center relative items-center">
        <div className="absolute -left-10">
          <IconButton
            icon={faGear}
            title="Configure rotor settings"
            iconClassName="w-5 h-5"
            onClick={handleOpenConfig}
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
