import React, { useEffect, useState } from "react";
import productos from "../../../data/products.json";
import ItemList from "../../Pure/ItemList/ItemList";
import Subtitle from "../../Pure/Subtitle/Subtitle";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
      setLoading(false);
      resolve(productos);
    }, 2000);
  });

  const setFilter = getData.then((res) =>
    setData(res.filter((product) => product.category === categoryId))
  );
  const setCategoryData = getData.then((resolve) => {
    setData(resolve);
  });

  useEffect(() => {
    try {
      getData;
      categoryId ? setFilter : setCategoryData;
    } catch (error) {
      console.log(error);
    }
  }, [categoryId]);

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





