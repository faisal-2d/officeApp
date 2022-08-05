import { faMousePointer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';

const Home = () => {
    const oneDay = 24 * 60 * 60 * 1000;
    const today = new Date();
    const addmissionStartDate = new Date(2022, 6, 15);
    const remainingDays = Math.round(Math.abs((addmissionStartDate - today) / oneDay));
    
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <div className='bg-sky-100 p-16 rounded text-white my-10'>
                <div className='mb-10'>
                <p className='text-center text-sky-900 font-bold text-3xl mb-4'>আক্বিদাহ কোর্সের ১৭তম ব্যাচে ভর্তি চলছে!</p>
                <p className='text-center text-black text-2xl'>কিভাবে ভর্তি হবেন? <Link to='registration' className='underline'>বিস্তারিত জানুন</Link></p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 text-black font-bold text-2xl'>
                    <p className='p-3 bg-green-300 rounded'>ভর্তি শুরু হয়েছে</p>
                    <p className='p-3 bg-orange-300 rounded'>ভর্তি শেষ হবে ২০ আগস্ট</p>
                    <p className='p-3 bg-blue-300 rounded'>ব্যাচের অরিয়েন্টেশন ২২ আগস্ট</p>
                    <p className='p-3 bg-red-300 rounded'>ক্লাস শুরু হবে ২৫ আগস্ট</p>
                </div>
            </div>
            
        </div>
    );
};

export default Home;