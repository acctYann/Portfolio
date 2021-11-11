import React, { useContext } from "react";

// Pictures
import profilePicture from "../utils/images/profile.jpg";
import profilePictureColor from "../utils/images/profile-color.jpg";

// Imports from react-reveal package
import Slide from "react-reveal/Slide";

// Context
import LanguageContext from "../contexts/language-context";

const About = ({ inputRef }) => {
  const language = useContext(LanguageContext);

  return (
    <Slide bottom effect="fadeInUp" duration={1000}>
      <>
        <div className="flex items-center text-trueGray-100 mx-6 sm:mx-12 md:mx-24 lg:mx-32 xl:mx-52 4k:mx-120 mt-24 md:mt-36 lg:mt-52 mb-6 text-3xl font-semibold antialiased afterHorizontalLineTitle">
          {language.about.title}
        </div>
        <div
          className="flex flex-col items-start mx-6 sm:mx-12 md:mx-24 lg:mx-32 xl:mx-52 4k:mx-120 text-trueGray-400 font-calibre antialiased lg:flex-row"
          ref={inputRef}
        >
          <div>
            <div className="text-justify text-sm sm:text-base">
              {language.about.texts.map((text, i) => {
                return (
                  <div className="my-4" key={i}>
                    {text.map((part, j) => {
                      if (i === 2 && j === 1) {
                        return (
                          <a
                            href="https://www.lereacteur.io/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-secondary hover:underline"
                            key={j}
                          >
                            {part}
                          </a>
                        );
                      }
                      if (i === 2 && j === 3) {
                        return (
                          <a
                            href="https://tailwindcss.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-secondary hover:underline"
                            key={j}
                          >
                            {part}
                          </a>
                        );
                      }
                      if (j === 0 || j === 2 || j === 4 || j === 6) {
                        return <span key={j}>{part}</span>;
                      } else {
                        return (
                          <span className="text-secondary" key={j}>
                            {part}
                          </span>
                        );
                      }
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          <picture className="relative top-4 left-4 md:left-8 border-2 border-solid border-secondary w-44 h-44 sm:p-36 rounded mt-10 lg:mt-6 mx-auto lg:mx-10">
            <img
              className="absolute hover:z-10 bottom-4 right-4 rounded"
              src={profilePicture}
              alt="Me"
            />
            <img
              className="absolute hover:hidden bottom-4 right-4 rounded mix-blend-color"
              src={profilePictureColor}
              alt="Me"
            />
          </picture>
        </div>
      </>
    </Slide>
  );
};

export default About;
