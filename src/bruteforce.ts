import { Enigma } from "./enigma";
import { RotorConfig } from "./rotor";

type BruteForceEnigmaResult = {
  config: { posA: number; posB: number; posC: number };
  plainText: string;
};

export function bruteForceEnigma(
  cipherText: string,
  knownPlainText: string,
  configA: RotorConfig,
  configB: RotorConfig,
  configC: RotorConfig,
  configRev: RotorConfig
): BruteForceEnigmaResult | null {
  for (let posA = 0; posA < 26; posA++) {
    for (let posB = 0; posB < 26; posB++) {
      for (let posC = 0; posC < 26; posC++) {
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
        const rotorConfigRev: RotorConfig = { wiring: configRev.wiring };

        const enigma = new Enigma(
          rotorConfigA,
          rotorConfigB,
          rotorConfigC,
          rotorConfigRev
        );

        const plainText = enigma.encode(cipherText);
        if (plainText.includes(knownPlainText))
          return { config: { posA, posB, posC }, plainText };
      }
    }
  }
  return null;
}
