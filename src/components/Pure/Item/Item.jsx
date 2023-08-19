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
          <p className="card-title">{item.name}</p>
          {/* <p className="card-text">{item.description}</p> */}
            <h3>${item.price}</h3>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Item;
