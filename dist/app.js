"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wiring_1 = require("./wiring");
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
class Rotor {
    constructor(wiring, name) {
        this.wiring = wiring;
        this.position = 0;
        this.name = name;
    }
    // Methode to rotate the rotor
    rotate() {
        this.position = (this.position + 1) % this.wiring.length;
    }
    // Method to encode/decode a letter
    encode(input) {
        const inputIndex = (ALPHABET.indexOf(input) + this.position) % this.wiring.length;
        const encodedLetter = this.wiring[inputIndex];
        const encodedIndex = (ALPHABET.indexOf(encodedLetter) - this.position + this.wiring.length) %
            this.wiring.length;
        console.log(`# R${this.name} encoded ${input} -> ${ALPHABET[encodedIndex]} // ${encodedLetter}`);
        return ALPHABET[encodedIndex];
    }
}
class Enigma {
    constructor(wiringA, wiringB, wiringC, wiringReverse) {
        this.rotorA = new Rotor(wiringA, "A");
        this.rotorB = new Rotor(wiringB, "B");
        this.rotorC = new Rotor(wiringC, "C");
        this.rotorReverse = new Rotor(wiringReverse, "REV");
        this.position = 0;
    }
    encode(input) {
        let result = this.rotorA.encode(input);
        result = this.rotorB.encode(result);
        result = this.rotorC.encode(result);
        result = this.rotorReverse.encode(result);
        result = this.rotorC.encode(result);
        result = this.rotorB.encode(result);
        result = this.rotorA.encode(result);
        this.rotorA.rotate();
        return result;
    }
}
// Test
const enigma = new Enigma(wiring_1.wiringA, wiring_1.wiringB, wiring_1.wiringC, wiring_1.wiringRev);
const res = enigma.encode("J");
console.log("Encoded Result: " + res);
// Usage:
// const rotorA = new Rotor([
//   "B",
//   "D",
//   "F",
//   "H",
//   "J",
//   "L",
//   "C",
//   "P",
//   "R",
//   "T",
//   "X",
//   "V",
//   "Z",
//   "N",
//   "Y",
//   "E",
//   "I",
//   "W",
//   "G",
//   "A",
//   "K",
//   "M",
//   "U",
//   "S",
//   "Q",
//   "O",
// ]);
// // Encoding and rotation
// let encodedResult = rotorA.encode("J"); // Input: A
// console.log("Encoded result:", encodedResult);
// rotorA.rotate();
// encodedResult = rotorA.encode("I");
// console.log("Encoded result after rotation:", encodedResult);
