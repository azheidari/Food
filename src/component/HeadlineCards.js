import React from "react";
import { Link, NavLink } from "react-router-dom";

function HeadlineCards() {
  return (
    <div className="max-w-[1640] mx-auto p-4  py-12 grid md:grid-cols-4 gap-6">
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2 px-2 pt-4">Sun s Out, BOGO s Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-5  hover:bg-orange-500 hover:text-white m-1 hover:border-orange-500 hover:font-bold">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/3850838/pexels-photo-3850838.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2 px-2 pt-4">Sun s Out, BOGO s Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-5  hover:bg-orange-500 hover:text-white m-1 hover:border-orange-500 hover:font-bold">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/4198023/pexels-photo-4198023.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>

      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2 px-2 pt-4">New Restaurant</p>
          <p className="px-2">Added Daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-5  hover:bg-orange-500 hover:text-white m-1 hover:border-orange-500 hover:font-bold">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/378008/pexels-photo-378008.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>

      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2 px-2 pt-4">We Deliever Desert Too</p>
          <p className="px-2">Tasty Treats</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-5  hover:bg-orange-500 hover:text-white m-1 hover:border-orange-500 hover:font-bold">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://media.istockphoto.com/id/1295633127/photo/grilled-chicken-meat-and-fresh-vegetable-salad-of-tomato-avocado-lettuce-and-spinach-healthy.jpg?b=1&s=612x612&w=0&k=20&c=s_7mTPtwpEtGg3r3ILKQUOlWhffQ7YisifR8NNNCpss="
        />
      </div>
    </div>
  );
}

export default HeadlineCards;
