import { ALPHABET } from "./constants";

export class Plugboard {
  private wiring: Map<string, string>;

  constructor(wiring: Map<string, string>) {
    this.validateWiring(wiring);
    this.wiring = new Map<string, string>(wiring);
  }

  public encode(input: string): string | undefined {
    // Find corresponding element in wiring
    for (const [key, value] of this.wiring.entries()) {
      if (key === input) return value;
      else if (value === input) return key;
    }
    return undefined;
  }

  private validateWiring(wiring: Map<string, string>) {
    // Check whether wiring length is bigger than alphabeth length
    if (wiring.size > ALPHABET.length)
      throw new Error(
        "Plugboard wiring is not compatible with alphabet length"
      );

    // Check whether wiring is compatible with alphabet
    const alphabetArr = ALPHABET.split("");
    for (const [key, value] of wiring.entries()) {
      if (!alphabetArr.includes(key) || !alphabetArr.includes(value))
        throw new Error("Plugboard element not in alphabet");
    }

    // Check whether entries are unique
    const allConnections = Array.from(wiring.entries()).flat();
    const uniqueConnections = new Set(allConnections);
    if (allConnections.length !== uniqueConnections.size)
      throw new Error("Plugboard duplicate entries");
  }
}
