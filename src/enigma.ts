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

  public encode(input: string): string {
    let encoded = "";

    // Enocde letter by letter
    for (let i = 0; i < input.length; i++) {
      // Calculate current rotations
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

  private checkRotations() {
    this.rotations++;
    this.rotorA.rotate();

    const posA = this.rotorA.getPosition();
    const posB = this.rotorB.getPosition();

    if (posA > 0 && posA % 22 === 0) this.rotorB.rotate();
    if (posB > 0 && posB % 4 === 0) this.rotorC.rotate();
  }
}
