import React from "react";
import { useCartContext } from "../../../context/CartProvider";
import { Link } from "react-router-dom"; 

const ItemCartExpandable = () => {
  const { totalPrice } = useCartContext();

  return (
    <>
      <div className="price-box-container">
        <div className="expandable-footer">
          <div className="expandable-no-button">
            <div className="expandable--children">
              <div className="ticket-row-container">
                <div className="ticket-row">
                  <div className="ticket-row__left">
                    <div className="andes-tooltip">
                      <h5 className="ticket-row__left--text">
                        <span className="rich-text">Productos</span>
                      </h5>
                    </div>
                  </div>
                  <div className="ticket-row__right">
                    <h6 className="ticket-row__right--text">
                      <span className="offers">$ {totalPrice()}</span>
                    </h6>
                  </div>
                </div>
                <div className="ticket-row">
                  <div className="ticket-row__left">
                    <div className="andes-tooltip">
                      <h5 className="ticket-row__left--text">
                        <span className="rich-text">Envío</span>
                      </h5>
                    </div>
                  </div>
                  <div className="ticket-row__right">
                    <h6 className="ticket-row__right--text">
                      <span className="bf-ui-rich-text-green">Gratis</span>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="expandable--content top-space">
                <div className="ticket-row">
                  <div>
                    <div className="andes-tooltip">
                      <div className="ticket-row__left">
                        <h5 className="ticket-row__left--text">
                          <span className="rich-text rich-text--bold">
                            Total
                          </span>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="ticket-row__right">
                    <h6 className="ticket-row__right--text">
                      <span className="offers-total">$ {totalPrice()}</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/checkout">
          <button className="andes-button to-checkout bf-ui-button">
            <span className="andes-button__content">
              <span className="andes-button__text">Continuar compra</span>
            </span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default ItemCartExpandable;
