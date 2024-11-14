import React, { ClipboardEvent } from "react";
import { faCopy, faTrash } from "@fortawesome/free-solid-svg-icons";
import ActionButton from "./ActionButton";
import { useClipboard } from "../../hooks/useClipboard";

type Mode = "USER_INPUT" | "OUTPUT";

interface Props {
  mode: Mode;
  text: string;
  onPaste?: (text: string) => void;
  onClear?: () => void;
}

const NoteField = ({ mode, text, onPaste, onClear }: Props) => {
  const copyText = useClipboard();
  const isUserInput = mode === "USER_INPUT";

  const handleClear = () => onClear && onClear();

  const handleCopy = () => copyText(text);

  const handlePaste = (ev: ClipboardEvent<HTMLTextAreaElement>) => {
    const text = ev.clipboardData.getData("text");
    onPaste && onPaste(text);
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
        className="w-full mt-3 rounded-lg resize-none p-2 font-mono tracking-wide bg-[#78d6d4] h-[15em] sm:h-[20em]"
        disabled={!isUserInput}
        value={text}
        onPaste={handlePaste}
        spellCheck={false}
        onChange={() => {}}
      />
    </div>
  );
};

export default NoteField;
