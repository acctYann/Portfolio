import React from "react";

// Icons
import linkedinIconWhite from "../utils/icons/linkedin-white.svg";
import linkedinIconColor from "../utils/icons/linkedin-color.svg";
import githubIconWhite from "../utils/icons/github-2-white.svg";
import githubIconColor from "../utils/icons/github-2-color.svg";
import githubCircleIconWhite from "../utils/icons/github-1-white.svg";
import githubCircleIconColor from "../utils/icons/github-1-color.svg";
import externalLinkIconWhite from "../utils/icons/external-link-white.svg";
import externalLinkIconColor from "../utils/icons/external-link-color.svg";
import QRCodeWhite from "../utils/icons/qr-code-white.svg";
import QRCodeColor from "../utils/icons/qr-code-color.svg";

const Icon = ({ name, isHover }) => {
  const generateIcon = () => {
    if (name === "linkedin" && !isHover) {
      return linkedinIconWhite;
    } else if (name === "linkedin" && isHover) {
      return linkedinIconColor;
    } else if (name === "github" && !isHover) {
      return githubIconWhite;
    } else if (name === "github" && isHover) {
      return githubIconColor;
    } else if (name === "github-circle" && !isHover) {
      return githubCircleIconWhite;
    } else if (name === "github-circle" && isHover) {
      return githubCircleIconColor;
    } else if (name === "netlify-link" && !isHover) {
      return externalLinkIconWhite;
    } else if (name === "netlify-link" && isHover) {
      return externalLinkIconColor;
    } else if (name === "qr-code" && !isHover) {
      return QRCodeWhite;
    } else if (name === "qr-code" && isHover) {
      return QRCodeColor;
    }
  };

  return <img src={generateIcon()} className="h-5 mb-7" alt="social" />;
};

export default Icon;
