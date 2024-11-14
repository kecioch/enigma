import React from "react";
import EnigmaContainer from "./components/EnigmaContainer";

function App() {
  return (
    <div className="flex flex-col items-center gap-8 mt-11 mb-10">
      <div className="flex flex-row justify-center items-center w-full gap-10">
        <div className="bg-[#0CABA8] h-[0.1em] flex-1" />
        <h1 className="text-3xl text-white uppercase font-light">Enigma</h1>
        <div className="bg-[#0CABA8] h-[0.1em] flex-1" />
      </div>
      <EnigmaContainer />
    </div>
  );
}

export default App;
