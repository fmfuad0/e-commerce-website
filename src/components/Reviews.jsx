import React from "react";
import { Star } from "lucide-react";

const Reviews = ({ product }) => {
    const reviews = product?.reviews || [];

    if (!reviews.length) {
        return (
            <div className="text-center py-10 text-gray-500">
                No customer reviews yet.
            </div>
        );
    }

    return (
        <div className="w-full max-w-3xl mx-auto my-10">
            <div className="space-y-6 flex gap-5">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="p-5 w-90 rounded-2xl h-full shadow-sm border border-gray-200 bg-white hover:shadow-md transition-all duration-300"
                    >
                        {/* Header: name + date */}
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-gray-800">
                                {review.reviewerName}
                            </h3>
                            <span className="text-sm text-gray-400">{new Date(review.date).toLocaleDateString()}</span>
                        </div>

                        {/* Email */}
                        <p className="text-xs text-gray-400 mb-3">
                            {review.reviewerEmail}
                        </p>

                        {/* Rating stars */}
                        <div className="flex gap-1 items-center mb-3">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    size={18}
                                    className={`${
                                        i < review.rating
                                            ? "fill-yellow-400 text-yellow-400"
                                            : "text-gray-300"
                                    }`}
                                />
                            ))}
                            <span className="ml-2 text-sm text-gray-500">{review.rating} / 5</span>
                        </div>

                        {/* Comment */}
                        <p className="text-gray-700 italic">
                            “{review.comment}”
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
