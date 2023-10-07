import React from "react";
import "./checkout.css";
import { useCartContext } from "../../context/CartProvider"; 
import ItemCheckout from "./ItemCheckout";
import CheckoutForm from "./CheckoutForm";

const Checkout = () => {
  const { cart } = useCartContext();
  let title, productText, totalText;

  if(cart.length === 1){
    title= "¿Quieres continuar con tu compra de 1 producto?";
    productText="Producto ";
    totalText="Total";
  } else if (cart.length >= 2){
    title=`¿Quieres continuar con tu compra de ${cart.length} productos?`;
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
          <h2> {title}</h2>
          <div className="shipping-container">
            <CheckoutForm/>
          </div>
        <div> 
        </div>
        </div>
        <ItemCheckout productText={productText} totalText={totalText}/>
         
      </div>
    </div>
  );
};

export default Checkout;
