import React, { useEffect, useState } from "react";
import "./itemDetail.css";
import { Link } from "react-router-dom";

import { useCartContext } from "../../../context/CartProvider";

import ItemCount from "../ItemCount/ItemCount";
import ItemPrice from "./ItemPrice";
import ItemSell from "./ItemSell";
import ItemBenefits from "./ItemBenefits";
import ItemSeller from "./ItemSeller";

const ItemDetail = ({ data }) => {
  const [loading, setLoading] = useState(true);
  const [goToCart, setGoToCart] = useState(false);

  // Destructuring de los 4 values del CartContext.Provider
  const {addProduct} = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data,quantity)
  };

  useEffect(() => {
    const loadingText = new Promise((resolve) => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    });
  }, []);

  return (
    <div className="container-card">
      <div className="product-detail-container">
        {loading ? (
          <p className="product-detail-loading-text">
            Cargando detalle del producto...
          </p>
        ) : (
          <>
            <div className="item-title">
              <span className="item-header-subtitle">
                Nuevo | +5mil vendidos
              </span>
              <p className="product-detail-title">{data.name}</p>
            </div>
            <div className="item-img">
              <img
                className="item-detail-image"
                src={data.pictureUrl}
                alt={data.image}
              />
            </div>
            <ItemPrice data={data} />

            <div className="item-buttons">
              <ItemSell />
              {
                goToCart 
                ? (
                <Link to="/cart">
                  <button 
                    className="btn btn-primary full-width-btn"
                  >
                    Ver carrito
                  </button>
                </Link>
              ) : (
                <ItemCount stock={5} initial={1} onAdd={onAdd} />
              )}

              <ItemBenefits />
            </div>
            <div className="item-specs">
              <div>
                <h2 className="item-specs-title">
                  Lo que tenés que saber de este producto
                </h2>
              </div>
              <div>
                <ul>
                  <li className="item-specs-li"> {data.specs1} </li>
                  <li className="item-specs-li"> {data.specs2}</li>
                  <li className="item-specs-li"> {data.specs3}</li>
                  <li className="item-specs-li"> {data.specs4}</li>
                </ul>
              </div>
            </div>
            <div className="item-features">
              <hr />
              <div>
                <h2 className="item-title-features">
                  Características de Nike Phantom GT2 Pro FG
                </h2>
              </div>
              <div className="item-features-paragraph">
                <p>Talle: 38 / 40 / 42 / 44 / 46</p>
              </div>
            </div>
            {/* <div className="item-related">7 RELATED</div> */}
            <div className="item-seller">
              <ItemSeller />
            </div>
            <div className="item-description">
              <hr />
              <h2 className="item-title-description">Descripción</h2>
              <p className="product-description-p">{data.description}</p>
            </div>
            <div className="item-payments">
              <h2 className="item-title-payments">Medios de pago</h2>{" "}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
