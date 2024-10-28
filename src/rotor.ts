import { ALPHABET } from "./constants";

export interface RotorConfig {
  wiring: string;
  startPos?: number;
}

export class Rotor {
  private wiringOffset: number[];
  private output: string[];
  private position: number;

  constructor({ wiring, startPos = 0 }: RotorConfig) {
    this.position = 0;
    this.wiringOffset = [];
    this.output = [];

    for (let i = 0; i < wiring.length; i++) {
      const offset = ALPHABET.indexOf(wiring[i]) - i;
      const output = ALPHABET[(i + offset + 26) % 26];
      this.wiringOffset.push(offset);
      this.output.push(output);
    }

    for (let i = 0; i < startPos; i++) {
      this.rotate();
    }
  }

  // Methode to rotate the rotor
  public rotate() {
    this.position = (this.position + 1) % ALPHABET.length;

    const firstOffset = this.wiringOffset.shift();
    if (firstOffset !== null && firstOffset !== undefined)
      this.wiringOffset.push(firstOffset);
    else throw new Error("wiringOffset is empty");

    for (let i = 0; i < this.output.length; i++) {
      const offset = this.wiringOffset[i];
      const output = ALPHABET[(i + offset + 26) % 26];
      this.output[i] = output;
    }
  }

  // Method to encode/decode a letter (in->out)
  public forward(input: string): string {
    return this.output[ALPHABET.indexOf(input)];
  }

  // Method to encode/decode a letter in reverse (out->in)
  public backward(input: string): string {
    return ALPHABET[this.output.indexOf(input)];
  }
}
