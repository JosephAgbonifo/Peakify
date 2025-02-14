"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { Shimmer } from "./Button";
import Link from "next/link";
export default function Home() {
  return (
    <div className="h-[100vh] w-full bg-gradient-to-br from-green-400 to-green-100 rounded-md relative flex flex-col items-center justify-center antialiased">
      <BackgroundBeams className="opacity-70" />
      <img
        src="/logo.png"
        alt="Logo"
        className="absolute opacity-30 sm:-bottom-10 lg:bottom-10 lg:-left-11"
      />
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="relative z-10 text-4xl md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-green to-green-100  text-center font-montserrat font-bold p-5">
          Welcome To Peakify Hub
        </h1>
        <p></p>
        <p className="text-green max-w-lg mx-auto my-2 text-center relative z-10">
          Discover, learn, and thrive with our curated resources designed to
          help you achieve your dreams.
        </p>
        <Link href="/about" className="border bg-red p-10">
          w0w
          <Shimmer value="Want To Know More?" />
        </Link>
      </div>
    </div>
  );
}
