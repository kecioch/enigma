"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enigma = void 0;
const rotor_1 = require("./rotor");
class Enigma {
    constructor(rotorConfigA, rotorConfigB, rotorConfigC, rotorConfigRev) {
        this.rotorA = new rotor_1.Rotor(rotorConfigA);
        this.rotorB = new rotor_1.Rotor(rotorConfigB);
        this.rotorC = new rotor_1.Rotor(rotorConfigC);
        this.rotorReverse = new rotor_1.Rotor(rotorConfigRev);
        this.rotations = 0;
    }
    encode(input) {
        let encoded = "";
        // Enocde letter by letter
        for (let i = 0; i < input.length; i++) {
            // Calculate current rotations
            this.checkRotations();
            // Encode current letter
            const letter = input[i];
            let result = this.rotorA.forward(letter);
            result = this.rotorB.forward(result);
            result = this.rotorC.forward(result);
            result = this.rotorReverse.forward(result);
            result = this.rotorC.backward(result);
            result = this.rotorB.backward(result);
            result = this.rotorA.backward(result);
            encoded = encoded.concat(result);
        }
        return encoded;
    }
    checkRotations() {
        this.rotations++;
        this.rotorA.rotate();
        const posA = this.rotorA.getPosition();
        const posB = this.rotorB.getPosition();
        if (posA > 0 && posA % 22 === 0)
            this.rotorB.rotate();
        if (posB > 0 && posB % 4 === 0)
            this.rotorC.rotate();
    }
}
exports.Enigma = Enigma;
