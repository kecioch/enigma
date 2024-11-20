import { ALPHABET } from "./enigma/constants";

export const filterInputAlphabet = (input: string) => {
  // Filter input to only allow alphabetic input
  const allowedSet = new Set(ALPHABET.toUpperCase());
  const result = [...input.toUpperCase()]
    .filter((char) => allowedSet.has(char))
    .join("");
  return result;
};
