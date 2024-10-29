"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bruteForceEnigma = bruteForceEnigma;
const enigma_1 = require("./enigma");
function bruteForceEnigma(cipherText, knownPlainText, configA, configB, configC, configRev) {
    for (let posA = 0; posA < 26; posA++) {
        for (let posB = 0; posB < 26; posB++) {
            for (let posC = 0; posC < 26; posC++) {
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
                const rotorConfigRev = { wiring: configRev.wiring };
                const enigma = new enigma_1.Enigma(rotorConfigA, rotorConfigB, rotorConfigC, rotorConfigRev);
                const plainText = enigma.encode(cipherText);
                if (plainText.includes(knownPlainText))
                    return { config: { posA, posB, posC }, plainText };
            }
        }
    }
    return null;
}
