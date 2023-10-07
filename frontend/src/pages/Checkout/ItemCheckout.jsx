import React from "react";
import { useCartContext } from "../../context/CartProvider";
import { Link } from "react-router-dom";

const ItemCheckout = ({ productText }) => {
  const { cart, totalPrice } = useCartContext();

  return (
    <>
      <div className="cart-aside">
            <aside className="cart-aside__content-aside">
              <section className="cart-aside__content"> 
                {cart.map((product) => (
                    <div key={product.id}> 
                        <div className="overview-component__item">
                        <span className="ui-badge">
                            <img
                            className="badge__product"
                            src={product.pictureUrl}
                            alt={product.name}
                            />
                        </span>
                        <h3 className="overview-component__item-title">{product.name}</h3>
                        <span className="overview-component__item-quantity">Cantidad {product.quantity}</span>
                        </div>
                    </div>
                    ))}
                <div className="overview-table">
                    <div className="overview-component__amounts">
                        <div className="overview-component__row">
                            <div className="overview-component__column">
                            {productText && `${productText}` }
                            </div>
                            <div className="overview-component__column">
                            $ {totalPrice()}
                            </div>
                        </div>
                       
                    </div>
                    <div className="overview-component__payments">
                      <div className="overview-component__table">
                        <div className="overview-component__row">
                            <div className="overview-component__column">
                            Pagás
                            </div>
                            <div className="overview-component__column">
                            $ {totalPrice()}
                            </div>
                        </div>
                      </div> 
                    </div>
                </div>
              </section>
            </aside>
        {cart.length === 0 && (
          <>
            <Link to="/">
              <span>Descubrir productos</span>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default ItemCheckout;
