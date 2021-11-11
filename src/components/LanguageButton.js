import React, { useContext } from "react";

// Contexts
import LanguageContext from "../contexts/language-context";

// Data
import textsJSON from "../utils/data/texts.json";

const LanguageButton = ({ setLanguage }) => {
  const language = useContext(LanguageContext);

  return (
    <div className="relative flex items-center justify-end md:fixed right-0 top-0 md:mt-10 afterHorizontalLine">
      <div
        className="absolute right-10 bottom-3 md:right-5 lg:right-14 xl:right-20 md:-top-2 cursor-pointer no-underline text-xs text-secondary md:text-trueGray-400 font-mono mr-3 transition duration-500 ease-in-out hover:text-secondary transform hover:-translate-x-1"
        onClick={() => {
          setLanguage(
            language === textsJSON.french ? textsJSON.english : textsJSON.french
          );
        }}
      >
        {language.switchLanguage}
      </div>
    </div>
  );
};

export default LanguageButton;
