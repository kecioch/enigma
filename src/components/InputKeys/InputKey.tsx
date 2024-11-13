import React, { useState } from "react";

interface Props {
  char: string;
}

const InputKey = ({ char }: Props) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);

  const pressedStyle = isPressed
    ? "border-slate-700 text-slate-800"
    : "border-white text-white";

  return (
    <div className="flex flex-col justify-end items-center">
      <button
        className={`border-[0.1em] rounded-full w-7 h-7 sm:w-10 sm:h-10 flex justify-center items-center ${pressedStyle}`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
      >
        <span className="text-center text-xl">{char}</span>
      </button>
      <div className={`bg-slate-700 w-[0.1em] ${isPressed ? "h-1" : "h-3"}`} />
    </div>
  );
};

export default InputKey;
