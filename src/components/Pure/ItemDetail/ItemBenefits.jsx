import React from "react";
import "./ItemBenefits.css";

const ItemBenefits = () => {
  return (
    <div>
      <ul className="item-benefits-container">
        <li className="item-benefits-1">
          <p>
            <a className="item-benefits-link" href="https://www.mercadolibre.com.ar/compra-protegida" >
              Compra Protegida
            </a>
            , recibí el producto que esperabas o te devolvemos tu dinero.
          </p>
        </li>
        <li className="item-benefits-2">
          <p> 
            <a className="item-benefits-link" href="https://www.mercadolibre.com.ar/mercado-puntos" >
              Mercado Puntos
            </a>
            . Sumás 1960 puntos.
          </p>
        </li>
        <li className="item-benefits-3">1 año de garantía de fábrica.</li>
      </ul>
    </div>
  );
};

export default ItemBenefits;
