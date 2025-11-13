import React, {useEffect} from 'react';
import {Button} from "@mui/material";
import RepeatIcon from '@mui/icons-material/Repeat';
import Badge from '@mui/material/Badge';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Cart from "./Cart.jsx";
import Tooltip from '@mui/material/Tooltip';
import {useCart} from "../contexts/CartContext.jsx";
import {googleLogout, useGoogleOneTapLogin, } from '@react-oauth/google';
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    const {showCart, setShowCart, cart} = useCart();
    const navigate = useNavigate();
    useGoogleOneTapLogin({
        onSuccess: codeResponse => console.log(codeResponse),
        onError: codeResponse => console.log(codeResponse),
        flow: 'auth-code',
    });
    useEffect(() => {
        googleLogout()
    }, []);

    return (
        <div className={`w-full py-5 bg-bg text-text  flex justify-between container`}>
            <div  className={`w-[30%] text-text `}>
                <img  src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/logo-1691412328.jpg" alt="logo" onClick={()=>navigate("/home")} className={`cursor-pointer`}/>
            </div>
            <div className="flex my-auto items-center w-[40%] gap-5  text-text " >
                <input type={"text"} placeholder={"Search Products Here..."} style={{outline:"none"}} className={`w-full rounded border-border border px-3 py-2`}/>
                <Button variant="contained"  sx={{padding:"8px 20px", backgroundColor:"var(--color-primary)", ":hover":{backgroundColor:"black"}}}  >Search</Button>
            </div>
            <div className={`w-[30%] flex justify-end `}>
                <div className={`my-auto text-[13px] flex justify-end`}>
                    <a className={`font-[500] px-3 hover:text-[var(--color-primary)] cursor-pointer border-r-1`} onClick={()=>useGoogleOneTapLogin}>Login</a>
                    <a className={`font-[450] px-3 hover:text-[var(--color-primary)] cursor-pointer`}>Register</a>
                </div>
                <div className={`my-auto text-[13px] flex text-text gap-5`}>
                    <Badge
                        badgeContent={4} color="primary"
                       sx={{
                           "& .MuiBadge-badge": {
                               backgroundColor: 'var(--color-primary)',
                               color: "var(--color-bg)",
                           },
                           }}>
                        <RepeatIcon sx={{width:20}} />
                    </Badge>
                    <Badge
                        badgeContent={5} color="primary"
                       sx={{
                           "& .MuiBadge-badge": {
                               backgroundColor: 'var(--color-primary)',
                               color: "var(--color-bg)",
                           },
                           }}>
                        <FavoriteBorderIcon sx={{width:20}}/>
                    </Badge>
                    <Badge
                        badgeContent={cart.products.length || '0'} color="primary"
                        sx={{
                           "& .MuiBadge-badge": {
                               backgroundColor: 'var(--color-primary)',
                               color: "var(--color-bg)",
                           },
                           }}
                        className={`cursor-pointer group`}
                        onClick={()=>setShowCart(true)}
                    >
                        <Tooltip title={'Show Cart'} placement={'top'} arrow>
                            <AddShoppingCartIcon sx={{width:20}}  className={`cursor-pointer group-hover:scale-115 hover:scale-115`} />
                        </Tooltip>
                    </Badge>
                    <Cart showCart={showCart} onClose={()=>setShowCart(false)} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;