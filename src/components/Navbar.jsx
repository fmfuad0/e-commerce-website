import React, {useContext, useEffect, useRef, useState} from 'react';
import {Button} from "@mui/material";
import RepeatIcon from '@mui/icons-material/Repeat';
import Badge from '@mui/material/Badge';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Cart from "./Cart.jsx";
import Tooltip from '@mui/material/Tooltip';
import {useCart} from "../contexts/CartContext.jsx";
import {AuthContext} from "../contexts/AuthContext.jsx";
import {useNavigate} from "react-router-dom";
const Navbar = () => {
    const {showCart, setShowCart, cart} = useCart();
    const { user, handleGoogleResponse, logout } = useContext(AuthContext);
    const googleButtonRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Load Google Script
        const script = document.createElement("script");
        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        script.defer = true;

        script.onload = () => {
            google.accounts.id.initialize({
                client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
                callback: handleGoogleResponse,
            });

            if (!user && googleButtonRef.current) {
                google.accounts.id.renderButton(googleButtonRef.current, {

                });
            }
        };

        document.body.appendChild(script);
    }, [user]);
    return (
        <div className={`w-full py-5 bg-bg text-text  flex justify-between container`}>
            <div  className={`w-[30%] text-text `}>
                <img  src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/logo-1691412328.jpg" alt="logo" onClick={()=>navigate("/home")} className={`cursor-pointer`}/>
            </div>
            <div className="flex my-auto items-center w-[40%] gap-5  text-text " >
                <input type={"text"} placeholder={"Search Products Here..."} style={{outline:"none"}} className={`w-full rounded border-border border px-3 py-2`}/>
                <Button variant="contained"  sx={{padding:"8px 20px", backgroundColor:"var(--color-primary)", ":hover":{backgroundColor:"black"}}}  >Search</Button>
            </div>
            <div className={`w-[40%] flex items-center justify-end `}>
                <div className="right flex items-center gap-4">
                    {/* If NOT logged in → show Google Button */}
                    {!user && <div ref={googleButtonRef} ></div>}

                    {/* If LOGGED IN → show profile + logout */}
                    {user && (
                        <div className="flex items-center justify-around gap-3 pr-3">
                            <div
                                style={{backgroundImage: `url(${user.picture})`}}
                                className="w-8 h-8 rounded-full bg-no-repeat bg-contain"
                            ></div>
                            <span>{user.name}</span>

                            <button
                                onClick={logout}
                                className=" rounded-md text-red-600 cursor-pointer  "
                            >
                                Logout
                            </button>
                        </div>
                    )}
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