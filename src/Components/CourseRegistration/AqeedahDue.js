import React from 'react';
import { faFileInvoice, faMoneyBillTransfer, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import india from '../../assets/india.png'
import bKash from '../../assets/bKash.png'
import nagad from '../../assets/nagad.png'
import rocket from '../../assets/rocket.png'
import upay from '../../assets/upay.png'
import { faTelegramPlane, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const AqeedahDue = () => {
    return (
        <div className='min-h-screen container mx-auto my-10 px-5'>
            <p className='text-center text-2xl'>আক্বিদাহ কোর্সের বকেয়া পরিশোধ করুন!</p>
            <div className='mx-auto my-5 text-center '>
            <ul className="steps steps-vertical">
                <li className="step step-primary"><a href='#send-money'>বকেয়া টাকা পাঠান</a></li>
                <li className="step step-primary"><a href='#contact-admin'>এডমিনকে জানান</a></li>
            </ul>
            </div>

            <section className='mb-10' id='send-money'>
                <div>
                    <h2 className='text-2xl text-green-600'><FontAwesomeIcon className='pr-5' icon={faMoneyBillTransfer}/>কিভাবে বকেয়া টাকা পাঠাবেন?</h2>
                    <p className=' mt-3'>নিচের যে কোন নাম্বারে আপনার বকেয়া টাকা সেন্ডমানি করুন।</p>
                    <p>আপনার যদি মনে না থাকে কতো টাকা বকেয়া আছে, এডমিনকে মেসেজ দিয়ে জেনে নিন। </p>
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
                    <p className='mt-5'>ভারত থেকে এই নাম্বারে টাকা পাঠাতে পারবেন।</p>
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
            <section className='mb-10' id='contact-admin'>
                <div>
                    <h2 className='text-2xl text-green-600'><FontAwesomeIcon className='pr-5' icon={faUser}/>কিভাবে এডমিনের সাথে যোগাযোগ করবেন?</h2>
                    <div className='grid grid-cols-1 md:grid-cols-3'>
                        <div className='md:col-span-2'>
                            <p className='mt-3'>টাকা পাঠানো হয়ে গেলে এডমিনকে জানিয়ে দিন। তিনি আপনার প্রোফাইল আপডেট করে দিবেন।</p>
                            <p className='mb-3'>ভালো হয় যদি আপনি টাকা পাঠানোর স্ক্রিনশট/ডকুমেন্টের ছবি তুলে এডমিনকে পাঠান। যদি তা সম্ভব না হয় তাহলে কবে - কোন নাম্বার থেকে - কতো টাকা পাঠিয়েছেন , তা লিখে এডমিনকে ইনবক্স করুন।</p> 

                            <p className='mt-10'>এডমিনের সাথে হোয়াটসঅ্যাপে বা টেলিগ্রামে যোগাযোগ করতে পারেন -</p>                           
                            <p className='font-bold'>Faisal</p>                           
                            <p className='font-bold'>+966 57 862 1278</p>                           
                            <p className='my-2 text-white'>
                                <a target="_blank" href='https://wa.me/message/AS7CJBZOLZLFL1' className='rounded p-2 bg-lime-600 mr-3'>
                                    <FontAwesomeIcon className='pr-2 text-xl' icon={faWhatsapp}/> WhatsApp
                                </a>
                                <a target="_blank" href='https://t.me/faisal_335' className='rounded p-2 bg-sky-600'>
                                    <FontAwesomeIcon className='pr-2 text-xl' icon={faTelegramPlane}/> Telegram
                                </a>
                            </p>                           
                                                     
                        </div>
                       
                    </div>
                </div>
            </section>
            

            

            </div>
    );
};

export default AqeedahDue;