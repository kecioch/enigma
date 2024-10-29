"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bruteforce_1 = require("./bruteforce");
const enigma_1 = require("./enigma");
// General configuration
const wiringA = "BDFHJLCPRTXVZNYEIWGAKMUSQO";
const wiringB = "AJDKSIRUXBLHWTMCQGZNPYFVOE";
const wiringC = "EKMFLGDQVZNTOWYHXUSPAIBRCJ";
const wiringRev = "YRUHQSLDPXNGOKMIEBFZCWVJAT";
const rotorConfigA = { wiring: wiringA, notch: 22, startPos: 0 };
const rotorConfigB = { wiring: wiringB, notch: 16, startPos: 0 };
const rotorConfigC = { wiring: wiringC, notch: 5, startPos: 0 };
const rotorConfigRev = { wiring: wiringRev };
// Testing enigma implementation
let inputText = "HALLODIEENIGMAGRUESSTSIERECHTHERZLICH";
let enigma = new enigma_1.Enigma(rotorConfigA, rotorConfigB, rotorConfigC, rotorConfigRev);
let result = enigma.encode(inputText);
console.log(`Input Text:   ${inputText}`);
console.log(`Encoded Text: ${result}`);
enigma = new enigma_1.Enigma(rotorConfigA, rotorConfigB, rotorConfigC, rotorConfigRev);
inputText = result;
result = enigma.encode(inputText);
console.log(`\nInput Text:   ${inputText}`);
console.log(`Encoded Text: ${result}`);
// BruteForceAttack on enigma implementation
const cipherText = "BGLRAOGHKRWRGSKCNSJAXXUUEXNSRXQUDXOSZHNIWLUVKXIPJSNJTM";
const knownPlainText = "WETTERBERICHT";
console.log(`\nCipher Text: ${cipherText}`);
console.log("Starting BruteForceAttack...");
const res = (0, bruteforce_1.bruteForceEnigma)(cipherText, knownPlainText, rotorConfigA, rotorConfigB, rotorConfigC, rotorConfigRev);
if (!res)
    console.log("No configuration found!");
else {
    console.log("Possible configuration found:");
    console.log(`Positions: ${res.config.posA}, ${res.config.posB}, ${res.config.posC}`);
    console.log(`Plaintext: ${res.plainText}`);
}
