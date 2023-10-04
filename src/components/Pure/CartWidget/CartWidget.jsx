import React from "react";
import "./cartWidget.css";
import { useCartContext } from "../../../context/CartProvider";

const CartWidget = () => {

  const {cart } = useCartContext();

  return (
    <>
      <a className="nav-cart">
        <i className="bi bi-cart nav-icon-cart"></i>
        <span className="nav-icon-cart-quantity">{cart.length}</span>
      </a> 
    </>
  );
};

export default CartWidget;
