"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rotor = void 0;
const constants_1 = require("./constants");
class Rotor {
    constructor({ wiring, notch = 1, startPos = 0 }) {
        // Method to get the current position
        this.getPosition = () => this.position;
        // Method to get the notch of the rotor
        this.getNotch = () => this.notch;
        this.position = 0;
        this.notch = notch;
        this.wiringOffset = [];
        this.output = [];
        // Create wiringOffset and output array
        for (let i = 0; i < wiring.length; i++) {
            const offset = constants_1.ALPHABET.indexOf(wiring[i]) - i;
            const output = constants_1.ALPHABET[(i + offset + 26) % 26];
            this.wiringOffset.push(offset);
            this.output.push(output);
        }
        // Rotate rotor to start position
        for (let i = 0; i < startPos; i++) {
            this.rotate();
        }
    }
    // Method to rotate the rotor
    rotate() {
        this.position = (this.position + 1) % 26;
        // Shift wiringOffset array and add first element to the end
        const firstOffset = this.wiringOffset.shift();
        if (firstOffset !== null && firstOffset !== undefined)
            this.wiringOffset.push(firstOffset);
        else
            throw new Error("WiringOffset is empty");
        // Update output array for every letter in alphabet
        for (let i = 0; i < this.output.length; i++) {
            const offset = this.wiringOffset[i];
            const output = constants_1.ALPHABET[(i + offset + 26) % 26];
            this.output[i] = output;
        }
    }
    // Method to encode/decode a letter forwards (in->out)
    forward(input) {
        const res = this.output[constants_1.ALPHABET.indexOf(input.toUpperCase())];
        if (res === undefined || res === null)
            throw new Error("Wrong rotor input");
        return res;
    }
    // Method to encode/decode a letter backwards (out->in)
    backward(input) {
        const res = constants_1.ALPHABET[this.output.indexOf(input.toUpperCase())];
        if (res === undefined || res === null)
            throw new Error("Wrong rotor input");
        return res;
    }
}
exports.Rotor = Rotor;
