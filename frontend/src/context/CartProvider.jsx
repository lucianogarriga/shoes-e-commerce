import React, { useContext, useState } from 'react';

const CartContext = React.createContext([]);  

// CUSTOM HOOK: export useContext & createContext
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
 
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

    const totalPrice = () => {
        return cart.reduce((prev,act) => prev + act.quantity * act.price, 0);
    }

    // Funcion p/ llevar contador en el CartWidget
    const totalProducts = () => {
        return cart.reduce((acc, prodActual) => acc + prodActual.quantity, 0);
    }

    return (
        <CartContext.Provider value={{
            isInCart,
            cleanCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            cart,
            filteredProducts,
            setFilteredProducts
        }}> 
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
