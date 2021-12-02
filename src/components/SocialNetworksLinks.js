import React, { useState } from "react";

// Components
import ExternalLink from "./ExternalLink";

const SocialNetworksLinks = () => {
  const [isLinkedinHover, setIsLinkedinHover] = useState(false);
  const [isGithubHover, setIsGithubHover] = useState(false);

  return (
    <ul className="hidden z-10 md:flex flex-col items-center fixed bottom-0 left-6 md:left-8 lg:left-10 afterVerticalLine">
      <li className="cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1">
        <ExternalLink
          setFunction={setIsLinkedinHover}
          name="linkedin"
          isHover={isLinkedinHover}
          url="https://www.linkedin.com/in/yannponcet/"
        />
      </li>
      <li className="cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1">
        <ExternalLink
          setFunction={setIsGithubHover}
          name="github"
          isHover={isGithubHover}
          url="https://github.com/acctYann"
        />
      </li>
    </ul>
  );
};

export default SocialNetworksLinks;
