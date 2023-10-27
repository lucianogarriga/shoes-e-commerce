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

  // const getData = new Promise((resolve) => {
  //   setTimeout(() => { 
  //     // Al resolverse, debe traer el objeto
  //     resolve(productos);
  //   }, 1000);
  // }); 
  
  // const dataDetailId = () => {
  //   getData.then((res) => {
  //     setData(res.find((product) => product.id === parseInt(detailId)));
  //   });
  // }
  // const dataDetailNone = () => {
  //   getData.then((res) => {
  //     setData(res);
  //   });
  // }

  // useEffect(() => {
  //   getData;
  //   detailId ? dataDetailId() : dataDetailNone() 
  // }, [detailId]);

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'products', 'DVlQk9UKTQheRYeggaX9');
    getDoc(queryDoc)
    .then((res)=> setData({id: res.id, ...res.data()}))
    .catch((error) => console.error('Error al obtener el documento', error))
  }, []);

  return (
    <div className="item-detail-body"> 
      {/* Tomamos la data del objeto guardado en el estado,
     y lo pasamos al ItemDetail */}
      <ItemDetail data={data} />
    </div>
  );
};

export default ItemDetailContainer;
