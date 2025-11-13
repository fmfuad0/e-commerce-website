import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import sample1 from "../assets/sample-1.jpg";
import sample2 from "../assets/sample-2.jpg";
import banner1 from "../assets/sub-banner-1.jpg";
import banner2 from "../assets/sub-banner-2.jpg";
import {Button} from "@mui/material";
import FeaturedCategory from "./FeaturedCategory.jsx";
import ProductsSection from "./ProductsSection.jsx";

const carouselItems = [
    <div
        className={`h-110 w-full bg-cover bg-center bg-no-repeat`}
        style={{backgroundImage: `url(${sample1})`}}
    >
        <div className={`absolute flex  top-0 left-0 h-full w-full `}>
            <div className={`w-[55%] `}></div>
            <div className={`flex flex-col text-left gap-3 w-[50%] justify-center h-[100%]` }>
                <h1 className={`text-text text-xl`}>Big Saving Days Sale</h1>
                <strong className={`text-text text-3xl leading-12`}>Women Solid Round Green T-Shirt</strong>
                <p>Starting At Only <strong className={`text-primary text-4xl mx-2`}> $59.00 </strong></p>
                <Button sx={
                    {width:"fit-content", marginY:"20px", background: "var(--color-primary)"}
                } variant={"contained"} onClick={() => {}}>SHOP NOW </Button>
            </div>
        </div>
    </div>,
    <div
        className={`h-110 w-full bg-cover bg-center bg-no-repeat`}
        style={{backgroundImage: `url(${sample2})`}}
    >
        <div className={`absolute flex  top-0 left-0 h-full w-full `}>
            <div className={`w-[55%] `}></div>
            <div className={`flex flex-col text-left gap-3 w-[50%] justify-center h-[100%]` }>
                <h1 className={`text-text text-xl`}>Big Saving Days Sale</h1>
                <strong className={`text-text text-3xl leading-12`}>Buy Modern Chair In Black Color</strong>
                <p>Starting At Only <strong className={`text-primary text-4xl mx-2`}> $79.00 </strong></p>
                <Button sx={
                    {width:"fit-content", marginY:"20px", background: "var(--color-primary)"}
                } variant={"contained"} onClick={() => {}} color="primary">SHOP NOW </Button>
            </div>
        </div>
    </div>
]


function Hero() {
    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };

    const [visibility, setVisibility] = useState(false);

    // Custom Right Arrow
    const CustomRightArrow = ({ onClick }) => (
        <button
            onClick={onClick}
            className={`absolute top-1/2 -translate-y-1/2 right-5 
                text-white bg-primary rounded-full p-2  shadow-md
                transition-all duration-500 ease-in-out
                ${visibility ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5 pointer-events-none'}
                hover:scale-105 flex justify-center hover:bg-accent/90 cursor-pointer`}
        >
            <span className="material-symbols-outlined text-[28px] ">arrow_forward</span>
        </button>
    );

    // Custom Left Arrow
    const CustomLeftArrow = ({ onClick }) => (
        <button
            onClick={onClick}
            className={`absolute flex justify-center top-1/2 -translate-y-1/2 left-5 rotate-180
                text-white bg-primary rounded-full p-2  shadow-md
                transition-all duration-500 ease-in-out
                ${visibility ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5 pointer-events-none'}
                hover:scale-105 hover:bg-accent/90 cursor-pointer`}
        >
            <span className="material-symbols-outlined text-[28px]">arrow_forward</span>
        </button>
    );

    return (
        <div className={`container  bg-bg text-text  py-10`}>
            <div className=" w-full mx-auto flex justify-between overflow-hidden rounded-lg">
                {/* Carousel Section */}
                <div
                    className="w-[65%] relative rounded-md overflow-hidden"
                    onMouseEnter={() => setVisibility(true)}
                    onMouseLeave={() => setVisibility(false)}
                >
                    <Carousel
                        customRightArrow={<CustomRightArrow />}
                        customLeftArrow={<CustomLeftArrow />}
                        swipeable={true}
                        draggable={true}
                        // showDots={true}
                        responsive={responsive}
                        ssr={true}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        keyBoardControl={true}
                        customTransition="transform 1s cubic-bezier(0.77, 0, 0.175, 1)"
                        transitionDuration={700}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        {carouselItems.map((item, index) => (
                            <div key={index}>{item}</div>
                        ))}
                    </Carousel>
                </div>

                {/* Right Section */}
                <div className="w-[30%] flex flex-col gap-5">

                    {/* Card 1 */}
                    <div className="relative group overflow-hidden h-full w-full flex flex-col rounded-lg bg-cover bg-no-repeat bg-center justify-center items-start px-5 py-5">
                        {/* Background layer */}
                        <div
                            style={{ backgroundImage: `url(${banner1})` }}
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
                        ></div>

                        {/* Foreground content */}
                        <div className="flex flex-col gap-1 justify-center z-10">
                            <p className="text-text font-[600] leading-8 text-xl max-w-[65%]">
                                Samsung Gear VR Camera
                            </p>
                            <h1 className="text-primary text-xl font-[700]">$139.00</h1>
                            <a className="underline cursor-pointer">
                                <span className="text-text hover:text-primary">Shop now</span>
                            </a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative group overflow-hidden h-full w-full flex rounded-lg bg-cover bg-no-repeat bg-center justify-end items-center py-5">
                        {/* Background layer */}
                        <div
                            style={{ backgroundImage: `url(${banner2})` }}
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
                        ></div>

                        <div className="w-[40%]"></div>
                        <div className="w-[60%] gap-1 align-middle pl-6 z-10">
                            <p className="text-text font-[600] leading-8 text-xl">
                                Marcel Dining Room Chair
                            </p>
                            <h1 className="text-primary text-xl font-[700]">$139.00</h1>
                            <a className="underline cursor-pointer">
                                <span className="hover:text-[var(--color-primary)] text-text">
                                  Shop now
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <FeaturedCategory />
        </div>
    );
}

export default Hero;
