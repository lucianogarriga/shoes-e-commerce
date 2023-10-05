import React from "react";
import "./checkout.css";
import { useCartContext } from "../../context/CartProvider"; 
import ItemCheckout from "./ItemCheckout";

const Checkout = () => {
  const { cart } = useCartContext();
  let title, productText, totalText;

  if(cart.length === 1){
    title= "Carro con 1 producto";
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
    <div className="layout-container">
      <div className="cart-main-container">
        <div className="cart-content">
          <h2>{title}</h2>
        </div>
        <ItemCheckout productText={productText} totalText={totalText}/>
      </div>
    </div>
  );
};

export default Checkout;
