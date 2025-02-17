"use client";
import { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";

export default function Setting() {
  const [setting, setSetting] = useState("");
  const [nameSetting, setNameSetting] = useState({
    fullname: "",
    password: "",
  });
  const [emailSetting, setEmailSetting] = useState({
    email: "",
    password: "",
  });
  const [phoneSetting, setPhoneSetting] = useState({
    phone: "",
    password: "",
  });
  const [passwordSetting, setPasswordSetting] = useState({
    newpassword: "",
    newpassword2: "",
    oldpassword: "",
  });

  return (
    <>
      <div className="bg-white rounded-2xl p-3 flex m-3 items-center ">
        <p
          onClick={() => setSetting("fullname")}
          className="w-[55%] lg:w-[20%] cursor-pointer bg-green text-white p-3 rounded-2xl text-center"
        >
          Change Fullname
        </p>
        <p className="flex-1 text-right">Agbonifo Joseph</p>
      </div>
      <div className="bg-white rounded-2xl p-3 flex m-3 items-center ">
        <p
          onClick={() => setSetting("email")}
          className="w-[55%] lg:w-[20%] cursor-pointer bg-green text-white p-3 rounded-2xl text-center"
        >
          Change Email
        </p>
        <p className="flex-1 text-right">joesefair@gmail.com</p>
      </div>
      <div className="bg-white rounded-2xl p-3 flex m-3 items-center ">
        <p
          onClick={() => setSetting("number")}
          className="w-[55%] lg:w-[20%] cursor-pointer bg-green text-white p-3 rounded-2xl text-center"
        >
          Change Phone Number
        </p>
        <p className="flex-1 text-right">09035078430</p>
      </div>
      <div className="bg-white rounded-2xl p-3 flex m-3 items-center ">
        <p
          onClick={() => setSetting("password")}
          className="w-[55%] lg:w-[20%] cursor-pointer bg-green text-white p-3 rounded-2xl text-center"
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
        <h2 className="text-xl lg:text-2xl font-montserrat font-bold mb-10">
          Change Fullname
        </h2>
        <form className="mt-2">
          <label htmlFor="fullname" className="text-green ml-5 mb-5 ">
            Fullname :
          </label>
          <input
            id="fullname"
            type="text"
            value={nameSetting.fullname}
            onChange={(e) =>
              setNameSetting({ ...nameSetting, fullname: e.target.value })
            }
            className="block focus:outline-none w-[80%] m-auto p-2 mb-5 border-2 border-orange-100 rounded "
          />
          <label htmlFor="password" className="text-green ml-5 mb-5 ">
            Fullname :
          </label>
          <input
            id="password"
            type="text"
            value={nameSetting.password}
            onChange={(e) =>
              setNameSetting({ ...nameSetting, password: e.target.value })
            }
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
        <form className="mt-2">
          <label htmlFor="email" className="text-green ml-5 mb-5 ">
            Email :
          </label>
          <input
            id="email"
            type="text"
            value={emailSetting.email}
            onChange={(e) =>
              setEmailSetting({ ...emailSetting, email: e.target.value })
            }
            className="block focus:outline-none w-[80%] m-auto p-2 mb-5 border-2 border-orange-100 rounded "
          />
          <label htmlFor="password2" className="text-green ml-5 mb-5 ">
            Password :
          </label>
          <input
            id="password2"
            type="text"
            value={emailSetting.password}
            onChange={(e) =>
              setEmailSetting({ ...emailSetting, password: e.target.value })
            }
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
        <form className="mt-2">
          <label htmlFor="phone" className="text-green ml-5 mb-5 ">
            New Phonenumber :
          </label>
          <input
            id="phone"
            type="text"
            value={phoneSetting.phone}
            onChange={(e) =>
              setPhoneSetting({ ...phoneSetting, phone: e.target.value })
            }
            className="block focus:outline-none w-[80%] m-auto p-2 mb-5 border-2 border-orange-100 rounded "
          />
          <label htmlFor="password3" className="text-green ml-5 mb-5 ">
            Password :
          </label>
          <input
            id="password3"
            type="text"
            value={phoneSetting.password}
            onChange={(e) =>
              setPhoneSetting({ ...phoneSetting, password: e.target.value })
            }
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

      {/* Password setting  */}

      <div
        className={`bg-white h-[65%] w-[70%] top-[20%] left-[15%] z-50 fixed p-10 rounded-2xl transition-all duration-300 ${
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
          Change Password
        </h2>
        <form className="mt-2">
          <label htmlFor="newpass" className="text-green ml-5 mb-5 ">
            New Password :
          </label>
          <input
            id="newpass"
            type="text"
            value={passwordSetting.newpassword}
            onChange={(e) =>
              setPasswordSetting({
                ...passwordSetting,
                newpassword: e.target.value,
              })
            }
            className="block focus:outline-none w-[80%] m-auto p-2 mb-5 border-2 border-orange-100 rounded "
          />
          <label htmlFor="cnewpass" className="text-green ml-5 mb-5 ">
            Confirm New Password :
          </label>
          <input
            id="cnewpass"
            type="text"
            value={passwordSetting.newpassword2}
            onChange={(e) =>
              setPasswordSetting({
                ...passwordSetting,
                newpassword2: e.target.value,
              })
            }
            className="block focus:outline-none w-[80%] m-auto p-2 mb-5 border-2 border-orange-100 rounded"
          />
          <label htmlFor="oldpass" className="text-green ml-5 mb-5 ">
            Old Password :
          </label>
          <input
            id="oldpass"
            type="text"
            value={passwordSetting.oldpassword}
            onChange={(e) =>
              setPasswordSetting({
                ...passwordSetting,
                oldpassword: e.target.value,
              })
            }
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
