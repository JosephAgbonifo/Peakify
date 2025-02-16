"use client";

import { useState } from "react";
import Resources from "./Resources";
import Forum from "./Forum";
import Upload from "./Upload";

function Secondary() {
  const [disp, setDisp] = useState("resources");
  return (
    <>
      <button
        onClick={() => setDisp("resources")}
        className="hover:bg-gray-200 p-10 rounded-t-2xl m-2 transition-all duration-300"
      >
        My Resources
      </button>
      <button
        onClick={() => setDisp("forum")}
        className="hover:bg-gray-200 p-10 rounded-t-2xl m-2 transition-all duration-300"
      >
        My Forums
      </button>
      <button
        onClick={() => setDisp("upload")}
        className="hover:bg-gray-200 p-10 rounded-t-2xl m-2 transition-all duration-300"
      >
        Uploaded Resources
      </button>
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
