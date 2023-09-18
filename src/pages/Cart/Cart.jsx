import React from "react";
import "./cart.css";

const Cart = () => {
  return (
    <div className="cards-double-scroll">
      <h1 className="cart-title">Cart</h1>
      <div className="cards-container">
        <div className="cards-list">
          <div className="card-wrapper">
            <div className="andes-card__header">Header</div>
            <div className="item-row">Item description</div>
            <div className="andes-card__footer">Footer</div>
          </div>
 
        </div>
        <div className="price-box-container">
          <div className="expandable-footer"></div>
          <button className="to-checkout">
            <span className="andes-button__content">
              <span className="andes-button__text">Continuar compra</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
