import React from "react";
import Item from "./Item";

const ItemList = () => {
  return (
    <div>
    <Item />
      {/* {productos.length > 0 && (
        <div>
          {productos.map((producto, index) => {
            return <Item producto={producto} key={index} />;
          })}
        </div>
      )} */}
    </div>
  );
};

export default ItemList;
