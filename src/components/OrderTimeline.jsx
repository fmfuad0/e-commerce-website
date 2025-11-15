import React from "react";

/**
 * Visual progress indicator for order lifecycle:
 * placed -> paid -> shipped -> delivered
 *
 * Accepts `status` string (e.g. "paid", "pending", "shipped", "delivered")
 */
const steps = [
    { key: "Placed", label: "Placed" },
    { key: "Paid", label: "Paid" },
    { key: "Shipped", label: "Shipped" },
    { key: "Delivered", label: "Delivered" },
];


const OrderTimeline = ({ status }) => {
    console.log(status);
    // compute index of current completed step
    const idx = Math.max(0, steps.findIndex((s) => s.key === status));
    const activeIndex = idx === -1 ? 0 : idx;

    return (
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
                {steps.map((s, i) => {
                    const completed = i <= activeIndex;
                    return (
                        <div key={s.key} className="flex items-center gap-2">
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold
                  ${completed ? "bg-[var(--color-primary)] text-white" : "bg-[var(--color-border)] text-[var(--color-text)]"}
                `}
                            >
                                {i + 1}
                            </div>
                            <div className={`hidden md:block text-xs ${completed ? "text-[var(--color-primary)]" : "text-gray-500"}`}>{s.label}</div>
                            {i < steps.length - 1 && (
                                <div className={`w-8 h-0.5 ${i < activeIndex ? "bg-[var(--color-primary)]" : "bg-[var(--color-border)]"} mx-1`}></div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default OrderTimeline;
