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
    //

    //           </div>
    //         </div>
    //         <div className="product-description-box">
    //
    //       </>
    //     )}
    <div className="container">
      <div className="product-detail-container">
        {loading ? (
          <p className="product-detail-loading-text">
            Cargando detalle del producto...
          </p>
        ) : (
          <>
            <div className="item-title">
              <div className="item-header">
                <span className="item-header-subtitle">Nuevo | +5mil vendidos</span>
              </div>
              <div>
                <p className="product-detail-title">{data.name}</p>
              </div>
            </div>
            <div className="item-img">
              <img
                className="product-detail-image"
                src={data.pictureUrl}
                alt={data.image}
              />
            </div>
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
                <a href="https://www.mercadolibre.com.ar/gz/home/payments/methods" className="product-detail-modal">Ver los medio de pago</a> 
              </div>
            </div>
            <div className="item-buttons">
              <ItemCount stock={5} initial={1} onAdd={onAdd} />
            </div>
            {/* <div className="item-specs">5 SPECS</div>
            <div className="item-features">6 FEATURES/CARACT</div>
            <div className="item-related">7 RELATED</div>
            <div className="item-seller">8 SELLER INFO</div> */}
            <div className="item-description">
              <h2 className="item-title-description">Descripción</h2>
              <p className="product-description-p">{data.description}</p>
            </div>
            <div className="item-payments">10 PAYMENTS </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
