import React from 'react';
import Item from "./Item";

const ItemDetail = ({item}) => {
    return ( 
         <div className='container'>
            <div className='producto-detalle'>
                <img src={item.image} alt={item.titulo}/>
                <div>
                    <h3 className='titulo'>{item.titulo}</h3>
                </div>
            </div>
         </div>
    );
}

export default ItemDetail;
 