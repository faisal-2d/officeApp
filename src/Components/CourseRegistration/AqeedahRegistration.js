import { faHandPointer } from '@fortawesome/fontawesome-free-regular';
import { faFileInvoice, faMoneyBillTransfer, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import registration_form_qr from '../../assets/aqeedah_20/batch_20_qr.png'
import batch_20_female_qr from '../../assets/aqeedah_20/aqeedah_20_female.jpg'
import batch_20_male_qr from '../../assets/aqeedah_20/aqeedah_20_male.jpg'
import male_group_logo from '../../assets/group logo/aqeedah 1 male.jpg'
import female_group_logo from '../../assets/group logo/aqeedah 1 female.jpg'
import india from '../../assets/india.png'
import bKash from '../../assets/bKash.png'
import nagad from '../../assets/nagad.png'
import rocket from '../../assets/rocket.png'
import upay from '../../assets/upay.png'
import paypal from '../../assets/paypal.png'
import { Link } from 'react-router-dom';
import { faMousePointer } from '@fortawesome/fontawesome-free-solid';
import ContactInfo from '../ContactInfo';


const AqeedahRegistration = () => {
    return (
        <div className='min-h-screen container mx-auto my-10 px-5'>
            <p className='text-center text-2xl'>আক্বিদাহ কোর্সে রেজিস্ট্রেশন চলছে!</p>
            <div className='mx-auto my-5 text-center '>

                {/* course info  */}
         <section className='mx-auto my-10 lg:w-1/3'>
            <Link to="/courses/aqeedah"><p className='p-3 bg-blue-100 rounded shadow-md'>কোর্স সম্পর্কে বিস্তারিত জানুন <FontAwesomeIcon className='text-blue-600' icon={faMousePointer} fade/></p></Link>
        </section> 

            <ul className="steps steps-vertical">
                <li className="step step-primary"><a href='#send-money'>১৫০০ টাকা পাঠান/সেন্ডমানি করুন</a></li>
                <li className="step step-primary"><a href='#form'>ভর্তি ফর্ম পূরন করুন</a></li>
                <li className="step step-primary"><a href='#group-link'>টেলিগ্রাম গ্রুপে জয়েন করুন</a></li>
            </ul>
            </div>

            <section className='mb-10' id='send-money'>
                <div>
                    <h2 className='text-2xl text-green-600'><FontAwesomeIcon className='pr-5' icon={faMoneyBillTransfer}/>কিভাবে কোর্স ফী পাঠাবেন?</h2>
                    <p className=' mt-3'>নিচের যে কোন নাম্বারে <span className="text-red-500 font-bold">১৫০০ টাকা সেন্ডমানি </span> করুন।</p>
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
                    <p className='mt-5'>ভারত থেকে ভর্তি হওয়ার জন্য ১৫০০ রুপি পাঠাবেন।</p>
                    <div className='flex gap-5 mt-5'>
                        <div className='w-16'>
                            <img className='rounded' src={india} alt="" />
                        </div>
                        <div>
                            <p className='text-xl '> Upi  :  +91 96816 23868</p>
                            <p className='text-xl mb-5'> Upi Id: 9681623868@ybl</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mb-10' id='form'>
                <div>
                    <h2 className='text-2xl text-green-600'><FontAwesomeIcon className='pr-5' icon={faFileInvoice}/>কিভাবে ফর্ম পূরন করবেন?</h2>
                    <div className='grid grid-cols-1 md:grid-cols-3'>
                        <div className='md:col-span-2'>
                            <p className='mt-3'>টাকা পাঠানো হয়ে গেলে ভর্তি ফর্ম পূরন করুন।</p>
                            <p className='mb-3'>ভর্তি ফর্মে আপনার টেলিগ্রাম নাম্বারটি দিতে হবে। নাম্বারটি ভুল করবেন না, নাহলে আপনার সাথে আমরা যোগাযোগ করতে পারব না।</p>
                            
                            <a className='btn-primary rounded py-1 px-3' href="https://docs.google.com/forms/d/e/1FAIpQLSd3rIi6hmJH3X0tW8_qyj1c3JemI4so59BhoIr_Tg0aDY9vsQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='pr-3' icon="fa-solid fa-link" />ভর্তি ফর্ম</a>
                        </div>
                        <div className='mx-auto text-center my-5'>
                            <img className='w-32' src={registration_form_qr} alt="" />
                            <p className='p-1 rounded bg-blue-100'>ভর্তি ফর্ম</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mb-10' id='group-link'>
                <div>
                    <h2 className='text-2xl text-green-600'><FontAwesomeIcon className='pr-5' icon={faUserGroup}/>কিভাবে গ্রুপে যুক্ত হবেন?</h2>
                    <p className=' mt-3'>টাকা পাঠানো এবং ফর্ম পূরন করা হয়ে গেলে গ্রুপে জয়েন করুন।</p>
                    <p className='mb-3'>আমরা আপনার টাকা পাওয়ার পর নিশ্চিত হয়ে আপনাকে গ্রুপে এড করব। আপনি ফর্ম পূরন করার ২/৩ ঘন্টার মধ্যেই এড করে দেয়া হবে।</p>

                    <div className='flex gap-10 flex-col md:flex-row'>
                        <div className='flex flex-col items-center my-5'>
                            <a href="https://t.me/+TiZYTgSvLYUxYzg0" target="_blank" rel="noopener noreferrer">                            
                            <img className='w-44 mx-auto mb-3'  src={batch_20_male_qr} alt="" />
                                <div className='flex rounded bg-orange-300'>
                                    <p className='p-3  text-xl'><FontAwesomeIcon className='pr-3' icon="fa-solid fa-link" />পুরুষদের গ্রুপ</p>
                                    <img className='w-14' src={male_group_logo} alt="" />
                                </div>
                            </a>
                        </div>
                        <div className='flex flex-col items-center my-5'>
                            <a href="https://t.me/+y6IptpP6eMVkNjFk" target="_blank" rel="noopener noreferrer">                            
                            <img className='w-44 mx-auto mb-3'  src={batch_20_female_qr} alt="" />
                                <div className='flex rounded bg-blue-300'>
                                    <p className='p-3  text-xl'><FontAwesomeIcon className='pr-3' icon="fa-solid fa-link" />মহিলাদের গ্রুপ</p>
                                    <img className='w-14' src={female_group_logo} alt="" />
                                </div>
                            </a>
                        </div>
                        
                    </div>
                    <p className='my-3'>টাকা পাঠানো বা গ্রুপে যুক্ত হওয়া নিয়ে কোন সমস্যা হলে আমাদেরকে সাপোর্টে/ফেসবুক পেইজে মেসেজ দিন।</p>
                </div>
            </section>

            <ContactInfo></ContactInfo>

            </div>
    );
};

export default AqeedahRegistration;