import React, { useEffect, useState } from "react";
import {pedirProductosPorID} from "../helpers/pedirProductos"; 
import ItemDetail from "./ItemDetail";
  
const ItemDetailContainer = ({itemId}) => {

  const [item, setItem] = useState(null);

  useEffect(() => {
    pedirProductosPorID(itemId)
        .then((res) => {
          setItem(res);
        });
  }, [itemId]);

  return (
    <div>
      {item && <ItemDetail item={item}/>}
    </div>
  );
};

export default ItemDetailContainer;
