import React from "react";
import { useCart } from "../contexts/CartContext.jsx";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import CloseIcon from "@mui/icons-material/Close";
import {useNavigate} from "react-router-dom";

const Cart = ({ showCart, onClose }) => {
    const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
    const navigate = useNavigate();

    if (!showCart) return null;

    return (
        <div
            className="fixed text-text inset-0 bg-black/30 flex justify-end z-50"
            onClick={onClose}
            style={{backgroundColor: 'rgba(0, 0, 0, 0.9)'}}
        >
            <div
                className="lg:w-130 px-10 sm:w-[380px]  bg-bg text-text  relative top-[50%] -translate-y-[50%] mr-10 lg:h-[90%] sm:h-[90vh] rounded-2xl shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between px-4 py-5 border-b">
                    <h2 className=" w-[100%] text-lg font-semibold text-center">Your Cart</h2>
                    <button
                        onClick={onClose}
                        className="hover:text-[var(--color-text)]/70 transition border rounded-full cursor-pointer"
                    >
                        <CloseIcon fontSize="small" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    {cart.products.length === 0 ? (
                        <div className="text-center text-sm py-6">
                            Your cart is empty.
                        </div>
                    ) : (
                        cart.products.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between p-3 rounded-xl shadow-sm"
                            >
                                <div className="flex items-center gap-3">
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        className="w-14 h-14 rounded-lg border object-contain"
                                    />
                                    <div>
                                        <h3 className="text-sm font-medium line-clamp-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs ">
                                            ${item.price.toFixed(2)} • {item.discountPercentage}% off
                                        </p>
                                        <div className="flex items-center mt-1">
                                            <button
                                                onClick={() => updateQuantity(item.id, -1)}
                                                className="px-2 py-0.5 rounded-l hover:bg-gray-300"
                                            >
                                                -
                                            </button>
                                            <span className="px-2 py-0.5  text-sm">
                        {item.quantity}
                      </span>
                                            <button
                                                onClick={() => updateQuantity(item.id, 1)}
                                                className="px-2 py-0.5  rounded-r hover:bg-gray-300"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-semibold ">
                                        ${item.discountedTotal.toFixed(2)}
                                    </p>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 hover:text-red-700 text-xs mt-1 flex items-center justify-end gap-0.5"
                                    >
                                        <DeleteOutlineIcon fontSize="inherit" /> Remove
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="border-t p-4 space-y-2">
                    <div className="flex justify-between text-sm ">
                        <span>Subtotal</span>
                        <span>${cart.total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm ">
                        <span>Discount</span>
                        <span className="text-green-600">
              -${(cart.total - cart.discountedTotal).toFixed(2)}
            </span>
                    </div>
                    <div className="flex justify-between font-semibold  border-t pt-2">
                        <span>Total</span>
                        <span>${cart.discountedTotal.toFixed(2)}</span>
                    </div>
                    <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-medium flex items-center justify-center gap-1 transition"
                            onClick={()=> {
                                navigate('/checkout');
                                onClose();
                            }}
                    >
                        <ShoppingCartCheckoutIcon fontSize="small" /> Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
