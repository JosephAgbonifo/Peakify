import React from "react";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="sm:space h-16 bg-green text-white flex items-center p-5">
      <img
        src="/default-monochrome-white.svg"
        alt="peakify"
        className="w-32  flex-none grayscale brightness-200"
      />
      <Menu />
    </header>
  );
};

export default Header;
