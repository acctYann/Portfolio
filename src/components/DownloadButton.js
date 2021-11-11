import React, { useContext } from "react";

// Context
import LanguageContext from "../contexts/language-context";

// CV
// import CVfr from "../utils/data/";
// import CVeng from "../utils/data/";

const DownloadButton = () => {
  const language = useContext(LanguageContext);

  return (
    <a
      className="border-secondary text-secondary border w-max cursor-pointer mt-10 py-3 px-14 rounded transition ease-in-out duration-500 hoverBg"
      href="dd" //{language.switchLanguage === "english" ? CVfr : CVeng}
      download
    >
      {language.resume}
    </a>
  );
};

export default DownloadButton;
