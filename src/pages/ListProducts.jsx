import React from "react";
import { useParams } from 'react-router-dom';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Checkbox from "@mui/material/Checkbox";
import {colors} from '../components/ProductCard.jsx';
import Slider from '@mui/material/Slider'
import ProductGrid from "../components/ProductGrid.jsx";

const ListProducts = () => {
    const { parent, category, subcategory } = useParams();
    const [priceFilterValue, setPriceFilterValue] = React.useState([0, 5000000]);
    const [isLoading, setIsLoading] = React.useState(false);
    const searchCategory = (!category && !subcategory) ? parent.toLowerCase()==='fashion' ? ['beauty', 'mens-shirts', 'sunglasses', 'mens-watches' ,'womens-watches', "womens-dresses", "skin-care", "fragrances", ] : ['smartphones', 'laptops', 'mobile-accessories', 'tablets'] : subcategory? category==='accessories'? 'mobile-accessories' : [subcategory] : category.toLowerCase()==='apparel' ? ['beauty', 'mens-shirts', 'sunglasses', 'mens-watches' ,'womens-watches', "womens-dresses", "skin-care", "fragrances", ] : category.toLowerCase()==='outerwear' ? ['mens-shirts', "womens-dresses", "tops", "womens-jewelery", ] : category.toLowerCase()==='footwear' ? ['mens-shoes' ,'womens-shoes'] : [category.toLowerCase()]
    console.log(category, subcategory);


    function valuetext(value) {
        return `${value} TK`;
    }

        const handleChange = (event, newValue) => {
            setPriceFilterValue([newValue[0], newValue[1]||1]);
            console.log(newValue)
        };

    return (
        <div className="container px-3 gap-5 flex py-10 bg-bg text-text">
            <div className={`border border-border w-[18%] rounded h-full`} >
                <div className={`text-lg font-semibold px-3 py-3 border-b-1 border-border`}>
                    <FilterAltOutlinedIcon/>
                    Filter by
                </div>
                <div className={` px-4 py-2 flex flex-col gap-1`}>
                    <h1 className={`text-[14px] tracking-wider font-[600] mb-2`}>Availability</h1>
                    <div className={`flex items-center gap-1 font-[500] text-sm`}>
                        <Checkbox style={{padding:'0px'}} color={'success'}/>
                        <h1 className={`align-center`}> In Stock</h1>
                    </div>
                    <div className={`flex items-center gap-1 font-[500] text-sm`}>
                        <Checkbox style={{padding:'0px'}} color={'success'}/>
                        <h1 className={`align-center`}> Out of Stock</h1>
                    </div>
                    <div className={`flex items-center gap-1 font-[500] text-sm`}>
                        <Checkbox style={{padding:'0px'}} color={'success'}/>
                        <h1 className={`align-center`}> Upcoming</h1>
                    </div>
                </div>

                <div className={` px-4 py-2 flex flex-col gap-1`}>
                    <h1 className={`text-[14px] tracking-wider font-[600] mb-2`}>Size</h1>
                    <div className={`flex items-center gap-1 font-[500] text-sm`}>
                        <Checkbox style={{padding:'0px'}} color={'success'}/>
                        <h1 className={`align-center`}> Small </h1>
                    </div>
                    <div className={`flex items-center gap-1 font-[500] text-sm`}>
                        <Checkbox style={{padding:'0px'}} color={'success'}/>
                        <h1 className={`align-center`}> Medium</h1>
                    </div>
                    <div className={`flex items-center gap-1 font-[500] text-sm`}>
                        <Checkbox style={{padding:'0px'}} color={'success'}/>
                        <h1 className={`align-center`}> Large</h1>
                    </div>
                    <div className={`flex items-center gap-1 font-[500] text-sm`}>
                        <Checkbox style={{padding:'0px'}} color={'success'}/>
                        <h1 className={`align-center`}> XL</h1>
                    </div>
                    <div className={`flex items-center gap-1 font-[500] text-sm`}>
                        <Checkbox style={{padding:'0px'}} color={'success'}/>
                        <h1 className={`align-center`}> XXl</h1>
                    </div>

                </div>

                <div className={` px-4 py-2 flex flex-col gap-2`}>
                    <h1 className={`text-[14px] tracking-wider font-[600] mb-2`}>Colors</h1>
                    {colors.map((color, index) => (
                        <div className={`flex items-center group gap-3 font-[400] text-sm cursor-pointer `}>
                            <span
                                className="h-4 w-4 rounded-full border border-gray-700 group-hover:border-[var(--color-accent)] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer smooth-transition z-2"
                                style={{backgroundColor: colors[index]}}
                            >
                            </span>
                            <h1 className={`align-center group-hover:text-[var(--color-accent)] tracking-widest`}>{colors[index]}</h1>
                        </div>
                    ))}
                </div>


                <div className={` px-4 py-2 flex flex-col gap-2`}>
                    <h1 className={`text-[14px] tracking-wider font-[600] mb-2`}>Price</h1>
                    <div className={`flex items-center gap-3 font-[500] text-sm justify-center`}>
                        <div className={`w-full`}>
                            <h1>Min:</h1>
                            <input value={priceFilterValue[0]} onChange={(e)=>handleChange(e,[parseInt(e.target.value)  , priceFilterValue[1]])} type={'number'} min={0} max={499999} step={500} className={` border p-1`}/>
                        </div>
                        <div>
                            <h1>Max:</h1>
                            <input value={priceFilterValue[1]} onChange={(e)=>handleChange(e,[priceFilterValue[0] , parseInt(e.target.value)])} type={'number'} min={1} max={500000} step={500} className={` border p-1`}/>
                        </div>
                    </div>
                    <Slider
                        getAriaLabel={() => 'Price range'}
                        value={priceFilterValue}
                        onChange={handleChange}
                        // valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        min={0} max={500000}
                        step={200}
                        style={{color: 'var(--color-primary)'}}
                    />
                </div>

            </div>
            <div className={`w-full px-5`}>
                <h1 className={`font-[500] text-[25px] mb-2 tracking-wide`}>{category?.replace(category[0], category[0].toUpperCase()) || parent.replace(parent[0], parent[0].toUpperCase())}</h1>
                <p className={`mb-3 text-sm w-[80%] leading-7`}>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their.Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their.</p>
                <ProductGrid category={searchCategory} setIsLoading={setIsLoading} />
            </div >
        </div>
    );
};

export default ListProducts;