import { EnigmaModel } from "./types";

export const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const ENIGMA_MODELS: EnigmaModel[] = [
  {
    name: "Enigma-D (1926)",
    entryWiring: "JWULCMNOHPQZYXIRADKEGVBTSF",
    rotors: [
      {
        name: "I (D)",
        wiring: "LPGSZMHAEOQKVXRFYBUTNICJDW",
        notch: 17,
      },
      {
        name: "II (D)",
        wiring: "SLVGBTFXJQOHEWIRZYAMKPCNDU",
        notch: 5,
      },
      {
        name: "III (D)",
        wiring: "CJGDPSHKTURAWZXFMYNQOBVLIE",
        notch: 22,
      },
    ],
    reflectors: [
      {
        name: "UKW (D)",
        wiring: "IMETCGFRAYSQBZXWLHKDVUPOJN",
      },
    ],

  },
  {
    name: "Enigma I (1930)",
    rotors: [
      {
        name: "I",
        wiring: "EKMFLGDQVZNTOWYHXUSPAIBRCJ",
        notch: 17,
      },
      {
        name: "II",
        wiring: "AJDKSIRUXBLHWTMCQGZNPYFVOE",
        notch: 4,
      },
      {
        name: "III",
        wiring: "BDFHJLCPRTXVZNYEIWGAKMUSQO",
        notch: 21,
      },
    ],
    reflectors: [
      {
        name: "UKW A",
        wiring: "EJMZALYXVBWFCRQUONTSPIKHGD",
      },
      {
        name: "UKW B",
        wiring: "YRUHQSLDPXNGOKMIEBFZCWVJAT",
      },
      {
        name: "UKW C",
        wiring: "FVPJIAOYEDRZXWGCTKUQSBNMHL",
      },
    ],
  },
  {
    name: "Schweizer K (1939)",
    entryWiring: "QWERTZUIOASDFGHJKPYXCVBNML",
    rotors: [
      {
        name: "I (K)",
        wiring: "PEZUOHXSCVFMTBGLRINQJWAYDK",
        notch: 17,
      },
      {
        name: "II (K)",
        wiring: "ZOUESYDKFWPCIQXHMVBLGNJRAT",
        notch: 5,
      },
      {
        name: "III (K)",
        wiring: "EHRVXGAOBQUSIMZFLYNWKTPDJC",
        notch: 22,
      },
    ],
    reflectors: [
      {
        name: "UKW (K)",
        wiring: "IMETCGFRAYSQBZXWLHKDVUPOJN",
      },
    ],
  },
  {
    name: "Reichsbahn (1941)",
    entryWiring: "QWERTZUIOASDFGHJKPYXCVBNML",
    rotors: [
      {
        name: "I",
        wiring: "JGDQOXUSCAMIFRVTPNEWKBLZYH",
        notch: 17,
      },
      {
        name: "II",
        wiring: "NTZPSFBOKMWRCJDIVLAEYUXHGQ",
        notch: 5,
      },
      {
        name: "III",
        wiring: "JVIUBHTCDYAKEQZPOSGXNRMWFL",
        notch: 22,
      },
    ],
    reflectors: [
      {
        name: "UKW",
        wiring: "QYHOGNECVPUZTFDJAXWMKISRBL",
      },
    ],
  },
  {
    name: "Norenigma (1945)",
    rotors: [
      {
        name: "I",
        wiring: "WTOKASUYVRBXJHQCPZEFMDINLG",
        notch: 17,
      },
      {
        name: "II",
        wiring: "GJLPUBSWEMCTQVHXAOFZDRKYNI",
        notch: 5,
      },
      {
        name: "III",
        wiring: "JWFMHNBPUSDYTIXVZGRQLAOEKC",
        notch: 22,
      },
      {
        name: "IV",
        wiring: "ESOVPZJAYQUIRHXLNFTGKDCMWB",
        notch: 10,
      },
      {
        name: "V",
        wiring: "HEJXQOTZBVFDASCILWPGYNMURK",
        notch: 26,
      },
    ],
    reflectors: [
      {
        name: "UKW",
        wiring: "MOWJYPUXNDSRAIBFVLKZGQCHET",
      },
    ],
  },
];
