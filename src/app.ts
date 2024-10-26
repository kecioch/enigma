import { wiringA, wiringB, wiringC, wiringRev } from "./wiring";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

class Rotor {
  private wiring: string[]; // Represents the internal wiring of the rotor
  private position: number; // Current position of the rotor
  private name: "A" | "B" | "C" | "REV";

  constructor(wiring: string[], name: "A" | "B" | "C" | "REV") {
    this.wiring = wiring;
    this.position = 0;
    this.name = name;
  }

  // Methode to rotate the rotor
  public rotate() {
    this.position = (this.position + 1) % this.wiring.length;
  }

  // Method to encode/decode a letter
  public encode(input: string): string {
    const inputIndex =
      (ALPHABET.indexOf(input) + this.position) % this.wiring.length;
    const encodedLetter = this.wiring[inputIndex];
    const encodedIndex =
      (ALPHABET.indexOf(encodedLetter) - this.position + this.wiring.length) %
      this.wiring.length;
    console.log(
      `# R${this.name} encoded ${input} -> ${ALPHABET[encodedIndex]} // ${encodedLetter}`
    );
    return ALPHABET[encodedIndex];
  }
}

class Enigma {
  private rotorA: Rotor;
  private rotorB: Rotor;
  private rotorC: Rotor;
  private rotorReverse: Rotor;
  private position: number;

  constructor(
    wiringA: string[],
    wiringB: string[],
    wiringC: string[],
    wiringReverse: string[]
  ) {
    this.rotorA = new Rotor(wiringA, "A");
    this.rotorB = new Rotor(wiringB, "B");
    this.rotorC = new Rotor(wiringC, "C");
    this.rotorReverse = new Rotor(wiringReverse, "REV");
    this.position = 0;
  }

  public encode(input: string): string {
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
const enigma = new Enigma(wiringA, wiringB, wiringC, wiringRev);
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
