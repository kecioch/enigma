import React from "react";
import { faCopy, faTrash } from "@fortawesome/free-solid-svg-icons";
import ActionButton from "./ActionButton";

type Mode = "USER_INPUT" | "OUTPUT";

interface Props {
  mode: Mode;
}

const NoteField = ({ mode }: Props) => {
  const isUserInput = mode === "USER_INPUT";

  const handleClear = () => {
    console.log("CLEAR!");
  };

  const handleCopy = () => {
    console.log("HANDLE COPY");
  };

  return (
    <div className="bg-[#008F8C] p-3 rounded-lg flex-1">
      <div className="flex gap-3">
        <p className="flex-1 uppercase font-light text-lg">
          {isUserInput ? "Input" : "Output"}
        </p>
        {isUserInput && (
          <ActionButton
            title="Clear text"
            actionText="Cleared!"
            icon={faTrash}
            onClick={handleClear}
          />
        )}
        <ActionButton
          title="Copy to clipboard"
          actionText="Copied!"
          icon={faCopy}
          onClick={handleCopy}
        />
      </div>
      <textarea
        className="w-full mt-3 rounded-lg resize-none p-2 bg-[#78d6d4] h-[15em] sm:h-[20em]"
        disabled={!isUserInput}
      />
    </div>
  );
};

export default NoteField;
