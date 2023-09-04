import React from "react";
import "./itemSell.css";

const ItemSell = () => {
  return (
    <div className="item-sell-container"> 
      <div className="item-pdp-media-container">
        <div>
          <p className="item-shipping-text">
            <span className="item-shipping-text-free">Llega gratis</span> el
            jueves
          </p>
        </div>
        <div>
          <a className="item-shipping-address" href="https://www.mercadolibre.com.ar/navigation/addresses-hub?go=https%3A%2F%2Fwww.mercadolibre.com.ar%2Fmonitor-gamer-samsung-f22t35-led-22-dark-blue-gray-100v240v%2Fp%2FMLA17395574%3Fpdp_filters%3Ddeal%3AMLA779357-1&modal=false">Enviar a Córdoba 5000</a>
        </div>
      </div>
      <p className="item-stock-text">Stock disponible</p>
    </div>
  );
};

export default ItemSell;
