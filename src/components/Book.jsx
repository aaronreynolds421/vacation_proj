import React from "react";

const Book = () => {
  return (
    <div id="deals" className="max-w-[1140px] m-auto w-full p-8">
      <h2 className="text-gray-500 p-5 text-center">Deals</h2>
      <form className="lg:flex lg:justify-between w-full items-center">
        <div className="flex-col flex py-2 my-2">
          <label>Where To?</label>
          <select className="lg:w-[300px] md:w-full border rounded-md p-3">
            <option>Moroco</option>
            <option>Mexico</option>
            <option>France</option>
            <option>Greece</option>
          </select>
        </div>
        <div className="flex w-full">
          <div className="flex-col flex w-full lg:max-w-[300px] p-2 my-2">
            <label> Check-In </label>
            <input
              type="date"
              className="cursor-pointer border rounded-md p-3"></input>
          </div>
          <div className="flex-col flex w-full lg:max-w-[300px] p-2 my-2">
            <label> Check-Out </label>
            <input
              type="date"
              className="cursor-pointer border rounded-md p-3"></input>
          </div>
        </div>
        <div className="flex-col flex p-2 my-2 w-full">
          <label>Search</label>
          <button>Availabilities & Rates</button>
        </div>
      </form>
    </div>
  );
};

export default Book;
