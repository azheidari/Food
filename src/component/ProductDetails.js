import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../component/data/data";
import CartContext from "./store/cart-context";

function ProductDetails(props) {
  const cartCtx = useContext(CartContext);

  const params = useParams();

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const record = data.find((item) => item.id === +params.id);

  const [activeImage, setActiveImage] = useState(record.image);

  const price = `$${record.price.toFixed(2)}`;

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const addToCartHandler = (record) => {
    cartCtx.addItem({
      id: record.id,
      name: record.name,
      amount: record.id,
      price: record.price,
    });
  };

  const [images, setImages] = useState({
    img1: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
    img2: "https://images.unsplash.com/photo-1594221708779-94832f4320d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    img3: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNoaWNrZW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    img4: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  });

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12 flex flex-col justify-between lg:flex-row gap-16">
      <div className="flex flex-col gap-6">
        <img
          src={activeImage}
          alt=""
          className="w-full h-full aspect-square object-cover rounded-xl  "
        />
        <div className=" flex flex-row justify-between h-24">
          <img
            src={images.img1}
            alt=""
            className="w-24 h-24 cursor-pointer rounded-md mr-2"
            onClick={() => setActiveImage(images.img1)}
          />
          <img
            src={images.img2}
            alt=""
            className="w-24 h-24 cursor-pointer rounded-md mr-2"
            onClick={() => setActiveImage(images.img2)}
          />
          <img
            src={images.img3}
            alt=""
            className="w-24 h-24 cursor-pointer rounded-md mr-2"
            onClick={() => setActiveImage(images.img3)}
          />
          <img
            src={images.img4}
            alt=""
            className="w-24 h-24 cursor-pointer rounded-md mr-2"
            onClick={() => setActiveImage(images.img4)}
          />
        </div>
      </div>
      {/* ABOUT */}
      <div className="flex flex-col gap-4">
        <div>
          <span className="text-violet-600 font-semibold">Special Food</span>
          <h1 className="text-3xl font-bold">{record.name}</h1>
        </div>
        <p className="text-gray-700">
          lorem lorem lorem loremlorem loremlorem loremlorem loremlorem
          loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem
          loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem
          loremlorem loremlorem loremlorem loremlorem lorem loremlorem
          loremloremlorem loremloremlorem loremloremlorem loremloremlorem
          loremloremlorem loremloremlorem lorem
        </p>
        <h6 className="text-2xl font-semibold">{price}</h6>
        <div className="flex flex-row items-center ">
          <button
            className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl"
            onRemove={cartItemRemoveHandler.bind(null, record.id)}
          >
            -
          </button>
          <span className="py-4 px-6 rounded-lg">{totalAmount}</span>
          <button
            className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl mr-3"
            onClick={addToCartHandler.bind(null, record)}
          >
            +
          </button>
          <button className="bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full mx-3">
            Add To Cart
          </button>
        </div>
      </div>
      {/* <p>
        <Link to="..">Back</Link>
      </p> */}
    </div>
  );
}

export default ProductDetails;
