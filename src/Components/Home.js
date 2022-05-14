import { faQuoteLeft } from '@fortawesome/fontawesome-free-solid';
import { } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import banner from '../assets/banner.png'

const Home = () => {
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center items-center'>
                <div>
                    <img className='w-80' src={banner} alt="" />
                </div>
                <div className='col-span-2 flex'>
                <FontAwesomeIcon className='text-yellow-200 px-5' icon={faQuoteLeft} size="4x" fade/>
                    <div>
                    <p className='text-3xl text-red-900'>জেনে রাখো, আল্লাহ ছাড়া সত্য কোন উপাস্য নেই।</p>
                    <small>সূরা মুহাম্মাদ : ১৯</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;