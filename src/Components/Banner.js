import React from 'react';
import { faQuoteLeft } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import banner from '../assets/banner.png'

const Banner = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center items-center my-16'>
                <div>
                    <img className='w-80' src={banner} alt="" />
                </div>
                <div className='col-span-2 flex '>
                    <FontAwesomeIcon className='text-yellow-200 px-5' icon={faQuoteLeft} size="4x" fade/>
                    <div>
                    <p className='text-6xl text-red-800'>জেনে রাখো, আল্লাহ ছাড়া সত্য কোন উপাস্য নেই।</p>
                    <p className='italic'>সূরা মুহাম্মাদ : ১৯</p>
                    </div>
                </div>
            </div>
    );
};

export default Banner;