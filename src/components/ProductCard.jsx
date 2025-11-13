import React, {useEffect, useMemo, useState} from 'react';
import FormatListBulletedAdd from '@mui/icons-material/FormatListBulletedAdd';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {Button, Rating, Tooltip} from "@mui/material";
import {selectedProductContext} from "../contexts/ProductContext.jsx";
import {useNavigate} from "react-router-dom";


const colors = [
    'Grey',
    'Red',
    'Black',
    'Orange',
    'Blue',
    'Green',
    'Yellow',
    'Pink',
]
const  ProductCard = ({ product, direction, setIsLoading })=> {
    const [hovered, setHovered] = useState(false);
    const {setProduct} = selectedProductContext();
    const navigate = useNavigate();
    const randomColor = useMemo(() => {
        return colors[Math.floor(Math.random() * colors.length)];
    }, []);
    const randomColor2 = useMemo(() => {
        return colors[Math.floor(Math.random() * colors.length)];
    }, []);
    const randomColor3 = useMemo(() => {
        return colors[Math.floor(Math.random() * colors.length)];
    }, []);


    return (
        <div
            className={`${direction==='row'? "w-[233px] h-fit" : " w-full h-fit flex"} my-1  py-3 border border-border mx-auto relative overflow-hidden cursor-pointer` }
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={()=>{
                setIsLoading(true);
                setProduct(product);
                setTimeout(()=>{
                    setIsLoading(false)
                    navigate(`/products/${product.id}`);
                }, Math.random() * 1500)
            }}
        >
            <div id="product-image-section" className="relative text-center ">
                {/* --- Actions with Smooth Slide-in Transition --- */}
                <div
                    id="actions"
                    className={`smooth-transition absolute top-3 right-2 flex flex-col  z-2
                    ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                >
                    <div className="flex items-center justify-center rounded-full mb-1">
                        <Tooltip title="Add to wishlist" enterDelay={400} leaveDelay={0} followCursor>
                            <FormatListBulletedAdd
                                className="border border-border rounded-full p-1 hover:bg-[var(--color-primary)] hover:text-white cursor-pointer"
                                fontSize="large"
                            />
                        </Tooltip>
                    </div>
                    <div className="flex items-center justify-center rounded-full mb-1">
                        <Tooltip title="Add to compare" enterDelay={400} leaveDelay={0} followCursor>
                            <CompareArrowsIcon
                                className="border border-border rounded-full p-1 hover:bg-[var(--color-primary)] hover:text-white cursor-pointer transition-all duration-150"
                                fontSize="large"
                            />
                        </Tooltip>
                    </div>
                    <div className="flex items-center justify-center rounded-full mb-1">
                        <Tooltip title="Full Screen" enterDelay={400} leaveDelay={0} followCursor>
                            <FullscreenIcon
                                className="border border-border rounded-full p-1 hover:bg-[var(--color-primary)] hover:text-white cursor-pointer transition-all duration-150"
                                fontSize="large"
                            />
                        </Tooltip>
                    </div>
                    <div className="flex items-center justify-center rounded-full mb-1">
                        <Tooltip title="Preview" enterDelay={400} leaveDelay={0} followCursor>
                            <ExitToAppIcon
                                className="border border-border rounded-full p-1 hover:bg-[var(--color-primary)] hover:text-white cursor-pointer transition-all duration-150"
                                fontSize="large"
                            />
                        </Tooltip>
                    </div>
                </div>

                {/* --- Discount and New Tags with Slide-in Animation --- */}
                <div
                    id="discount-tag"
                    className="bg-[#ef2d2d] absolute top-3 left-2 w-[55px] text-white text-xs font-bold py-1 rounded-sm transition-all duration-300 ease-in-out"
                >
                    {product.discountPercentage}%
                </div>

                <div
                    id="new_tag"
                    className={`smooth-transition bg-[#44b367] absolute top-10 left-2 w-[55px] text-white text-xs font-bold py-1 rounded-sm transition-all duration-300 ease-in-out transform
                    ${hovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'}`
                }
                >
                    NEW
                </div>

                <div
                    className={`absolute bottom-0 left-2 gap-1 flex items-center justify-center rounded-full mb-1 transition-all duration-500 ease-in-out
                    ${hovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-x-4"} smooth-transition`}
                >

                        <span
                            className="h-4 w-4 rounded-full border border-gray-300 hover:border-[var(--color-primary)] hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer smooth-transition z-2"
                            style={{backgroundColor: randomColor}}
                        >

                        </span>
                        <span
                            className="h-4 w-4 rounded-full border border-gray-300 hover:border-[var(--color-primary)] hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer smooth-transition z-2"
                            style={{backgroundColor: randomColor2}}
                        >

                        </span>
                        <span
                            className="h-4 w-4 rounded-full border border-accent hover:border-[var(--color-primary)] hover:scale-110 transition-all duration-300  ease-in-out cursor-pointer smooth-transition z-2"
                            style={{backgroundColor: randomColor3}}
                        >

                        </span>


                </div>


                {/* --- Product Image --- */}
                <img
                    src={product.thumbnail}
                    alt="product"
                    className={`${direction==='row'? "w-[219px]  h-[220px] " : "w-[300px]  h-[220px] "} px-1 mx-auto overflow-hidden hover:scale-110 smooth-transition cursor-pointer`}
                />
            </div>

            {/* --- Product Info --- */}
            <div className="px-2 flex flex-col gap-1 mt-1">
                <h1 className="text-gray-500 w-full h-[30px] items-end flex hover:text-[var(--color-primary)] cursor-pointer font-semibold text-xs">
                    {product.brand}
                </h1>
                <h1 className="font-[600] h-[30px] text-gray-800 w-full flex items-center text-sm">{product.title}</h1>
                    <div className="flex flex-row w-full items-start">
                        <Rating defaultValue={product.rating} readOnly precision={0.5} />
                    </div>
                {direction==='col' && <div className="flex text-sm flex-row w-full max-w-[85%] text-gray-700 items-start">
                    {product.description}
                </div>}

                <div className="flex gap-2 w-full flex-row">
                    <h1 className="font-semibold text-sm text-gray-500 line-through text-center">
                        ${((product.price * product.discountPercentage / 100) + product.price).toFixed(2)}
                    </h1>
                    <h1 className="font-semibold w-full text-sm text-primary">
                        ${product.price.toFixed(2)}
                    </h1>
                </div>
                <div>

                    {direction==='col'&&<Button variant="contained" className={`px-2 py-1 hover:bg-black`} sx={{
                        backgroundColor: 'var(--color-primary)',
                        marginBottom: '10px',
                        marginTop: '10px',
                        ":hover": {backgroundColor: 'var(--color-accent)'}
                    }}>View Product</Button>}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
export {colors};
