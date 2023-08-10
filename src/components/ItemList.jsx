import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <>
    <div className="container">
      <div className="row">
      {productos.map((item, index) => {
        return <Item item={item} key={index} />;
      })}
      </div>
      </div>
    </>
  );
};

export default ItemList;
