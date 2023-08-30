import React from "react";
import "./itemSell.css";

const ItemSell = () => {
  return (
    <div className="item-sell-container">
        <div className="item-offer-day">
            OFERTA DEL DIA
        </div>
        <div>
            <p><span>Llega gratis</span> el jueves</p>
        </div>
      <p className="item-stock-text">Stock disponible</p>
    </div>
  );
};

export default ItemSell;
