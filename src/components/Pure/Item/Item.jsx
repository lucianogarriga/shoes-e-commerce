import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ item }) => {

  const onAdd = (count) => {
    console.log(`Compraste ${count} unidades!`);
  };

  return (
        <div className="column">
          <div className="card m-2">
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <img src={item.pictureUrl} />
              <div className="item-content">
                <h3>${item.price}</h3>
                <ItemCount stock={5} initial={1} onAdd={onAdd} />
              </div>
            </div>
          </div>
        </div> 
  );
};

export default Item;
