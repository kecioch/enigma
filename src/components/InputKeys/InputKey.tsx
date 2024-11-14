import React, { useCallback, useEffect, useState } from "react";

interface Props {
  char: string;
}

const InputKey = ({ char }: Props) => {
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
    }
  }, [isPressed]);

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
      if (ev.key.toLowerCase() === char.toLowerCase() && !isPressed)
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
        <span className="text-center text-xl">{char}</span>
      </button>
      <div className={`bg-slate-700 w-[0.1em] ${isPressed ? "h-1" : "h-3"}`} />
    </div>
  );
};

export default InputKey;
