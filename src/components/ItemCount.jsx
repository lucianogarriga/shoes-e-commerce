import React, { useEffect, useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleSub = () => {
    setCount(count - 1); 
  };

  const handleSum = () => {
    setCount(count + 1);
  };

  useEffect(() => { 
    setCount(parseInt(initial))
  }, [initial]);

  return (
    <div>
      <div>
        <button disabled={count < initial} onClick={handleSub}>-</button>
        <span className="count">{count}</span>
        <button disabled={count >= stock}onClick={handleSum}>+</button>
        <button disabled={count === 0 && count < stock} onClick={() => onAdd(count)} className="btn btn-outline-primary">
          Ver detalles
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
