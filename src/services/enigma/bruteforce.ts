import { ALPHABET } from "./constants";
import { Enigma } from "./enigma";
import { RotorConfig } from "./types";

type BruteForceEnigmaResult = {
  config: { posA: number; posB: number; posC: number };
  plainText: string;
};

// Method to launch a brute force attack on the enigma for a given plugboard configuration
export function bruteForceEnigma(
  cipherText: string,
  knownPlainText: string,
  configA: RotorConfig,
  configB: RotorConfig,
  configC: RotorConfig,
  reflectorConfig: string,
  entryConfig: string,
  plugboardConfig: Map<string, string>
): BruteForceEnigmaResult | null {
  for (let posA = 0; posA < ALPHABET.length; posA++) {
    for (let posB = 0; posB < ALPHABET.length; posB++) {
      for (let posC = 0; posC < ALPHABET.length; posC++) {
        // Create configurations
        const rotorConfigA: RotorConfig = {
          ...configA,
          startPos: posA,
        };
        const rotorConfigB: RotorConfig = {
          ...configB,
          startPos: posB,
        };
        const rotorConfigC: RotorConfig = {
          ...configC,
          startPos: posC,
        };

        // Init enigma
        const enigma = new Enigma(
          rotorConfigA,
          rotorConfigB,
          rotorConfigC,
          reflectorConfig,
          entryConfig,
          plugboardConfig
        );

        // Encode/decode cipher text and check for known plain text
        const plainText = enigma.encode(cipherText);
        if (plainText.includes(knownPlainText))
          return { config: { posA, posB, posC }, plainText };
      }
    }
  }
  return null;
}
