import React, {useEffect, useState} from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutline';

function Sidebar({visible, setVisible}) {

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [height, setHeight] = useState(0);
    useEffect(() => {
        console.log(height);
        console.log(open1);
        console.log(open2);
        console.log(open3);
        console.log(open4);

    })

    return (
        <div className={`${visible? "fixed" : "hidden"} bg-bg text-text  flex justify-between font-[500] tracking-widest text-[13px] z-100 top-0 left-0 w-full h-full `} style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
            <div className="bg-bg w-80 h-full p-5 overflow-scroll">
                <div className="flex justify-between items-center p-2 mb-2 border-b-1 border-border fixed top-0 bg-bg w-70">
                    <h1 className={`text-md text-center font-semibold`}> - CATEGORIES -</h1>
                <ClearIcon  fontSize={'medium'} className={'cursor-pointer'} onClick={()=>setVisible(false)} />
                </div>
                <div className="flex flex-col gap-4 mt-10">
                    <div className={`flex flex-col gap-3`}>
                        <div className={`flex justify-between `}>
                            <h1 className={`cursor-pointer hover:text-[var(--color-primary)] hover:translate-x-2 smooth-transition !duration-75 mt-1`}>Fashion</h1>
                            {!open1? <AddCircleOutlineIcon className="mr-2 cursor-pointer smooth-transition" onClick={()=>{setOpen1(!open1); setHeight(100)}}/> : <RemoveCircleOutlinedIcon className="mr-2 cursor-pointer smooth-transition" onClick={()=>{
                                setOpen1(false);
                                setOpen2(false);
                                setOpen3(false);
                                setOpen4(false);
                                setHeight(0);
                            }}/> }

                        </div>
                        <div className={`${open1? `flex h-[${height}px]` : "h-0"} overflow-hidden  smooth-transition flex-col gap-2 ml-5`}>
                            <div>
                                <div className={`flex gap-2 justify-between`}>
                                    <h1 className={`cursor-pointer hover:text-[var(--color-primary)] hover:translate-x-2 smooth-transition !duration-75 mt-1 `}>Apparel</h1>
                                    {!open2? <AddCircleOutlineIcon className="mr-2 cursor-pointer smooth-transition" onClick={()=>{setOpen2(!open2); setHeight(height+105)}}/> : <RemoveCircleOutlinedIcon className="mr-2 cursor-pointer smooth-transition" onClick={()=>{setOpen2(!open2)}}/> }
                                </div>
                                <div className={`${open2? "flex flex-col h-[105px]" : "h-0"} overflow-hidden smooth-transition gap-1 ml-5`}>
                                    <h1 className={`cursor-pointer hover:text-[var(--color-primary)] hover:translate-x-2 smooth-transition !duration-75 mt-1 `}>Smart Tablet</h1>
                                    <h1 className={`cursor-pointer hover:text-[var(--color-primary)] hover:translate-x-2 smooth-transition !duration-75 mt-1 `}>Crepe T-Shirt</h1>
                                    <h1 className={`cursor-pointer hover:text-[var(--color-primary)] hover:translate-x-2 smooth-transition !duration-75 mt-1 `}>Leather Watch</h1>
                                    <h1 className={`cursor-pointer hover:text-[var(--color-primary)] hover:translate-x-2 smooth-transition !duration-75 mt-1 `}>Rolling Diamond</h1>
                                </div>
                            </div>
                            <div>
                                <div className={`flex gap-2 justify-between`}>
                                    <h1 className={`cursor-pointer hover:text-[var(--color-primary)] hover:translate-x-2 smooth-transition !duration-75 mt-1 `}>Outerwear</h1>
                                    {!open3? <AddCircleOutlineIcon className="mr-2 cursor-pointer smooth-transition" onClick={()=>{setOpen3(!open3); setHeight(height+105)}}/> : <RemoveCircleOutlinedIcon className="mr-2 cursor-pointer smooth-transition" onClick={()=>{setOpen3(!open3)}}/> }
                                </div>
                                <div className={`${open3? "flex flex-col h-[105px]" : "h-0"} overflow-hidden smooth-transition gap-1 ml-5`}>
                                    <h1 className={`cursor-pointer hover:text-[var(--color-primary)] hover:translate-x-2 smooth-transition !duration-75 mt-1 `}>Smart Tablet</h1>
                                    <h1 className={`cursor-pointer hover:text-[var(--color-primary)] hover:translate-x-2 smooth-transition !duration-75 mt-1 `}>Crepe T-Shirt</h1>
                                    <h1 className={`cursor-pointer hover:text-[var(--color-primary)] hover:translate-x-2 smooth-transition !duration-75 mt-1 `}>Leather Watch</h1>
                                    <h1 className={`cursor-pointer hover:text-[var(--color-primary)] hover:translate-x-2 smooth-transition !duration-75 mt-1 `}>Rolling Diamond</h1>
                                </div>
                            </div>
                            <div>
                                <div className={`flex gap-2 justify-between`}>
                                    <h1 className={`cursor-pointer hover:text-[var(--color-primary)] hover:translate-x-2 smooth-transition !duration-75 mt-1 `}>Footwear</h1>
                                    {!open4? <AddCircleOutlineIcon className="mr-2 cursor-pointer smooth-transition" onClick={()=>{setOpen4(!open4); setHeight(height+105)}}/> : <RemoveCircleOutlinedIcon className="mr-2 cursor-pointer smooth-transition" onClick={()=>{setOpen4(!open4)}}/> }
                                </div>
                                <div className={`${open4? "flex flex-col h-[105px]" : "h-0"} overflow-hidden smooth-transition gap-1 ml-5`}>
                                    <h1 className={`cursor-pointer hover:text-[var(--color-primary)] hover:translate-x-2 smooth-transition !duration-75 mt-1 `}>Smart Tablet</h1>
                                    <h1 className={`cursor-pointer hover:text-[var(--color-primary)] hover:translate-x-2 smooth-transition !duration-75 mt-1 `}>Crepe T-Shirt</h1>
                                    <h1 className={`cursor-pointer hover:text-[var(--color-primary)] hover:translate-x-2 smooth-transition !duration-75 mt-1 `}>Leather Watch</h1>
                                    <h1 className={`cursor-pointer hover:text-[var(--color-primary)] hover:translate-x-2 smooth-transition !duration-75 mt-1 `}>Rolling Diamond</h1>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div>Watches</div>
                    <div>Cosmetics</div>
                    <div>Accessories</div>
                    <div>Electronic</div>
                    <div>
                        <div className={`flex gap-2 justify-between`}>
                            <h1 className={`cursor-pointer hover:text-[var(--color-primary)] hover:translate-x-2 smooth-transition !duration-75 mt-1 `}>Outerwear</h1>
                            {!open5? <AddCircleOutlineIcon className="mr-2 cursor-pointer smooth-transition" onClick={()=>{setOpen5(!open5);}}/> : <RemoveCircleOutlinedIcon className="mr-2 cursor-pointer smooth-transition" onClick={()=>{setOpen5(!open5)}}/> }
                        </div>
                        <div className={`${open5? "flex flex-col h-[105px]" : "h-0"} overflow-hidden smooth-transition gap-1 ml-5`}>
                            <h1 className={`cursor-pointer hover:text-[var(--color-primary)] hover:translate-x-2 smooth-transition !duration-75 mt-1 `}>Smart Tablet</h1>
                            <h1 className={`cursor-pointer hover:text-[var(--color-primary)] hover:translate-x-2 smooth-transition !duration-75 mt-1 `}>Crepe T-Shirt</h1>
                            <h1 className={`cursor-pointer hover:text-[var(--color-primary)] hover:translate-x-2 smooth-transition !duration-75 mt-1 `}>Leather Watch</h1>
                            <h1 className={`cursor-pointer hover:text-[var(--color-primary)] hover:translate-x-2 smooth-transition !duration-75 mt-1 `}>Rolling Diamond</h1>
                        </div>
                    </div>
                    <div>Furniture</div>
                    <div>Sunglasses</div>
                    <div>Rolling Diamond</div>
                    <div>Xbox Controller</div>
                    <div>Leather Watch</div>
                    <div>Smart Tablet</div>
                    <div>Sunglasses</div>
                    <div>Xbox Controller</div>
                    <div>Leather Watch</div>
                    <div>Smart Tablet</div>
                    <div>Sunglasses</div>
                    <div>Xbox Controller</div>
                    <div>Leather Watch</div>
                    <div>Smart Tablet</div>
                    <div>Sunglasses</div>

                </div>
            </div>

        </div>
    );
}

export default Sidebar;