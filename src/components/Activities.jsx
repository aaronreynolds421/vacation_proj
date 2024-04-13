import React from "react";

const Activities = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
      <div className="relative p-5">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-3xl font-bold">
          Flights
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src="https://images.unsplash.com/photo-1652535922604-ca145a2ec554?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmxpZ2h0cyUyMGJvb2tpbmd8ZW58MHx8MHx8fDA%3D"
          alt="/"
        />
      </div>
      <div className="relative p-5">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-3xl font-bold">
          Resorts
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzb3J0c3xlbnwwfHwwfHx8MA%3D%3D"
          alt="/"
        />
      </div>
      <div className="relative p-5 py-[-2]">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-3xl font-bold">
          Activities
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src="https://images.unsplash.com/photo-1499242249421-ac7daa30e504?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNub3JrZWx8ZW58MHx8MHx8fDA%3D"
          alt="/"
        />
      </div>
      <div className="relative p-5">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-3xl font-bold">
          Cruises
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src="https://images.unsplash.com/photo-1511316695145-4992006ffddb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3J1aXNlc3xlbnwwfHwwfHx8MA%3D%3D"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Activities;
