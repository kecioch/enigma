import React from "react";
import NoteField from "./NoteField";

const Notes = () => {
  return (
    <div className="flex flex-col gap-5 justify-center w-full max-w-[45em] md:flex-row">
      <NoteField mode="USER_INPUT" />
      <NoteField mode="OUTPUT" />
    </div>
  );
};

export default Notes;
