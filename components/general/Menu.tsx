"use client";
import React, { useState } from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import Menuitem from "./Menuitem";
import Link from "next/link";

const Menu = () => {
  const [searchValue, setSearchValue] = useState("");
  const [menuToggle, setMenuToggle] = useState("off");
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  const togglemenu = () => {
    if (menuToggle === "on") {
      setMenuToggle("off");
    } else {
      setMenuToggle("on");
    }
  };
  return (
    <>
      {menuToggle === "off" ? (
        <div className="flex-1 lg:hidden transition-all duration-300 text-end text-4xl">
          <FiMenu onClick={togglemenu} className="inline" />
        </div>
      ) : (
        ""
      )}
      <div className="hidden lg:inline lg:flex-1 text-end">
        <Link href="/">
          <button className="p-3 rounded transition-all duration-300 mr-2 hover:bg-white-100/15">
            Home
          </button>
        </Link>
        <Link href="/contact">
          <button className="p-3 rounded transition-all duration-300 mr-2 hover:bg-white-100/15">
            Contact
          </button>
        </Link>
        <Link href="/profile">
          <button className="p-3 rounded transition-all duration-300 mr-2 hover:bg-white-100/15">
            Profile
          </button>
        </Link>
        <Link href="/dashboard">
          <button className="p-3 rounded transition-all duration-300 mr-2 hover:bg-white-100/15">
            Dashboard
          </button>
        </Link>
        <form
          onSubmit={handleSearch}
          className="inline-flex items-center p-1 bg-green-400 text-green rounded-full "
        >
          <input
            className="bg-transparent border-0 outline-none pl-3"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            autoComplete="false"
            required
          />
          <button
            type="submit"
            className="inline-block bg-green text-white-100 text-1xl p-2 rounded-full"
          >
            <FiSearch />
          </button>
        </form>
      </div>

      {menuToggle === "on" ? (
        <div
          id="menu-container"
          className="transition-all duration-300 fixed top-10 h-[40vh] -ml-5 w-[80vw] right-[10vw] rounded p-0  z-50 bg-green-100 lg:hidden"
        >
          <div id="menu-content" className="m-10">
            <div
              onClick={togglemenu}
              className="rounded-full bg-green inline-block p-1 text-green-100 text-3xl float-end -mt-5 -mr-5"
            >
              <FiX />
            </div>
            <Menuitem link="/signup" content="Signup" />
            <Menuitem link="/signin" content="Signin" />
            <Menuitem link="/contact" content="Contact Us" />
            <Menuitem link="/about" content="About" />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Menu;
