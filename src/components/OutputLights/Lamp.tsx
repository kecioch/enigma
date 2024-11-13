import React from "react";

interface Props {
  char: string;
  on: boolean;
}

const Lamp = ({ char, on }: Props) => {
  const statusStyle = on
    ? "text-slate-700 bg-[#A19542] shadow-[#031212]"
    : "text-slate-700 shadow-[#023535]";

  return (
    <div
      className={`shadow-inner border-[0.1em] border-slate-800 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center ${statusStyle}`}
    >
      <span className="text-center text-xl">{char}</span>
    </div>
  );
};

export default Lamp;
