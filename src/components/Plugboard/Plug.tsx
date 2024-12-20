import React from "react";

interface Props {
  char: string;
  connected: boolean;
  onPress: (char: string) => void;
  color?: string;
}

const Plug = ({ char, connected, onPress, color }: Props) => {
  const handleClick = () => onPress(char);

  return (
    <button
      className="flex flex-col justify-center items-center"
      onClick={handleClick}
    >
      <span className="font-mono">{char}</span>
      <div className="w-6 h-6 bg-slate-400 rounded-full flex justify-center items-center">
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: connected ? `${color}` : "#0F172A" }}
        />
      </div>
    </button>
  );
};

export default Plug;
