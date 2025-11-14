// src/pages/OrdersPage.jsx
import React from "react";
import { useCart } from "../contexts/CartContext.jsx";
import { Link } from "react-router-dom";

const Orders = () => {
    const { orders } = useCart();

    return (
        <div className="p-6 max-w-4xl bg-bg text-text  mx-auto">
            <h1 className="text-2xl font-semibold mb-4">Your Orders</h1>
            {orders.length === 0 ? (
                <div className="text-gray-500">No orders yet.</div>
            ) : (
                <div className="space-y-3">
                    {orders.map(o => (
                        <div key={o.id} className=" p-3 rounded shadow flex justify-between items-center">
                            <div>
                                <div className="font-medium">{o.id}</div>
                                <div className="text-sm text-gray-500">{new Date(o.createdAt).toLocaleString()}</div>
                            </div>
                            <div className="text-right">
                                <div className="font-semibold">${o.totalPayable.toFixed(2)}</div>
                                <div className="text-sm text-green-600 uppercase tracking-widest">{o.status}</div>
                                <Link to={`/orders/${o.id}`} className="text-indigo-600 text-sm mt-1 inline-block">View</Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Orders;
