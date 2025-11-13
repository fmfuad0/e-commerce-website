// src/pages/OrderConfirmation.jsx
import React from "react";
import { useCart } from "../contexts/CartContext.jsx";
import { useParams } from "react-router-dom";

const OrderConfirmation = () => {
    const { orders } = useCart();
    const { id } = useParams();
    const order = orders.find((o) => o.id === id);

    if (!order) {
        return <div className="p-6">Order not found.</div>;
    }

    return (
        <div className="p-6 max-w-3xl bg-bg text-text  mx-auto">
            <h1 className="text-2xl font-semibold mb-4">Order {order.id}</h1>
            <p className="text-sm mb-4">Status: <strong>{order.status}</strong></p>
            <div className=" p-4 rounded shadow">
                <h3 className="font-medium mb-2">Items</h3>
                {order.items.map(i => (
                    <div key={i.id} className="flex justify-between py-2 border-b">
                        <div>
                            <div className="font-medium">{i.title}</div>
                            <div className="text-xs ">{i.quantity} × ${i.price.toFixed(2)}</div>
                        </div>
                        <div className="font-semibold">${(i.discountedTotal ?? i.price * i.quantity).toFixed(2)}</div>
                    </div>
                ))}

                <div className="mt-3 space-y-1">
                    <div className="flex justify-between"><span>Items Total</span><span>${order.itemsTotal.toFixed(2)}</span></div>
                    <div className="flex justify-between"><span>Shipping</span><span>${order.shippingFee.toFixed(2)}</span></div>
                    <div className="flex justify-between"><span>Discount</span><span>-${order.discountAmount.toFixed(2)}</span></div>
                    <div className="flex justify-between font-semibold border-t pt-2"><span>Total</span><span>${order.totalPayable.toFixed(2)}</span></div>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmation;
