import React from 'react';
import { useCartContext } from '../../context/CartProvider';
import { Link } from 'react-router-dom';

const ItemCheckout = ({productText, totalText}) => {

    const {cart, totalPrice } = useCartContext();

    return (
        <>
        <div className="cart-aside"> 
        
            {cart.map((product) => (
                
                <div key={product.id}>
              <aside className="cart-aside__content-aside">
                <section className="cart-aside__content">
                  <div className="overview-component__item">
                    <span className="ui-badge"> 
                         <img className='badge__product' src={product.pictureUrl} alt={product.name} />
                    </span>
                    <h3>{product.name}</h3>
                    <span>Cantidad {product.quantity}</span>
                  </div>
                </section>
              </aside> 
                    </div>
                ))}
              {productText && <h3>{productText} {totalPrice()}</h3>}
                {totalText && <h3>{totalText} {totalPrice()}</h3>}
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
}

export default ItemCheckout;
