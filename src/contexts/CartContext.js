import React, { createContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorate'





export const CartContext = createContext()




export const CartProvider = (props) => {

    const [cart, setCart] = useLocalStorage('Items', [])


    return (
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )
}


