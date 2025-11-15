import React from "react";

/**
 * Simple skeleton card using Tailwind + animate-pulse.
 * Uses theme variables for subtle borders/backgrounds.
 */
const SkeletonOrderCard = () => {
    return (
        <div className="p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] shadow-sm animate-pulse">
            <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                    <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-40 mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-24"></div>
                </div>
                <div className="w-24">
                    <div className="h-6 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-20"></div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonOrderCard;
