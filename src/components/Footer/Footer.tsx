import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div>
      <a
        href="https://www.github.com/kecioch/enigma"
        title="See enigma source code on github"
        target="_blank"
        rel="noreferrer"
        className="flex justify-center items-center gap-2 transition-all hover:text-[#0caba8]"
      >
        <span className="text-lg font-light">developed by Kevin Cioch</span>
        <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
      </a>
    </div>
  );
};

export default Footer;
