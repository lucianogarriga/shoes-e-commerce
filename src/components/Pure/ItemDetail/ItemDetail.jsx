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
    <div class="container">
      <div class="item-gallery-container"> 2 IMG</div>
      <div class="item-header-title">1 TITLE</div>
      <div class="item-price-container">3 PRICE </div>
      <div class="item-quantity-buttons"> 4 QUANTITY BUTTONS  </div>        
      <div class="item-specs">5 SPECS</div>  
      <div class="item-features-container">6 FEATURES/CARACT</div>
      <div class="item-related-container">7 RELATED</div>
      <div class="item-seller-info">8 SELLER INFO</div>
      <div class="item-description-container">9 DESCRIPTION</div>
      <div class="item-payments-methods">10 PAYMENTS</div> 
    </div>
  );
};

export default ItemDetail;
