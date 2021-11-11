import React from "react";

import linkedinIconColor from "../utils/icons/linkedin-color.svg";
import githubIconColor from "../utils/icons/github-2-color.svg";

const Footer = () => {
  return (
    <div className="flex flex-col items-center mx-4 sm:mx-0 mt-20 sm:mt-52 mb-6 text-xs text-trueGray-400 font-mono antialiased">
      <div className="flex md:hidden items-center mb-6">
        <div className="flex mr-3">
          <a
            className="mx-3 transition duration-500 ease-in-out transform hover:-translate-y-1"
            href="https://www.linkedin.com/in/yannponcet/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="w-6 h-6" src={linkedinIconColor} alt="LinkedIn" />
          </a>
          <a
            className="transition duration-500 ease-in-out transform hover:-translate-y-1"
            href="https://github.com/acctYann"
            target="_blank"
            rel="noreferrer"
          >
            <img className="w-6 h-6" src={githubIconColor} alt="GitHub" />
          </a>
        </div>
      </div>
      <div className="text-center">Built by Yann Poncet with React - 2021</div>
      <div className="text-center">
        Design is inspired by{" "}
        <a
          className="hover:text-secondary"
          href="https://corinne-pradier.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Corinne Pradier's portfolio
        </a>
        .
      </div>
    </div>
  );
};

export default Footer;
