import React, { useContext, useState } from "react";
import { data } from "../component/data/data";

import { Link } from "react-router-dom";
import CartContext from "./store/cart-context";

function Food() {
  const cartCtx = useContext(CartContext);

  const [food, setFood] = useState(data);

  const filterFood = (fastfood) => {
    setFood(
      data.filter((item) => {
        return item.category === fastfood;
      })
    );
  };

  const filterByPrice = (price) => {
    setFood(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  const addToCartHandler = (record) => {
    cartCtx.addItem({
      id: record.id,
      name: record.name,
      amount: record.id,
      price: record.price,
    });
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFood(data)}
              className="border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white m-1"
            >
              All
            </button>
            <button
              onClick={() => filterFood("burger")}
              className="border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white m-1"
            >
              Burgers
            </button>
            <button
              onClick={() => filterFood("pizza")}
              className="border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white m-1"
            >
              Pizza
            </button>
            <button
              onClick={() => filterFood("salad")}
              className="border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white m-1"
            >
              Salads
            </button>
            <button
              onClick={() => filterFood("chicken")}
              className="border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white m-1"
            >
              Chicken
            </button>
          </div>
        </div>
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => filterByPrice(10)}
              className="border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white m-1"
            >
              cheap
            </button>
            <button
              onClick={() => filterByPrice(100)}
              className="border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white m-1"
            >
              Cost effective
            </button>
            <button
              onClick={() => filterByPrice(1000)}
              className="border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white m-1"
            >
              Medum
            </button>
            <button
              onClick={() => filterByPrice(1000)}
              className="border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white m-1"
            >
              Expensive
            </button>
          </div>
        </div>
      </div>

      {/* DESPLAY FOODS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 ">
        {food.map((item) => (
          <div
            key={item.id}
            className="border shadow-lg hover:scale-105 duration-300"
          >
            <Link to={`food/${item.id}`}>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[200px] object-cover rounded-lg rounded-t-lg "
              />
            </Link>
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
            <button
              className="border-white bg-gray-200  text-black py-2 px-5 rounded-md text-black-400 text-md mr-3 w-full hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:font-bold"
              onClick={addToCartHandler.bind(null, item)}
            >
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;
