"use client";

import { useState } from "react";
import Resources from "./Resources";
import Upload from "./Upload";

function Secondary() {
  const [disp, setDisp] = useState("resources");
  return (
    <>
      <button
        onClick={() => setDisp("resources")}
        className="hover:bg-gray-200 p-10 rounded-t-2xl m-2 transition-all duration-300"
      >
        Downloaded Resources
      </button>
      <button
        onClick={() => setDisp("uploads")}
        className="hover:bg-gray-200 p-10 rounded-t-2xl m-2 transition-all duration-300"
      >
        Uploaded resources
      </button>

      {disp === "resources" ? <Resources /> : <Upload />}
    </>
  );
}

export default Secondary;
