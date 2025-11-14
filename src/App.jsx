import React from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import ListProducts from "./pages/ListProducts.jsx";
import ViewProduct from "./pages/ViewProduct.jsx";
import Cart from "./components/Cart.jsx";
import {CartProvider} from "./contexts/CartContext.jsx";
import Orders from "./components/Orders.jsx";
import OrderConfirmation from "./components/OrderConfirmation.jsx";
import Checkout from "./pages/Checkout.jsx";
import {AuthProvider} from "./contexts/AuthContext.jsx";

export default function App() {
    return (
        <AuthProvider >
            <ThemeProvider>
                <CartProvider>
                        <BrowserRouter>
                            <Layout>
                                <Routes>
                                    <Route path="/" element={<Navigate to="/home" replace />} />
                                    <Route path="/home" element={<Home />} />
                                    <Route path="/list-products/:parent" element={<ListProducts/>} />
                                    <Route path="/list-products/:parent/:category" element={<ListProducts/>} />
                                    <Route path="/list-products/:parent/:category/:subcategory" element={<ListProducts />} />
                                    <Route path="/products" element={<h1 className={`text-center my-10`}> Invalid Product Id</h1>} />
                                    <Route path="/products/:productId" element={<ViewProduct />} />
                                    <Route path="/cart" element={<Cart/>} />
                                    <Route path="/checkout" element={<Checkout />} />
                                    <Route path="/orders" element={<Orders />} />
                                    <Route path="/orders/:id" element={<OrderConfirmation />} />
                                    {/*<Route path="/products" element={<span>Products</span>} />*/}
                                </Routes>
                            </Layout>
                        </BrowserRouter>
                </CartProvider>
            </ThemeProvider>
        </AuthProvider>
    );
}
