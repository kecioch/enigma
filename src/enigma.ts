import { Rotor, RotorConfig } from "./rotor";

export class Enigma {
  private rotorA: Rotor;
  private rotorB: Rotor;
  private rotorC: Rotor;
  private rotorReverse: Rotor;
  private position: number;

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
    this.position = 0;
  }

  public encode(input: string): string {
    let encoded = "";

    for (let i = 0; i < input.length; i++) {
      this.position++;
      if (this.position % 22 === 0) this.rotorB.rotate();

      const letter = input[i];
      let result = this.rotorA.forward(letter);
      result = this.rotorB.forward(result);
      result = this.rotorC.forward(result);
      result = this.rotorReverse.forward(result);
      result = this.rotorC.backward(result);
      result = this.rotorB.backward(result);
      result = this.rotorA.backward(result);
      encoded = encoded.concat(result);
      this.rotorA.rotate();
    }

    return encoded;
  }
}
