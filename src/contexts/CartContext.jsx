// src/context/CartContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import {toast, ToastContainer} from "react-toastify";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const initialCart = {
    products: [],
    total: 0,
    discountedTotal: 0,
    totalProducts: 0,
    totalQuantity: 0,
};

// helper
const recalcTotals = (products) => {
    const total = products.reduce((sum, p) => sum + (p.total ?? p.price * p.quantity), 0);
    const discountedTotal = products.reduce((sum, p) => sum + (p.discountedTotal ?? p.price * p.quantity * (1 - (p.discountPercentage ?? 0) / 100)), 0);
    const totalQuantity = products.reduce((sum, p) => sum + p.quantity, 0);
    return {
        total,
        discountedTotal,
        totalProducts: products.length,
        totalQuantity,
    };
};

export const CartProvider    = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem("cartData");
        return saved ? JSON.parse(saved) : initialCart;
    });

    const [orders, setOrders] = useState(() => {
        const saved = localStorage.getItem("ordersData");
        return saved ? JSON.parse(saved) : [];
    });

    const [showCart, setShowCart] = useState(false);

    useEffect(() => {
        localStorage.setItem("cartData", JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem("ordersData", JSON.stringify(orders));
    }, [orders]);

    const addToCart = (product, qty = 1) => {
        const existing = cart.products.find((p) => p.id === product.id);
        let updatedProducts;
        if (existing) {
            updatedProducts = cart.products.map((p) =>
                p.id === product.id
                    ? {
                        ...p,
                        quantity: p.quantity + qty,
                        total: (p.quantity + qty) * p.price,
                        discountedTotal: ((p.quantity + qty) * p.price) * (1 - (p.discountPercentage ?? 0) / 100),
                    }
                    : p
            );
        } else {
            const total = product.price * qty;
            const discountedTotal = total * (1 - (product.discountPercentage ?? 0) / 100);
            updatedProducts = [
                ...cart.products,
                { ...product, quantity: qty, total, discountedTotal },
            ];
        }
        setCart((c) => ({ ...c, ...recalcTotals(updatedProducts), products: updatedProducts }));
        toast.success(
            <div className="flex items-center gap-2">
                <span className={`text-[12px]`}>🛒 <b>{product.title} added to cart!</b></span>
                <button
                    onClick={() => setShowCart(true)}
                    className="hover:bg-[var(--color-accent)] cursor-pointer bg-[var(--color-primary)] text-white text-sm px-1 py-1 rounded mr-1"
                >
                    View Cart
                </button>
            </div>
        );
    };

    const removeFromCart = (id) => {
        const updatedProducts = cart.products.filter((p) => p.id !== id);
        setCart((c) => ({ ...c, ...recalcTotals(updatedProducts), products: updatedProducts }));
    };

    const updateQuantity = (id, delta) => {
        const updatedProducts = cart.products.map((p) => {
            if (p.id === id) {
                const newQuantity = Math.max(p.quantity + delta, 1);
                const total = p.price * newQuantity;
                const discountedTotal = total * (1 - (p.discountPercentage ?? 0) / 100);
                return { ...p, quantity: newQuantity, total, discountedTotal };
            }
            return p;
        });
        setCart((c) => ({ ...c, ...recalcTotals(updatedProducts), products: updatedProducts }));
    };

    const clearCart = () => setCart(initialCart);

    // Create order (frontend simulation)
    const createOrder = ({ customer, shippingAddress, shippingMethod, paymentMethod, coupon = null }) => {
        if (!cart.products.length) {
            toast.error("Cart is empty");
            return null;
        }

        // calculate shipping fee
        const shippingFee = shippingMethod === "express" ? 12.5 : 4.99;

        // apply coupon if any (simple flat or percent example)
        let discountAmount = 0;
        if (coupon) {
            if (coupon.type === "flat") discountAmount = coupon.value;
            if (coupon.type === "percent") discountAmount = (cart.discountedTotal * coupon.value) / 100;
        }

        const subtotal = cart.total;
        const itemsTotal = cart.discountedTotal;
        const totalPayable = Math.max(0, itemsTotal + shippingFee - discountAmount);

        const order = {
            id: `ORD-${Date.now()}`,
            createdAt: new Date().toISOString(),
            items: cart.products,
            subtotal,
            itemsTotal,
            shippingFee,
            discountAmount,
            totalPayable,
            customer,
            shippingAddress,
            shippingMethod,
            paymentMethod,
            status: "pending", // pending -> paid -> fulfilled
        };

        // save order
        setOrders((prev) => [order, ...prev]);

        // return order for caller (so payment modal can use it)
        return order;
    };

    // Mark order paid (simulate)
    const markOrderPaid = (orderId, paymentInfo = {}) => {
        setOrders((prev) => prev.map(o => o.id === orderId ? { ...o, status: "paid", paymentInfo } : o));
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                showCart,
                setShowCart,
                orders,
                createOrder,
                markOrderPaid,

            }}
        >
            {/*Alert Box*/}
            <div>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    type={'success'}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
            {children}
        </CartContext.Provider>
    );
};
