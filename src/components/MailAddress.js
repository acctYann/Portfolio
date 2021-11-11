import React from "react";

const MailAddress = () => {
  return (
    <div className="hidden md:flex flex-col items-center fixed bottom-0 right-6 md:right-8 lg:right-10 afterVerticalLine">
      <a
        className="cursor-pointer no-underline text-sm text-trueGray-400 font-mono mb-8 writing-mode-vertical-lr transition duration-500 ease-in-out hover:text-secondary transform hover:-translate-y-1"
        href="mailto:poncetyann@icloud.com"
      >
        poncetyann@icloud.com
      </a>
    </div>
  );
};

export default MailAddress;
