import React, { useEffect, useState } from "react";
import ItemDetail from "../../Pure/ItemDetail/ItemDetail";
import productos from "../../../data/products.json"; 
import "./itemDetailContainer.css";
import { useParams } from "react-router-dom";

import {getFirestore, doc, getDoc} from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  // Para guardar 1 objeto, justamente inicializamos el estado como un objeto vacio. 
  const { detailId } = useParams();
 
  const obtainData = () => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'products', detailId);
    getDoc(queryDoc)
    .then((res)=> setData({id: res.id, ...res.data()}))
    .catch((error) => console.error('Error al obtener el documento', error))
  }

  useEffect(() => {
    obtainData();
  }, [detailId]);

  return (
    <div className="item-detail-body">  
      <ItemDetail data={data} />
    </div>
  );
};

export default ItemDetailContainer;
