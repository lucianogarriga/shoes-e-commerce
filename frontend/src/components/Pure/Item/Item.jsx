import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
 
  return (
    <div className="item">
      <Link to={`/detail/${item.id}`} className="card">
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
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
