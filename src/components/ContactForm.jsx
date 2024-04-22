import React from "react";

const ContactForm = () => {
  return (
    <div id="contact" className="max-w-[1140px] m-auto w-full p-4">
      <h2 className="text-center text-gray-500">Send us a message</h2>
      <p className="text-center text-gray-500 py-3">
        We're waiting to hear from you!
      </p>
      <div className="grid md:grid-cols-2">
        <img
          className="w-full md:h-full p-2 object-cover max-h-[400px] h-[200px]"
          src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHx8fDA%3D"
          alt="/"
        />
        <form>
          <div className="grid grid-cols-2">
            <input className="border m-3 p-3" type="text" placeholder="First" />
            <input className="border m-3 p-3" type="text" placeholder="Last" />
            <input
              className="border m-3 p-3"
              type="email"
              placeholder="Email"
            />
            <input className="border m-3 p-3" type="tel" placeholder="Phone" />
            <button className="col-span-2 m-2.5">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
