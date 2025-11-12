import React from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import ListProducts from "./pages/ListProducts.jsx";
import ViewProduct from "./pages/ViewProduct.jsx";
import {ProductContextProvider} from "./contexts/ProductContext.jsx";

export default function App() {
    return (
        <ThemeProvider>
            <ProductContextProvider>
                <BrowserRouter>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Navigate to="/home" replace />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/list-products/:parent" element={<ListProducts/>} />
                            <Route path="/list-products/:parent/:category" element={<ListProducts/>} />
                            <Route path="/list-products/:parent/:category/:subcategory" element={<ListProducts />} />
                            <Route path="/products" element={<ViewProduct />} />
                            <Route path="/products/:productId" element={<ViewProduct />} />
                            <Route path="/contact" element={<span>Contact</span>} />
                            {/*<Route path="/products" element={<span>Products</span>} />*/}
                        </Routes>
                    </Layout>
                </BrowserRouter>
            </ProductContextProvider>
        </ThemeProvider>
    );
}
