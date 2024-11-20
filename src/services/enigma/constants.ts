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
        notch: ["Q"],
      },
      {
        name: "II (D)",
        wiring: "SLVGBTFXJQOHEWIRZYAMKPCNDU",
        notch: ["E"],
      },
      {
        name: "III (D)",
        wiring: "CJGDPSHKTURAWZXFMYNQOBVLIE",
        notch: ["V"],
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
        notch: ["Q"],
      },
      {
        name: "II",
        wiring: "AJDKSIRUXBLHWTMCQGZNPYFVOE",
        notch: ["E"],
      },
      {
        name: "III",
        wiring: "BDFHJLCPRTXVZNYEIWGAKMUSQO",
        notch: ["V"],
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
    name: "M3 Heer (1938)",
    rotors: [
      {
        name: "I",
        wiring: "EKMFLGDQVZNTOWYHXUSPAIBRCJ",
        notch: ["Q"],
      },
      {
        name: "II",
        wiring: "AJDKSIRUXBLHWTMCQGZNPYFVOE",
        notch: ["E"],
      },
      {
        name: "III",
        wiring: "BDFHJLCPRTXVZNYEIWGAKMUSQO",
        notch: ["V"],
      },
      {
        name: "IV",
        wiring: "ESOVPZJAYQUIRHXLNFTGKDCMWB",
        notch: ["J"],
      },
      {
        name: "V",
        wiring: "VZBRGITYUPSDNHLXAWMJQOFECK",
        notch: ["Z"],
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
    name: "M3 and M4 (1939)",
    rotors: [
      {
        name: "I",
        wiring: "EKMFLGDQVZNTOWYHXUSPAIBRCJ",
        notch: ["Q"],
      },
      {
        name: "II",
        wiring: "AJDKSIRUXBLHWTMCQGZNPYFVOE",
        notch: ["E"],
      },
      {
        name: "III",
        wiring: "BDFHJLCPRTXVZNYEIWGAKMUSQO",
        notch: ["V"],
      },
      {
        name: "IV",
        wiring: "ESOVPZJAYQUIRHXLNFTGKDCMWB",
        notch: ["J"],
      },
      {
        name: "V",
        wiring: "VZBRGITYUPSDNHLXAWMJQOFECK",
        notch: ["Z"],
      },
      {
        name: "VI",
        wiring: "JPGVOUMFYQBENHZRDKASXLICTW",
        notch: ["Z", "M"],
      },
      {
        name: "VII",
        wiring: "NZJHGRCXMYSWBOUFAIVLPEKQDT",
        notch: ["Z", "M"],
      },
      {
        name: "VIII",
        wiring: "FKQHTLXOCBJSPDZRAMEWNIUYGV",
        notch: ["Z", "M"],
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
    name: "Swiss K (1939)",
    entryWiring: "QWERTZUIOASDFGHJKPYXCVBNML",
    rotors: [
      {
        name: "I (K)",
        wiring: "PEZUOHXSCVFMTBGLRINQJWAYDK",
        notch: ["Q"],
      },
      {
        name: "II (K)",
        wiring: "ZOUESYDKFWPCIQXHMVBLGNJRAT",
        notch: ["E"],
      },
      {
        name: "III (K)",
        wiring: "EHRVXGAOBQUSIMZFLYNWKTPDJC",
        notch: ["V"],
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
        notch: ["N"],
      },
      {
        name: "II",
        wiring: "NTZPSFBOKMWRCJDIVLAEYUXHGQ",
        notch: ["E"],
      },
      {
        name: "III",
        wiring: "JVIUBHTCDYAKEQZPOSGXNRMWFL",
        notch: ["Y"],
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
    name: "Tirpitz (1943)",
    entryWiring: "KZROUQHYAIGBLWVSTDXFPNMCJE",
    rotors: [
      {
        name: "I (T)",
        wiring: "KPTYUELOCVGRFQDANJMBSWHZXI",
        notch: ["E", "K", "Q", "W", "Z"],
      },
      {
        name: "II (T)",
        wiring: "UPHZLWEQMTDJXCAKSOIGVBYFNR",
        notch: ["F", "L", "R", "W", "Z"],
      },
      {
        name: "III (T)",
        wiring: "QUDLYRFEKONVZAXWHMGPJBSICT",
        notch: ["E", "K", "Q", "W", "Z"],
      },
      {
        name: "IV (T)",
        wiring: "CIWTBKXNRESPFLYDAGVHQUOJZM",
        notch: ["F", "L", "R", "W", "Z"],
      },
      {
        name: "V (T)",
        wiring: "UAXGISNJBVERDYLFZWTPCKOHMQ",
        notch: ["C", "F", "K", "R", "Y"],
      },
      {
        name: "VI (T)",
        wiring: "XFUZGALVHCNYSEWQTDMRBKPIOJ",
        notch: ["E", "I", "M", "Q", "X"],
      },
      {
        name: "VII (T)",
        wiring: "BJVFTXPLNAYOZIKWGDQERUCHSM",
        notch: ["C", "F", "K", "R", "Y"],
      },
      {
        name: "VIII (T)",
        wiring: "YMTPNZHWKODAJXELUQVGCBISFR",
        notch: ["E", "I", "M", "Q", "X"],
      },
    ],
    reflectors: [
      {
        name: "UKW",
        wiring: "GEKPBTAUMOCNILJDXZYFHWVQSR",
      },
    ],
  },
  {
    name: "Norenigma (1945)",
    rotors: [
      {
        name: "I",
        wiring: "WTOKASUYVRBXJHQCPZEFMDINLG",
        notch: ["Q"],
      },
      {
        name: "II",
        wiring: "GJLPUBSWEMCTQVHXAOFZDRKYNI",
        notch: ["E"],
      },
      {
        name: "III",
        wiring: "JWFMHNBPUSDYTIXVZGRQLAOEKC",
        notch: ["V"],
      },
      {
        name: "IV",
        wiring: "ESOVPZJAYQUIRHXLNFTGKDCMWB",
        notch: ["J"],
      },
      {
        name: "V",
        wiring: "HEJXQOTZBVFDASCILWPGYNMURK",
        notch: ["Z"],
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
