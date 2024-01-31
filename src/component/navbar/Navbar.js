// import React from 'react'
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { useContext, useState } from "react";
import CartContext from "../store/cart-context";

function Navbar(props) {
  const [nav, setNav] = useState(false);
  const cartCtx = useContext(CartContext);

  const numberOfCartContext = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <div className="max-w-[1640] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center" onClick={() => setNav(!nav)}>
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2l sm:text-3l lg:text-4xl px-2">
          Best <span>Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p>Pickup</p>
        </div>
      </div>
      {/* SEARCH INPUT */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search Food "
        />
      </div>
      <button className=" bg-black text-white items-center py-2 md:flex rounded-full">
        <BsFillCartFill className="mr-2" size={20} onClick={props.onShowCart} />{" "}
        Cart {numberOfCartContext}
      </button>
      {/* MOBILE MENUE */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      <div
        className={
          nav
            ? "fixed top-0 left-0  w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%]  w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => setNav(!nav)}
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className=" text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
            <li className=" text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" />
              Favorites
            </li>
            <li className=" text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" />
              Wallet
            </li>
            <li className=" text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" />
              Helps
            </li>
            <li className=" text-xl py-4 flex">
              <AiFillTag size={25} className="mr-4" />
              Promotion
            </li>
            <li className=" text-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-4" />
              Best Ones
            </li>
            <li className=" text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" />
              Invite
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
