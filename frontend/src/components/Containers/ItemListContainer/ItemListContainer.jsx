import React, { useEffect, useState } from "react";
import productos from "../../../data/products.json";
import ItemList from "../../Pure/ItemList/ItemList";
import Subtitle from "../../Pure/Subtitle/Subtitle";
import { useParams } from "react-router-dom"; 
import {getFirestore, collection, getDocs, query} from 'firebase/firestore';

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  // const getData = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     setLoading(false);
  //     resolve(productos);
  //   }, 2000);
  // });

  // const setFilter = getData.then((res) =>
  //   setData(res.filter((product) => product.category === categoryId))
  // );
  // const setCategoryData = getData.then((resolve) => {
  //   setData(resolve);
  // });

  const updateData = () => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'products');
    getDocs(queryCollection)
    .then(res => setData(res.docs.map(product => ({id:product.id, ...product.data()}))))
  }

  const getData = new Promise ((res, rej) => {
    setTimeout(() => {
      setLoading(false);
      res(updateData());
    },2000);
  })

  useEffect(() => { 
    getData;      
  }, []);

  return (
    <>
      <div className="item-list-body">
        <Subtitle text="Ofertas" />
        <p className="loading-text">
          {loading && "Cargando lista de productos..."}
        </p>
        <ItemList data={data} />
      </div>
    </>
  );
};

export default ItemListContainer;





