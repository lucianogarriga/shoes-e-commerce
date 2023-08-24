import React, { useEffect, useState } from "react";
import "./itemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleSub = () => {
    setCount(count - 1);
  };

  const handleSum = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <div className="item-count-container">
      <div className="item-count-stock">
        <p className="item-stock-text">Stock disponible</p>
        <div className="item-count-quantity">
        <p className="count">Cantidad: <span className="item-quantity-selected">{count} unidad</span></p>
        <p className="item-quantity-available">({stock} disponibles) </p>
        </div>

      </div>
      {/* <div className="item-count-products">
        <button
          type="button"
          className="btn btn-outline-dark"
          disabled={count < initial}
          onClick={handleSub}
        >   -
        </button>
        <button
          type="button"
          className="btn btn-outline-dark"
          disabled={count >= stock}
          onClick={handleSum}
        > +
        </button>
      </div> */}
      <div className="item-count-cart-buttons">
        <button
          disabled={count === 0 && count < stock}
          onClick={() => onAdd(count)}
          className="btn btn-primary"
        > 
          Comprar ahora
        </button>
        <button
          disabled={count === 0 && count < stock}
          onClick={() => onAdd(count)}
          className="btn btn-outline-primary"
        > 
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
