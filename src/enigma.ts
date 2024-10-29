import { Rotor, RotorConfig } from "./rotor";

export class Enigma {
  private rotorA: Rotor;
  private rotorB: Rotor;
  private rotorC: Rotor;
  private rotorReverse: Rotor;
  private rotations: number;

  constructor(
    rotorConfigA: RotorConfig,
    rotorConfigB: RotorConfig,
    rotorConfigC: RotorConfig,
    rotorConfigRev: RotorConfig
  ) {
    this.rotorA = new Rotor(rotorConfigA);
    this.rotorB = new Rotor(rotorConfigB);
    this.rotorC = new Rotor(rotorConfigC);
    this.rotorReverse = new Rotor(rotorConfigRev);
    this.rotations = 0;
  }

  // Method to encode an input based on enigma rotors
  public encode(input: string): string {
    let encoded = "";

    // Encode letter by letter
    for (let i = 0; i < input.length; i++) {
      // Update current rotations
      this.checkRotations();

      // Encode current letter
      const letter = input[i];
      let result = this.rotorA.forward(letter);
      result = this.rotorB.forward(result);
      result = this.rotorC.forward(result);
      result = this.rotorReverse.forward(result);
      result = this.rotorC.backward(result);
      result = this.rotorB.backward(result);
      result = this.rotorA.backward(result);
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
