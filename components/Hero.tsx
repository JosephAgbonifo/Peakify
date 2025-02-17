"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import ipad from "../public/ipad.png";
import Image from "next/image";
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
      </div>
      <Image
        src={ipad}
        alt="mockup"
        width="800"
        height="800"
        className="absolute lg:top-96 sm:top-[270px] sm:-left-96 lg:left-[calc(50%-400px)]"
        priority
        unoptimized={true}
      />
    </div>
  );
}
