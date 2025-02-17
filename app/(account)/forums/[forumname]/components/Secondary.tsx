"use client";

import { useState } from "react";
import Forum from "./Forums";
import Cforum from "./Cforum";

function Secondary() {
  const [disp, setDisp] = useState("resources");
  return (
    <>
      <div className="flex mb-3 lg:block">
        <button
          onClick={() => setDisp("forums")}
          className="hover:bg-orange-300 text-green lg:hover:bg-gray-200 bg-orange-100 lg:bg-transparent p-5 lg:p-10 rounded-2xl lg:rounded-none lg:rounded-t-2xl m-1 transition-all duration-300"
        >
          All Forums
        </button>
        <button
          onClick={() => setDisp("cForums")}
          className="hover:bg-orange-300 text-green lg:hover:bg-gray-200 bg-orange-100 lg:bg-transparent p-5 lg:p-10 rounded-2xl lg:rounded-none lg:rounded-t-2xl m-1 transition-all duration-300"
        >
          Created Forums
        </button>
      </div>
      {disp === "forums" ? <Forum /> : <Cforum />}
    </>
  );
}

export default Secondary;
