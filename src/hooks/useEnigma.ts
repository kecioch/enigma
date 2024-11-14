import { useEffect, useRef, useState } from "react";
import { Enigma } from "../services/enigma/enigma";
import { RotorConfig } from "../services/enigma/rotor";
import { ALPHABET } from "../services/enigma/constants";

export type RotorPositions = { posA: number; posB: number; posC: number };

export type RotorSelection = "A" | "B" | "C";

interface UseEnigmaReturn {
  inputText: string;
  outputText: string;
  outputLight: string;
  rotorPositions: RotorPositions;
  plugboard: Map<string, string>;
  handleRotorIncrement: (rotor: RotorSelection) => void;
  handleRotorDecrement: (rotor: RotorSelection) => void;
  handleChangeInput: (char: string) => void;
  handlePasteInput: (text: string) => void;
  handlePressPlug: (char: string) => void;
  handleClearInput: () => void;
  resetRotorPositions: () => void;
}

interface Config {
  rotorConfigA: RotorConfig;
  rotorConfigB: RotorConfig;
  rotorConfigC: RotorConfig;
  reflectorConfig: string;
}

export const useEnigma = (config: Config): UseEnigmaReturn => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [outputLight, setOutputLight] = useState("");
  const [rotorPositions, setRotorPositions] = useState<RotorPositions>({
    posA: config.rotorConfigA.startPos ?? 0,
    posB: config.rotorConfigB.startPos ?? 0,
    posC: config.rotorConfigC.startPos ?? 0,
  });
  const [plugboard, setPlugboard] = useState<Map<string, string>>(
    new Map([
      ["A", "H"],
      ["K", "V"],
    ])
  );
  let enigma = useRef<Enigma>();
  let lastPressedPlug = useRef<string>("");

  // Init enigma and update on changes
  useEffect(() => {
    enigma.current = new Enigma(
      { ...config.rotorConfigA, startPos: rotorPositions.posA },
      { ...config.rotorConfigB, startPos: rotorPositions.posB },
      { ...config.rotorConfigC, startPos: rotorPositions.posC },
      config.reflectorConfig,
      plugboard
    );
  }, [rotorPositions, config, plugboard]);

  // Utility Functions
  const encode = (text: string) => {
    if (!enigma.current) return;
    const encoded = enigma.current.encode(text);
    const { posA, posB, posC } = enigma.current.getPositions();
    setInputText((prev) => prev + text);
    setOutputText((prev) => prev + encoded);
    setRotorPositions({ posA, posB, posC });
    return encoded;
  };

  const getIncrementPositon = (value: number) => {
    return value >= ALPHABET.length - 1 ? 0 : ++value;
  };

  const getDecrementPosition = (value: number) => {
    return value <= 0 ? ALPHABET.length - 1 : --value;
  };

  // Handler Functions
  const handleChangeInput = (char: string) => {
    const encoded = encode(char);
    encoded && setOutputLight(encoded);
  };

  const handlePasteInput = (text: string) => {
    setInputText("");
    setOutputText("");
    encode(text);
  };

  const handleRotorIncrement = (rotor: RotorSelection) => {
    switch (rotor) {
      case "A":
        setRotorPositions((prev) => {
          return { ...prev, posA: getIncrementPositon(prev.posA) };
        });
        break;
      case "B":
        setRotorPositions((prev) => {
          return { ...prev, posB: getIncrementPositon(prev.posB) };
        });
        break;
      case "C":
        setRotorPositions((prev) => {
          return { ...prev, posC: getIncrementPositon(prev.posC) };
        });
        break;
    }
  };

  const handleRotorDecrement = (rotor: RotorSelection) => {
    switch (rotor) {
      case "A":
        setRotorPositions((prev) => {
          return { ...prev, posA: getDecrementPosition(prev.posA) };
        });
        break;
      case "B":
        setRotorPositions((prev) => {
          return { ...prev, posB: getDecrementPosition(prev.posB) };
        });
        break;
      case "C":
        setRotorPositions((prev) => {
          return { ...prev, posC: getDecrementPosition(prev.posC) };
        });
        break;
    }
  };

  const removePlug = (key: string) => {
    lastPressedPlug.current = "";
    setPlugboard((prev) => {
      const newPlugboard = new Map(prev);
      newPlugboard.delete(key);
      return newPlugboard;
    });
  };

  const addPlug = (key: string, value: string) => {
    lastPressedPlug.current = "";
    setPlugboard((prev) => {
      const newPlugboard = new Map(prev);
      newPlugboard.set(key, value);
      console.log(prev);
      console.log(newPlugboard);
      return newPlugboard;
    });
  };

  const handlePressPlug = (char: string) => {
    console.log(char);
    let found = false;

    // Find whether plug is already connected
    // Search as key
    if (plugboard.has(char)) {
      found = true;
      removePlug(char);
    } else {
      // Search as value
      for (let [key, value] of plugboard.entries()) {
        if (value === char) {
          found = true;
          removePlug(key);
          break;
        }
      }
    }

    if (!found && lastPressedPlug.current !== "") {
      addPlug(lastPressedPlug.current, char);
      //   lastPressedPlug.current = "";
    } else if (!found && lastPressedPlug.current === "") {
      lastPressedPlug.current = char;
    }
  };

  const handleClearInput = () => {
    setInputText("");
    setOutputText("");
  };

  const resetRotorPositions = () => {
    setRotorPositions({ posA: 0, posB: 0, posC: 0 });
    setOutputLight("");
  };

  // Return Functions
  return {
    inputText,
    outputText,
    outputLight,
    rotorPositions,
    plugboard,
    handleRotorIncrement,
    handleRotorDecrement,
    handleChangeInput,
    handlePasteInput,
    handlePressPlug,
    handleClearInput,
    resetRotorPositions,
  };
};
