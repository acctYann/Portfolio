import React, { useContext } from "react";

// Context
import LanguageContext from "../contexts/language-context";

// Components
import MailButton from "../components/MailButton";

// Imports from react-reveal package
import Slide from "react-reveal/Slide";

const StayInTouch = () => {
  const language = useContext(LanguageContext);

  return (
    <Slide bottom effect="fadeInUp" duration={1000}>
      <div className="flex flex-col mx-6 sm:mx-12 md:mx-24 lg:mx-32 xl:mx-52 4k:mx-120 text-trueGray-400 font-calibre antialiased">
        <div className="flex items-center text-trueGray-100 mt-4 mb-10 text-3xl font-semibold antialiased afterHorizontalLineTitle">
          {language.getInTouch.title}
        </div>
        {language.getInTouch.texts.map((text, index) => {
          return <div key={index}>{text}</div>;
        })}

        <MailButton />
      </div>
    </Slide>
  );
};

export default StayInTouch;
