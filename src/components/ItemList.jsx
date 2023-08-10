import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <>
      {productos.length > 0 && (
        <div className="container">
          {productos.map((item, index) => {
            return <Item item={item} key={index} />;
          })}
        </div>
      )}
    </>
  );
};

export default ItemList;
