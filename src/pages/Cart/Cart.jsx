import React from "react";
import "./cart.css";

const Cart = () => {
  return (
    <div className="cards-double-scroll">
      <h1 className="cart-title">Cart</h1>
      <div className="cards-container">
        <div className="cards-list">
          <div className="card-wrapper">
            <div className="andes-card__header">Nombre del Vendedor</div>

            <section className="item-row">
              <article>
                <div>Img</div>
                <div>
                  <div>
                    <span>Item cart info</span>
                  </div>
                  <div>
                    <span>
                      <a>Eliminar</a>
                    </span>
                    <span>
                      <a>Guardar</a>
                    </span>
                  </div>
                </div>
              </article>
              <div>1 u.</div>
              <div>$15.603</div>
            </section>

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
