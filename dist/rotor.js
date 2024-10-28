"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rotor = void 0;
const constants_1 = require("./constants");
class Rotor {
    constructor({ wiring, startPos = 0 }) {
        // Method to get the current position
        this.getPosition = () => this.position;
        this.position = 0;
        this.wiringOffset = [];
        this.output = [];
        for (let i = 0; i < wiring.length; i++) {
            const offset = constants_1.ALPHABET.indexOf(wiring[i]) - i;
            const output = constants_1.ALPHABET[(i + offset + 26) % 26];
            this.wiringOffset.push(offset);
            this.output.push(output);
        }
        for (let i = 0; i < startPos; i++) {
            this.rotate();
        }
    }
    // Methode to rotate the rotor
    rotate() {
        this.position = (this.position + 1) % 26;
        const firstOffset = this.wiringOffset.shift();
        if (firstOffset !== null && firstOffset !== undefined)
            this.wiringOffset.push(firstOffset);
        else
            throw new Error("wiringOffset is empty");
        for (let i = 0; i < this.output.length; i++) {
            const offset = this.wiringOffset[i];
            const output = constants_1.ALPHABET[(i + offset + 26) % 26];
            this.output[i] = output;
        }
    }
    // Method to encode/decode a letter forwards (in->out)
    forward(input) {
        return this.output[constants_1.ALPHABET.indexOf(input)];
    }
    // Method to encode/decode a letter backwards (out->in)
    backward(input) {
        return constants_1.ALPHABET[this.output.indexOf(input)];
    }
}
exports.Rotor = Rotor;
