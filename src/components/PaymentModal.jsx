// src/components/PaymentModal.jsx
import React, { useState } from "react";
import { useCart } from "../contexts/CartContext.jsx";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom";


const PaymentModal = ({ order, paymentMethod, onClose }) => {
    const { markOrderPaid } = useCart();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const fakeProcessPayment = () =>
        new Promise((res) => setTimeout(() => res({ success: true, txnId: `TXN-${Date.now()}` }), 1500));

    const handlePay = async () => {
        setLoading(true);
        try {
            const res = await fakeProcessPayment();
            if (res.success) {
                markOrderPaid(order.id, { txnId: res.txnId, method: paymentMethod });
                toast.success(
                    <div className="flex flex-col gap-2">
                        <span>Payment successful</span>
                        <button
                            onClick={() => {
                                // navigate to order detail page — dispatch an event the app can handle or use router; here we dispatch
                                navigate(`/orders/${order.id}`);
                            }}
                            className="bg-indigo-600 text-white px-3 py-1 rounded text-sm"
                        >
                            View Order
                        </button>
                    </div>
                );
                onClose();
            } else {
                toast.error("Payment failed");
            }
        } catch (err) {
            toast.error("Payment error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bg-bg text-text inset-0 flex items-center justify-center z-60" onClick={onClose}>
            <div className="rounded-lg p-4 w-full max-w-md" onClick={e => e.stopPropagation()}>
                <h3 className="text-lg font-semibold mb-2">Complete Payment</h3>
                <p className="text-sm mb-4">Order: {order.id} — Amount: ${order.totalPayable.toFixed(2)}</p>

                {paymentMethod === "card" && (
                    <div className="space-y-2">
                        <input placeholder="Card number" className="w-full border p-2 rounded" />
                        <div className="flex gap-2">
                            <input placeholder="MM/YY" className="flex-1 border p-2 rounded" />
                            <input placeholder="CVC" className="w-24 border p-2 rounded" />
                        </div>
                        <button disabled={loading} onClick={handlePay} className="w-full mt-3 py-2 rounded">
                            {loading ? "Processing..." : `Pay $${order.totalPayable.toFixed(2)}`}
                        </button>
                    </div>
                )}

                {paymentMethod === "cod" && (
                    <div>
                        <p className="text-sm">You chose Cash on Delivery. Please have the exact amount ready.</p>
                        <button onClick={() => { markOrderPaid(order.id, { method: "cod" }); toast.success("Order placed (COD)"); onClose(); }} className="w-full mt-3 py-2 rounded">
                            Confirm Order (COD)
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PaymentModal;
