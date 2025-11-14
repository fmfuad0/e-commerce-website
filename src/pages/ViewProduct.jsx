import React, { useEffect, useState, useRef } from "react";
import { Rating } from "@mui/material";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import CompareOutlinedIcon from "@mui/icons-material/CompareOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import Reviews from "../components/Reviews.jsx";
import { ArrowForwardIos } from "@mui/icons-material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { latestProducts } from "../assets/resources/products/products.js";
import ProductCard from "../components/ProductCard.jsx";
import { useCart } from "../contexts/CartContext.jsx";
import { useParams, useNavigate } from "react-router-dom";

const ViewProduct = () => {
    const { productId } = useParams();
    const { addToCart } = useCart();
    const [product, setProduct] = useState({});
    const [similarProducts, setSimilarProducts] = useState([]);
    const [mainImage, setMainImage] = useState("");
    const [count, setCount] = useState(1);
    const [tab, setTab] = useState("Description");
    const [isLoading, setIsLoading] = useState(true);
    const carouselRef = useRef(null);
    const carouselRef2 = useRef(null);
    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 6 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };

    if(!product)return null;
    // Fetch product
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products/${productId}`);
                const data = await res.json();
                setProduct(data);
                console.log(data);
                setMainImage(data.thumbnail);
                const simRes = await fetch(
                    `https://dummyjson.com/products/category/${data.category}`
                );
                const simData = await simRes.json();
                setSimilarProducts(simData.products || []);
            } catch (err) {
                console.error("Error loading product:", err);
            }
        };

        getProduct();
        window.scrollTo(0, 0);
        setTimeout(()=>setIsLoading(false), 1000);
    }, [productId]);

    return (
        <div className="container bg-bg text-text ">
            {!isLoading?
                <div className={`flex h-full py-10 w-full`}>

                    <div className={`flex flex-col gap-5 my-10 px-5 items-center justify-start`}>
                        {product.images.map(image => (
                            <img src={image} alt=""
                                 className={`w-30 border border-gray-300 ${mainImage === image ? "border-accent" : ""}`}
                                 onClick={() => setMainImage(image)}/>
                        ))}
                    </div>
                    <div className={`flex items-start justify-between gap-7`}>
                        <div className={`w-180 h-120 border-gray-300 border rounded-md bg-no-repeat bg-contain`}>
                            <img src={mainImage} className={`w-full h-full`} alt={''}/>
                        </div>
                        <div className={`flex flex-col gap-2 px-5 justify-start`}>
                            <div className={`flex flex-col gap-2 border-b-1 border-b-gray-300 pb-2`}>
                                <Rating defaultValue={product.rating} readOnly precision={0.5}/>
                                <h1 className={`text-2xl font-[500]`}>{product.title}</h1>
                                <p className="text-sm font-[500] text-gray-700 w-[80%] leading-7">{product.description}</p>
                            </div>
                            <div className={`flex flex-col text-[14px] gap-1 pb-2 tracking-wider`}>
                            <span className={`flex`}>
                                <span className={`font-[500]`}>Brand :</span><h1 className={`ml-1`}>{product.brand}</h1>
                            </span>
                                <span className={`flex`}>
                                <span className={`font-[500]`}>Availability :</span><h1
                                    className={`ml-1`}>{product.availabilityStatus}</h1>
                            </span>
                                <span className={`flex`}>
                                <span className={`font-[500]`}>Warranty :</span><h1
                                    className={`ml-1`}>{product.warrantyInformation}</h1>
                            </span>
                                <span className={`flex`}>
                                <span className={`font-[500]`}>Shipping  :</span><h1
                                    className={`ml-1`}>{product.shippingInformation}</h1>
                            </span>
                                <span className={`flex`}>
                                <span className={`font-[500]`}>Return Policy  :</span><h1
                                    className={`ml-1`}>{product.returnPolicy}</h1>
                            </span>
                                <h1 className={`font-[600] mt-2`}>Hurry up ! Only <span
                                    className={`text-red-500`}>{product.stock}</span> items left...</h1>
                                <div className={`bg-gray-300 w-[50%] mb-2`}>
                                    <div className={`bg-green-500 py-1 rounded-full`}
                                         style={{width: product.stock.toString() + '%'}}></div>
                                </div>
                                <span
                                    className={`text-3xl font-semibold text-[var(--color-primary)] tracking-wide`}>${product.price}</span>
                                <span className={`font-semibold text-gray-500 tracking-widest`}>Instead of <span
                                    className={`text-red-500 line-through`}>${(product.price + product.discountPercentage)}</span></span>
                                <div className={`flex justify-start gap-3 mt-2`}>
                                    <div className={`flex items-center justify-center border border-gray-500`}>
                                        <div className={`font-[500] w-10 text-center`}>{count}</div>
                                        <div className={`flex flex-col border-l-1 border-gray-500`}>
                                            <ArrowDropUpOutlinedIcon
                                                className={`border-b-gray-500 border-b-1 cursor-pointer active:bg-[var(--color-primary)]`}
                                                onClick={() => setCount(count + 1)}/>
                                            <ArrowDropDownOutlinedIcon
                                                className={` cursor-pointer active:bg-[var(--color-primary)]`}
                                                onClick={() => setCount(count > 1 ? count - 1 : 1)}/>
                                        </div>
                                    </div>
                                    <Button
                                        sx={{
                                            backgroundColor: 'var(--color-primary)', color: 'white',
                                            padding: '0 50px',
                                            letterSpacing: '1.5px',
                                            ":hover": {backgroundColor: 'black'}
                                        }}
                                        title={'Add to Cart'}
                                        onClick={() => {
                                            addToCart(product, count);
                                            setCount(1)
                                        }}

                                    >Add To Cart</Button>
                                </div>
                                <div className={`flex items-center gap-5 my-2`}>
                                    <div
                                        className={` bg-[var(--color-primary)]/20 cursor-pointer flex justify-around items-center text-[12px] font-[500] tracking-widest hover:bg-[var(--color-primary)]/40 px-2 py-1 rounded-md`}>
                                        <FavoriteBorderIcon/> Add to wishlist
                                    </div>
                                    <div
                                        className={` bg-[var(--color-primary)]/20 cursor-pointer flex justify-around items-center text-[12px] font-[500] tracking-widest hover:bg-[var(--color-primary)]/40 px-2 py-1 rounded-md`}>
                                        <CompareOutlinedIcon/> Add to compare
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> :
                <div className={`loader mx-auto`}></div>
            }
            {!isLoading ?
                <div className="flex flex-col gap-5">
                    <div
                        className={`flex py-7 gap-5 text-lg font-semibold text-gray-500 px-10 tracking-wider  items-center justify-start border border-gray-300`}>
                    <span
                        className={`${tab === 'Description' ? "text-[var(--color-primary)] border-b-1" : ""}  cursor-pointer`}
                        onClick={() => setTab('Description')}>Description</span>
                        <span
                            className={`${tab === 'Reviews' ? "text-[var(--color-primary)] border-b-1" : ""}  cursor-pointer`}
                        onClick={() => setTab('Reviews')}>Reviews</span>
                </div>
                {tab === 'Description' ?
                    <div
                        className={` bg-bg text-text  border border-gray-300 tracking-widest rounded-md text-[14px] font-[500] p-10 leading-5`}
                    >
                        <h1 className={`text-lg`}>Product Description : </h1>
                        <p className={`text-center my-5`}>The best is yet to come! Give your walls a voice with a framed
                            poster. This aesthethic, optimistic poster will look great in your desk or in an open-space
                            office. Painted wooden frame with passe-partout for more depth. We denounce with righteous
                            indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of
                            the
                            moment, so blinded by desire that they cannot forese deleniti atque corrupti quos dolores et
                            quas molestias excepturi.</p>
                        <p className={`font-bold my-2`}>Lorem Ipsum is not simply random text</p>
                        <p className={`my-4`}>Many desktop publishing packages and web page editors now use Lorem Ipsum
                            as
                            their default model text, and a search for 'lorem ipsum' will uncover many web sites still
                            in
                            their infancy. Various versions have evolved over the years, sometimes by accident,
                            sometimes on
                            purpose (injected humour and the like).</p>
                        <p className={`my-4`}>Fashion has been creating well-designed collections since 2010. The brand
                            offers feminine designs delivering stylish separates and statement dresses which has since
                            evolved into a full ready-to-wear collection in which every item is a vital part of a
                            woman's
                            wardrobe. The result? Cool, easy, chic looks with youthful elegance.</p>
                        <ul className={`detailsList  px-7 mt-5 flex flex-col gap-1`}>
                            <li>Bomber jacket</li>
                            <li>Black colourway</li>
                            <li>Ribbed high neckline Knit waistband cuffs and collar</li>
                            <li>Zipper closure with a storm flap</li>
                            <li>Durable metal zipper with Alpha branding and logo</li>
                            <li>Two snap closure hand pockets</li>
                            <li>Signature zippered utility-pencil pocket on the sleeve with the Remove Before Flight
                                ribbon
                                keychain
                            </li>
                            <li>Regular fit</li>
                            <li>Main: 100% flight nylon</li>
                            <li>Lining: 100% nylon lining</li>
                            <li>Fill: 100% polyester</li>
                            <li>Style guide Pair with a crew neck, jeans and sneakers</li>
                        </ul>
                    </div> :
                    <Reviews product={product}/>
                }
            </div> :
                ''
            }
            {!isLoading?
                <div className={`py-5`}>
                <div className=" flex justify-between items-center mb-3">
                    <div className="gap-10 flex items-center py-2 text-lg text-text font-semibold">
                        You Might Also Like
                    </div>
                    <div className="flex gap-2 ">
                        <button
                            className="bg-white border-primary rotate-180 border cursor-pointer flex items-center justify-center  rounded-full shadow p-1 transition-all hover:text-white hover:bg-[var(--color-primary)] "
                            onClick={() => carouselRef.current.previous()}
                        >
                            <ArrowForwardIos fontSize="inherit"/>
                        </button>
                        <button
                            className="bg-white border-primary border cursor-pointer flex items-center  justify-center  rounded-full shadow p-1  transition-all hover:text-white hover:bg-[var(--color-primary)] smooth-transition"
                            onClick={() => carouselRef.current.next()}
                        >
                            <ArrowForwardIos fontSize="inherit"/>
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
                    containerClass="pb-4"
                >

                    {latestProducts.map((product) => (
                        <ProductCard product={product} direction={'row'} setIsLoading={setIsLoading}/>
                    ))}
                </Carousel>
            </div> :
                ''
            }
            {!isLoading?
                <div className={`py-5`}>
                <div className="flex justify-between items-center mb-3">
                    <div className="gap-10 flex items-center py-2 text-lg text-text font-semibold">
                        Other Products From Same Category
                    </div>
                    <div className="flex gap-2 ">
                        <button
                            className="bg-white border-primary rotate-180 border cursor-pointer flex items-center justify-center  rounded-full shadow p-1 transition-all hover:text-white hover:bg-[var(--color-primary)] "
                            onClick={() => carouselRef2.current.previous()}
                        >
                            <ArrowForwardIos fontSize="inherit"/>
                        </button>
                        <button
                            className="bg-white border-primary border cursor-pointer flex items-center  justify-center  rounded-full shadow p-1  transition-all hover:text-white hover:bg-[var(--color-primary)] smooth-transition"
                            onClick={() => carouselRef2.current.next()}
                        >
                            <ArrowForwardIos fontSize="inherit"/>
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

                    {similarProducts.map((product) => (
                        <ProductCard product={product} direction={'row'} setIsLoading={setIsLoading}/>
                    ))}
                </Carousel>
            </div> :
                ''
            }
        </div>
    );
};

export default ViewProduct;