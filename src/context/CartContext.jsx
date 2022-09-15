import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        const itemsInCart = cart.find((prod)=> prod.id === item.id)
        if (itemsInCart) {
            const refresh = cart.map((prod)=>{
                if(prod.id === item.id){
                    return {...prod, quatity:prod.quantity + item.quantity}
                }else{
                    return prod
                }
            })
            setCart(refresh)
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

    return(
        <CartContext.Provider value={{cart, clear, addItem, removeItem, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)