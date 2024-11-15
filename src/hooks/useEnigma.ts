import { useEffect, useRef, useState } from "react";
import { Enigma } from "../services/enigma/enigma";
import { RotorConfig } from "../services/enigma/rotor";
import { ALPHABET } from "../services/enigma/constants";
import { COLOR_PALETTE } from "../constants/Colors";

export type RotorPositions = { posA: number; posB: number; posC: number };

export type RotorSelection = "A" | "B" | "C";

export interface PlugConfig {
  connected: string[];
  colorCode: string;
}

interface UseEnigmaReturn {
  inputText: string;
  outputText: string;
  outputLight: string;
  rotorPositions: RotorPositions;
  plugboard: PlugConfig[];
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
  const [plugboard, setPlugboard] = useState<PlugConfig[]>([]);
  let enigma = useRef<Enigma>();
  let lastPressedPlug = useRef<string>("");
  const colorsAvail = useRef([...COLOR_PALETTE]);

  // Init enigma and update on changes
  useEffect(() => {
    // Create plugboard map based on PlugConfig state
    const plugboardConfig = new Map<string, string>();
    plugboard.forEach((con) =>
      plugboardConfig.set(con.connected[0], con.connected[1])
    );

    // Create Enigma
    enigma.current = new Enigma(
      { ...config.rotorConfigA, startPos: rotorPositions.posA },
      { ...config.rotorConfigB, startPos: rotorPositions.posB },
      { ...config.rotorConfigC, startPos: rotorPositions.posC },
      config.reflectorConfig,
      plugboardConfig
    );
  }, [rotorPositions, config, plugboard]);

  // Utility Functions
  const filterInput = (input: string) => {
    // Filter input to only allow alphabetic input
    const allowedSet = new Set(ALPHABET.toUpperCase());
    const result = [...input.toUpperCase()]
      .filter((char) => allowedSet.has(char))
      .join("");
    return result;
  };

  const encode = (input: string) => {
    if (!enigma.current) return;
    const text = filterInput(input);
    if (!text || text.length <= 0) return;

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

  const removePlug = (index: number) => {
    lastPressedPlug.current = "";
    setPlugboard((prev) => {
      // Make color of deleted connection available again
      colorsAvail.current.push(prev[index].colorCode);
      // Delete connection
      const newPlugboard = [...prev];
      newPlugboard.splice(index, 1);
      return newPlugboard;
    });
  };

  const addPlug = (connections: string[]) => {
    lastPressedPlug.current = "";
    const color = colorsAvail.current.splice(0, 1).join();
    setPlugboard((prev) => [
      ...prev,
      { connected: connections, colorCode: color },
    ]);
  };

  const handlePressPlug = (char: string) => {
    let found = false;

    // Find whether plug is already connected
    plugboard.forEach((con, i) => {
      if (con.connected.includes(char)) {
        found = true;
        removePlug(i);
        return;
      }
    });

    // Update last pressed plug and check whether a new connection is established
    if (found) return;
    if (lastPressedPlug.current !== "" && lastPressedPlug.current !== char) {
      addPlug([lastPressedPlug.current, char]);
    } else {
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
