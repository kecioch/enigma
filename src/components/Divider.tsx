import React from "react";

interface Props {
  className?: string;
}

const Divider = ({ className }: Props) => {
  return <hr className={`w-[80%] border-slate-800 my-7 ${className}`} />;
};

export default Divider;
