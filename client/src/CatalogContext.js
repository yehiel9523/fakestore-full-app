import React, { useState, useEffect } from "react"

export const CatalogContext = React.createContext({
    products: [],
    setProducts: () => { }
});

export default function CatalogProvider({ children }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <CatalogContext.Provider value={{
            products,
            setProducts
        }}>
            {children}
        </CatalogContext.Provider>
    )
}