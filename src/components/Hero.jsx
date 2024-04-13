import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="/"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] m-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl">Find Your Special Trip</h1>
          <h2 className="text-4xl py-4 italic">With WeekVaca</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            eius deleniti vel sequi, dolorem libero. Beatae voluptatum
            reiciendis quibusdam maiores pariatur ut? Optio, deleniti saepe sit
            unde pariatur impedit aliquid!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
