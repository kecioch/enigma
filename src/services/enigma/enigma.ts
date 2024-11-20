import { ALPHABET } from "./constants";
import { EnigmaBaseComponent } from "./enigma-base-component";
import { Plugboard } from "./plugboard";
import { Rotor } from "./rotor";
import { RotorConfig } from "./types";

export class Enigma {
  private rotorA: Rotor;
  private rotorB: Rotor;
  private rotorC: Rotor;
  private entry: EnigmaBaseComponent;
  private reflector: EnigmaBaseComponent;
  private plugboard: Plugboard;
  private rotations: number;

  private rotatedRotorB = false;

  constructor(
    rotorConfigA: RotorConfig,
    rotorConfigB: RotorConfig,
    rotorConfigC: RotorConfig,
    reflectorConfig: string,
    entryConfig: string,
    plugboardConfig: Map<string, string>
  ) {
    if (rotorConfigA.notch === undefined)
      throw new Error("Enigma rotor A config notch not defined");
    if (rotorConfigB.notch === undefined)
      throw new Error("Enigma rotor B config notch not defined");
    if (rotorConfigC.notch === undefined)
      throw new Error("Enigma rotor C config notch not defined");

    this.rotorA = new Rotor(rotorConfigA);
    this.rotorB = new Rotor(rotorConfigB);
    this.rotorC = new Rotor(rotorConfigC);
    this.entry = new EnigmaBaseComponent(entryConfig);
    this.reflector = new EnigmaBaseComponent(reflectorConfig);
    this.plugboard = new Plugboard(plugboardConfig);
    this.rotations = 0;
  }

  // Method to encode an input based on enigma rotors
  public encode(input: string): string {
    let encoded = "";

    // Encode letter by letter
    for (let i = 0; i < input.length; i++) {
      let letter = input[i];

      // Convert input with plugboard
      let plugOut = this.plugboard.encode(letter);
      if (plugOut) letter = plugOut;

      // Update current rotations
      this.checkRotations();

      // Encode current letter
      let result: string = this.entry.forward(letter);
      result = this.rotorA.forward(result);
      result = this.rotorB.forward(result);
      result = this.rotorC.forward(result);
      result = this.reflector.forward(result);
      result = this.rotorC.backward(result);
      result = this.rotorB.backward(result);
      result = this.rotorA.backward(result);
      result = this.entry.backward(result);

      // Convert output with plugboard
      plugOut = this.plugboard.encode(result);
      if (plugOut) result = plugOut;

      encoded = encoded.concat(result);
    }

    return encoded;
  }

  public getPositions() {
    return {
      posA: this.rotorA.getPosition(),
      posB: this.rotorB.getPosition(),
      posC: this.rotorC.getPosition(),
    };
  }

  // Method to update the rotations of every rotor
  private checkRotations() {
    this.rotations++;
    this.rotorA.rotate();

    const posA = this.rotorA.getPosition();
    const lastLetterA = ALPHABET[posA - 1 < 0 ? ALPHABET.length - 1 : posA - 1];

    // Rotate rotors based on previous rotor notches
    if (this.rotorA.getNotch().includes(lastLetterA)) {
      this.rotorB.rotate();
      this.rotatedRotorB = true;
    }

    const posB = this.rotorB.getPosition();
    const lastLetterB = ALPHABET[posB - 1 < 0 ? ALPHABET.length - 1 : posB - 1];
    if (this.rotorB.getNotch().includes(lastLetterB) && this.rotatedRotorB) {
      this.rotorC.rotate();
      this.rotatedRotorB = false;
    }
  }
}
