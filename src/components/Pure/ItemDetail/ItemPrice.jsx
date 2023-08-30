import React from "react";
import "./itemPrice.css";

const ItemPrice = ({ data }) => {
  return (
    <>
      <div className="item-price">
        <div className="item-price-pdp">
          <span className="product-detail-ex-price">
            $ {parseInt(data.price * 1.15)}
          </span>
          <div className="product-detail-price-container">
            <span className="product-detail-price">${data.price}</span>
            <span className="product-detail-price-off">15% OFF</span>
          </div>
          <div className="product-detail-price-sub">
            <span className="product-detail-price-pay">
              en 12x $ {parseInt((data.price / 12) * 1.4)}
            </span>
          </div>
        </div>
        <div className="product-detail-modal-container">
          <a
            href="https://www.mercadolibre.com.ar/gz/home/payments/methods"
            className="product-detail-modal"
          >
            Ver los medio de pago
          </a>
        </div>
      </div>
    </>
  );
};

export default ItemPrice;
