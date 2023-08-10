import React from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {

    let productos = [
        { id: 1, name: "Zapatillas 1", description: "Zapatillas Nike Talle 42", price: 54000,stock: 3 },
        { id: 2, name: "Zapatillas 2", description: "Zapatillas Adidas Talle 42", price: 49500,stock: 5 },
        { id: 3, name: "Zapatillas 3", description: "Zapatillas Topper Talle 42", price: 52500, stock: 4 },
        { id: 2, name: "Zapatillas 4", description: "Zapatillas Puma Talle 42", price: 38999,stock: 5 }
      ];

    return (
        <>
            <h1 className='list-title'>Listado de productos</h1>
            <ItemList productos={productos}/>
        </>
    );
}

export default ItemListContainer;
