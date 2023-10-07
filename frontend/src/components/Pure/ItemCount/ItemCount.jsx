import React, { useEffect, useState } from "react";
import "./itemCount.css";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <div className="item-count-container">
      <div className="item-count-quantity">
        <p className="count">
          Cantidad:
          <select value={count} onChange={(e) => setCount(e.target.value)}>
            {Array.from({ length: stock - initial + 1 }, (_, index) => (
              <option key={initial + index} value={initial + index}>
                {initial + index}{" "}
                {initial + index === 1 ? "unidad" : "unidades"}
              </option>
            ))}
          </select>
        </p>
        <p className="item-quantity-available"> ({stock} disponibles) </p>
      </div>

      <div className="item-count-cart-buttons full-width-btn">
        {/* {goToCart ? ( */}
        {/* <Link to="/cart"> 
            <button 
              onClick={() => console.log("Ir al carrito")}
              className="btn btn-primary full-width-btn" >  
              Ver carrito
            </button>
          </Link> */}
        {/* ) : (
          <> */}
        {/* TODO: Modificar boton Comprar Ahora */}

        <Link to="/checkout">
          <button
            disabled={count === 0 && count < stock}
            onClick={() => onAdd(count)}
            className="btn btn-primary full-width-btn"
          >
            Comprar ahora
          </button>
        </Link>
        <button
          disabled={count === 0 && count < stock}
          onClick={() => onAdd(count)}
          className="btn btn-outline-primary full-width-btn"
        >
          Agregar al carrito
        </button>
        {/* </>
        )} */}
      </div>
    </div>
  );
};

export default ItemCount;
