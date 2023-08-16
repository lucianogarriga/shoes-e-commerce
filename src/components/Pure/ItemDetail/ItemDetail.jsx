import React from "react";
import "./itemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ data }) => {
  return (
    <div className="container">
      <h1 className="product-detail-title">Detalle del Producto</h1>
      <div className="product-detail-card">
        <img className="product-detail-image" src={data.image} alt={data.image} />
        <div className="content">
          <h3 className="product-detail-name">{data.name}</h3>
          <p className="product-detail-price">${data.price}</p>
        </div>
        
      </div>
      {/* <ItemCount/> */}
      <div className="product-description-box">
            <p className="product-description-p">{data.description}</p>
          </div>
    </div>
  );
};

export default ItemDetail;
