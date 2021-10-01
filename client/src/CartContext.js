import React, { useState, useEffect } from "react";

export const CartContext = React.createContext(
    {
        cart: [],
        setCart: () => { }
    }
);

export default function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={{
            cart,
            setCart
        }}>
            {children}
        </CartContext.Provider>

    )
}