import React, { createContext, useState } from "react";

export const ContextCart = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (Products) => {
        setCart(prevCart => {
            const existingProduct = prevCart.find(item => item.id === Products.id)
            if(existingProduct){
                // Atualiza a quantidade se o produto já estiver no carrinho
                return prevCart.map(item => 
                    item.id === Products.id ? {...item, quantity: item.quantity + 1} : item
                )
            }else {
                // Adiciona o novo produto ao carrinho
                return [...prevCart, {...Products, quantity: 1}]
            }
        })
    }

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId))
    }

    const updateQuantity = (productId, quantity) => {
        setCart(prevCart => 
            prevCart.map(item => 
                item.id === productId ? {...item, quantity} : item
                )
            )
    }

    return(
        <ContextCart.Provider value={{cart, addToCart, removeFromCart, updateQuantity}}>
            {children}
        </ContextCart.Provider>
    )
}