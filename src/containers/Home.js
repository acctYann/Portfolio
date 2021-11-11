import React, { useContext } from "react";

// Context
import LanguageContext from "../contexts/language-context";

// Components
import DownloadButton from "../components/DownloadButton";

const Home = () => {
  const language = useContext(LanguageContext);

  return (
    <div className="flex flex-col items-start mx-6 sm:mx-12 md:mx-24 lg:mx-32 xl:mx-52 4k:mx-120 mt-20 md:mt-52 text-trueGray-400 font-calibre antialiased">
      <div className="text-secondary font-mono mb-4 sm:mb-6">
        {language.firstLine}
      </div>
      <div className="text-trueGray-100 text-5xl sm:text-6xl lg:text-7xl font-semibold mb-4 sm:mb-6">
        Yann Poncet.
      </div>
      <div className="text-trueGray-300 text-3xl sm:text-4xl font-semibold mb-6">
        {language.subTitle}
      </div>
      <div className="text-sm sm:text-base">
        {language.descriptionText.map((item, index) => {
          if (index === 0) {
            return (
              <div key={index}>
                <span>{item}</span>
                <code>
                  JavaScript / HTML / CSS / React / React Native / NodeJS.
                </code>
              </div>
            );
          } else {
            return <div key={index}>{item}</div>;
          }
        })}
      </div>

      <DownloadButton />
    </div>
  );
};

export default Home;
