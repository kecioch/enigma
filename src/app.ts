import { Enigma } from "./enigma";
import { RotorConfig } from "./rotor";

const wiringA = "BDFHJLCPRTXVZNYEIWGAKMUSQO";
const wiringB = "AJDKSIRUXBLHWTMCQGZNPYFVOE";
const wiringC = "EKMFLGDQVZNTOWYHXUSPAIBRCJ";
const wiringRev = "YRUHQSLDPXNGOKMIEBFZCWVJAT";

const rotorConfigA: RotorConfig = { wiring: wiringA, startPos: 0 };
const rotorConfigB: RotorConfig = { wiring: wiringB, startPos: 0 };
const rotorConfigC: RotorConfig = { wiring: wiringC, startPos: 0 };
const rotorConfigRev: RotorConfig = { wiring: wiringRev };

let enigma = new Enigma(
  rotorConfigA,
  rotorConfigB,
  rotorConfigC,
  rotorConfigRev
);
let result = enigma.encode(
  "ICHMAGZUEGEDIESESINDWUNDERBARMEINENAMEISTKEVINHALLOJUERGENISTMEINFREUNDERMAGAUCHZUEGE"
);
console.log(result);

enigma = new Enigma(rotorConfigA, rotorConfigB, rotorConfigC, rotorConfigRev);
result = enigma.encode(result);
console.log(result);
