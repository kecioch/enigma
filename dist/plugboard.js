"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plugboard = void 0;
const constants_1 = require("./constants");
class Plugboard {
    constructor(wiring) {
        this.validateWiring(wiring);
        this.wiring = new Map(wiring);
    }
    encode(input) {
        // Find corresponding element in wiring
        for (const [key, value] of this.wiring.entries()) {
            if (key === input)
                return value;
            else if (value === input)
                return key;
        }
        return undefined;
    }
    validateWiring(wiring) {
        // Check whether wiring length is bigger than alphabeth length
        if (wiring.size > constants_1.ALPHABET.length)
            throw new Error("Plugboard wiring is not compatible with alphabet length");
        // Check whether wiring is compatible with alphabet
        const alphabetArr = constants_1.ALPHABET.split("");
        for (const [key, value] of wiring.entries()) {
            if (!alphabetArr.includes(key) || !alphabetArr.includes(value))
                throw new Error("Plugboard element not in alphabet");
        }
        // Check whether entries are unique
        const allConnections = Array.from(wiring.entries()).flat();
        const uniqueConnections = new Set(allConnections);
        if (allConnections.length !== uniqueConnections.size)
            throw new Error("Plugboard duplicate entries");
    }
}
exports.Plugboard = Plugboard;
