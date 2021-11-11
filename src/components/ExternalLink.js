import React from "react";
import Icon from "./Icon";

const ExternalLink = ({ setFunction, name, isHover, url }) => {
  return (
    <a
      onMouseEnter={() => {
        setFunction(true);
      }}
      onMouseLeave={() => {
        setFunction(false);
      }}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <Icon name={name} isHover={isHover} />
    </a>
  );
};

export default ExternalLink;
