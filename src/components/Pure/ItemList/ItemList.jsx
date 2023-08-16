import React from "react";
import Item from "../Item/Item";

const ItemList = ({ data = []}) => {
  return (
    <>
    <div className="container">
      <div className="row">
      {data.map((item, index) => {
        return <Item item={item} key={index} />;
      })}
      </div>
      </div>
    </>
  );
};

export default ItemList;
