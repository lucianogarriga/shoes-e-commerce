import React, { useContext, useState } from 'react';

const CartContext = React.createContext([]);  

// CUSTOM HOOK: export useContext & createContext
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
 
    // F1 - True o false - Producto en el carrito
    const isInCart = (id) => {
        return cart.find(product => product.id === id) ? true : false
    }

    // F2 - Eliminar carrito
    const cleanCart = () =>  setCart([]); 

    // F3 - Remover producto del carrito
    const removeProduct = (id) => {
        setCart(cart.filter(product => product.id !== id))
    }

    // F4 - Add Product - C/ logica para evitar repetidos
    /* 
        @param item Es el objeto completo con toda la info (data en ItemDetail)
        @param newQuantity Es la cantidad seleccionada por el usuario
        Luego creo un nuevo carrito, pero filtrado. Esten todos menos el seleccionado 
    */
    // const addProduct = (item, newQuantity) => {
    //     const newCart = cart.filter(product => product.id !== item.id);
    //     newCart.push({...item, quantity: quantity + newQuantity});
    //     setCart(newCart);
    // }

    const addProduct = (item, quantity) => {
        let newCart;
        let product = cart.find(product => product.id === item.id);
        if(product){
            product.quantity += quantity;
            newCart = [...cart];
        } else {
            product = {...item, quantity:quantity};
            newCart = [...cart, product];
        }
        setCart(newCart);
    }
 

    console.log("Carrito: ", cart);

    return (
        <CartContext.Provider value={{
            isInCart,
            cleanCart,
            removeProduct,
            addProduct
        }}> 
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
