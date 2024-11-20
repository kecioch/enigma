import React, { ChangeEvent } from "react";
import Modal from "../../UI/Modal";
import { ENIGMA_MODELS } from "../../../services/enigma/constants";
import { ModelIndexSelection } from "../../../hooks/useEnigma";
import RotorSelect from "./RotorSelect";

interface Props {
  modelIndex: ModelIndexSelection;
  onModelIndexChange: (config: ModelIndexSelection) => void;
  onClose: () => void;
}

const RotorConfigModal = ({
  modelIndex,
  onModelIndexChange,
  onClose,
}: Props) => {
  const rotors = ENIGMA_MODELS[modelIndex.index].rotors;
  const reflectors = ENIGMA_MODELS[modelIndex.index].reflectors;

  const enigmaModels = ENIGMA_MODELS.map((el, i) => (
    <option key={i} value={i}>
      {el.name}
    </option>
  ));

  const handleChangeModel = (ev: ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(ev.target.value);
    onModelIndexChange({
      index: value,
      indexWiringA: 0,
      indexWiringB: 0,
      indexWiringC: 0,
      indexWiringRef: 0,
    });
  };

  const handleChangeA = (index: number) => {
    onModelIndexChange({
      ...modelIndex,
      indexWiringA: index,
    });
  };

  const handleChangeB = (index: number) => {
    onModelIndexChange({
      ...modelIndex,
      indexWiringB: index,
    });
  };

  const handleChangeC = (index: number) => {
    onModelIndexChange({
      ...modelIndex,
      indexWiringC: index,
    });
  };

  const handleChangeRev = (index: number) => {
    onModelIndexChange({
      ...modelIndex,
      indexWiringRef: index,
    });
  };

  return (
    <Modal onClose={onClose}>
      <h3 className="text-2xl uppercase mb-6">Rotor Configuration</h3>
      <div className="flex flex-col gap-2">
        <label htmlFor="model">Select Enigma Model</label>
        <select
          name="model"
          id="model"
          className="border-[0.1em] border-slate-400 rounded-lg p-1"
          onChange={handleChangeModel}
          value={modelIndex.index}
        >
          {enigmaModels}
        </select>
      </div>
      <div className="flex gap-5 justify-center items-end pt-10 pb-8 xs:gap-2">
        <RotorSelect
          label="REV"
          options={reflectors}
          value={modelIndex.indexWiringRef}
          onChange={handleChangeRev}
        />
        <div className="h-16 border-r-2 border-dotted border-black" />
        <RotorSelect
          label="III"
          options={rotors}
          value={modelIndex.indexWiringC}
          onChange={handleChangeC}
        />
        <RotorSelect
          label="II"
          options={rotors}
          value={modelIndex.indexWiringB}
          onChange={handleChangeB}
        />
        <RotorSelect
          label="I"
          options={rotors}
          value={modelIndex.indexWiringA}
          onChange={handleChangeA}
        />
      </div>
    </Modal>
  );
};

export default RotorConfigModal;
