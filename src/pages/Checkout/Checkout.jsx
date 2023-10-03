import React from "react";
import { useCartContext } from "../../context/CartProvider";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 1) {
    return (
      <>
        <h2> Carro con 1 solo producto</h2>
      </>
    );
  } else if (cart.length >= 2) {
    return (
      <>
        <h2>Carro con más de 2 productos</h2>
      </>
    );
  }

  return (
    <div>
      <h2>Carro Vacío</h2>
      <Link to="/">
        <span className="andes-button__content">Descubrir productos</span>
      </Link>
    </div>
  );
};

export default Checkout;
