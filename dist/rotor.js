"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rotor = void 0;
const constants_1 = require("./constants");
const enigma_base_component_1 = require("./enigma-base-component");
class Rotor extends enigma_base_component_1.EnigmaBaseComponent {
    constructor({ wiring, notch = 1, startPos = 0 }) {
        super(wiring);
        // Method to get the current position
        this.getPosition = () => this.position;
        // Method to get the notch of the rotor
        this.getNotch = () => this.notch;
        this.position = 0;
        this.notch = notch;
        this.wiringOffset = [];
        // Create wiringOffset and output array
        for (let i = 0; i < wiring.length; i++) {
            const offset = constants_1.ALPHABET.indexOf(wiring[i]) - i;
            const output = constants_1.ALPHABET[(i + offset + constants_1.ALPHABET.length) % constants_1.ALPHABET.length];
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
        this.position = (this.position + 1) % constants_1.ALPHABET.length;
        // Shift wiringOffset array and add first element to the end
        const firstOffset = this.wiringOffset.shift();
        if (firstOffset !== null && firstOffset !== undefined)
            this.wiringOffset.push(firstOffset);
        else
            throw new Error("WiringOffset is empty");
        // Update output array for every letter in alphabet
        for (let i = 0; i < this.output.length; i++) {
            const offset = this.wiringOffset[i];
            const output = constants_1.ALPHABET[(i + offset + constants_1.ALPHABET.length) % constants_1.ALPHABET.length];
            this.output[i] = output;
        }
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
