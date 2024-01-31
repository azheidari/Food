import React from "react";

function Hero(props) {
  return (
    <div className="max-w-[1640px]  mx-auto p-4">
      <div className="max-h-[400px] relative">
        <div className="absolute w-full h-full text-gray-200 max-h-[400px] bg-black/40 flex-col justify-center items-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-400 ">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Food <span className="text-orange-400 ">Delivery</span>
          </h1>
        </div>
        <img
          className="w-full max-h-[400px] object-cover"
          src="https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
    </div>
  );
}

export default Hero;
