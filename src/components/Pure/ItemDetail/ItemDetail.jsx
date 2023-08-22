import React, { useEffect, useState } from "react";
import "./itemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ data }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingText = new Promise((resolve) => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    });
  }, []);

  return (
    <div className="container">
      <div className="product-detail-container">
        {loading ? (
          <p className="loading-text">"Cargando producto..." </p>
        ) : (
          <>
            <div className="product-detail-card">
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
            <div className="product-description-box">
              <p className="product-description-p">{data.description}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
