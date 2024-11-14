import React, { useRef, useState } from "react";
import OutputLights from "./OutputLights/OutputLights";
import InputKeys from "./InputKeys/InputKeys";
import Plugboard from "./Plugboard/Plugboard";
import Notes from "./Notes/Notes";
import Rotors, { RotorPositions } from "./Rotors/Rotors";
import Container from "./Container";
import Divider from "./Divider";
import { Enigma } from "../services/enigma/enigma";
import { RotorConfig } from "../services/enigma/rotor";
import {
  wiringA,
  wiringB,
  wiringC,
  wiringRev,
} from "../services/enigma/constants";

const rotorConfigA: RotorConfig = { wiring: wiringA, notch: 22, startPos: 19 };
const rotorConfigB: RotorConfig = { wiring: wiringB, notch: 16, startPos: 20 };
const rotorConfigC: RotorConfig = { wiring: wiringC, notch: 5, startPos: 19 };
const reflectorConfig = wiringRev;
let plugboardConfig: Map<string, string> = new Map([]);

const EnigmaContainer = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [rotorPositions, setRotorPositions] = useState<RotorPositions>({
    posA: rotorConfigA.startPos || 0,
    posB: rotorConfigB.startPos || 0,
    posC: rotorConfigC.startPos || 0,
  });

  const enigma = useRef(
    new Enigma(
      rotorConfigA,
      rotorConfigB,
      rotorConfigC,
      reflectorConfig,
      plugboardConfig
    )
  );

  const handleChangeInput = (char: string) => {
    const encoded = enigma.current.encode(char);
    const { posA, posB, posC } = enigma.current.getPositions();
    setInputText((prev) => prev + char);
    setOutputText((prev) => prev + encoded);
    setRotorPositions({ posA, posB, posC });
  };

  const handlePasteInput = (text: string) => {
    const encoded = enigma.current.encode(text);
    const { posA, posB, posC } = enigma.current.getPositions();
    setInputText(text);
    setOutputText(encoded);
    setRotorPositions({ posA, posB, posC });
  };

  const handleClearInput = () => {
    setInputText("");
    setOutputText("");
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 p-2">
      <Container>
        <h3 className="text-xl mb-5 uppercase font-light">
          Rotor Configuration
        </h3>
        <Rotors positions={rotorPositions} setPositions={setRotorPositions} />
      </Container>
      <Container>
        <h3 className="text-xl mb-5 uppercase font-light">Output</h3>
        <OutputLights />
        <Divider />

        <h3 className="text-xl mb-5 uppercase font-light">Input</h3>
        <InputKeys onKeyPressed={handleChangeInput} />
        <Divider />

        <h3 className="text-xl mb-5 uppercase font-light">Plugboard</h3>
        <Plugboard />
        <Divider className="mb-12" />

        <Notes
          inputText={inputText}
          outputText={outputText}
          onPasteInput={handlePasteInput}
          onClearInput={handleClearInput}
        />
      </Container>
    </div>
  );
};

export default EnigmaContainer;
