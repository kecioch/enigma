import React from "react";
import OutputLights from "./OutputLights/OutputLights";
import InputKeys from "./InputKeys/InputKeys";
import Plugboard from "./Plugboard/Plugboard";
import Notes from "./Notes/Notes";
import Rotors from "./Rotors/Rotors";
import Container from "./Container";
import Divider from "./Divider";

const EnigmaContainer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 p-2">
      <Container>
        <h3 className="text-xl mb-5 uppercase font-light">
          Rotor Configuration
        </h3>
        <Rotors />
      </Container>
      <Container>
        <h3 className="text-xl mb-5 uppercase font-light">Output</h3>
        <OutputLights />
        <Divider />

        <h3 className="text-xl mb-5 uppercase font-light">Input</h3>
        <InputKeys />
        <Divider />

        <h3 className="text-xl mb-5 uppercase font-light">Plugboard</h3>
        <Plugboard />
        <Divider className="mb-12" />

        <Notes />
      </Container>
    </div>
  );
};

export default EnigmaContainer;
