import React, { useEffect } from "react";

import logo from "../utils/images/logo.svg";

const Loader = ({ setDisplayAnimation }) => {
  useEffect(() => {
    setTimeout(() => {
      setDisplayAnimation(false);
    }, 3000);
  }, [setDisplayAnimation]);

  return (
    <div className="flex justify-center items-center w-screen h-screen px-4 bg-trueGray-900 cursor-wait">
      <div className="disappear">
        <img
          src={logo}
          className="animate-spinSlow h-32 w-32"
          alt="Yann Poncet"
        />
      </div>
    </div>
  );
};

export default Loader;
