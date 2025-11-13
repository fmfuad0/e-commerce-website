import React, {useState} from 'react';
import QuestionAnswerOutlined from '@mui/icons-material/QuestionAnswerOutlined';
import {Button, Checkbox, Badge} from '@mui/material';
import Send from '@mui/icons-material/Send';

function Footer(props) {
    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState(false);
    return (
        <div className="container bg-bg text-text flex justify-around items-center text-center py-10 border border-border">
            <div className={'contact text-left flex flex-col gap-5 w-[300px] h-[245px] '} >
                <h1 className="text-xl text-primary font-semibold"> Contact Us</h1>

                    <div className={`flex flex-col gap-3`}>

                    <h3 className="text-sm font-semibold leading-tight text-[#666] max-w-[250px]">
                        Classyshop - Mega Super Store
                        507-Union Trade Centre
                        France</h3>
                    <h3 className="text-sm font-semibold leading-tight text-[#666] hover:text-[var(--color-primary)] cursor-pointer">
                        sales@yourcompany.com
                    </h3>
                    <h3 className="text-2xl tracking-widest text-primary font-semibold leading-tight text-[#666] ">
                        (+91) 9876-543-210
                    </h3>
                    <div className="flex items-center justify-start font-semibold w-full gap-5">
                        <QuestionAnswerOutlined fontSize={'large'} sx={{color: 'var(--color-primary)'}}/>
                        <h1 className={`text-xl`}>
                            Online Chat <br/>Get Expert Help
                        </h1>
                    </div>
                </div>

            </div>
            <div className={'products flex flex-col gap-5  w-[300px] h-[245px] text-left'} >
                <h1 className="text-xl text-primary font-semibold">Products</h1>
                <div>
                    <ul className={`flex flex-col gap-3 text-secondary`}>
                        <li className="text-sm font-semibold leading-tight hover:text-[var(--color-primary)] cursor-pointer hover:translate-x-1.5 smooth-transition !duration-15">
                            Prices Drop
                        </li>
                        <li className="text-sm font-semibold leading-tight hover:text-[var(--color-primary)] cursor-pointer hover:translate-x-1.5 smooth-transition !duration-15">
                            New Products
                        </li>
                        <li className="text-sm font-semibold leading-tight hover:text-[var(--color-primary)] cursor-pointer hover:translate-x-1.5 smooth-transition !duration-15">
                            Best Sales
                        </li>
                        <li className="text-sm font-semibold leading-tight hover:text-[var(--color-primary)] cursor-pointer hover:translate-x-1.5 smooth-transition !duration-15">
                            Contact Us
                        </li>
                        <li className="text-sm font-semibold leading-tight hover:text-[var(--color-primary)] cursor-pointer hover:translate-x-1.5 smooth-transition !duration-15">
                            Sitemap
                        </li>
                        <li className="text-sm font-semibold leading-tight hover:text-[var(--color-primary)] cursor-pointer hover:translate-x-1.5 smooth-transition !duration-15">
                            Stores
                        </li>

                    </ul>
                </div>
            </div>
            <div className={'our-company flex flex-col gap-5  w-[300px] h-[245px] text-left'} >
                <h1 className="text-xl text-primary font-semibold"> Our Company</h1>
                <div>
                    <ul className={`flex flex-col gap-3 text-secondary`}>
                        <li className="text-sm font-semibold leading-tight hover:text-[var(--color-primary)] cursor-pointer hover:translate-x-1.5 smooth-transition !duration-15">
                            Delivery
                        </li>
                        <li className="text-sm font-semibold leading-tight hover:text-[var(--color-primary)] cursor-pointer hover:translate-x-1.5 smooth-transition !duration-15">
                            Legal Notice
                        </li>
                        <li className="text-sm font-semibold leading-tight hover:text-[var(--color-primary)] cursor-pointer hover:translate-x-1.5 smooth-transition !duration-15">
                            Terms And Conditions of Use
                        </li>
                        <li className="text-sm font-semibold leading-tight hover:text-[var(--color-primary)] cursor-pointer hover:translate-x-1.5 smooth-transition !duration-15">
                            About Us
                        </li>
                        <li className="text-sm font-semibold leading-tight hover:text-[var(--color-primary)] cursor-pointer hover:translate-x-1.5 smooth-transition !duration-15">
                            Secure Payment
                        </li>
                        <li className="text-sm font-semibold leading-tight hover:text-[var(--color-primary)] cursor-pointer hover:translate-x-1.5 smooth-transition !duration-15">
                            Login
                        </li>

                    </ul>
                </div>
            </div>
            <div className={'products flex flex-col gap-5  w-[300px] h-[245px] text-left'} >
                <h1 className="text-xl text-primary font-semibold">Subscribe To Newsletter</h1>
                <div>
                    <h3 className={`text-sm font-semibold leading-tight text-[#666]`}>
                        Subscribe to our latest newsletter to get news about special discounts.

                    </h3>
                    <form >

                        <input type={'email'} className={'border outline-none px-5 h-10 w-full my-5 rounded-md hover:border-[var(--color-primary)] focus:border-[var(--color-primary)]'} placeholder={'Enter your E-mail'}/>
                        <Button
                            type="submit"
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<Send/>}
                            sx={{backgroundColor:'var(--color-primary)'}}
                            disabled={!checked}
                            loading={loading}
                            loadingPosition={'start'}
                            onClick={() => {
                                setLoading(true);
                                setTimeout(()=>{setLoading(false)}, 2000);
                            }}
                        >
                            Subscribe Now
                        </Button>
                    </form>
                </div>
                <div className={`flex`}>
                    <Checkbox aria-label={''} size="small" checked={checked} onClick={()=>setChecked(!checked)}/>
                    <p className={`text-sm text-secondary cursor-pointer`} onClick={()=>{setChecked(!checked)}}>I agree to the terms and conditions and the privacy policy.
                    <Badge badgeContent={'*'} sx={{color: "red", marginX: 1}}/>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;