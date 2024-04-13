import React, { useState, useEffect } from "react";
import { BsChatSquareDots } from "react-icons/bs";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaBars,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full min-h-7 flex justify-between items-center absolute z-10 text-white bg-gray-500/80">
      <ul className="hidden sm:flex px-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#deals">Deals</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="flex justify-between">
        <FaFacebookF className="mx-4" />
        <FaTwitter className="mx-4" />
        <FaGooglePlusG className="mx-4" />
        <FaInstagram className="mx-4" />
      </div>
      {/* Hamburger */}
      <div onClick={handleNav} className="sm:hidden z-10">
        {/*anything above small it will be hidden, z puts it above the overlay. */}
        <FaBars size={20} className="mr-4 cursor-pointer" />
      </div>
      {/*Mobile */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in w-full  duration-300 absolute text-gray-200 left-0 top-0 h-screen bg-black/80 px-4 py-7 flex-col"
            : "absolute text top-0 h-screen left-[-100%] ease-in duration-500"
        }>
        {/**if nav is true ? show first code else : show next code*/}
        <ul className="h-full w-full text-center pt-12">
          <li className="text-2xl py-8">
            <a href="/">Home</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#deals">Deals</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
