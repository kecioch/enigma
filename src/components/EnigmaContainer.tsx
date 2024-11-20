import React, { useState } from "react";
import OutputLights from "./OutputLights/OutputLights";
import InputKeys from "./InputKeys/InputKeys";
import Plugboard from "./Plugboard/Plugboard";
import Notes from "./Notes/Notes";
import Rotors from "./Rotors/Rotors";
import Container from "./UI/Container";
import Divider from "./UI/Divider";
import { ALPHABET, ENIGMA_MODELS } from "../services/enigma/constants";
import { Config, ModelIndexSelection, useEnigma } from "../hooks/useEnigma";

const MODEL_INIT: ModelIndexSelection = {
  index: 1,
  indexWiringA: 0,
  indexWiringB: 1,
  indexWiringC: 2,
  indexWiringRef: 1,
};

const EnigmaContainer = () => {
  const [modelIndex, setModelIndex] = useState<ModelIndexSelection>(MODEL_INIT);

  const createEnigmaConfig = (modelIndex: ModelIndexSelection): Config => {
    return {
      rotorConfigA:
        ENIGMA_MODELS[modelIndex.index].rotors[modelIndex.indexWiringA],
      rotorConfigB:
        ENIGMA_MODELS[modelIndex.index].rotors[modelIndex.indexWiringB],
      rotorConfigC:
        ENIGMA_MODELS[modelIndex.index].rotors[modelIndex.indexWiringC],
      reflectorConfig:
        ENIGMA_MODELS[modelIndex.index].reflectors[modelIndex.indexWiringRef]
          .wiring,
      entryConfig: ENIGMA_MODELS[modelIndex.index]?.entryWiring || ALPHABET,
    };
  };

  const enigma = useEnigma(createEnigmaConfig(MODEL_INIT));

  const handleChangeModel = (index: ModelIndexSelection) => {
    setModelIndex(index);
    enigma.handleChangeConfig(createEnigmaConfig(index));
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 p-2">
      <Container>
        <h3 className="text-xl mb-5 uppercase font-light">
          Rotor Configuration
        </h3>
        <Rotors
          modelIndex={modelIndex}
          positions={enigma.rotorPositions}
          onIncrement={enigma.handleRotorIncrement}
          onDecrement={enigma.handleRotorDecrement}
          onModelIndexChange={handleChangeModel}
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
          onKeyPressed={enigma.handleChangeInput}
          onPasteInput={enigma.handlePasteInput}
          onClearInput={enigma.handleClearInput}
        />
      </Container>
    </div>
  );
};

export default EnigmaContainer;
