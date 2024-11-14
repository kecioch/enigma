import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Props {
  title?: string;
  btnClassName?: string;
  iconClassName?: string;
  icon: IconProp;
  onClick: () => void;
}

const IconButton = ({
  icon,
  onClick,
  btnClassName,
  iconClassName,
  title,
}: Props) => {
  return (
    <button
      className={`flex justify-center items-center ${btnClassName}`}
      onClick={onClick}
      title={title}
    >
      <FontAwesomeIcon
        icon={icon}
        className={`text-[#0b1a1a] active:text-[#1f3f3f] ${iconClassName}`}
      />
    </button>
  );
};

export default IconButton;
