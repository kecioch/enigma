import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Props {
  icon: IconProp;
  title: string;
  actionText: string;
  onClick: () => void;
  statusDelay?: number;
  className?: string;
}

const ActionButton = ({
  icon,
  title,
  actionText,
  onClick,
  statusDelay = 1500,
  className,
}: Props) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked) return;
    setClicked(true);
    onClick();
    setTimeout(() => setClicked(false), statusDelay);
  };

  return (
    <button
      className={`bg-[#34c6c4] text-[#008F8C] rounded-lg h-8 py-1 px-2 uppercase font-light flex justify-center items-center active:bg-[#1f4f4e] ${className}`}
      title={title}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={icon} />
      <p className={`transition-all ${clicked ? "ml-2" : "w-0"}`}>
        {clicked && actionText}
      </p>
    </button>
  );
};

export default ActionButton;
