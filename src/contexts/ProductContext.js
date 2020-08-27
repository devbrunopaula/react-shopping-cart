import React, { useState, createContext } from 'react'
import data from '../data'


// Context
export const ProductContext = createContext()

// Provider
export const ProductProvider = (props) => {

    const [products, setProducts] = useState(data);

    return (
        <ProductContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductContext.Provider>
    )
}



