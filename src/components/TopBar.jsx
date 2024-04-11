import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { BsChatSquareDots } from "react-icons/bs";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <BsChatSquareDots
          size={25}
          className="text-[var(--primary-dark)] mr-1"
        />
        <h1 className="text-xl font-bold text-gray-500">WEEKVACA</h1>
      </div>
      <div className="flex">
        <div className="hidden md:flex items-center px-6">
          <AiOutlineClockCircle
            size={15}
            className="mr-2 text-[var(--primary-dark)]"
          />
          <p className="text-sm text-gray-500">9AM - 5AM</p>
        </div>
        <div className="hidden md:flex items-center px-6">
          <AiFillPhone size={15} className="mr-2 text-[var(--primary-dark)]" />
          <p className="text-sm text-gray-500">1-800-CAL-VACA</p>
        </div>
        <button>Get a Free Quote</button>
      </div>
    </div>
  );
};

export default TopBar;
