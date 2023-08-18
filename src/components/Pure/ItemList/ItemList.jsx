import React from "react";
import Item from "../Item/Item";

const ItemList = ({ data = [] }) => {
  return (
    <>
      <div className="band">
        {data.map((item, index) => {
          return <Item item={item} key={index} />;
        })}
      </div>
    </>
  );
};

export default ItemList;
