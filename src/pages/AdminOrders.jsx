
import React, { useMemo, useState } from "react";
import { useCart } from "../contexts/CartContext.jsx";
import { saveAs } from "file-saver";

/**
 * AdminOrders — minimal admin UI to view orders, filter, search, change status, export CSV
 * This uses the same CartContext orders array. In real app you'd call backend endpoints.
 */
const AdminOrders = () => {
    const { orders, setOrders: setOrdersInContext } = useCart(); // make sure your CartContext exports setOrders if you want admin to mutate
    const [query, setQuery] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");

    // local state copy (fallback if context doesn't expose setter)
    const [localOrders, setLocalOrders] = useState(orders || []);

    // choose data source (context if setter exists, else local)
    const dataSource = useMemo(() => (orders && orders.length ? orders : localOrders), [orders, localOrders]);

    // search + filter
    const filtered = dataSource.filter((o) => {
        const matchesQuery =
            !query ||
            o.id.toLowerCase().includes(query.toLowerCase()) ||
            (o.customer?.name || "").toLowerCase().includes(query.toLowerCase()) ||
            (o.customer?.email || "").toLowerCase().includes(query.toLowerCase());
        const matchesStatus = filterStatus === "all" || o.status === filterStatus;
        return matchesQuery && matchesStatus;
    });

    const changeStatus = (orderId, newStatus) => {
        // update either context or local
        if (setOrdersInContext) {
            const updated = orders.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o));
            setOrdersInContext(updated);
        } else {
            const updated = localOrders.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o));
            setLocalOrders(updated);
        }
    };

    const exportCSV = () => {
        const header = [
            "id",
            "createdAt",
            "customer_name",
            "customer_email",
            "items_count",
            "subtotal",
            "shippingFee",
            "totalPayable",
            "status",
            "paymentMethod",
        ];
        const rows = dataSource.map((o) =>
            [
                o.id,
                o.createdAt,
                o.customer?.name || "",
                o.customer?.email || "",
                o.items?.length || 0,
                o.subtotal,
                o.shippingFee,
                o.totalPayable,
                o.status,
                o.paymentMethod,
            ].join(",")
        );
        const csv = [header.join(","), ...rows].join("\n");
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        saveAs(blob, `orders-export-${Date.now()}.csv`);
    };

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Admin — Orders</h2>

                <div className="flex gap-2">
                    <button onClick={exportCSV} className="px-3 py-1 rounded bg-[var(--color-primary)] text-white">
                        Export CSV
                    </button>
                </div>
            </div>

            <div className="flex gap-3 mb-4">
                <input
                    placeholder="Search by order id / customer"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="flex-1 border border-[var(--color-border)] rounded px-3 py-2 bg-[var(--color-bg)]"
                />
                <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="border border-[var(--color-border)] rounded px-3 py-2">
                    <option value="all">All</option>
                    <option value="paid">Paid</option>
                    <option value="pending">Pending</option>
                    <option value="cancelled">Cancelled</option>
                </select>
            </div>

            <div className="space-y-3">
                {filtered.map((o) => (
                    <div key={o.id} className="p-4 border rounded flex justify-between items-center bg-[var(--color-bg)] border-[var(--color-border)]">
                        <div>
                            <div className="font-semibold">{o.id}</div>
                            <div className="text-sm text-gray-500">{new Date(o.createdAt).toLocaleString()}</div>
                            <div className="text-sm">{o.customer?.name} • {o.customer?.email}</div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="text-right mr-4">
                                <div className="font-bold text-[var(--color-primary)]">${o.totalPayable.toFixed(2)}</div>
                                <div className="text-xs text-gray-500">{o.items?.length} items</div>
                            </div>

                            <select value={o.status} onChange={(e) => changeStatus(o.id, e.target.value)} className="border border-[var(--color-border)] rounded px-2 py-1">
                                <option value="paid">paid</option>
                                <option value="pending">pending</option>
                                <option value="cancelled">cancelled</option>
                            </select>

                            <button onClick={() => navigator.clipboard.writeText(JSON.stringify(o))} title="Copy JSON" className="px-3 py-1 border rounded">
                                Copy
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminOrders;
