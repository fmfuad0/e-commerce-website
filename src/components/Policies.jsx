import React from 'react';
import LocalShippingOutlined from '@mui/icons-material/LocalShippingOutlined'
import PublishedWithChangesOutlined from '@mui/icons-material/PublishedWithChangesOutlined';
import AssuredWorkloadOutlined from '@mui/icons-material/AssuredWorkloadOutlined';
import CardGiftcardOutlined from '@mui/icons-material/CardGiftcardOutlined';
import SupportAgentOutlined from '@mui/icons-material/SupportAgentOutlined';

function Policies(props) {
    return (
        <div className="policies bg-bg text-text  container py-5">
            <div className="flex justify-around ">
                <div className="w-[280px] h-[113px] flex flex-col justify-around group cursor-pointer" >
                    <div className="text-center">
                        <LocalShippingOutlined
                            fontSize="large"
                            sx={{
                                width: 60,
                                height: 50,
                            }}
                            className={'group-hover:text-[var(--color-primary)] text-gray-800  group-hover:-translate-y-1/9 smooth-transition transition-all'}
                        />
                    </div>
                    <div className="text-center font-semibold text-gray-800 ">
                        <h1>Free Shipping</h1>
                    </div>
                    <div className="text-center text-[#666] font-semibold">
                        <h1>For all Orders Over $100</h1>
                    </div>
                </div>
                <div className="w-[280px] h-[113px] flex flex-col justify-around group cursor-pointer" >
                    <div className="text-center">
                        <PublishedWithChangesOutlined
                            fontSize="large"
                            sx={{
                                width: 60,
                                height: 50,
                            }}
                            className={'group-hover:text-[var(--color-primary)] text-gray-800  group-hover:-translate-y-1/9 smooth-transition transition-all'}
                        />
                    </div>
                    <div className="text-center font-semibold text-gray-800 ">
                        <h1>30 Days Returns</h1>
                    </div>
                    <div className="text-center text-[#666] font-semibold">
                        <h1>For an Exchange product</h1>
                    </div>
                </div>
                <div className="w-[280px] h-[113px] flex flex-col justify-around group cursor-pointer" >
                    <div className="text-center">
                        <AssuredWorkloadOutlined
                            fontSize="large"
                            sx={{
                                width: 60,
                                height: 50,
                            }}
                            className={'group-hover:text-[var(--color-primary)] text-gray-800  group-hover:-translate-y-1/9 smooth-transition transition-all'}
                        />
                    </div>
                    <div className="text-center font-semibold text-gray-800 ">
                        <h1>Secured Payment</h1>
                    </div>
                    <div className="text-center text-[#666] font-semibold">
                        <h1>Payment Cards Accepted</h1>
                    </div>
                </div>
                <div className="w-[280px] h-[113px] flex flex-col justify-around group cursor-pointer" >
                    <div className="text-center">
                        <CardGiftcardOutlined
                            fontSize="large"
                            sx={{
                                width: 60,
                                height: 50,
                            }}
                            className={'group-hover:text-[var(--color-primary)] text-gray-800  group-hover:-translate-y-1/9 smooth-transition transition-all'}
                        />
                    </div>
                    <div className="text-center font-semibold text-gray-800 ">
                        <h1>Special Gifts</h1>
                    </div>
                    <div className="text-center text-[#666] font-semibold">
                        <h1>For The First Order</h1>
                    </div>
                </div>
                <div className="w-[280px] h-[113px] flex flex-col justify-around group cursor-pointer" >
                    <div className="text-center">
                        <SupportAgentOutlined
                            sx={{
                                width: 60,
                                height: 50,
                            }}
                            className={'group-hover:text-[var(--color-primary)] text-gray-800  group-hover:-translate-y-1/9 smooth-transition transition-all'}
                        />
                    </div>
                    <div className="text-center font-semibold text-gray-800 ">
                        <h1>24/7 Contact Support</h1>
                    </div>
                    <div className="text-center text-[#666] font-semibold">
                        <h1>Call Us Anytime</h1>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Policies;