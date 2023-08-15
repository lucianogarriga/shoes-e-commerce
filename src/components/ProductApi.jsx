import * as React from 'react';
import { useState } from 'react';
import { useEffect, useState } from 'react';
import './style.css';

export default function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone14&limit=12')
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results)
      setProducts(data.results)
      setIsLoading(false)
    }) 
    .catch((error) => console.log("Algo fallo: ", error))
  },[])
  


  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p> {isLoading ? "Cargando.." : "Listo"}</p>
      <div className="container">
        <div className="row">
           {products.map((product, index) =>(
             <div key={index}>
             <p>{product.title}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
