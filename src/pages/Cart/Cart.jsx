import React from "react";
import "./cart.css"; 
import logo from '../../../public/cart-img.png';
import { useCartContext } from "../../context/CartProvider";
import { Link } from "react-router-dom";
import ItemCart from "../../components/Pure/ItemCart/ItemCart";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <div className="cards-double-scroll">
          <div className="cards-container">
            <div className="cards-list">
              <div className="state-container">
                <img src={logo}/>
                <span className="bf-ui-rich-text">¡Empieza un carrito de compras!</span>
                <span className="bf-ui-rich-text text-gray">Sumá productos y conseguí envío gratis.</span>
                <div className="bf-ui-button-container">
                  <button className="andes-button bf-ui-button"> 
                      <Link to="/">
                        <span className="andes-button__content">Descubrir productos
                        </span> 
                      </Link>
                  </button>
                </div>
              </div> 
            </div>

            {/* <div className="price-box-container">
              <div className="expandable-footer"></div> 
                <span className="andes-button__text">
                  <span>Resumen de Compra</span>
                </span> 
            </div> */}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="cards-double-scroll">
        <div className="cards-container">
          <div className="cards-list">
            <div className="card-wrapper">
              {cart.map((product) => (
                <ItemCart key={product.id} product={product} />
              ))}
             
            </div>
          </div>

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
                          <span className="bf-ui-rich-text">Gratis</span>
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
                            <span className="rich-text rich-text--bold">Total</span>
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
            
            <button className="to-checkout">
              <span className="andes-button__content">
                <span className="andes-button__text">Continuar compra</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
