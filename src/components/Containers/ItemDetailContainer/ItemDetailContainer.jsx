import React, { useEffect, useState } from "react";
import ItemDetail from "../../Pure/ItemDetail/ItemDetail";
import productos from "../../../data/products.json"; 
import "./itemDetailContainer.css";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  // Para guardar 1 objeto, justamente inicializamos el estado como un objeto vacio. 

  const { detailId } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => { 
        // Al resolverse, debe traer el objeto
        resolve(productos);
      }, 1000);
    });
    if (detailId) {
      getData.then((res) => {
        setData(res.find((product) => product.id === parseInt(detailId)));
      });
    } else {
      getData.then((res) => {
        setData(res);
      });
    }
  }, [detailId]);

  return (
    <div className="item-detail-body"> 
      {/* Tomamos la data del objeto guardado en el estado,
     y lo pasamos al ItemDetail */}
      <ItemDetail data={data} />
    </div>
  );
};

export default ItemDetailContainer;
