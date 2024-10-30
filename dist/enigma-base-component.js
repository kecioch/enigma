"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnigmaBaseComponent = void 0;
const constants_1 = require("./constants");
class EnigmaBaseComponent {
    constructor(wiring) {
        this.validateWiring(wiring);
        this.output = wiring.split("");
    }
    // Method to encode/decode a letter forwards (in->out)
    forward(input) {
        const res = this.output[constants_1.ALPHABET.indexOf(input.toUpperCase())];
        if (!res)
            throw new Error("Wiring does not provide output for given input");
        return res;
    }
    // Method to validate wiring
    validateWiring(wiring) {
        // Check whether wiring length is different than alphabeth length
        if (wiring.length !== constants_1.ALPHABET.length)
            throw new Error("Wiring is not compatible with alphabet length");
        // Check whether wiring is compatible with alphabet
        const alphabetArr = constants_1.ALPHABET.split("");
        for (const letter of wiring) {
            if (!alphabetArr.includes(letter))
                throw new Error("Wiring element not in alphabet");
        }
        // Check whether entries are unique
        const allConnections = wiring.split("");
        const uniqueConnections = new Set(allConnections);
        if (allConnections.length !== uniqueConnections.size)
            throw new Error("Wiring duplicate entries");
    }
}
exports.EnigmaBaseComponent = EnigmaBaseComponent;
