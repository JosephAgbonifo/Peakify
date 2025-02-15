"use client";
import { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";

export default function Setting() {
  const [setting, setSetting] = useState("");
  return (
    <>
      <div className="bg-white rounded-2xl p-3 flex m-3 items-center ">
        <p
          onClick={() => setSetting("fullname")}
          className="w-[20%] cursor-pointer bg-green text-white p-3 rounded-2xl text-center"
        >
          Change Fullname
        </p>
        <p className="flex-1 text-right">Agbonifo Joseph</p>
      </div>
      <div className="bg-white rounded-2xl p-3 flex m-3 items-center ">
        <p
          onClick={() => setSetting("email")}
          className="w-[20%] cursor-pointer bg-green text-white p-3 rounded-2xl text-center"
        >
          Change Email
        </p>
        <p className="flex-1 text-right">joesefair@gmail.com</p>
      </div>
      <div className="bg-white rounded-2xl p-3 flex m-3 items-center ">
        <p
          onClick={() => setSetting("number")}
          className="w-[20%] cursor-pointer bg-green text-white p-3 rounded-2xl text-center"
        >
          Change Phone Number
        </p>
        <p className="flex-1 text-right">09035078430</p>
      </div>
      <div className="bg-white rounded-2xl p-3 flex m-3 items-center ">
        <p
          onClick={() => setSetting("password")}
          className="w-[20%] cursor-pointer bg-green text-white p-3 rounded-2xl text-center"
        >
          Change Password
        </p>
        <p className="flex-1 text-right">••••••••</p>
      </div>

      {/* Overlay */}
      <div
        className={`w-[100vw] h-[100vh] bg-black fixed top-0 left-0 opacity-30 ${
          setting === "" ? "hidden" : "block"
        }`}
      ></div>

      {/* settings */}

      {/* Full name settings */}
      <div
        className={`bg-white h-[60%] w-[70%] top-[20%] left-[15%] z-50 fixed p-10 rounded-2xl transition-all duration-300 ${
          setting === "fullname" ? "block" : "hidden"
        }`}
      >
        <button
          onClick={() => setSetting("")}
          className="p-3 text-white bg-red-800 rounded-full float-end"
        >
          <FaRegTimesCircle className="text-2xl" />
        </button>
        <h2 className="text-2xl font-montserrat font-bold mb-10">
          Change Fullname
        </h2>
        <form className="mt-20">
          <input
            type="text"
            value="wow"
            className="block focus:outline-none w-[80%] m-auto p-2 mb-5 border-2 border-orange-100 rounded "
          />
          <input
            type="text"
            value="wow"
            className="block focus:outline-none w-[80%] m-auto p-2 mb-5 border-2 border-orange-100 rounded"
          />
          <button
            type="submit"
            className="p-3 bg-green text-white rounded-2xl absolute bottom-10 right-10"
          >
            Effect Change
          </button>
        </form>
      </div>

      {/* email setting */}

      <div
        className={`bg-white h-[60%] w-[70%] top-[20%] left-[15%] z-50 fixed p-10 rounded-2xl transition-all duration-300 ${
          setting === "email" ? "block" : "hidden"
        }`}
      >
        <button
          onClick={() => setSetting("")}
          className="p-3 text-white bg-red-800 rounded-full float-end"
        >
          <FaRegTimesCircle className="text-2xl" />
        </button>
        <h2 className="text-2xl font-montserrat font-bold mb-10">
          Change Email
        </h2>
        <form className="mt-20">
          <input
            type="text"
            value="wow"
            className="block focus:outline-none w-[80%] m-auto p-2 mb-5 border-2 border-orange-100 rounded "
          />
          <input
            type="text"
            value="wow"
            className="block focus:outline-none w-[80%] m-auto p-2 mb-5 border-2 border-orange-100 rounded"
          />
          <button
            type="submit"
            className="p-3 bg-green text-white rounded-2xl absolute bottom-10 right-10"
          >
            Effect Change
          </button>
        </form>
      </div>

      {/* Phonenumber setting  */}

      <div
        className={`bg-white h-[60%] w-[70%] top-[20%] left-[15%] z-50 fixed p-10 rounded-2xl transition-all duration-300 ${
          setting === "number" ? "block" : "hidden"
        }`}
      >
        <button
          onClick={() => setSetting("")}
          className="p-3 text-white bg-red-800 rounded-full float-end"
        >
          <FaRegTimesCircle className="text-2xl" />
        </button>
        <h2 className="text-2xl font-montserrat font-bold mb-10">
          Change Phone number
        </h2>
        <form className="mt-20">
          <input
            type="text"
            value="wow"
            className="block focus:outline-none w-[80%] m-auto p-2 mb-5 border-2 border-orange-100 rounded "
          />
          <input
            type="text"
            value="wow"
            className="block focus:outline-none w-[80%] m-auto p-2 mb-5 border-2 border-orange-100 rounded"
          />
          <button
            type="submit"
            className="p-3 bg-green text-white rounded-2xl absolute bottom-10 right-10"
          >
            Effect Change
          </button>
        </form>
      </div>

      {/* Phonenumber setting  */}

      <div
        className={`bg-white h-[60%] w-[70%] top-[20%] left-[15%] z-50 fixed p-10 rounded-2xl transition-all duration-300 ${
          setting === "password" ? "block" : "hidden"
        }`}
      >
        <button
          onClick={() => setSetting("")}
          className="p-3 text-white bg-red-800 rounded-full float-end"
        >
          <FaRegTimesCircle className="text-2xl" />
        </button>
        <h2 className="text-2xl font-montserrat font-bold mb-10">
          Change Phone number
        </h2>
        <form className="mt-20">
          <input
            type="text"
            value="wow"
            className="block focus:outline-none w-[80%] m-auto p-2 mb-5 border-2 border-orange-100 rounded "
          />
          <input
            type="text"
            value="wow"
            className="block focus:outline-none w-[80%] m-auto p-2 mb-5 border-2 border-orange-100 rounded"
          />
          <input
            type="text"
            value="wow"
            className="block focus:outline-none w-[80%] m-auto p-2 mb-5 border-2 border-orange-100 rounded"
          />
          <button
            type="submit"
            className="p-3 focus:border-x-4 bg-green text-white rounded-2xl absolute bottom-10 right-10"
          >
            Effect Change
          </button>
        </form>
      </div>
    </>
  );
}
