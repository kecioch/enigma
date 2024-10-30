import React from "react";
import { Enigma } from "./services/enigma/enigma";
import { RotorConfig } from "./services/enigma/rotor";

function App() {
  const wiringA = "BDFHJLCPRTXVZNYEIWGAKMUSQO";
  const wiringB = "AJDKSIRUXBLHWTMCQGZNPYFVOE";
  const wiringC = "EKMFLGDQVZNTOWYHXUSPAIBRCJ";
  const wiringRev = "YRUHQSLDPXNGOKMIEBFZCWVJAT";

  const rotorConfigA: RotorConfig = { wiring: wiringA, notch: 22, startPos: 0 };
  const rotorConfigB: RotorConfig = { wiring: wiringB, notch: 16, startPos: 0 };
  const rotorConfigC: RotorConfig = { wiring: wiringC, notch: 5, startPos: 0 };
  const reflectorConfig = wiringRev;
  let plugboardConfig: Map<string, string> = new Map([
    ["A", "C"],
    ["Z", "D"],
    ["E", "F"],
    ["Y", "L"],
  ]);

  // Testing enigma implementation
  let inputText = "HALLODIEENIGMAGRUESSTSIERECHTHERZLICH";
  let enigma = new Enigma(
    rotorConfigA,
    rotorConfigB,
    rotorConfigC,
    reflectorConfig,
    plugboardConfig
  );
  let result = enigma.encode(inputText);
  console.log(`Input Text:   ${inputText}`);
  console.log(`Encoded Text: ${result}`);

  return (
    <div className="App">
      <h1>Enigma</h1>
    </div>
  );
}

export default App;
