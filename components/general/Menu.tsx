"use client";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";

const Menu = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (event: any) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="flex-1 lg:hidden text-end text-4xl">
        <FiMenu className="inline" />
      </div>
      <div className="hidden lg:inline lg:flex-1 text-end">
        <a href="/">
          <button className="p-3 rounded transition-all duration-300 mr-2 hover:bg-white-100/15">
            Home
          </button>
        </a>
        <a href="/">
          <button className="p-3 rounded transition-all duration-300 mr-2 hover:bg-white-100/15">
            Contact
          </button>
        </a>
        <a href="/">
          <button className="p-3 rounded transition-all duration-300 mr-2 hover:bg-white-100/15">
            Profile
          </button>
        </a>
        <a href="/">
          <button className="p-3 rounded transition-all duration-300 mr-2 hover:bg-white-100/15">
            Dashboard
          </button>
        </a>
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
    </>
  );
};

export default Menu;
