import React, { useEffect, useState } from "react";
import IconButton from "./IconButton";
import { faClose } from "@fortawesome/free-solid-svg-icons";

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: Props) => {
  const [showed, setShowed] = useState(false);

  const enableScrolling = (val: boolean) =>
    (document.body.style.overflow = val ? "auto" : "hidden");

  const handleClose = () => {
    enableScrolling(true);
    onClose();
  };

  useEffect(() => {
    enableScrolling(false);
    setShowed(true);
  }, []);

  return (
    <div className="h-screen w-screen fixed top-0 right-0 z-40 flex items-end justify-center sm:items-center">
      <div
        className="backdrop-blur-sm bg-clip-padding backdrop-filter bg-black bg-opacity-50  w-screen h-screen absolute"
        onClick={handleClose}
      />
      <div
        className={`bg-white z-50 w-full max-w-[40em] rounded-lg p-3 pb-16 md:pb-3 transition-all ${
          !showed && "translate-y-96"
        }`}
      >
        <div className="w-full flex justify-end">
          <IconButton
            icon={faClose}
            title="Close configuration"
            onClick={handleClose}
            iconClassName="w-8 h-8 hover:text-[#235252] transition-all"
          />
        </div>
        <div className="p-3">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
