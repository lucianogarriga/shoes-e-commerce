import React, { useEffect, useState } from "react";
import productos from "../../../data/products.json";
import ItemList from "../../Pure/ItemList/ItemList";
import Subtitle from "../../Pure/Subtitle/Subtitle";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { categoryId } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve, reject) => {
      setTimeout(() => {
        setLoading(false);
        resolve(productos);
      }, 2000);
    });
    if (categoryId) {
      getData.then((res) => setData(res.filter(product => product.category === categoryId)) );
    } else {
      getData.then((resolve) => {
        setData(resolve); 
      });
    }
  }, [categoryId]);

  return (
    <>
      <Subtitle text="Ofertas" />
      <p className="loading-text">
        {loading ? "Cargando lista de productos..." : null}
      </p>
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;
