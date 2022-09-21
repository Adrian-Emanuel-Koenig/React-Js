import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        const itemsInCart = cart.find((prod)=> prod.id === item.id)
        if (itemsInCart) {     
            itemsInCart.quantity = itemsInCart.quantity + item.quantity;
            setCart([...cart])
        } else {
            setCart([...cart, item])
        }
    }

    const clear = () => {
        setCart([])
    }

    const removeItem = (id) => {
        setCart(cart.filter((prod)=> prod.id !== id))
    }
    
    const isInCart = (id) => {
        return cart.some((prod)=> prod.id === id)
    }

    const cartQuantity = () => {
        return cart.reduce((acc, prod)=> acc += prod.quantity,0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, prod)=> acc += prod.price * prod.quantity,0)
    }

    return(
        <CartContext.Provider value={{cart, clear, addItem, removeItem, isInCart, cartQuantity, cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)