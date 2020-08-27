import React, { createContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorate'



// Context
export const CartContext = createContext()

// Provider
export const CartProvider = (props) => {

    const [cart, setCart] = useLocalStorage('Items', [])


    return (
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )
}


