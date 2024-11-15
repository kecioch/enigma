import React, { useCallback, useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

interface Props {
  char: string;
  onKeyPressed: (value: string) => void;
}

const InputKey = ({ char, onKeyPressed }: Props) => {
  const [isPressed, setIsPressed] = useState(false);

  const playSoundEffect = () => {
    // ---------------------------------------------
    // Sound Effect from https://www.zapsplat.com/
    // ---------------------------------------------
    const sound = new Audio("./sounds/typewriter_button_press.mp3");
    sound.volume = 0.5;
    sound.play();
  };

  const handleMouseDown = useCallback(() => {
    if (!isPressed) {
      playSoundEffect();
      setIsPressed(true);
      onKeyPressed(char);
    }
  }, [isPressed, onKeyPressed, char]);

  const handleKeyUp = () => setIsPressed(false);

  const handleTouchStart = () => {
    setIsPressed(true);
  };

  const pressedStyle = isPressed
    ? "border-slate-700 text-slate-800"
    : "border-white text-white";

  // Handle keyboard events
  useEffect(() => {
    const onKeyDown = (ev: any) => {
      // Handle KeyDown only for web.
      // For mobile devices the onInput event on the textarea are responsible.
      if (
        ev.key.toLowerCase() === char.toLowerCase() &&
        !isPressed &&
        !(ev.key.toLowerCase() === "v" && (ev.metaKey || ev.ctrlKey)) &&
        !isMobile
      )
        handleMouseDown();
    };

    const onKeyUp = (event: any) => {
      if (event.key.toLowerCase() === char.toLowerCase()) handleKeyUp();
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [char, isPressed, handleMouseDown]);

  return (
    <div className="flex flex-col justify-end items-center">
      <button
        className={`border-[0.1em] rounded-full w-7 h-7 sm:w-10 sm:h-10 flex justify-center items-center ${pressedStyle}`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleKeyUp}
        onMouseLeave={handleKeyUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleKeyUp}
      >
        <span className="text-center text-xl font-mono">{char}</span>
      </button>
      <div className={`bg-slate-700 w-[0.1em] ${isPressed ? "h-1" : "h-3"}`} />
    </div>
  );
};

export default InputKey;
