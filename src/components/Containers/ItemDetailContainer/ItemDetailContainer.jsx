import React, { useEffect, useState } from "react"; 
import ItemDetail from "../../Pure/ItemDetail/ItemDetail";
import styles from "../../../index.css";
   
const zapatilla = {
    id: 1,
    name: "Zapatillas 1",
    description: "En enero de 2006 Nike ha lanzado el nuevo modelo Air Max 360, un nuevo zapato con un diseño que presenta el cojinete visible a 360 grados.      En septiembre de 2006, Nike presenta el paquete Especial one time only pack que fundió las 360 con 3 otros clásicos modelos de Air Max: las Air Max 90, las Air Max 95 y las Air Max 97. En esta edición especial, la intersuola revolucionaria de las 360 va a sustituir aquella tradicional de los tres modelos clásicos. Los zapatos se producen en tres colores: rojo para las Air Max 90, verde-amarillo para las Air Max 95 y gris-plata para las 97.",
    price: 54000,
    stock: 3,
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
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
   