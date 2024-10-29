import { ALPHABET } from "./constants";

export interface RotorConfig {
  wiring: string;
  notch?: number;
  startPos?: number;
}

export class Rotor {
  private wiringOffset: number[]; // Represent the internal wiring. Offset = Index_Wiring_Letter_Alphabet - Index_Letter_Alphabet
  private output: string[]; // Outputs for every letter in alphabet
  private position: number; // Current rotation
  private notch: number; // Notch that triggers rotation of next rotor

  constructor({ wiring, notch = 1, startPos = 0 }: RotorConfig) {
    this.position = 0;
    this.notch = notch;
    this.wiringOffset = [];
    this.output = [];

    // Create wiringOffset and output array
    for (let i = 0; i < wiring.length; i++) {
      const offset = ALPHABET.indexOf(wiring[i]) - i;
      const output = ALPHABET[(i + offset + 26) % 26];
      this.wiringOffset.push(offset);
      this.output.push(output);
    }

    // Rotate rotor to start position
    for (let i = 0; i < startPos; i++) {
      this.rotate();
    }
  }

  // Method to get the current position
  public getPosition = () => this.position;

  // Method to get the notch of the rotor
  public getNotch = () => this.notch;

  // Method to rotate the rotor
  public rotate() {
    this.position = (this.position + 1) % 26;

    // Shift wiringOffset array and add first element to the end
    const firstOffset = this.wiringOffset.shift();
    if (firstOffset !== null && firstOffset !== undefined)
      this.wiringOffset.push(firstOffset);
    else throw new Error("WiringOffset is empty");

    // Update output array for every letter in alphabet
    for (let i = 0; i < this.output.length; i++) {
      const offset = this.wiringOffset[i];
      const output = ALPHABET[(i + offset + 26) % 26];
      this.output[i] = output;
    }
  }

  // Method to encode/decode a letter forwards (in->out)
  public forward(input: string): string {
    const res = this.output[ALPHABET.indexOf(input.toUpperCase())];
    if (res === undefined || res === null) throw new Error("Wrong rotor input");
    return res;
  }

  // Method to encode/decode a letter backwards (out->in)
  public backward(input: string): string {
    const res = ALPHABET[this.output.indexOf(input.toUpperCase())];
    if (res === undefined || res === null) throw new Error("Wrong rotor input");
    return res;
  }
}
