import React from "react";
import EnigmaContainer from "./components/EnigmaContainer";
import Footer from "./components/Footer/Footer";
import HeadlineDivider from "./components/UI/HeadlineDivider";

function App() {
  return (
    <div className="flex flex-col items-center gap-8 mt-11 mb-10">
      <div className="flex flex-row justify-center items-center w-full gap-10">
        <HeadlineDivider />
        <h1 className="text-3xl text-white uppercase font-light">Enigma</h1>
        <HeadlineDivider />
      </div>
      <EnigmaContainer />
      <Footer />
    </div>
  );
}

export default App;
