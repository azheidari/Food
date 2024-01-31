import React, { useState } from "react";
import Hero from "./Hero";
import HeadlineCards from "./HeadlineCards";
import Food from "./Food";
import Category from "./Category";
import CartProvider from "./store/CartProvider";
import Cart from "./Cart/Cart";
import Navbar from "./navbar/Navbar";

function Home() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Navbar onShowCart={showCartHandler} />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
    </CartProvider>
  );
}

export default Home;
