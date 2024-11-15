import React from "react";
import NoteField from "./NoteField";

interface Props {
  inputText: string;
  outputText: string;
  onKeyPressed: (char: string) => void;
  onPasteInput: (text: string) => void;
  onClearInput: () => void;
}

const Notes = ({
  inputText,
  outputText,
  onKeyPressed,
  onPasteInput,
  onClearInput,
}: Props) => {
  return (
    <div className="flex flex-col gap-5 justify-center w-full max-w-[45em] md:flex-row">
      <NoteField
        mode="USER_INPUT"
        text={inputText}
        onChange={onKeyPressed}
        onPaste={onPasteInput}
        onClear={onClearInput}
      />
      <NoteField mode="OUTPUT" text={outputText} />
    </div>
  );
};

export default Notes;
