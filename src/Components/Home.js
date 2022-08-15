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

            <section className='px-5'>
                <div className='my-20 grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className='order-3 lg:order-1'>
                        <iframe className='w-full rounded' height='340'  src="https://www.youtube.com/embed/zEJtWI_1-Fg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className='order-2'>
                        <h3 className='text-xl'>বিশুদ্ধ আক্বিদাহ কেন গুরুত্বপূর্ণ?</h3>
                        <ul className='ml-16' style={{listStyleType:'disc'}}>
                            <li>বিশুদ্ধ আক্বিদাহ হলো তাওহীদ।</li>
                            <li>রাসূল (সা) সর্বপ্রথম তাওহীদের দাওয়াত দিয়েছেন।</li>
                            <li>সকল নবী-রাসূলগনের আক্বিদাহ একই ছিল, এবং তারা প্রত্যেকে তাদের উম্মতকে তাওহীদের দাওয়াত দিয়ে গেছেন। </li>
                            <li>সাহাবী (রা), তাবেয়ী (রা) এবং চারজন ইমাম (ইমাম আবু হানিফা (র.), ইমাম মালেক (র.), ইমাম শাফেয়ী (র.) এবং ইমাম আহমাদ বিন হাম্বাল (র.)) - এর আক্বিদাহ একই। এবাং তা হলো বিশুদ্ধ আক্বিদাহ।  </li>
                        </ul>
                    </div>
                </div>

                <div className='my-20 grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div>
                    <h3 className='text-xl'>আক্বিদাহ কোর্স কেন করবেন?</h3>
                    <p className='mt-5'>এই কোর্সে আমরা আমাদের সৃষ্টিকর্তা আল্লাহ সম্পর্কে জানতে পারবো -</p>                    
                        <ul className='ml-16' style={{listStyleType:'disc'}}>
                            <li>তিনি কে?</li>
                            <li>আমাদেরকে কেন সৃষ্টি করেছেন?</li>
                            <li>আমাদেরকে কি দায়িত্ব দিয়েছেন?</li>
                            <li>কিভাবে তাঁর ভালোবাসা লাভ করবেন?</li>
                            <li>তাওহীদ কি? তাওহীদের পুরষ্কার কি?</li>
                            <li>শিরক কি? শিরকের শাস্তি কি?</li>
                            <li>শিরক কেন সবচেয়ে বড় গুনাহ?</li>
                        </ul>
                    <p className='mt-3'>আরো জানতে পারবো ইবাদত সম্পর্কে-</p>                    
                        <ul className='ml-16' style={{listStyleType:'disc'}}>
                            <li>কিভাবে আল্লাহর ইবাদত করতে হয়?</li>
                            <li>ইবাদত কবুলের শর্তগুলো কি কি?</li>
                            <li>কোন ভুলের কারনে একজন মানুষের সারা জীবনের আমল (সলাত, সিয়াম, হজ্ব, যাকাত, দান- সদকা ইত্যাদি) নষ্ট হয়ে যাবে?</li>                        
                        </ul>                    
                    </div>
                    <div>
                        <iframe className='w-full rounded' height='340' src="https://www.youtube.com/embed/7d4oNyjvkNo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                
            </section>
            
        </div>
    );
};

export default Home;