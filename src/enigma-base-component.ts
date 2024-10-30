import { ALPHABET } from "./constants";

export class EnigmaBaseComponent {
  protected output: string[];

  constructor(wiring: string) {
    this.validateWiring(wiring);
    this.output = wiring.split("");
  }

  // Method to encode/decode a letter forwards (in->out)
  public forward(input: string): string {
    const res = this.output[ALPHABET.indexOf(input.toUpperCase())];
    if (!res) throw new Error("Wiring does not provide output for given input");
    return res;
  }

  // Method to validate wiring
  private validateWiring(wiring: string) {
    // Check whether wiring length is different than alphabeth length
    if (wiring.length !== ALPHABET.length)
      throw new Error("Wiring is not compatible with alphabet length");

    // Check whether wiring is compatible with alphabet
    const alphabetArr = ALPHABET.split("");
    for (const letter of wiring) {
      if (!alphabetArr.includes(letter))
        throw new Error("Wiring element not in alphabet");
    }

    // Check whether entries are unique
    const allConnections = wiring.split("");
    const uniqueConnections = new Set(allConnections);
    if (allConnections.length !== uniqueConnections.size)
      throw new Error("Wiring duplicate entries");
  }
}
