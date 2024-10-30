import { bruteForceEnigma } from "./bruteforce";
import { Enigma } from "./enigma";
import { RotorConfig } from "./rotor";

// General configuration
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

enigma = new Enigma(
  rotorConfigA,
  rotorConfigB,
  rotorConfigC,
  reflectorConfig,
  plugboardConfig
);
inputText = result;
result = enigma.encode(inputText);
console.log(`\nInput Text:   ${inputText}`);
console.log(`Encoded Text: ${result}`);

// BruteForceAttack on enigma implementation
const cipherText = "BGLRAOGHKRWRGSKCNSJAXXUUEXNSRXQUDXOSZHNIWLUVKXIPJSNJTM";
const knownPlainText = "WETTERBERICHT";
plugboardConfig = new Map();

console.log(`\nCipher Text: ${cipherText}`);
console.log("Starting BruteForceAttack...");
const res = bruteForceEnigma(
  cipherText,
  knownPlainText,
  rotorConfigA,
  rotorConfigB,
  rotorConfigC,
  reflectorConfig,
  plugboardConfig
);

if (!res) console.log("No configuration found!");
else {
  console.log("Possible configuration found:");
  console.log(
    `Positions: ${res.config.posA}, ${res.config.posB}, ${res.config.posC}`
  );
  console.log(`Plaintext: ${res.plainText}`);
}