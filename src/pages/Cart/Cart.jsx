import React from "react";
import { useCartContext } from "../../context/CartProvider";
import { Link } from "react-router-dom";
import ItemCart from "../../components/Pure/ItemCart/ItemCart";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <h2>No hay elementos en el Carrito</h2>
        <Link to="/">Ir a buscar productos</Link>
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
              <p>Precio total: {totalPrice()}</p>
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
    </>

    // <div className="cards-double-scroll">
    //   {/* <h1 className="cart-title">Carrito</h1> */}
    //   <div className="cards-container">
    //     <div className="cards-list">
    //       <div className="card-wrapper">
    //         <div className="andes-card">
    //           <div className="andes-card__header">
    //             <div className="ander-card__header-title">
    //             SHOES_MARKET</div>
    //           </div>
    //           <div className="bf-ui-separator"></div>

    //           <section className="item-row">
    //             <article className="item-cart">
    //               <div className="item-cart__asset">
    //                 <img src="https://www.digitalsport.com.ar/files/products/60c75a4fa0d71-559013-500x500.jpg" />
    //               </div>
    //               <div className="item-cart__info">
    //                 <div className="item-title">
    //                   <span className="rich-text--small">
    //                     Zapatillas Nike Air Force 1 Low Retro
    //                   </span>
    //                 </div>
    //                 <div className="item-cart__actions">
    //                   <div className="link-container--horizontal">
    //                     <span className="bf-ui-link">
    //                       <span className="bf-ui-rich-text">Eliminar</span>
    //                     </span>
    //                     <span className="bf-ui-link">
    //                       <span className="bf-ui-rich-text">Guardar</span>
    //                     </span>
    //                   </div>
    //                 </div>
    //               </div>
    //             </article>
    //             {/* <div>...</div> */}
    //             <div className="quantity-selector-mobile-container">
    //               <div className="quantity-selector-mobile">
    //                 <span className="bf-ui-rich-text">1 u.</span>
    //                 <svg
    //                   aria-hidden="true"
    //                   width="16"
    //                   height="16"
    //                   viewBox="0 0 16 16"
    //                   fill="#3483fa"
    //                 >
    //                   <path
    //                     d="M4.40175 5.35519L7.99814 8.95157L11.5983 5.35144L12.4468 6.19997L7.99814 10.6486L3.55322 6.20371L4.40175 5.35519Z"
    //                     fill="#3483fa"
    //                   ></path>
    //                 </svg>
    //               </div>
    //             </div>
    //             <div className="item-price-container">
    //               <div className="item-price">
    //                 <span className="bf-ui-rich-price">
    //                   <span>$</span>

    //                   <span className="bf-ui-price-small">54000</span>
    //                 </span>
    //               </div>
    //             </div>
    //           </section>

    //           <div className="bf-ui-separator"></div>
    //           <div className="andes-card__footer">
    //             <div className="ticket-row">
    //               <div>
    //                 <h5 className="ticket-row__primary-text">Envío</h5>
    //               </div>
    //               <div className="ticket-row__right-column">
    //                 <h6 className="ticket-row__primary-text">
    //                   <span className="rich-text--success">Gratis</span>
    //                 </h6>
    //               </div>
    //             </div>
    //             <div className="info-row"></div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="price-box-container">
    //       <div className="expandable-footer"></div>
    //       <button className="to-checkout">
    //         <span className="andes-button__content">
    //           <span className="andes-button__text">Continuar compra</span>
    //         </span>
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Cart;
