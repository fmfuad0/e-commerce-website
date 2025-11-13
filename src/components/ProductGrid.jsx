import React, {useEffect, useState} from 'react';
import ProductCard from "./ProductCard.jsx";
import  GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import GridViewRounded from '@mui/icons-material/GridViewRounded'
import TableRowsIcon from '@mui/icons-material/TableRows';
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined';
import Tooltip from '@mui/material/Tooltip';
import {selectedProductContext} from "../contexts/ProductContext.jsx";

const ProductGrid = ({category, subCategory}) => {
    const [products, setProducts] = useState([]);
    const [direction, setDirection] = useState('col');
    const [loader, setLoader] = useState(false);
    const {setIsLoading} = selectedProductContext()
    useEffect(() => {
        const getProducts = async () => {
            setLoader(true);
            try {
                const pp = await Promise.all(
                    category.map(async (cat) => {
                        const res = await fetch(`https://dummyjson.com/products/category/${cat}?limit=50`);
                        if (!res.ok) throw new Error(`Failed to fetch ${cat}`);
                        const data = await res.json();
                        console.log(cat, data.products)
                        return data.products;
                    })
                );
                setProducts(pp.flat().sort(() => Math.random() - 0.5));
                setTimeout(()=>setLoader(false), Math.random() * 1500);
            } catch (err) {
                console.error("Error fetching products:", err);
            }
        }
        getProducts();
    }, [category]);
    return (
        <div className="w-full  bg-bg text-text ">
            <div className={`flex justify-start`}>
                { direction==='col' ? <TableRowsIcon className={`border rounded-md `} style={{fontSize:"30px", color : "#3D3C3CFF"}}/> : <Tooltip title={`Table View`} arrow placement={'top'}><TableRowsOutlinedIcon className={`cursor-pointer`} onClick={() => setDirection('col')} style={{fontSize:"30px", color : "#3D3C3CFF"}}/> </Tooltip>}
                { direction==='row' ? <GridViewRounded className={`border rounded-md `} style={{fontSize:"30px", color : "#3D3C3CFF"}}/> : <Tooltip title={`Grid View`} arrow placement={'top'}><GridViewOutlinedIcon className={`cursor-pointer`}  onClick={() => setDirection('row')} style={{fontSize:"30px", color : "#3D3C3CFF"}}/></Tooltip> }
            </div>
            <div className={`${direction === 'row' ? 'flex-wrap flex' : ''}`}>

                {loader? <div className={`loader mx-auto`}></div> : products.map((product) => (
                    <ProductCard product={product} direction={direction} setIsLoading={setIsLoading} />
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;