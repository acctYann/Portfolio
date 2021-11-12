import React, { useContext } from "react";

// Context
import LanguageContext from "../contexts/language-context";

// CV
import CVfr from "../utils/data/CV-Yann-Poncet-fr.pdf";
import CVeng from "../utils/data/CV-Yann-Poncet-eng.pdf";

const DownloadButton = () => {
  const language = useContext(LanguageContext);

  return (
    <a
      className="border-secondary text-secondary border w-max cursor-pointer mt-10 py-3 px-14 rounded transition ease-in-out duration-500 hoverBg"
      href={language.switchLanguage === "english" ? CVfr : CVeng}
      download
    >
      {language.resume}
    </a>
  );
};

export default DownloadButton;
