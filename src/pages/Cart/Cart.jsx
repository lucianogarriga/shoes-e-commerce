import React from "react";
import "./cart.css";

const Cart = () => {
  return (
    <div className="cards-double-scroll">
      <h1 className="cart-title">Cart</h1>
      <div className="cards-container">
        <div className="cards-list">
          <div className="card-wrapper">
            <div className="andes-card__header">
              <div className="ander-card__header-title">SHOES_MARKET</div>
            </div>
            <hr/>
            <section className="item-row">
              <article className="item-cart">
                <div className="item-cart__asset">
                  <img src="https://http2.mlstatic.com/porta-patente-fender-eliminator-cf-moto-400-nk-650-S_617503-MLA48849744349_012022-R.jpg" />
                </div>
                <div className="item-cart__info">
                  <div className="item-title">
                    <span className="rich-text--small">
                      Detalle del producto en el carrito
                    </span>
                  </div>
                  <div className="item-cart__actions">
                    <div className="link-container--horizontal">
                      <span className="bf-ui-link">
                        <span className="bf-ui-rich-text">Eliminar</span>
                      </span>
                      <span className="bf-ui-link">
                        <span className="bf-ui-rich-text">Guardar</span>
                      </span>
                    </div>
                  </div>
                </div>
              </article>
              <div>...</div>
              <div>1 u.</div>
              <div>$15.603</div>
            </section>

            <hr/>
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
        </div>

        <div className="price-box-container">
          <div className="expandable-footer"></div>
          <button className="to-checkout">
            <span className="andes-button__content">
              <span className="andes-button__text">Continuar compra</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
