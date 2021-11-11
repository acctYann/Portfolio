import React, { useContext } from "react";

// Component
import ProjectOrientationRight from "../components/ProjectOrientationRight";
import ProjectOrientationLeft from "../components/ProjectOrientationLeft";

// Context
import LanguageContext from "../contexts/language-context";

// Imports from react-reveal package
import Slide from "react-reveal/Slide";

const Projects = () => {
  const language = useContext(LanguageContext);

  return (
    <div className="flex flex-col mx-6 sm:mx-12 md:mx-24 lg:mx-32 xl:mx-52 4k:mx-120 text-trueGray-400 font-calibre antialiased">
      <Slide bottom effect="fadeInUp" duration={1000}>
        <>
          <p className="flex items-center text-trueGray-100 mt-20 md:mt-36 lg:mt-40 mb-10 text-3xl font-semibold antialiased afterHorizontalLineTitle">
            {language.projects.title}
          </p>
          {language.projects.list.map((item, index) => {
            if (index === 0 || index % 2 === 0) {
              return <ProjectOrientationRight key={index} item={item} />;
            } else {
              return <ProjectOrientationLeft key={index} item={item} />;
            }
          })}
        </>
      </Slide>
    </div>
  );
};

export default Projects;
