import Footer from "@/components/Footer";
import Header from "@/components/general/Header";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";

export default function contact() {
  return (
    <>
      <Header />
      <div className="m-10">
        <h1 className="text-3xl font-montserrat mb-10">Contact Us</h1>
        <div className="lg:flex">
          <div className="lg:flex-1 mt-5">
            <h2 id="mail" className="pl-5 text-2xl font-montserrat pb-5">
              By Mail
            </h2>
            <form>
              <input
                placeholder="Your Email"
                className="resize-none bg-green-400 block w-[80%] m-auto h-[40px] rounded outline-none border-2 border-green p-5 mb-10"
                autoComplete="false"
              />
              <textarea
                placeholder="Your Message"
                className="resize-none bg-green-400 block w-[80%] m-auto h-[70px] rounded outline-none border-2 border-green p-5"
              ></textarea>
              <button className="resize-none bg-green block w-[80%] m-auto h-[40px] rounded outline-none border-2 border-green p-auto mt-5 text-green-400">
                Send Message
              </button>
            </form>
          </div>
          <div className="lg:flex-1 p-5">
            <h2 id="call" className="pl-5 text-2xl font-montserrat pb-5 mt-10">
              By Call
            </h2>
            <div className="flex m-10">
              <FiPhoneCall className="text-6xl m-auto" />
              <div className="text-3xl m-auto text-center">
                <a href="tel:09035078430">09035078430</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
