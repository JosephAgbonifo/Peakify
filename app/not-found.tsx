import Footer from "@/components/Footer";
import Header from "@/components/general/Header";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="h-[50vh] m-10">
        <h1 className="text-6xl font-montserrat text-center text-green">
          OOPs :&#x29;
        </h1>
        <p className="p-10 mt-10 text-center text-2xl">
          We Couldn't Find The Resource You Were Looking For
        </p>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
