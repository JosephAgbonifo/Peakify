"use client";

import { useState } from "react";
import Resources from "./Resources";
import Upload from "./Upload";

function Secondary() {
  const [disp, setDisp] = useState("resources");
  return (
    <>
      <div className="flex mb-3 lg:block">
        <button
          onClick={() => setDisp("resources")}
          className="hover:bg-orange-300 text-green lg:hover:bg-gray-200 bg-orange-100 lg:bg-transparent p-5 lg:p-10 rounded-2xl lg:rounded-none lg:rounded-t-2xl m-1 transition-all duration-300"
        >
          Downloaded Resources
        </button>
        <button
          onClick={() => setDisp("uploads")}
          className="hover:bg-orange-300 text-green lg:hover:bg-gray-200 bg-orange-100 lg:bg-transparent p-5 lg:p-10 rounded-2xl lg:rounded-none lg:rounded-t-2xl m-1 transition-all duration-300"
        >
          Uploaded resources
        </button>
      </div>

      {disp === "resources" ? <Resources /> : <Upload />}
    </>
  );
}

export default Secondary;
