import React, { useEffect, useState } from 'react';
import productos from '../../../data/products.json';
import ItemList from '../../Pure/ItemList/ItemList'
import Subtitle from '../../Pure/Subtitle/Subtitle';

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
            <Subtitle text="Ofertas"/>
            <p className='loading-text'>
            {loading ? "Cargando lista de productos..." : null}
            </p>
            <ItemList data={data}/>
        </>
    );
}

export default ItemListContainer;
