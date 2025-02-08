"use client";
import { useState } from "react";
import React from "react";

const Newsletter = () => {
  const [mail, setMail] = useState("");
  const handlesubmit = (event: any) => {
    event.preventDefault();
  };
  return (
    <div>
      <form className="px-32" onSubmit={handlesubmit}>
        <input
          placeholder="Enter your email"
          type="email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          className="border-none outline-none bg-white-200 rounded h-12 p-3 text-green w-full lg:w-1/2 mb-28"
          autoComplete="false"
          required
        />
      </form>
    </div>
  );
};

export default Newsletter;
