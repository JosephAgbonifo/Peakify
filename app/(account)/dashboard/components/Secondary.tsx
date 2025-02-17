"use client";

import { useState } from "react";
import Resources from "./Resources";
import Forum from "./Forum";
import Upload from "./Upload";

function Secondary() {
  const [disp, setDisp] = useState("resources");
  return (
    <>
      <div className="flex lg:block">
        <button
          onClick={() => setDisp("resources")}
          className="hover:bg-orange-300 text-green lg:hover:bg-gray-200 bg-orange-100 lg:bg-transparent p-3 lg:p-10 rounded-2xl lg:rounded-none lg:rounded-t-2xl m-1 transition-all duration-300"
        >
          My Resources
        </button>
        <button
          onClick={() => setDisp("forum")}
          className="hover:bg-orange-300 text-green lg:hover:bg-gray-200 bg-orange-100 lg:bg-transparent p-3 lg:p-10 rounded-2xl lg:rounded-none lg:rounded-t-2xl m-1 transition-all duration-300"
        >
          My Forums
        </button>
        <button
          onClick={() => setDisp("upload")}
          className="hover:bg-orange-300 text-green lg:hover:bg-gray-200 bg-orange-100 lg:bg-transparent p-3 lg:p-10 rounded-2xl lg:rounded-none lg:rounded-t-2xl m-1 transition-all duration-300"
        >
          Uploaded Resources
        </button>
      </div>
      {disp === "resources" ? (
        <Resources />
      ) : disp === "forum" ? (
        <Forum />
      ) : (
        <Upload />
      )}
    </>
  );
}

export default Secondary;
