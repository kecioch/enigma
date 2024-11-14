import React from "react";
import NoteField from "./NoteField";

interface Props {
  inputText: string;
  outputText: string;
  onPasteInput: (text: string) => void;
  onClearInput: () => void;
}

const Notes = ({
  inputText,
  outputText,
  onPasteInput,
  onClearInput,
}: Props) => {
  return (
    <div className="flex flex-col gap-5 justify-center w-full max-w-[45em] md:flex-row">
      <NoteField
        mode="USER_INPUT"
        text={inputText}
        onPaste={onPasteInput}
        onClear={onClearInput}
      />
      <NoteField mode="OUTPUT" text={outputText} />
    </div>
  );
};

export default Notes;
