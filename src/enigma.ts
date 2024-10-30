import { EnigmaBaseComponent } from "./enigma-base-component";
import { Plugboard } from "./plugboard";
import { Rotor, RotorConfig } from "./rotor";

export class Enigma {
  private rotorA: Rotor;
  private rotorB: Rotor;
  private rotorC: Rotor;
  private reflector: EnigmaBaseComponent;
  private plugboard: Plugboard;
  private rotations: number;

  constructor(
    rotorConfigA: RotorConfig,
    rotorConfigB: RotorConfig,
    rotorConfigC: RotorConfig,
    reflectorConfig: string,
    plugboardConfig: Map<string, string>
  ) {
    this.rotorA = new Rotor(rotorConfigA);
    this.rotorB = new Rotor(rotorConfigB);
    this.rotorC = new Rotor(rotorConfigC);
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
      let result = this.rotorA.forward(letter);
      result = this.rotorB.forward(result);
      result = this.rotorC.forward(result);
      result = this.reflector.forward(result);
      result = this.rotorC.backward(result);
      result = this.rotorB.backward(result);
      result = this.rotorA.backward(result);

      // Convert output with plugboard
      plugOut = this.plugboard.encode(result);
      if (plugOut) result = plugOut;

      encoded = encoded.concat(result);
    }

    return encoded;
  }

  // Method to update the rotations of every rotor
  private checkRotations() {
    this.rotations++;
    this.rotorA.rotate();

    const posA = this.rotorA.getPosition();
    const posB = this.rotorB.getPosition();

    // Rotate rotors based on previous rotor notches
    if (posA > 0 && posA % this.rotorA.getNotch() === 0) this.rotorB.rotate();
    if (posB > 0 && posB % this.rotorB.getNotch() === 0) this.rotorC.rotate();
  }
}
