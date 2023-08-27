import React, { useEffect, useState } from "react";
import "./itemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ data }) => {
  const [loading, setLoading] = useState(true);

  const onAdd = (count) => {
    console.log(`Agregaste ${count} productos`);
  };

  useEffect(() => {
    const loadingText = new Promise((resolve) => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    });
  }, []);

  return (
    // <div className="container">
    //   <div className="product-detail-container">
    //     {loading ? (
    //       <p className="product-detail-loading-text"> Cargando detalle del producto... </p>
    //     ) : (
    //       <>
    //         <div className="product-detail-card">
    //           <img
    //             className="product-detail-image"
    //             src={data.pictureUrl}
    //             alt={data.image}
    //           />
    //           <div className="content">
    //             <h3 className="product-detail-name">{data.name}</h3>
    //             <p className="product-detail-price">${data.price}</p>
    //             <ItemCount stock={5} initial={1} onAdd={onAdd} />
    //           </div>
    //         </div>
    //         <div className="product-description-box">
    //           <p className="product-description-p">{data.description}</p>
    //         </div>
    //       </>
    //     )}
    //   </div>
    // </div>
    <div className="container">
      <div className="wrapper">
        <div className="item-title">1 TITLE</div>
        <div className="item-img"> 2 IMG</div>
        <div className="item-price">3 PRICE </div>
        <div className="item-buttons"> 4 QUANTITY BUTTONS </div>
        <div className="item-specs">5 SPECS</div>
        <div className="item-features">6 FEATURES/CARACT</div>
        <div className="item-related">7 RELATED</div>
        <div className="item-seller">8 SELLER INFO</div>
        <div className="item-description">9 DESCRIPTION</div>
        <div className="item-payments">10 PAYMENTS </div>
      </div>
    </div>
  );
};

export default ItemDetail;
