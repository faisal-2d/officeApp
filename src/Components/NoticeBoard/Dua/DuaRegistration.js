import { faMoneyBillTransfer, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


import dua_1_group_female from '../../../assets/dua_1/female_group.png'
import dua_1_group_male from '../../../assets/dua_1/male_group.png'
import group_logo_male from '../../../assets/group logo/male_logo.png'
import group_logo_female from '../../../assets/group logo/female_logo.png'
import india from '../../../assets/india.png'
import bKash from '../../../assets/bKash.png'
import nagad from '../../../assets/nagad.png'
import rocket from '../../../assets/rocket.png'
import upay from '../../../assets/upay.png'
import paypal from '../../../assets/paypal.png'
import ContactInfo from '../../ContactInfo';
import { faBan, faMousePointer } from '@fortawesome/fontawesome-free-solid';
import { Link } from 'react-router-dom';

const DuaRegistration = () => {
    return (
        <div className='min-h-screen container mx-auto my-10 px-5'>
        <p className='text-center text-2xl'>দোআ ও যিকির কোর্সে রেজিস্ট্রেশন চলছে!</p>         
        {/* course info  */}
         <section className='mx-auto my-10 lg:w-1/3'>
            <Link to="/courses/dua"><p className='p-3 bg-blue-100 rounded shadow-md'>কোর্স সম্পর্কে বিস্তারিত জানুন <FontAwesomeIcon className='text-blue-600' icon={faMousePointer} fade/></p></Link>
        </section> 
        <div className='min-h-screen container mx-auto my-10 px-5'>   
            <div className='mx-auto my-5 text-center '>
            <p className=' mt-3'><FontAwesomeIcon className='pr-3 text-red-600' icon={faBan}/>মহিলাদের গ্রুপ পূর্ণ হয়ে গেছে। এখন শুধু পুরুষরা ভর্তি হতে পারবেন। </p>
            <ul className="steps steps-vertical">
                <li className="step step-primary"><a href='#send-money'>৫০০ টাকা পাঠান/সেন্ডমানি করুন</a></li>
                <li className="step step-primary"><a href='#group-link'>টেলিগ্রাম গ্রুপে জয়েন করুন</a></li>
            </ul>
            </div>

            <section className='mb-10' id='send-money'>
                <div>
                    <h2 className='text-2xl text-green-600'><FontAwesomeIcon className='pr-5' icon={faMoneyBillTransfer}/>কিভাবে কোর্স ফী পাঠাবেন?</h2>
                    <p className=' mt-3'>নিচের যে কোন নাম্বারে <span className="text-red-500 font-bold">৫০০ টাকা সেন্ডমানি </span> করুন।</p>
                    <p className='mb-3'>দোকান থেকে বিকাশ না করে নিজের নাম্বার থেকে করুন, তাহলে টাকাটা গেল কিনা, ঠিক নাম্বারে গেল কিনা নিশ্চিত হতে পারবেন।</p>
                    
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                        <div className='p-5 flex bg-red-200 rounded'>
                            <img className='w-8 mr-5' src={bKash} alt="" />
                            <p className='text-2xl font-bold'>01883 99 80 81</p>
                        </div>
                        <div className='p-5 flex bg-red-200 rounded'>
                            <img className='w-8 mr-5' src={bKash} alt="" />
                            <p className='text-2xl font-bold'>01955 75 62 02</p>
                        </div>
                        <div className='p-5 flex bg-orange-200 rounded'>
                            <img className='w-8 mr-5' src={nagad} alt="" />
                            <p className='text-2xl font-bold'>01883 99 80 81</p>
                        </div>
                        <div className='p-5 flex bg-slate-200 rounded'>
                            <img className='w-8 mr-5' src={upay} alt="" />
                            <p className='text-2xl font-bold'>01883 99 80 81</p>
                        </div>
                        <div className='p-5 flex bg-indigo-200 rounded'>
                            <img className='w-8 mr-5' src={rocket} alt="" />
                            <p className='text-2xl font-bold'>01883 99 80 815</p>
                        </div>
                    </div>
                    {/* <p className='mt-5'>ভারত থেকে ভর্তি হওয়ার জন্য ৫০০ রুপি পাঠাবেন।</p>
                    <div className='flex gap-5 mt-5'>
                        <div className='w-16'>
                            <img className='rounded' src={india} alt="" />
                        </div>
                        <div>
                            <p className='text-xl '> Upi  :  +91 96816 23868</p>
                            <p className='text-xl mb-5'> Upi Id: 9681623868@ybl</p>
                        </div>
                    </div> */}
                </div>
            </section>

            <section className='mb-10' id='group-link'>
                <div>
                    <h2 className='text-2xl text-green-600'><FontAwesomeIcon className='pr-5' icon={faUserGroup}/>কিভাবে গ্রুপে যুক্ত হবেন?</h2>
                    <p className=' mt-3'><FontAwesomeIcon className='pr-3 text-red-600' icon={faBan}/>মহিলাদের গ্রুপ পূর্ণ হয়ে গেছে। এখন শুধু পুরুষরা ভর্তি হতে পারবেন। </p>
                    <p className=' mt-3'>টাকা পাঠানো হয়ে গেলে গ্রুপে জয়েন করুন।</p>
                    <p className='mb-3'>আমরা আপনার টাকা পাওয়ার পর নিশ্চিত হয়ে আপনাকে গ্রুপে এড করব। </p>

                    <div className='flex gap-10 flex-col md:flex-row'>
                        <div className='flex flex-col items-center my-5'>
                            <img className='w-44 mb-3'  src={dua_1_group_male} alt="" />
                            <a href="https://t.me/+SFpk0Gg1xU1iMzI0" target="_blank" rel="noopener noreferrer">                            
                                <div className='flex rounded bg-blue-300'>
                                    <p className='p-3  text-xl'><FontAwesomeIcon className='pr-3' icon="fa-solid fa-link" />পুরুষদের গ্রুপ</p>
                                    <img className='p-1 w-14 rounded' src={group_logo_male} alt="" />
                                </div>
                            </a>
                        </div>
                        <div className='flex flex-col items-center my-5'>
                            <img className='w-44 mb-3'  src={dua_1_group_female} alt="" />
                            <p className=''>                            
                                <div className='flex rounded bg-slate-300'>
                                    <p className='p-3  text-xl'><FontAwesomeIcon className='pr-3' icon="fa-solid fa-link" />মহিলাদের গ্রুপ</p>
                                    <img className='p-1 w-14 rounded-lg' src={group_logo_female} alt="" />
                                </div>
                            </p>
                        </div>
                        
                    </div>
                </div>
            </section>

            <ContactInfo></ContactInfo>

            </div>
        </div>
    );
};

export default DuaRegistration;