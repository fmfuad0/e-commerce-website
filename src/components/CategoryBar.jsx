import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import thumb from '../assets/thumb.jpg'
import {useNavigate, useParams} from "react-router-dom";


const CategoryBar = ({setVisible}) => {
    const navigate = useNavigate();
    const [hover, setHover] = React.useState(null);
    return (
        <div className="container sticky top-0 z-20 bg-bg flex justify-between items-center py-5 text-[12px] text-text font-[600]">
            {/* Left section */}
            <button
                aria-label="category-btn"
                className="flex items-center gap-2 px-2 hover:text-[var(--color-primary)] cursor-pointer transition-colors duration-200"
                onClick={() => setVisible(true)}
            >
                <MenuIcon fontSize="small" />
                <span>SHOP BY CATEGORY</span>
                <ArrowDropDownIcon fontSize="small" />
            </button>

            {/* Center navigation */}
            <ul className="hidden relative md:flex gap-6 tracking-widest items-center">

                {/*Dropdown 1*/}
                <div
                    className={`${hover===1? 'absolute translate-y-0' : 'hidden -translate-y-10'} smooth-transition transition-transform z-10 top-10 left-0 bg-bg p-5 pt-2 border-1 border-t-0 border-primary`}
                    onMouseEnter={() => setHover(1)}
                    onMouseLeave={() => setHover(null)}
                >
                    <div className={`flex justify-center gap-2 py-2`}>
                        <div  className={`flex items-center px-4 py-2`}>
                            <div className={`flex text-[13px] flex-col gap-1`}>
                                <span className={`tracking-widest font-semibold cursor-pointer hover:text-[var(--color-primary)]`} onClick={()=> {
                                    navigate('/list-products/fashion/apparel');setHover(null)
                                }
                                }>Apparel</span>
                                <h1 className={` text-[#666] hover:text-[var(--color-primary)] hover:translate-x-2 cursor-pointer`} onClick={()=> {
                                    navigate('/list-products/fashion/apparel/beauty');setHover(null)
                                }}>Beauty</h1>
                                <h1 className={` text-[#666] hover:text-[var(--color-primary)] hover:translate-x-2 cursor-pointer`} onClick={()=> {
                                    navigate('/list-products/fashion/apparel/mens-watches');setHover(null)
                                }}>Men's Watches</h1>
                                <h1 className={` text-[#666] hover:text-[var(--color-primary)] hover:translate-x-2 cursor-pointer`} onClick={()=> {
                                    navigate('/list-products/fashion/apparel/womens-watches');setHover(null)
                                }}>Women's Watches</h1>

                                <h1 className={` text-[#666] hover:text-[var(--color-primary)] hover:translate-x-2 cursor-pointer`} onClick={()=> {
                                    navigate('/list-products/fashion/apparel/fragrances');setHover(null)
                                }}>Fragrances</h1>
                                <h1 className={` text-[#666] hover:text-[var(--color-primary)] hover:translate-x-2 cursor-pointer`} onClick={()=> {
                                    navigate('/list-products/fashion/apparel/sunglasses');setHover(null)
                                }}>Sunglasses</h1>
                            </div>
                        </div>
                        <div  className={`flex items-start px-4 py-2`}>
                            <div className={`flex text-[13px] flex-col gap-1`}>
                                <span className={`tracking-widest font-semibold cursor-pointer  hover:text-[var(--color-primary)]`} onClick={()=> {
                                    navigate('/list-products/fashion/outerwear/');setHover(null)
                                }}>Outerwear</span>
                                <h1 className={` text-[#666] hover:text-[var(--color-primary)] hover:translate-x-2 cursor-pointer`} onClick={()=> {
                                    navigate('/list-products/fashion/outerwear/mens-shirts');setHover(null)
                                }}>Men's Shirts</h1>
                                <h1 className={` text-[#666] hover:text-[var(--color-primary)] hover:translate-x-2 cursor-pointer`} onClick={()=> {
                                    navigate('/list-products/fashion/outerwear/womens-dresses');setHover(null)
                                }}>Women's Dresses</h1>
                                <h1 className={` text-[#666] hover:text-[var(--color-primary)] hover:translate-x-2 cursor-pointer`} onClick={()=> {
                                    navigate('/list-products/fashion/outerwear/tops');setHover(null)
                                }}>Tops</h1>
                                <h1 className={` text-[#666] hover:text-[var(--color-primary)] hover:translate-x-2 cursor-pointer`} onClick={()=> {
                                    navigate('/list-products/fashion/outerwear/womens-jewellery');setHover(null)
                                }}>Women's Jewellery</h1>
                            </div>
                        </div>
                        <div  className={`flex items-start px-4 py-2`}>
                            <div className={`flex text-[13px] flex-col gap-1`}>
                                <span className={`tracking-widest font-semibold cursor-pointer  hover:text-[var(--color-primary)]`}>Footwear</span>
                                <h1 className={` text-[#666] hover:text-[var(--color-primary)] hover:translate-x-2 cursor-pointer`}
                                    onClick={()=>{
                                        navigate('list-products/fashion/footwear/mens-shoes');setHover(null)
                                    }}
                                >Men's Shoes</h1>
                                <h1 className={` text-[#666] hover:text-[var(--color-primary)] hover:translate-x-2 cursor-pointer`}
                                    onClick={()=>{
                                        navigate('list-products/fashion/footwear/womens-shoes');setHover(null)
                                    }}
                                >Women's Shoes</h1>
                            </div>
                        </div>
                    </div>
                    <img src={thumb} alt={''}/>
                </div>

                <div className={`${hover===4? 'absolute flex flex-col gap-3' : 'hidden'} text-[13px] transition-all smooth-transition z-10 top-10 left-90 bg-bg p-5 pt-2  border-1 border-t-0  border-primary`}
                     onMouseEnter={() => setHover(4)}
                     onMouseLeave={() => setHover(null)}
                >

                    <span className={` text-[#666] hover:text-[var(--color-primary)] hover:translate-x-2 cursor-pointer`}>Gadget Zone</span>
                    <span className={` text-[#666] hover:text-[var(--color-primary)] hover:translate-x-2 cursor-pointer`}>Initech space</span>
                    <span className={` text-[#666] hover:text-[var(--color-primary)] hover:translate-x-2 cursor-pointer`}>Looney Tunes</span>
                    <span className={` text-[#666] hover:text-[var(--color-primary)] hover:translate-x-2 cursor-pointer`}>Massive Dynamic</span>
                    <span className={` text-[#666] hover:text-[var(--color-primary)] hover:translate-x-2 cursor-pointer`}>Pro Tech Gear</span>
                    <span className={` text-[#666] hover:text-[var(--color-primary)] hover:translate-x-2 cursor-pointer`}>Soylent Green</span>
                    <span className={` text-[#666] hover:text-[var(--color-primary)] hover:translate-x-2 cursor-pointer`}>The Simpsons</span>
                    <span className={` text-[#666] hover:text-[var(--color-primary)] hover:translate-x-2 cursor-pointer`}>Weeds Capital</span>

                </div>

                <div
                    className={`${hover===2? 'absolute translate-y-0' : 'hidden -translate-y-10'} smooth-transition transition-all z-10 top-10 left-30 bg-bg p-5 text-[13px] pt-2 border-1 border-t-0 border-primary flex flex-col gap-2`}
                    onMouseEnter={() => setHover(2)}
                    onMouseLeave={() => setHover(null)}
                >
                    <span className={` text-[#666] hover:text-[var(--color-primary)] hover:translate-x-2 cursor-pointer`}
                          onClick={()=>{
                              navigate('list-products/electronics/smartphones')
                          }}
                    >Smartphones</span>
                    <span className={` text-[#666] hover:text-[var(--color-primary)] hover:translate-x-2 cursor-pointer`}
                          onClick={()=>{
                              navigate('list-products/electronics/laptops')
                          }}
                    >Laptops</span>

                    <span className={` text-[#666] hover:text-[var(--color-primary)] hover:translate-x-2 cursor-pointer`}
                          onClick={()=>{
                              navigate('list-products/electronics/accessories/headphone')
                          }}
                    >Headphones</span>
                    <span className={` text-[#666] hover:text-[var(--color-primary)] hover:translate-x-2 cursor-pointer`}
                          onClick={()=>{
                              navigate('list-products/electronics/accessories/watch')
                          }}
                    >Watches</span>

                    <span className={` text-[#666] hover:text-[var(--color-primary)] hover:translate-x-2 cursor-pointer`}
                          onClick={()=>{
                              navigate('list-products/electronics/mobile-accessories')
                          }}
                    >Accessories</span>
                    <span className={` text-[#666] hover:text-[var(--color-primary)] hover:translate-x-2 cursor-pointer`}
                          onClick={()=>{
                              navigate('list-products/electronics/accessories/speaker')
                          }}
                    >Speaker</span>
                    <span className={` text-[#666] hover:text-[var(--color-primary)] hover:translate-x-2 cursor-pointer`}
                          onClick={()=>{
                              navigate('list-products/electronics/tablets')
                          }}
                    >Tablet</span>

                </div>
                 <li
                        className="leading-5 cursor-pointer hover:text-[var(--color-primary)] transition-colors duration-200"
                        onMouseEnter={() => setHover(0)}
                        // onMouseLeave={() => setHover(null)}
                        onClick={()=>navigate('/home')}
                    >
                        HOME
                    </li>
                    <li
                        className="leading-5 cursor-pointer hover:text-[var(--color-primary)] transition-colors duration-200"
                        onMouseEnter={() => setHover(1)}
                        // onMouseLeave={() => setHover(null)}
                        onClick={()=>navigate('/list-products/Fashion')}
                    >
                        FASHION
                    </li>
                    <li
                        className="leading-5 cursor-pointer hover:text-[var(--color-primary)] transition-colors duration-200"
                        onMouseEnter={() => setHover(2)}
                        // onMouseLeave={() => setHover(null)}
                        onClick={()=>navigate('/list-products/electronics')}
                    >
                        ELECTRONICS
                    </li>
                    <li
                        className="leading-5 cursor-pointer hover:text-[var(--color-primary)] transition-colors duration-200"
                        onMouseEnter={() => setHover(3)}
                        // onMouseLeave={() => setHover(null)}
                        onClick={()=>navigate('/')}
                    >
                        NEW ARRIVALS
                    </li>
                    <li
                        className="leading-5 cursor-pointer hover:text-[var(--color-primary)] transition-colors duration-200"
                        onMouseEnter={() => setHover(4)}
                        // onMouseLeave={() => setHover(null)}
                        onClick={()=>navigate('/')}
                    >
                        ALL BRANDS
                    </li>
                    <li
                        className="leading-5 cursor-pointer hover:text-[var(--color-primary)] transition-colors duration-200"
                        onMouseEnter={() => setHover(5)}
                        // onMouseLeave={() => setHover(null)}
                        onClick={()=>navigate('/')}
                    >
                        BEST DEALS
                    </li>
            </ul>

            {/* Right section */}
            <div className="flex items-center gap-1 text-accent">
                <RocketLaunchOutlinedIcon fontSize="small" />
                <span className="font-semibold uppercase tracking-wide">
                  Free International Delivery
                </span>
            </div>
        </div>
    );
};

export default CategoryBar;
