import React from "react";

type Mode = "USER_INPUT" | "OUTPUT";

interface Props {
  mode: Mode;
}

const NoteField = ({ mode }: Props) => {
  const isUserInput = mode === "USER_INPUT";

  return (
    <div className="bg-[#008F8C] p-3 rounded-lg flex-1">
      <div className="flex gap-3">
        <p className="flex-1 uppercase font-light text-lg">
          {isUserInput ? "Input" : "Output"}
        </p>
        {isUserInput && <button>CLEAR</button>}
        <button>COPY</button>
      </div>
      <textarea
        className="w-full mt-3 rounded-lg resize-none p-2 bg-[#78d6d4] h-[15em] sm:h-[20em]"
        disabled={!isUserInput}
      />
    </div>
  );
};

export default NoteField;
