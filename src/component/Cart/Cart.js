import React, { useContext, useState } from "react";

import classes from "./Modal.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CheckOut from "./CheckOut";
import CartContext from "../store/cart-context";

const Cart = (props) => {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [didSubmiting, setDidSubmiting] = useState(false);
  const [isChecking, setIscheking] = useState(false);
  const cartCtx = useContext(CartContext);

  const handelChecking = () => {
    setIscheking(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmiting(true);
    await fetch("http://192.168.1.2:4000/api/orders", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        orders: cartCtx.items,
        user: userData,
      }),
    });
    setIsSubmiting(false);
    setDidSubmiting(true);
    cartCtx.clearCart();
  };

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isChecking && (
        <CheckOut onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isChecking && (
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Close
          </button>
          {hasItems && (
            <button onClick={handelChecking} className={classes.button}>
              Order
            </button>
          )}
        </div>
      )}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending Order Data ...</p>;

  const didSubmittingModalContent = (
    <React.Fragment>
      Succesfully send the orders!
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmiting && !didSubmiting && cartModalContent}
      {isSubmiting && isSubmittingModalContent}
      {!isSubmiting && didSubmiting && didSubmittingModalContent}
    </Modal>
  );
};

export default Cart;
