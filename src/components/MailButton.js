import React, { useContext } from "react";

// Context
import LanguageContext from "../contexts/language-context";

const MailButton = () => {
  const language = useContext(LanguageContext);

  return (
    <a
      className="border-secondary text-secondary border w-max cursor-pointer mt-10 py-3 px-14 rounded transition ease-in-out duration-500 hoverBg"
      href="mailto:poncetyann@icloud.com"
    >
      {language.getInTouch.mail}
    </a>
  );
};

export default MailButton;
