"use client";

import { useState } from "react";
import Forum from "./Forums";
import Cforum from "./Cforum";

function Secondary() {
  const [disp, setDisp] = useState("resources");
  return (
    <>
      <button
        onClick={() => setDisp("forums")}
        className="hover:bg-gray-200 p-10 rounded-t-2xl m-2 transition-all duration-300"
      >
        All Forums
      </button>
      <button
        onClick={() => setDisp("cForums")}
        className="hover:bg-gray-200 p-10 rounded-t-2xl m-2 transition-all duration-300"
      >
        Created Forums
      </button>

      {disp === "forums" ? <Forum /> : <Cforum />}
    </>
  );
}

export default Secondary;
