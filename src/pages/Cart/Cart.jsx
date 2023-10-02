import React from "react";
import "./cart.css"; 
import logo from '../../../public/cart-img.png';
import { useCartContext } from "../../context/CartProvider";
import { Link } from "react-router-dom";
import ItemCart from "../../components/Pure/ItemCart/ItemCart";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <div className="cards-double-scroll">
          <div className="cards-container">
            <div className="cards-list">
              <div className="state-container">
                <img src={logo}/>
                <span className="bf-ui-rich-text">¡Empieza un carrito de compras!</span>
                <span className="bf-ui-rich-text text-gray">Sumá productos y conseguí envío gratis.</span>
                <div className="bf-ui-button-container">
                  <button className="andes-button bf-ui-button"> 
                      <Link to="/">
                        <span className="andes-button__content">Descubrir productos
                        </span> 
                      </Link>
                  </button>
                </div>
              </div> 
            </div>

            <div className="price-box-container">
              <div className="expandable-footer"></div> 
                <span className="andes-button__text">
                  {/* <span>Resumen de Compra</span> */}
                </span> 
            </div>
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

          <div className="price-box-container">
            <div className="expandable-footer"></div>
            <p>Precio total: {totalPrice()}</p>
            <button className="to-checkout">
              <span className="andes-button__content">
                <span className="andes-button__text">Continuar compra</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
