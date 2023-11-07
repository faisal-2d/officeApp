import React from 'react';
import CartArabicNextBatch from './CardArabicNextBatch';
import ContactInfo from '../../ContactInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faMoneyBillTransfer, faUserGroup } from '@fortawesome/free-solid-svg-icons';

import female_4_qr from '../../../assets/arabic_4/female_arabic_4.jpg'
import male_4_qr from '../../../assets/arabic_4/male_arabic_4.jpg'
import group_logo_male from '../../../assets/group logo/male_logo.png'
import group_logo_female from '../../../assets/group logo/female_logo.png'
import stcPay from '../../../assets/stc_pay.png'
import india from '../../../assets/india.png'
import bKash from '../../../assets/bKash.png'
import nagad from '../../../assets/nagad.png'
import rocket from '../../../assets/rocket.png'
import upay from '../../../assets/upay.png'
import paypal from '../../../assets/paypal.png'
import { faBan, faMousePointer } from '@fortawesome/fontawesome-free-solid';

const ArabicRegistration = () => {

    // <div>
    //     <p className='text-center text-2xl'>আরবি ভাষা কোর্সে রেজিস্ট্রেশন চলছে!</p>         
    //     {/* course info  */}
    //      <section className='mx-auto my-10 lg:w-1/3'>
    //         <Link to="/courses/arabic"><p className='p-3 bg-blue-100 rounded shadow-md'>কোর্স সম্পর্কে বিস্তারিত জানুন <FontAwesomeIcon className='text-blue-600' icon={faMousePointer} fade/></p></Link>
    //     </section> 
    //     <div className='min-h-screen container mx-auto my-10 px-5'>   
    //         <div className='mx-auto my-5 text-center '>
    //         <ul className="steps steps-vertical">
    //             <li className="step step-primary"><a href='#send-money'>২০০০ টাকা পাঠান/সেন্ডমানি করুন</a></li>
    //             <li className="step step-primary"><a href='#group-link'>টেলিগ্রাম গ্রুপে জয়েন করুন</a></li>
    //         </ul>
    //         </div>

    //         <section className='mb-10' id='send-money'>
    //             <div>
    //                 <h2 className='text-2xl text-green-600'><FontAwesomeIcon className='pr-5' icon={faMoneyBillTransfer}/>কিভাবে কোর্স ফী পাঠাবেন?</h2>
    //                 <p className=' mt-3'>নিচের যে কোন নাম্বারে <span className="text-red-500 font-bold">২০০০ টাকা সেন্ডমানি </span> করুন (লেভেল ১ এর জন্য)।</p>
    //                 <p className='mb-3'><strong className='text-red-600'>দোকান থেকে টাকা না পাঠিয়ে </strong> নিজের/বাড়ির কারো নাম্বার থেকে পাঠান, তাহলে টাকাটা গেল কিনা, ঠিক নাম্বারে গেল কিনা নিশ্চিত হতে পারবেন।</p>
                    
    //                 <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
    //                     <div className='p-5 flex bg-red-200 rounded'>
    //                         <img className='w-8 mr-5' src={bKash} alt="" />
    //                         <p className='text-2xl font-bold'>01883 99 80 81</p>
    //                     </div>
    //                     <div className='p-5 flex bg-red-200 rounded'>
    //                         <img className='w-8 mr-5' src={bKash} alt="" />
    //                         <p className='text-2xl font-bold'>01955 75 62 02</p>
    //                     </div>
    //                     <div className='p-5 flex bg-orange-200 rounded'>
    //                         <img className='w-8 mr-5' src={nagad} alt="" />
    //                         <p className='text-2xl font-bold'>01883 99 80 81</p>
    //                     </div>
    //                     <div className='p-5 flex bg-slate-200 rounded'>
    //                         <img className='w-8 mr-5' src={upay} alt="" />
    //                         <p className='text-2xl font-bold'>01883 99 80 81</p>
    //                     </div>
    //                     <div className='p-5 flex bg-indigo-200 rounded'>
    //                         <img className='w-8 mr-5' src={rocket} alt="" />
    //                         <p className='text-2xl font-bold'>01883 99 80 815</p>
    //                     </div>
    //                     <div className='p-5 flex bg-sky-200 rounded'>
    //                         <img className='w-8 mr-3' src={paypal} alt="" />
    //                         <p className='md:pr-3'><span className='font-bold'>faisal42abdullah</span>@gmail.com</p>
    //                     </div>
    //                     {/* <div className='p-5 flex bg-sky-200 rounded'>
    //                         <img className='w-8 mr-5' src={stcPay} alt="" />
    //                         <p className='text-2xl font-bold'>+966 53 501 7346</p>
    //                     </div> */}
    //                 </div>
    //                 {/* <p className='mt-5'>সরাসরি ব্যাংকে পাঠাতে পারেন</p>
    //                 <div className='flex gap-5 mt-5'>
    //                     <div className='w-16'>
    //                         <img className='rounded' src={bracBank} alt="" />
    //                     </div>
    //                     <div>
    //                         <p className=''> A/C Name: <span className='text-green-600'><strong>Abdullah Al Baki</strong></span></p>
    //                         <p className=' '> A/C No: <span className='text-green-600'><strong>20501 1702 0073 9805</strong></span></p>
    //                         <p className=' '> Branch: <span className='text-green-600'><strong>Rangpur</strong></span></p>
    //                         <p className=' '> Branch Code: <span className='text-green-600'><strong>IBBLBDDH117</strong></span></p>
    //                         <p className=' mb-5'> Islami Bank Bangladesh Ltd</p>
    //                     </div>
    //                 </div> */}
    //                 {/* <p className='mt-5'>ভারত থেকে ভর্তি হওয়ার জন্য ২০০০ রুপি পাঠাবেন।</p>
    //                 <div className='flex gap-5 mt-5'>
    //                     <div className='w-16'>
    //                         <img className='rounded' src={india} alt="" />
    //                     </div>
    //                     <div>
    //                         <p className='text-xl '> Upi  :  +91 96816 23868</p>
    //                         <p className='text-xl mb-5'> Upi Id: 9681623868@ybl</p>
    //                     </div>
    //                 </div> */}
    //             </div>
    //         </section>

    //         <section className='mb-10' id='group-link'>
    //             <div>
    //                 <h2 className='text-2xl text-green-600'><FontAwesomeIcon className='pr-5' icon={faUserGroup}/>কিভাবে গ্রুপে যুক্ত হবেন?</h2>
    //                 {/* <p className=' mt-3'><FontAwesomeIcon className='pr-3 text-red-600' icon={faBan}/>মহিলাদের গ্রুপ পূর্ণ হয়ে গেছে। এখন শুধু পুরুষরা ভর্তি হতে পারবেন। </p> */}
    //                 <p className=' mt-3'>টাকা পাঠানো হয়ে গেলে গ্রুপে জয়েন করুন।</p>
    //                 <p className='mb-3'>আমরা আপনার টাকা পাওয়ার পর নিশ্চিত হয়ে আপনাকে গ্রুপে এড করব। </p>

    //                 <div className='flex gap-10 flex-col md:flex-row'>
    //                     <div className='flex flex-col items-center my-5'>
    //                         <a href="https://t.me/+UEYVhU-BFfxjYjk0" target="_blank" rel="noopener noreferrer">                            
    //                         <img className='w-44 mx-auto mb-3'  src={male_4_qr} alt="" />
    //                             <div className='flex rounded bg-blue-300'>
    //                                 <p className='p-3  text-xl'><FontAwesomeIcon className='pr-3' icon="fa-solid fa-link" />পুরুষদের গ্রুপ</p>
    //                                 <img className='p-1 w-14 rounded' src={group_logo_male} alt="" />
    //                             </div>
    //                         </a>
    //                     </div>
    //                     <div className='flex flex-col items-center my-5'>
    //                         <a href="https://t.me/+jb98h4a22Nk2YTBk" target="_blank" rel="noopener noreferrer">                            
    //                         <img className='w-44 mx-auto mb-3'  src={female_4_qr} alt="" />
    //                             <div className='flex rounded bg-pink-300'>
    //                                 <p className='p-3  text-xl'><FontAwesomeIcon className='pr-3' icon="fa-solid fa-link" />মহিলাদের গ্রুপ</p>
    //                                 <img className='p-1 w-14 rounded-lg' src={group_logo_female} alt="" />
    //                             </div>
    //                         </a>
    //                     </div>
                        
    //                 </div>
    //             </div>
    //         </section>

    //         <ContactInfo></ContactInfo>

    //         </div>
    //     </div>

    return (
        <section className='min-h-screen container mx-auto my-10 px-5'>

        <div className='h-screen'>            
            <CartArabicNextBatch></CartArabicNextBatch>
            <ContactInfo></ContactInfo>
        </div>

        </section>
    );
};

export default ArabicRegistration;