import React, { useState } from "react";
import Hero from "./Hero";
import HeadlineCards from "./HeadlineCards";
import Food from "./Food";
import Category from "./Category";
import CartProvider from "./store/CartProvider";
import Cart from "./Cart/Cart";

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
      <Hero onShowCart={showCartHandler} />
      <HeadlineCards />
      <Food />
      <Category />
    </CartProvider>
  );
}

export default Home;
