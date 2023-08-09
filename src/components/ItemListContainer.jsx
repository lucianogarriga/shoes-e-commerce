import React from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {
    return (
        <div>
            <h1 className='list-title'>Listado de productos</h1>
            <ItemList/>
        </div>
    );
}

export default ItemListContainer;
