import React from "react";
import "./itemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ data }) => {
  return (
    <div className="container">
      <div className="product-detail-container"> 
        <div className="product-detail-card">
        {/* <h3 className="product-detail-name">{data.name}</h3> */}
          <img
            className="product-detail-image"
            src={data.pictureUrl}
            alt={data.image}
          />
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
    </div>
  );
};

export default ItemDetail;
