import React from "react";

const SkeletonOrderDetails = () => {
    return (
        <div className="space-y-6">
            <div className="h-8 bg-gray-300 rounded w-48 animate-pulse"></div>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div className="h-40 bg-gray-300 rounded animate-pulse"></div>
                    <div className="h-12 bg-gray-300 rounded animate-pulse"></div>
                    <div className="h-12 bg-gray-300 rounded animate-pulse"></div>
                </div>
                <div className="space-y-4">
                    <div className="h-12 bg-gray-300 rounded animate-pulse"></div>
                    <div className="h-12 bg-gray-300 rounded animate-pulse"></div>
                    <div className="h-12 bg-gray-300 rounded animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonOrderDetails;
