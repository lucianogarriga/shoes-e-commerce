import React from "react";
import { useCartContext } from "../../context/CartProvider";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart, totalPrice } = useCartContext();
  let title, productText, totalText;

  if(cart.length === 1){
    title= "Carro con 1 solo producto";
    productText="Producto: ";
    totalText="Total";
  } else if (cart.length >= 2){
    title=`Carro con ${cart.length} productos`;
    productText=`Productos (${cart.length}):`;
    totalText="Total";
  } else {
    title="Carrito Vacío";
    productText=null;
    totalText=null;
  }
 

  return (
    <div>
      <h2>{title}</h2>
      {productText && <h3>{productText} {totalPrice()}</h3>}
      {totalText && <h3>{totalText} {totalPrice()}</h3>}
      {cart.length === 0 && (
        <>
        <Link to="/">
        <span>Descubrir productos</span>
      </Link>
        </>
      )}
      
    </div>
  );
};

export default Checkout;
