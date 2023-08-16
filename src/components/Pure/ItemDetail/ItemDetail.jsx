import React from "react";
import styles from "./itemDetail.css";

const ItemDetail = ({ data }) => {
  return (
    <div className="container">
      <h1 className="product-detail-title">Detalle del Producto</h1>
      <div className="product-detail-card">
        <img className="product-image" src={data.image} alt={data.image} />
        <div className="content">
          <h3>{data.name}</h3>
          <p>${data.price}</p>
          <div className="product-description-box">
            <p className="product-description-p">{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
