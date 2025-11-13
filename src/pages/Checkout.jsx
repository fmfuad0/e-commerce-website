// src/pages/CheckoutPage.jsx
import React, { useState } from "react";
import { useCart } from "../contexts/CartContext.jsx";
import PaymentModal from "../components/PaymentModal.jsx";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const { cart, createOrder, clearCart } = useCart();
    const [customer, setCustomer] = useState({ name: "", email: "" });
    const [address, setAddress] = useState({ line1: "", city: "", postal: "" });
    const [shippingMethod, setShippingMethod] = useState("standard");
    const [paymentMethod, setPaymentMethod] = useState("card");
    const [couponCode, setCouponCode] = useState("");
    const [coupon, setCoupon] = useState(null);
    const [processingOrder, setProcessingOrder] = useState(null);
    const [showPayment, setShowPayment] = useState(false);
    const navigate = useNavigate();

    if (!cart.products.length) {
        return (
            <div className="p-6">
                <h2 className="text-xl font-semibold">Your cart is empty</h2>
            </div>
        );
    }

    const applyCoupon = () => {
        // demo coupon logic
        if (couponCode === "SAVE10") {
            setCoupon({ code: "SAVE10", type: "percent", value: 10 });
        } else if (couponCode === "FLAT5") {
            setCoupon({ code: "FLAT5", type: "flat", value: 5 });
        } else {
            setCoupon(null);
            alert("Invalid coupon");
        }
    };

    const handlePlaceOrder = () => {
        // basic validation
        if (!customer.name || !customer.email || !address.line1) {
            alert("Please fill required fields");
            return;
        }

        const order = createOrder({
            customer,
            shippingAddress: address,
            shippingMethod,
            paymentMethod,
            coupon,
        });

        if (order) {
            setProcessingOrder(order);
            setShowPayment(true);
        }
    };

    return (
        <div className="container w-full mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
            <div className="grid md:grid-cols-2 gap-6">
                {/* Left: form */}
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-medium mb-2">Contact & Shipping</h3>
                    <div className="space-y-3">
                        <input
                            placeholder="Full name"
                            className="w-full border p-2 rounded"
                            value={customer.name}
                            onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                        />
                        <input
                            placeholder="Email"
                            className="w-full border p-2 rounded"
                            value={customer.email}
                            onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                        />
                        <input
                            placeholder="Address line 1"
                            className="w-full border p-2 rounded"
                            value={address.line1}
                            onChange={(e) => setAddress({ ...address, line1: e.target.value })}
                        />
                        <div className="flex gap-2">
                            <input
                                placeholder="City"
                                className="flex-1 border p-2 rounded"
                                value={address.city}
                                onChange={(e) => setAddress({ ...address, city: e.target.value })}
                            />
                            <input
                                placeholder="Postal code"
                                className="w-32 border p-2 rounded"
                                value={address.postal}
                                onChange={(e) => setAddress({ ...address, postal: e.target.value })}
                            />
                        </div>

                        <div>
                            <h4 className="text-sm font-medium">Shipping method</h4>
                            <div className="flex gap-2 mt-2">
                                <label className="flex items-center gap-2">
                                    <input type="radio" checked={shippingMethod === "standard"} onChange={() => setShippingMethod("standard")} />
                                    <span className="text-sm">Standard (4–7 days)</span>
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" checked={shippingMethod === "express"} onChange={() => setShippingMethod("express")} />
                                    <span className="text-sm">Express (1–2 days)</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium">Payment method</h4>
                            <div className="flex gap-2 mt-2">
                                <label className="flex items-center gap-2">
                                    <input type="radio" checked={paymentMethod === "card"} onChange={() => setPaymentMethod("card")} />
                                    <span className="text-sm">Card</span>
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" checked={paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} />
                                    <span className="text-sm">Cash on delivery</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: order summary */}
                <div className="bg-white p-4 rounded-lg shadow flex flex-col">
                    <h3 className="font-medium mb-2">Order Summary</h3>
                    <div className="flex-1 space-y-2 overflow-auto max-h-64">
                        {cart.products.map((p) => (
                            <div key={p.id} className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <img src={p.thumbnail} alt={p.title} className="w-12 h-12 object-contain rounded" />
                                    <div>
                                        <div className="text-sm font-medium">{p.title}</div>
                                        <div className="text-xs text-gray-500">{p.quantity} × ${p.price.toFixed(2)}</div>
                                    </div>
                                </div>
                                <div className="text-sm font-semibold">${(p.discountedTotal ?? p.price * p.quantity).toFixed(2)}</div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-3 border-t pt-3 space-y-2">
                        <div className="flex justify-between text-sm">
                            <span>Subtotal</span>
                            <span>${cart.total.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span>Items Discount</span>
                            <span className="text-green-600">-${(cart.total - cart.discountedTotal).toFixed(2)}</span>
                        </div>
                        <div className="flex gap-2 mt-2">
                            <input value={couponCode} onChange={(e) => setCouponCode(e.target.value)} placeholder="Coupon code" className="flex-1 border p-2 rounded" />
                            <button onClick={applyCoupon} className="bg-gray-800 text-white px-3 rounded">Apply</button>
                        </div>

                        <div className="flex justify-between font-semibold text-lg border-t pt-2">
                            <span>Total</span>
                            <span>${(cart.discountedTotal + (shippingMethod === "express" ? 12.5 : 4.99) - (coupon?.type === "flat" ? coupon.value : coupon ? (cart.discountedTotal * coupon.value)/100 : 0)).toFixed(2)}</span>
                        </div>

                        <button onClick={handlePlaceOrder} className="w-full mt-3 bg-blue-600 text-white py-2 rounded">Place Order</button>
                    </div>
                </div>
            </div>

            {/* Payment modal - shown after createOrder */}
            {showPayment && processingOrder && (
                <PaymentModal
                    order={processingOrder}
                    paymentMethod={paymentMethod}
                    onClose={() => {
                        setShowPayment(false);
                        // optionally clear cart once paid
                        clearCart();
                        // go to order confirmation
                        navigate(`/orders/${processingOrder.id}`);
                    }}
                />
            )}
        </div>
    );
};

export default Checkout;
