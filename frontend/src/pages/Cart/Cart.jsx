import React from "react";
import "./cart.css";
import { useCartContext } from "../../context/CartProvider";
import ItemCart from "../../components/Pure/ItemCart/ItemCart";
import ItemCartExpandable from "../../components/Pure/ItemCartExpandable/ItemCartExpandable";
import ItemCartEmpty from "../../components/Pure/ItemCartEmpty/ItemCartEmpty";

const Cart = () => {
  const { cart } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <div className="cards-double-scroll">
          <div className="cards-container">
            <ItemCartEmpty />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="cards-double-scroll">
        <div className="cards-container">
          <div className="cards-list">
            <div className="card-wrapper">
              {cart.map((product) => (
                <ItemCart key={product.id} product={product} />
              ))}
            </div>
          </div>
          <ItemCartExpandable />
        </div>
      </div>
    </>
  );
};

export default Cart;
