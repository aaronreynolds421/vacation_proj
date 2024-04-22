import React from "react";
import { BsChatSquareDots } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="max-w-[1140px] w-full m-auto border-t-4 py-4">
      <div className="flex items-center justify-center m-auto">
        <BsChatSquareDots size={25} className="text-[var(--primary-light)] mr-2" />
        <h1 className="font-bold text-xl text-gray-600">WeekVaca</h1>
      </div>
    </div>
  );
};

export default Footer;
