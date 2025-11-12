import React, {useEffect, useRef, useState} from 'react';
import truckIcon from '../assets/delivery_truck_speed.png';
import cmsBanner1 from '../assets/cms-banner-1.jpg';
import cmsBanner2 from '../assets/cms-banner-2.jpg';
import cmsBanner3 from '../assets/cms-banner-3.jpg';
import cmsBanner4 from '../assets/cms-banner-4.jpg';
import cmsBanner5 from '../assets/cms-banner-5.jpg';
import cmsBanner6 from '../assets/cms-banner-6.jpg';
import cmsBanner7 from '../assets/cms-banner-7.jpg';
import offerBanner from '../assets/offer-banner.jpg';
import partner1 from '../assets/3.jpg';
import partner2 from '../assets/4.jpg';
import partner3 from '../assets/5.jpg';
import partner4 from '../assets/6.png';
import partner5 from '../assets/7.png';
import partner6 from '../assets/8.jpg';
import ProductCard from "./ProductCard.jsx";
import {featuredProducts, latestProducts} from "../assets/resources/products/products.js";
import Carousel from "react-multi-carousel";
import {ArrowForwardIos} from "@mui/icons-material";
import Banner from "./Banner.jsx";
import {selectedProductContext} from "../contexts/ProductContext.jsx";
function ProductsSection(props) {

    const categories = ['beauty' ,
        'fragrances' ,
        'furniture' ,
        'groceries' ,
        'home-decoration' ,
        'kitchen-accessories' ,
        'laptops' ,
        'mens-shirts' ,
        'mens-shoes' ,
        'mens-watches' ,
        'mobile-accessories' ,
        'motorcycle' ,
        'skin-care' ,
        'smartphones' ,
        'sports-accessories' ,
        'sunglasses' ,
        'tablets' ,
        'tops' ,
        'vehicle' ,
        'womens-bags' ,
        'womens-dresses' ,
        'womens-jewellery' ,
        'womens-shoes' ,
        'womens-watches' ,
    ]
    const [selectedCategory, setSelectedCategory] = useState('mobile-accessories');
    const [products, setProducts] = useState([]);
    const {setIsLoading} = selectedProductContext();

    const carouselRef = useRef();
    const carouselRef2 = useRef();
    const carouselRef3 = useRef();
    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 6 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };
    const responsiveCarousel = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 8 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };

    useEffect(() => {
        async function getProducts(){
            const res = await fetch(`https://dummyjson.com/products/category/${selectedCategory}`)
            const data = await res.json();
            console.log("Data: ", data.products)
            setProducts(data.products)
            for(let i = 0; i < data.length; i++){
                // console.log(data[i]);
            }
        }
        getProducts();
        console.log(products, selectedCategory);
    }, [selectedCategory]);


    return (
        <div className={`container py-10 w-full`}>
            <div className={`flex justify-around items-center py-7 border-red-500 border-2 rounded-md`}>
                <div className={`flex items-center gap-2 text-center`}>
                    <img src={truckIcon} alt="truck icon" className={`rotate-y-180`}/>
                    <strong className={`text-2xl tracking-widest`}>FREE SHIPPING</strong>

                </div>
                <div className={`text-center `}>
                    <div className={`text-text`}>Free Delivery Now On Your First Order and over $200</div>
                </div>
                <div className={`text-center`}>
                    <div className={`text-3xl text-primary font-bold`}>
                        - Only $200*</div>
                </div>
            </div>
            <div className={`flex items-center gap-7 py-10 text-text justify-between`}>
                <Banner image={cmsBanner1} position={"left"} title={'S22 Samsung Smartphone'} price={'250.00'}/>
                <Banner image={cmsBanner2} position={"left"} title={'Armchair Made By Shopstic'} price={'250.00'}/>
                <Banner image={cmsBanner3} position={"left"} title={' Noise Cancelling Wireless Headphones'} price={'139.00'}/>
            </div>
            <div>
                <div className="flex items-center justify-between mb-3" >
                    <div
                        className="w-[75%] flex gap-5 border-primary rounded-full border px-10 py-2 overflow-x-auto no-scrollbar overflow-y-hidden whitespace-nowrap scroll-smooth text-secondary "
                        onMouseEnter={()=>{document.body.style.overflowY="hidden"}}
                        onMouseLeave={()=>{document.body.style.overflowY="auto"}}
                        onWheel={(e) => {
                            e.preventDefault();
                            const container = e.currentTarget;
                            container.scrollLeft += e.deltaY*2;

                        }}
                    >
                        {categories.slice(10).map((category, i) => {
                            return (
                                <div
                                    className={`${selectedCategory===category? "text-primary" : "hover:text-[var(--color-primary)]"} cursor-pointer font-semibold text-sm`}
                                    onClick={()=>setSelectedCategory(category)}
                                >
                                    {category.toUpperCase().replace("-", ' ')}

                                </div>
                            )
                        })}
                    </div>


                    {/* CONTROL BUTTONS */}
                    <div className="flex gap-2 ">
                        <button
                            className="bg-white border-primary rotate-180 border cursor-pointer flex items-center justify-center  rounded-full shadow p-1 transition-all hover:text-white hover:bg-[var(--color-primary)] "
                            onClick={() => carouselRef.current.previous()}
                        >
                            <ArrowForwardIos  fontSize="inherit" />
                        </button>
                        <button
                            className="bg-white border-primary border cursor-pointer flex items-center  justify-center  rounded-full shadow p-1  transition-all hover:text-white hover:bg-[var(--color-primary)]"
                            onClick={() => carouselRef.current.next()}
                        >
                            <ArrowForwardIos fontSize="inherit" />
                        </button>
                    </div>
                </div>
                    <Carousel
                        ref={carouselRef}
                        responsive={responsive}
                        infinite={true}
                        arrows={false}
                        autoPlay={false}
                        // itemClass="px-20"
                        containerClass="pb-4 smooth-transition"
                    >

                        {products.map((product) => (
                            <ProductCard product={product} direction={`row`} setIsLoading={setIsLoading} />
                        ))}
                    </Carousel>
            </div>
            <div className="relative w-full h-[100px] overflow-hidden my-5">
                <img
                    className="h-[100px] bg-no-repeat bg-cover hover:scale-105 smooth-transition"
                    src={offerBanner} alt="Offer"
                />
                    <div className={`absolute flex-row top-[50%] left-[50%] gap-5 -translate-x-[50%] -translate-y-[50%] mx-auto flex `}>
                        <strong className={`text-white text-4xl`}>WATCH</strong>
                        <div className={`text-white flex flex-col text-left text-sm`}>
                            <h1> M6 Smart Band 2.3 – Fitness Band</h1>
                            <h1> Men’s and Women’s Health Tracking, Red Strap</h1>
                        </div>
                    </div>
            </div>
            <div>
                <div className="px-10 flex justify-between items-center mb-3" >
                    <div className="gap-10 flex items-center py-2 text-lg text-text text-primary font-semibold">
                        LATEST PRODUCTS
                    </div>
                    <div className="flex gap-2 ">
                        <button
                            className="bg-white border-primary rotate-180 border cursor-pointer flex items-center justify-center  rounded-full shadow p-1 transition-all hover:text-white hover:bg-[var(--color-primary)] "
                            onClick={() => carouselRef2.current.previous()}
                        >
                            <ArrowForwardIos  fontSize="inherit" />
                        </button>
                        <button
                            className="bg-white border-primary border cursor-pointer flex items-center  justify-center  rounded-full shadow p-1  transition-all hover:text-white hover:bg-[var(--color-primary)] smooth-transition"
                            onClick={() => carouselRef2.current.next()}
                        >
                            <ArrowForwardIos fontSize="inherit" />
                        </button>
                    </div>
                </div>
                <Carousel
                    ref={carouselRef2}
                    responsive={responsive}
                    infinite={true}
                    arrows={false}
                    autoPlay={false}
                    // itemClass="px-20"
                    containerClass="pb-4"
                >

                    { latestProducts.map((product) => (
                        <ProductCard product={product} direction={'row'} setIsLoading={setIsLoading} />
                    ))}
                </Carousel>
            </div>
            <div id={`lg-banner`} className={`py-10 justify-around flex flex-row gap-10`}>
                <div className={`w-[685px] h-[260px]`}>
                    <Banner image={cmsBanner4} price={''} tag={'Save Up To 20% Off'} title={'Santa Lucia Three Seater Sofa'} position={'right'} />
                </div>
                <div className={`w-[685px] h-[260px]`}>
                    <Banner image={cmsBanner5} price={''} tag={'Best Online Discount'} title={'Woman In Red Crew Neck T-shirt'} position={'right'} />
                </div>

            </div>
            <div id={`featured-products`} className={``}>
                <div className="flex items-center justify-between mb-3 " >
                    <div className="gap-10 px-10 flex items-center py-2 text-lg text-text text-primary font-semibold">
                        FEATURED PRODUCTS
                    </div>

                    {/* CONTROL BUTTONS */}
                    <div className="flex gap-2 ">
                        <button
                            className="bg-white border-primary rotate-180 border cursor-pointer flex items-center justify-center  rounded-full shadow p-1 transition-all hover:text-white hover:bg-[var(--color-primary)] "
                            onClick={() => carouselRef3.current.previous()}
                        >
                            <ArrowForwardIos  fontSize="inherit" />
                        </button>
                        <button
                            className="bg-white border-primary border cursor-pointer flex items-center  justify-center  rounded-full shadow p-1  transition-all hover:text-white hover:bg-[var(--color-primary)]"
                            onClick={() => carouselRef3.current.next()}
                        >
                            <ArrowForwardIos fontSize="inherit" />
                        </button>
                    </div>
                </div>
                <Carousel
                    ref={carouselRef3}
                    responsive={responsive}
                    infinite={true}
                    arrows={false}
                    autoPlay={false}
                    // itemClass="px-20"
                    containerClass="pb-4 smooth-transition border border-red-500 border-2 rounded-md"
                >

                    {featuredProducts.map((product) => (
                        <ProductCard product={product} direction={`row`} setIsLoading={setIsLoading} />
                    ))}
                </Carousel>
            </div>
            <div id={`lg-banner`} className={`py-10 justify-around flex flex-row gap-10`}>
                <div className={`w-[685px] h-[260px]`}>
                    <Banner image={cmsBanner6} price={''} tag={'20 Days Return Products'} title={'Mobile Shope-Smart Watch T-55'} position={'right'} />
                </div>
                <div className={`w-[685px] h-[260px]`}>
                    <Banner image={cmsBanner7} price={''} tag={'Save Up To 30% Off'} title={'Decoration Design Lamp Light'} position={'right'} />
                </div>
            </div>
            <div id={`partners`} className={`flex justify-around pb-10 `}>
                <img src={partner1} alt="partner" className={`hover:-rotate-10 smooth-transition cursor-pointer`}/>
                <img src={partner2} alt="partner" className={`hover:rotate-10 smooth-transition cursor-pointer`}/>
                <img src={partner3} alt="partner" className={`hover:-rotate-10 smooth-transition cursor-pointer`}/>
                <img src={partner4} alt="partner" className={`hover:rotate-10 smooth-transition cursor-pointer`}/>
                <img src={partner5} alt="partner" className={`hover:-rotate-10 smooth-transition cursor-pointer`}/>
                <img src={partner6} alt="partner" className={`hover:rotate-10 smooth-transition cursor-pointer`}/>

            </div>
            <hr style={{color: 'rgba(0, 0, 0, 0.2)'}} />
            <div className="flex items-center justify-between">

            </div>
        </div>
    );
}

export default ProductsSection;