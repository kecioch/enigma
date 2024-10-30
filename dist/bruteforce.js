"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bruteForceEnigma = bruteForceEnigma;
const constants_1 = require("./constants");
const enigma_1 = require("./enigma");
// Method to launch a brute force attack on the enigma for a given plugboard configuration
function bruteForceEnigma(cipherText, knownPlainText, configA, configB, configC, reflectorConfig, plugboardConfig) {
    for (let posA = 0; posA < constants_1.ALPHABET.length; posA++) {
        for (let posB = 0; posB < constants_1.ALPHABET.length; posB++) {
            for (let posC = 0; posC < constants_1.ALPHABET.length; posC++) {
                // Create configurations
                const rotorConfigA = {
                    ...configA,
                    startPos: posA,
                };
                const rotorConfigB = {
                    ...configB,
                    startPos: posB,
                };
                const rotorConfigC = {
                    ...configC,
                    startPos: posC,
                };
                // Init enigma
                const enigma = new enigma_1.Enigma(rotorConfigA, rotorConfigB, rotorConfigC, reflectorConfig, plugboardConfig);
                // Encode/decode cipher text and check for known plain text
                const plainText = enigma.encode(cipherText);
                if (plainText.includes(knownPlainText))
                    return { config: { posA, posB, posC }, plainText };
            }
        }
    }
    return null;
}
