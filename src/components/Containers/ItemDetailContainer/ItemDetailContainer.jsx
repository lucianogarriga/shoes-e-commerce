import React, { useEffect, useState } from "react"; 
import ItemDetail from "../../Pure/ItemDetail/ItemDetail";
   
const zapatilla = {
    id: 1,
    name: "Zapatillas 1",
    description: "Zapatillas Nike Talle 42",
    price: 54000,
    stock: 3
}


const ItemDetailContainer = () => {

  const [data, setData] = useState({});
  // Para guardar 1 objeto, justamente inicializamos el estado como un objeto vacio. 

  useEffect(()=> {
    const getData = new Promise((resolve) => {
        setTimeout(() => {
          // Al resolverse, debe traer el objeto
          resolve(zapatilla)
        },2000)
    });
    getData.then((res) => {
      setData(res)
      console.log(res);
    })
  },[])





  return (
    <div> 
    {/* Tomamos la data del objeto guardado en el estado,
     y lo pasamos al ItemDetail */}
      <ItemDetail data={data}/>
    </div>
  );
};

export default ItemDetailContainer;






  // const [product, setProduct] = useState();

  // useEffect(() => {
  //   const getProduct = new Promise((resolve) => {
  //     setTimeout(() => {
  //       console.log("getProduct 3:05")
  //     },2000)
  //   })
  // },[])