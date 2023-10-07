import React from "react";
import logo from "../../../../public/cart-img.png";
import { Link } from "react-router-dom";

const ItemCartEmpty = () => {
  return (
    <>
      <div className="cards-list">
        <div className="state-container">
          <img src={logo} />
          <span className="bf-ui-rich-text">
            ¡Empieza un carrito de compras!
          </span>
          <span className="bf-ui-rich-text text-gray">
            Sumá productos y conseguí envío gratis.
          </span>
          <div className="bf-ui-button-container">
            <button className="andes-button bf-ui-button">
              <Link to="/">
                <span className="andes-button__content">
                  Descubrir productos
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCartEmpty;
