export interface EnigmaModel {
  name: string;
  rotors: RotorConfig[];
  reflectors: RotorConfig[];
  entryWiring?: string;
}

export interface RotorConfig {
  wiring: string;
  name?: string;
  notch?: number;
  startPos?: number;
}
