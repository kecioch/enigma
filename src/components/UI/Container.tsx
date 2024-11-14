import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div
      className={`w-full max-w-[50em] bg-[#015958] border-2 border-[#0CABA8] rounded-lg p-4 sm:p-8 flex flex-col justify-center items-center ${className} shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]`}
    >
      {children}
    </div>
  );
};

export default Container;
