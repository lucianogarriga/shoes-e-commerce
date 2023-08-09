import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleSub = () => {
    {
      count > initial && setCount(count - 1);
    }
  };

  const handleSum = () => {
    {
      count < stock && setCount(parseInt(count + 1));
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleSub}>-</button>
        <span className="count">{count}</span>
        <button onClick={handleSum}>+</button>
        <button onClick={onAdd} className="btn btn-outline-primary">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
