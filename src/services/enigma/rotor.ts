import { ALPHABET } from "./constants";
import { EnigmaBaseComponent } from "./enigma-base-component";

export interface RotorConfig {
  wiring: string;
  notch?: number;
  startPos?: number;
}

export class Rotor extends EnigmaBaseComponent {
  private wiringOffset: number[]; // Represent the internal wiring. Offset = Index_Wiring_Letter_Alphabet - Index_Letter_Alphabet
  private position: number; // Current rotation
  private notch: number; // Notch that triggers rotation of next rotor

  constructor({ wiring, notch = 1, startPos = 0 }: RotorConfig) {
    super(wiring);
    this.position = 0;
    this.notch = notch;
    this.wiringOffset = [];

    // Create wiringOffset and output array
    for (let i = 0; i < wiring.length; i++) {
      const offset = ALPHABET.indexOf(wiring[i]) - i;
      const output = ALPHABET[(i + offset + ALPHABET.length) % ALPHABET.length];
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
    this.position = (this.position + 1) % ALPHABET.length;

    // Shift wiringOffset array and add first element to the end
    const firstOffset = this.wiringOffset.shift();
    if (firstOffset !== null && firstOffset !== undefined)
      this.wiringOffset.push(firstOffset);
    else throw new Error("WiringOffset is empty");

    // Update output array for every letter in alphabet
    for (let i = 0; i < this.output.length; i++) {
      const offset = this.wiringOffset[i];
      const output = ALPHABET[(i + offset + ALPHABET.length) % ALPHABET.length];
      this.output[i] = output;
    }
  }

  // Method to encode/decode a letter backwards (out->in)
  public backward(input: string): string {
    const res = ALPHABET[this.output.indexOf(input.toUpperCase())];
    if (res === undefined || res === null) throw new Error("Wrong rotor input");
    return res;
  }
}
