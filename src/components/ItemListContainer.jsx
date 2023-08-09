import React from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {
    return (
        <div>
            <h1 className='text-center m-4'>Listado de productos</h1>
            <ItemList/>
        </div>
    );
}

export default ItemListContainer;
