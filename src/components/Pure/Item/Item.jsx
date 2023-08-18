import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ item }) => {

  const onAdd = (count) => {
    console.log(`Compraste ${count} unidades!`);
  };

  return ( 
          <div className="item">
          <a href="" className="card">
              <img src={item.pictureUrl} />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <div className="item-content">
                <h3>${item.price}</h3>
                <ItemCount stock={5} initial={1} onAdd={onAdd} />
              </div>
            </div>
            </a>
          </div> 
  );
};

export default Item;
