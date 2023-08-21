import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ item }) => {
  const onAdd = (count) => {
    console.log(`Compraste ${count} unidades!`);
  };

  return (
    <div className="item">
      <a href="" className="card">
        <div>
          <img src={item.pictureUrl} className="card-picture" />
        </div>
        <div className="card-body">
          <div className="item-content">
            <p className="card-price">$ {item.price}</p>
            <span className="card-free">Envío gratis</span>
            <p className="card-title">{item.name}</p> 
          </div>
          <div>
          <ItemCount stock={5} initial={1} onAdd={onAdd} />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Item;
