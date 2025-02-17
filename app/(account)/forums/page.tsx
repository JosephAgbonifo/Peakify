import Main from "./components/Main";
import Sidebar from "../../../components/general/Sidebar";
import React from "react";

export default function Forumname() {
  return (
    <>
      <div className="lg:flex w-full h-[100vh] bg-[#f5f4f8]">
        <Sidebar />
        <Main />
      </div>
    </>
  );
}
