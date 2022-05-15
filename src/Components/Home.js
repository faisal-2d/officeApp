import { faMousePointer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <div className='bg-sky-200 p-16 rounded text-white my-10'>
                <p className='text-center text-sky-900 font-bold text-3xl mb-10'>আক্বিদাহ কোর্সের পরবর্তী ব্যাচে (১৭) রেজিস্ট্রেশন</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 text-black font-bold text-2xl'>
                    <p className='p-3 bg-green-300 rounded'>ভর্তি শুরু হবে ১৫ জুলাই</p>
                    <p className='p-3 bg-orange-300 rounded'>ভর্তি শেষ হবে ১০ আগস্ট</p>
                    <p className='p-3 bg-blue-300 rounded'>ব্যাচের অরিয়েন্টেশন ১২ আগস্ট</p>
                    <p className='p-3 bg-red-300 rounded'>ক্লাস শুরু হবে ১৫ আগস্ট</p>
                </div>
                {/* <p className='mt-8 p-3 text-center text-black text-2xl bg-lime-400 rounded-full'>এখনি ভর্তি হতে চান? <Link to="/registration"><span className='text-green-700 btn-ghost'><FontAwesomeIcon icon={faMousePointer} bounce/> রেজিস্ট্রেশন করুন</span></Link></p> */}
            </div>
            
        </div>
    );
};

export default Home;