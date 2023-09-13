import React, { useEffect, useState } from "react";
import "./itemCount.css";

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
          {Array.from({length: stock - initial + 1}, (_, index) => (
            <option key={initial + index} value={initial + index}> 
              {initial + index} {initial + index === 1 ? "unidad" : "unidades"}
            </option>
          ))}
          </select>
          
        </p>
        <p className="item-quantity-available"> ({stock} disponibles) </p>
      </div>
 
      <div className="item-count-cart-buttons">
        <button
          disabled={count === 0 && count < stock}
          onClick={() => onAdd(count)}
          className="btn btn-primary" >
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
