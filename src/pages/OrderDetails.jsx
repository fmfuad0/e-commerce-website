import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext.jsx";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SkeletonOrderDetails from "../components/skeletons/SkeletonOrderDetails.jsx";
import { downloadInvoiceFromNode, downloadInvoiceText } from "../utils/invoiceGenerator.js";
import OrderTimeline from "../components/OrderTimeline.jsx";
// import OrderTimeline from "../components/OrderTimeline.jsx";

const OrderDetails = () => {
    const { id } = useParams();
    const { orders, setOrders } = useCart();
    const [isLoading, setIsLoading] = useState(true);
    const [order, setOrder] = useState(null);
    const nodeRef = useRef(null);
    useEffect(() => {
        setIsLoading(true);
        const t = setTimeout(() => {
            const found = orders.find((o) => String(o.id) === String(id));
            setOrder(found || null);
            setIsLoading(false);
        }, 500);
        return () => clearTimeout(t);
    }, [orders, id]);

    if (isLoading) {
        return (
            <div className="p-6 max-w-5xl mx-auto text-[var(--color-text)]">
                <SkeletonOrderDetails />
            </div>
        );
    }

    if (!order) {
        return <div className="p-6 text-center text-red-500">Order not found.</div>;
    }

    return (
        <div className="p-6 max-w-6xl mx-auto text-[var(--color-text)]">
            <Link to="/orders" className="text-[var(--color-primary)] hover:underline text-sm inline-flex items-center gap-2">
                <ArrowBackIosNewIcon sx={{ fontSize: "14px" }} /> Back to Orders
            </Link>

            <div className="mt-4 mb-6 flex items-center justify-between w-full">
                <div>
                    <h1 className="text-2xl font-bold">Order #{order.id}</h1>
                    <p className="text-gray-500 text-sm">{new Date(order.createdAt).toLocaleString()}</p>
                </div>

                <div className="flex items-center gap-3">
                    <OrderTimeline status={order.status} />
                    <button
                        onClick={() => downloadInvoiceFromNode(nodeRef.current, `invoice-${order.id}.pdf`)}
                        className="px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg shadow hover:opacity-90 cursor-pointer"
                    >
                        Download Invoice (Image)
                    </button>

                    <button
                        onClick={() => downloadInvoiceText(order, `invoice-${order.id}.pdf`)}
                        className="px-4 py-2 border border-[var(--color-border)] rounded-lg cursor-pointer"
                    >
                        Download Invoice (Text)
                    </button>
                </div>
            </div>

            {/* Invoice area to snapshot */}
            <div ref={nodeRef} className="p-6 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <div className="font-semibold text-lg">Invoice</div>
                        <div className="text-sm text-gray-500">Order ID: {order.id}</div>
                    </div>
                    <div className="text-right">
                        <div className="font-medium">Total Paid</div>
                        <div className="text-xl font-bold text-[var(--color-primary)]">${order.totalPayable.toFixed(2)}</div>
                        <div className="text-sm text-gray-500">Method: {order.paymentMethod}</div>
                    </div>
                </div>

                {/* Items */}
                <div className="space-y-3 mb-6">
                    {order.items.map((it) => (
                        <div key={it.id} className="flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <img src={it.thumbnail} alt={it.title} className="w-16 h-16 rounded object-cover border" />
                                <div>
                                    <div className="font-semibold">{it.title}</div>
                                    <div className="text-sm text-gray-500">Qty: {it.quantity}</div>
                                </div>
                            </div>
                            <div className="font-semibold">${(it.price * it.quantity).toFixed(2)}</div>
                        </div>
                    ))}
                </div>

                {/* summary */}
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded border border-[var(--color-border)]">
                        <h3 className="font-semibold mb-2">Customer</h3>
                        <div className="text-sm">{order.customer?.name}</div>
                        <div className="text-sm text-gray-500">{order.customer?.email}</div>

                        <h3 className="font-semibold mt-4 mb-2">Shipping Address</h3>
                        <div className="text-sm">{order.shippingAddress.line1}</div>
                        <div className="text-sm text-gray-500">{order.shippingAddress.city} — {order.shippingAddress.postal}</div>
                    </div>

                    <div className="p-4 rounded border border-[var(--color-border)]">
                        <h3 className="font-semibold mb-2">Payment Summary</h3>
                        <div className="flex justify-between"><span>Subtotal</span><span>${order.subtotal.toFixed(2)}</span></div>
                        <div className="flex justify-between"><span>Items Total</span><span>${order.itemsTotal.toFixed(2)}</span></div>
                        <div className="flex justify-between"><span>Discount</span><span className="text-red-500">-${order.discountAmount.toFixed(2)}</span></div>
                        <div className="flex justify-between"><span>Shipping</span><span>${order.shippingFee.toFixed(2)}</span></div>
                        <hr className="my-3 border-[var(--color-border)]" />
                        <div className="flex justify-between font-bold text-[var(--color-primary)]"><span>Total</span><span>${order.totalPayable.toFixed(2)}</span></div>

                        <div className="text-xs text-gray-500 mt-3">Txn ID: {order.paymentInfo?.txnId}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
