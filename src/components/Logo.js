import React from "react";

// Icons
import logo from "../utils/images/logo.svg";

const Logo = () => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="flex mt-6 ml-6">
      <img
        src={logo}
        onClick={refreshPage}
        className="transform rotate-22 w-10 h-10 md:fixed top-6 left-6"
        alt="Yann Poncet"
      />
    </div>
  );
};

export default Logo;
