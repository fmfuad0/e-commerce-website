import React, { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    return (
        <ProductContext.Provider value={{ product, setProduct, isLoading, setIsLoading }}>
            {children}
        </ProductContext.Provider>
    );
};

export const selectedProductContext = () => useContext(ProductContext);
