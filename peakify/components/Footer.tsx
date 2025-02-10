import React from "react";
import Link from "next/link";
import {
  FaWhatsappSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaSignInAlt,
  FaRegUser,
  FaSearch,
} from "react-icons/fa";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <footer className="min-h-[100vh]  bg-green text-white p-10">
      <img
        src="/logo.png"
        alt="footer-logo"
        className="grayscale brightness-200 w-96"
      />
      <h2 className="text-2xl text-orange-100 font-montserrat p-10 pb-10">
        Subscribe to Newsletter
      </h2>
      <Newsletter />
      <div className="w-full p-5 lg:flex lg:align-center">
        <div className="lg:border-r-2 border-orange-100 w-full p-5">
          <h2 className="text-2xl text-orange-100 font-montserrat pb-10">
            Connect With Us
          </h2>
          <div className="flex">
            <Link href="/" className="block p-3 text-3xl text-green-300">
              <FaWhatsappSquare className="inline" />
            </Link>
            <Link href="/" className="block p-3 text-3xl text-green-300">
              <FaTwitterSquare />
            </Link>
            <Link href="/" className="block p-3 text-3xl text-green-300">
              <FaLinkedin className="inline" />
            </Link>
            <Link href="/" className="block p-3 text-3xl text-green-300">
              <FaFacebookSquare />
            </Link>
          </div>
        </div>
        <div className="lg:border-r-2 border-orange-100 w-full p-5">
          <h2 className="text-2xl text-orange-100 font-montserrat pb-10">
            Contact Us
          </h2>
          <div className="flex">
            <ul>
              <li className="p-3 pl-5">
                <FaPhoneAlt className="inline mr-2 text-green-300" />
                09035078430
              </li>
              <li className="p-3 pl-5">
                <FaEnvelope className="inline mr-2 text-green-300" />
                support@peakify.com.ng
              </li>
              <li className="p-3 pl-5">
                <FaMapMarkerAlt className="inline mr-2 text-green-300" />
                Lagos, Nigeria
              </li>
            </ul>
          </div>
        </div>
        <div className=" w-full p-5">
          <h2 className="text-2xl text-orange-100 font-montserrat pb-10">
            Explore
          </h2>
          <div className="">
            <Link href="/account/signin" className="p-3 pl-5 block">
              <FaSignInAlt className="inline mr-2 text-green-300" />
              Signin
            </Link>
            <Link href="/account/signup" className="p-3 pl-5 block">
              <FaRegUser className="inline mr-2 text-green-300" />
              Signup
            </Link>
            <Link href="/" className="p-3 pl-5 block">
              <FaSearch className="inline mr-2 text-green-300" />
              Discover
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
