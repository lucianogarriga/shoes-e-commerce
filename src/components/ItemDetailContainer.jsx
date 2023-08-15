import React, { useEffect, useState } from "react";
import {pedirProductosPorID} from "../helpers/pedirProductos"; 
import ItemDetail from "./ItemDetail";
  
// const ItemDetailContainer = ({itemId}) => {
const ItemDetailContainer = () => {
 
  const getItems = async() => {
    const myPromise = await new Promise((resolve, rejected) => {

    })
  }

  return (
    <div>
      {/* {item && <ItemDetail item={item}/>} */}
      {/* <ItemDetail item={item}/> */}
    </div>
  );
};

export default ItemDetailContainer;
