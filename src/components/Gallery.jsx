import React from "react";

const Gallery = () => {
  return (
    <div id="gallery" className=" m-auto w-full px-4 py-16 max-w-[1140px]">
      <h2 className="text-gray-500 p-5 text-center">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-5">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JlZWNlfGVufDB8fDB8fHww"
            alt="/"
          />
        </div>
        <div>
          <img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1568402102990-bc541580b59f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWV4aWNvfGVufDB8fDB8fHww"
            alt="/"
          />
        </div>
        <div>
          <img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D"
            alt="/"
          />
        </div>
        <div>
          <img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1503917988258-f87a78e3c995?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJhbmNlfGVufDB8fDB8fHww"
            alt="/"
          />
        </div>
        <div>
          <img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVuaWNlfGVufDB8fDB8fHww"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
