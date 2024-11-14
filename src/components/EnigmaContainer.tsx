import React from "react";
import OutputLights from "./OutputLights/OutputLights";
import InputKeys from "./InputKeys/InputKeys";
import Plugboard from "./Plugboard/Plugboard";
import Notes from "./Notes/Notes";
import Rotors from "./Rotors/Rotors";
import Container from "./UI/Container";
import Divider from "./UI/Divider";
import { RotorConfig } from "../services/enigma/rotor";
import {
  wiringA,
  wiringB,
  wiringC,
  wiringRev,
} from "../services/enigma/constants";
import { useEnigma } from "../hooks/useEnigma";

const rotorConfigA: RotorConfig = { wiring: wiringA, notch: 22, startPos: 0 };
const rotorConfigB: RotorConfig = { wiring: wiringB, notch: 16, startPos: 0 };
const rotorConfigC: RotorConfig = { wiring: wiringC, notch: 5, startPos: 0 };
const reflectorConfig = wiringRev;

const EnigmaContainer = () => {
  const enigma = useEnigma({
    rotorConfigA,
    rotorConfigB,
    rotorConfigC,
    reflectorConfig,
  });

  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 p-2">
      <Container>
        <h3 className="text-xl mb-5 uppercase font-light">
          Rotor Configuration
        </h3>
        <Rotors
          positions={enigma.rotorPositions}
          onIncrement={enigma.handleRotorIncrement}
          onDecrement={enigma.handleRotorDecrement}
          onReset={enigma.resetRotorPositions}
        />
      </Container>
      <Container>
        <h3 className="text-xl mb-5 uppercase font-light">Output</h3>
        <OutputLights output={enigma.outputLight} />
        <Divider />

        <h3 className="text-xl mb-5 uppercase font-light">Input</h3>
        <InputKeys onKeyPressed={enigma.handleChangeInput} />
        <Divider />

        <h3 className="text-xl mb-5 uppercase font-light">Plugboard</h3>
        <Plugboard wiring={enigma.plugboard} onPress={enigma.handlePressPlug} />
        <Divider className="mb-12" />

        <Notes
          inputText={enigma.inputText}
          outputText={enigma.outputText}
          onPasteInput={enigma.handlePasteInput}
          onClearInput={enigma.handleClearInput}
        />
      </Container>
    </div>
  );
};

export default EnigmaContainer;
