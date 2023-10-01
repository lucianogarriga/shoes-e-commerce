import React from "react";
import "./itemCart.css";
import { useCartContext } from "../../../context/CartProvider";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();

  return ( 

            <div className="andes-card">
              <div className="andes-card__header">
                <div className="ander-card__header-title">SHOES_MARKET</div>
              </div>
              <div className="bf-ui-separator"></div>

              <section className="item-row">
                <article className="item-cart">
                  <div className="item-cart__asset">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="item-cart__info">
                    <div className="item-title">
                      <span className="rich-text--small">{product.title}</span>
                    </div>
                    <div className="item-cart__actions">
                      <div className="link-container--horizontal">
                        <span className="bf-ui-link">
                          <button
                            className="bf-ui-rich-text"
                            onClick={() => removeProduct(product.id)}
                          >
                            Eliminar
                          </button>
                        </span>
                        <span className="bf-ui-link">
                          <span className="bf-ui-rich-text">Guardar</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
                <div className="quantity-selector-mobile-container">
                  <div className="quantity-selector-mobile">
                    <span className="bf-ui-rich-text">{product.quantity}</span>
                    <svg
                      aria-hidden="true"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="#3483fa"
                    >
                      <path
                        d="M4.40175 5.35519L7.99814 8.95157L11.5983 5.35144L12.4468 6.19997L7.99814 10.6486L3.55322 6.20371L4.40175 5.35519Z"
                        fill="#3483fa"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="item-price-container">
                  <div className="item-price">
                    <span className="bf-ui-rich-price">
                      <span>$</span>

                      <span className="bf-ui-price-small">{product.price}</span>
                    </span>
                  </div>
                </div>
              </section>

              <div className="bf-ui-separator"></div>
              <div className="andes-card__footer">
                <div className="ticket-row">
                  <div>
                    <h5 className="ticket-row__primary-text">Envío</h5>
                  </div>
                  <div className="ticket-row__right-column">
                    <h6 className="ticket-row__primary-text">
                      <span className="rich-text--success">Gratis</span>
                    </h6>
                  </div>
                </div>
                <div className="info-row"></div>
              </div>
            </div>

  );
};

export default ItemCart;
