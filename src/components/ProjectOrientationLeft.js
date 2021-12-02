import React, { useState } from "react";

// Components
import ExternalLink from "./ExternalLink";

// Imports from react-reveal package
import Slide from "react-reveal/Slide";

const ProjectOrientationLeft = ({ item }) => {
  const [isNetlifyHover, setIsNetlifyHover] = useState(false);
  const [isGithubHover, setIsGithubHover] = useState(false);
  const [isQRCodeHover, setIsQRCodeHover] = useState(false);

  return (
    <Slide bottom effect="fadeInUp" duration={1000}>
      <section className="relative mb-72 s:mb-96 md:mb-106 lg:mb-110 xl:mb-120 md:grid md:grid-col">
        {/* Texts */}
        <div>
          <div className="md:absolute flex flex-col md:items-end md:w-full">
            <p className="text-secondary font-mono mb-2 z-10 bg-transparent">
              {item.type}
            </p>

            <p className="text-trueGray-300 text-2xl mb-6">{item.title}</p>

            <div className="mb-6 md:bg-trueGray-800 md:p-8 rounded md:w-1/2 z-20">
              <p className="md:bg-trueGray-800">{item.description}</p>
            </div>

            <div className="flex flex-wrap font-mono text-xs mb-4">
              {item.technologies.map((techno, index) => {
                return <p key={index}>{techno}</p>;
              })}
            </div>

            <ul className="flex">
              {item.githubURL && (
                <li className="pr-5">
                  <ExternalLink
                    setFunction={setIsGithubHover}
                    name="github-circle"
                    isHover={isGithubHover}
                    url={item.githubURL}
                  />
                </li>
              )}

              {item.netlifyURL && (
                <li>
                  <ExternalLink
                    setFunction={setIsNetlifyHover}
                    name="netlify-link"
                    isHover={isNetlifyHover}
                    url={item.netlifyURL}
                  />
                </li>
              )}

              {item.qrCode && (
                <li>
                  <ExternalLink
                    setFunction={setIsQRCodeHover}
                    name="qr-code"
                    isHover={isQRCodeHover}
                    url={item.qrCode}
                  />
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Project screenshot */}
        <div className="">
          <a
            target="_blank"
            href={item.netlifyURL ? item.netlifyURL : item.qrCode}
            rel="noreferrer"
          >
            <img
              className="absolute hover:z-10 s:object-fill hover:cursor-pointer w-full md:w-7/12 s:h-80 2xl:h-100 rounded"
              src={item.imageURL}
              alt="project screenshot"
            />
            <img
              className="absolute  hover:hidden s:object-fill w-full md:w-7/12 s:h-80 2xl:h-100 rounded mix-blend-color"
              src={item.imageColorURL}
              alt="project screenshot"
            />
          </a>
        </div>
      </section>
    </Slide>
  );
};

export default ProjectOrientationLeft;
