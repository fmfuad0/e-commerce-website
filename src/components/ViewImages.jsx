import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import CloseIcon from "@mui/icons-material/Close";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import { motion } from "framer-motion";

const ImageViewer = ({ images = [], onClose, index}) => {
    const [currentIndex, setCurrentIndex] = useState(index);
    const [scale, setScale] = useState(1);
    const [isFullscreen, setIsFullscreen] = useState(false);

    if (!images || images.length === 0) return null;

    const handleNext = () => {
        if (currentIndex < images.length - 1) setCurrentIndex((prev) => prev + 1);
    };

    const handlePrev = () => {
        if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
    };

    const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.25, 3));
    const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.25, 1));
    const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

    return (
        <div
            className={`fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center overflow-hidden transition-all`}
        >
            {/* 🔘 Close Button */}
            <button
                onClick={()=> {
                    onClose();
                    console.log('clicked');
                }}
                className="relative top-5 left-[40%] cursor-pointer px-2 rounded-full border text-white hover:text-red-400 transition-all text-4xl z-100"
                title="Close"
            >
                <CloseIcon />
            </button>

            {/* 🖼️ Image Container */}
            <div className="relative flex items-center justify-center w-full h-full max-h-[90vh] px-10">
                {/* ◀ Prev */}
                {currentIndex > 0 && (
                    <button
                        onClick={handlePrev}
                        className="absolute left-8 text-white text-5xl hover:text-[var(--color-accent)] transition-all select-none"
                        title="Previous"
                    >
                        <ChevronLeftIcon fontSize={'large'} className={`border rounded-full cursor-pointer`}/>
                    </button>
                )}

                {/* Main Image */}
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`Image ${currentIndex + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, scale }}
                    transition={{ duration: 0.3 }}
                    className={`object-contain rounded-lg shadow-lg ${
                        isFullscreen ? "w-screen h-screen" : "max-w-[90vw] max-h-[80vh]"
                    }`}
                />

                {/* ▶ Next */}
                {currentIndex < images.length - 1 && (
                    <button
                        onClick={handleNext}
                        className="absolute right-8 text-white text-5xl hover:text-[var(--color-accent)] transition-all select-none"
                        title="Next"
                    >
                        <ChevronRightIcon fontSize={'large'} className={`border rounded-full cursor-pointer`}/>
                    </button>
                )}
            </div>

            {/* 🔧 Controls */}
            <div className="absolute bottom-10 flex items-center justify-center gap-6 text-white text-3xl bg-[var(--color-bg)] bg-opacity-50 px-6 py-3 rounded-full backdrop-blur-md">
                <button onClick={handleZoomOut} className="hover:text-[var(--color-accent)]">
                    <ZoomOutIcon className={`cursor-pointer`}/>
                </button>
                <button onClick={handleZoomIn} className="hover:text-[var(--color-accent)]">
                    <ZoomInIcon className={`cursor-pointer`}/>
                </button>
                <button onClick={toggleFullscreen} className="hover:text-[var(--color-accent)]">
                    <FullscreenIcon className={`cursor-pointer`}/>
                </button>
            </div>

            {/* 🧭 Counter */}
            {images.length > 1 && (
                <p className="absolute bottom-4 text-gray-300 text-sm tracking-wide">
                    {currentIndex + 1} / {images.length}
                </p>
            )}
        </div>
    );
};

export default ImageViewer;
