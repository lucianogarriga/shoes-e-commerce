import React, { useEffect, useState } from 'react';
import productos from '../../../data/products.json';
import ItemList from '../../Pure/ItemList/ItemList'

const ItemListContainer = () => {
 
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
       const getData = new Promise((resolve,reject) => {
        setTimeout(()=> {
            setLoading(false)
            resolve(productos)
        },2000)
       })
       getData
       .then(resolve => {
        setData(resolve);
        console.log(resolve)
       }) 
    },[])

    return (
        <>
            <h1 className='list-title'>Listado de productos</h1>
            <p className='loading-text'>
            {loading ? "Cargando lista de productos..." : null}
            </p>
            <ItemList data={data}/>
        </>
    );
}

export default ItemListContainer;
