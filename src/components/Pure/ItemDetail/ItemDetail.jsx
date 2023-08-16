import React from "react";

const ItemDetail = ({ data }) => {
  return (
    <div className="container">
      <div className="product-detail">
        <div className="content">
          <h2>Detalle del Producto</h2>
          <h3>{data.name}</h3>
          <h4>{data.description}</h4>
          <p>{data.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
