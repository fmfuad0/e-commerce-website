import React from 'react';
import {Button} from "@mui/material";

function Banner({image, position, tag, title , price}) {
    return (
        <div className="relative text-black group overflow-hidden h-full w-full flex rounded-lg bg-cover bg-no-repeat bg-center justify-end items-center py-12"
        >
            {/* Background layer */}
            <div
                style={{ backgroundImage: `url(${image })` }}
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out smooth-transition group-hover:scale-110"
            ></div>

            {position==='left'? <div className="w-[40%] z-10"></div> : <></>}
            <div className={`w-[60%] gap-1 flex flex-col ${position==='right'? "" : "text-center "} align-middle pl-10  z-10`}>

                <p className="font-[600] text-black leading-8 text-sm">
                    {tag}
                </p>
                <p className="font-[600] max-w-[280px] leading-8 text-xl">
                    {title}
                </p>
                <h1 className="text-primary text-xl font-[700]">{price? `$${price}`  : ""}</h1>
                <a className="underline cursor-pointer ">
                    <Button variant={'contained'} sx={{padding:"8px 20px", backgroundColor:"var(--color-primary)", ":hover":{backgroundColor:"black"}}}
                    >
                        SHOP NOW
                    </Button>
                </a>
            </div>
            {position==='right'? <div className="w-[40%] z-10"></div> : <></>}
        </div>
    );
}
export default Banner;