"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enigma_1 = require("./enigma");
const wiringA = "BDFHJLCPRTXVZNYEIWGAKMUSQO";
const wiringB = "AJDKSIRUXBLHWTMCQGZNPYFVOE";
const wiringC = "EKMFLGDQVZNTOWYHXUSPAIBRCJ";
const wiringRev = "YRUHQSLDPXNGOKMIEBFZCWVJAT";
const rotorConfigA = { wiring: wiringA, startPos: 0 };
const rotorConfigB = { wiring: wiringB, startPos: 0 };
const rotorConfigC = { wiring: wiringC, startPos: 0 };
const rotorConfigRev = { wiring: wiringRev };
let enigma = new enigma_1.Enigma(rotorConfigA, rotorConfigB, rotorConfigC, rotorConfigRev);
let result = enigma.encode("ICHMAGZUEGEDIESESINDWUNDERBARMEINENAMEISTKEVINHALLOJUERGENISTMEINFREUNDERMAGAUCHZUEGE");
console.log(result);
enigma = new enigma_1.Enigma(rotorConfigA, rotorConfigB, rotorConfigC, rotorConfigRev);
result = enigma.encode(result);
console.log(result);
