import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext.jsx";
import SkeletonOrderCard from "../components/skeletons/SkeletonOrderCard.jsx";

const Orders = () => {
    const { orders } = useCart();
    const [isLoading, setIsLoading] = useState(true);

    // Simulate loading (or replace with real API call)
    useEffect(() => {
        const t = setTimeout(() => setIsLoading(false), 600);
        return () => clearTimeout(t);
    }, [orders]);

    const statusColors = {
        Paid: "bg-[var(--color-primary)]/15 text-[var(--color-primary)]",
        Placed: "bg-[var(--color-primary)]/15 text-[var(--color-primary)]",
        Shipped: "bg-[var(--color-accent)]/15 text-[var(--color-accent)]",
        Delivered: "bg-[var(--color-success)]/15 text-[var(--color-success)]",
        Cancelled: "bg-[var(--color-danger)]/15 text-[var(--color-danger)]",
    };

    return (
        <div className="p-6 max-w-5xl mx-auto text-[var(--color-text)]">
            <h1 className="text-3xl font-bold mb-6">Your Orders</h1>

            {isLoading ? (
                <div className="space-y-4">
                    <SkeletonOrderCard />
                    <SkeletonOrderCard />
                    <SkeletonOrderCard />
                </div>
            ) : orders.length === 0 ? (
                <div className="text-gray-500 text-lg text-center mt-20">
                    You have no orders yet.
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-5">
                    {orders.map((order) => (
                        <Link
                            key={order.id}
                            to={`/orders/${order.id}`}
                            className="
                block p-5 rounded-xl border
                bg-[var(--color-bg)] border-[var(--color-border)]
                shadow-sm hover:shadow-md transition-all hover:-translate-y-1
              "
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <div className="text-sm text-secondary font-semibold">Order ID</div>
                                    <div className="text-lg font-semibold">{order.id}</div>
                                    <div className="text-sm mt-1 text-gray-500">
                                        {new Date(order.createdAt).toLocaleString()}
                                    </div>
                                    <span
                                        className={`
                      inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold 
                      ${statusColors[order.status] || "bg-gray-100 text-gray-700"}
                    `}
                                    >
                    {order.status.toUpperCase()}
                  </span>
                                </div>

                                <div className="text-right">
                                    <div className="text-sm text-gray-400">Total Payable</div>
                                    <div className="text-xl font-bold text-[var(--color-primary)]">
                                        ${order.totalPayable.toFixed(2)}
                                    </div>
                                    <div className="text-sm text-gray-500 mt-1">{order.items.length} items</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Orders;
