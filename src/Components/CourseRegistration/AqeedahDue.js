import React from 'react';
import { faFileInvoice, faMoneyBillTransfer, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import due_payment_form_qr from '../../assets/due-payment-form.png'
import india from '../../assets/india.png'
import bKash from '../../assets/bKash.png'
import nagad from '../../assets/nagad.png'
import rocket from '../../assets/rocket.png'
import upay from '../../assets/upay.png'
import paypal from '../../assets/paypal.png'
import islamiBank from '../../assets/islamic bank..png'
import stcPay from '../../assets/stc_pay.png'
import { faTelegramPlane, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import ContactInfo from '../ContactInfo';

const AqeedahDue = () => {
    return (
        <div className='min-h-screen container mx-auto my-10 px-5'>
            <p className='text-center text-2xl'>আক্বিদাহ কোর্সের ফী/বকেয়া পরিশোধ করুন!</p>
            <div className='mx-auto my-5 text-center '>
            <ul className="steps steps-vertical">
                <li className="step step-primary"><a href='#send-money'>টাকা পাঠান</a></li>
                <li className="step step-primary"><a href='#form'>ফর্ম পূরন করুন</a></li>
            </ul>
            </div>

            <section className='mb-10' id='send-money'>
                <div>
                    <h2 className='text-2xl text-green-600'><FontAwesomeIcon className='pr-5' icon={faMoneyBillTransfer}/>কিভাবে টাকা পাঠাবেন?</h2>
                    <p className=' mt-3'>নিচের যে কোন নাম্বারে আপনার টাকা <strong className='text-red-600'>সেন্ডমানি</strong> করুন।</p>
                    <p>আপনার যদি মনে না থাকে কতো টাকা বকেয়া আছে, এডমিনকে মেসেজ দিয়ে জেনে নিন। </p>
                    <p className=''><strong className='text-red-600'>দোকান থেকে টাকা না পাঠিয়ে </strong> নিজের/বাড়ির কারো নাম্বার থেকে পাঠান, তাহলে টাকাটা গেল কিনা, ঠিক নাম্বারে গেল কিনা নিশ্চিত হতে পারবেন।</p>
                    <p className='mt-1'><FontAwesomeIcon className='text-blue-500' icon={'image'}/> সম্ভব হলে টাকা পাঠানোর পর <strong className='text-blue-600'>স্ক্রিনশট/মানি রিসিটের ছবি</strong> তুলুন। </p>
                    <p className='mb-5'><FontAwesomeIcon className='text-red-500' icon={'ban'}/> টাকা পাঠানোর এই নাম্বারগুলোতে <strong className='text-red-600'>কল করবেন না</strong> । যে কোন প্রয়োজনে <a target="_blank" href='https://m.me/alharamain.ac' className='bg-sky-300 px-1 rounded-sm'>মেসেঞ্জারে</a>/<a target="_blank" href='https://wa.me/+966578621278' className='bg-lime-400 px-1 rounded-sm'>হোয়াটসঅ্যাপে</a>/<a target="_blank" href='https://t.me/+966578621278' className='bg-blue-400 px-1 rounded-sm'>টেলিগ্রামে</a> যোগাযোগ করুন।</p>


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
                        <div className='p-5 flex bg-sky-200 rounded'>
                            <img className='w-8 mr-2' src={paypal} alt="" />
                            <p className='md:pr-3'><span className='font-bold'>faisal42abdullah</span>@gmail.com</p>
                        </div>
                        <div className='p-5 flex bg-sky-200 rounded'>
                            <img className='w-8 mr-3' src={stcPay} alt="" />
                            <p className='text-2xl font-bold'>+966 5350 17346</p>
                        </div>
                    </div>
                    {/* <p className='mt-5'>ভারত থেকে ভর্তি হওয়ার জন্য ১৫০০ রুপি পাঠাবেন।</p>
                    <div className='flex gap-5 mt-5'>
                        <div className='w-16'>
                            <img className='rounded' src={india} alt="" />
                        </div>
                        <div>
                            <p className='text-xl '> Upi  :  +91 96816 23868</p>
                            <p className='text-xl mb-5'> Upi Id: 9681623868@ybl</p>
                        </div>
                    </div> */}
                    <p className='mt-5'>সরাসরি ব্যাংকে পাঠাতে পারেন</p>
                    <div className='flex gap-5 mt-5'>
                        <div className='w-16'>
                            <img className='rounded' src={islamiBank} alt="" />
                        </div>
                        <div>
                            <p className=''> A/C Name: <span className='text-green-600'><strong>Abdullah Al Baki</strong></span></p>
                            <p className=' '> A/C No: <span className='text-green-600'><strong>20501 1702 0073 9805</strong></span></p>
                            <p className=' '> Branch: <span className='text-green-600'><strong>Rangpur</strong></span></p>
                            <p className=' '> Branch Code: <span className='text-green-600'><strong>IBBLBDDH117</strong></span></p>
                            <p className=' mb-5'> Islami Bank Bangladesh Ltd</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className='mb-10' id='contact-admin'>
                <div>
                    <h2 className='text-2xl text-green-600'><FontAwesomeIcon className='pr-5' icon={faUser}/>কিভাবে এডমিনের সাথে যোগাযোগ করবেন?</h2>
                    <div className='grid grid-cols-1 md:grid-cols-3'>
                        <div className='md:col-span-2'>
                            <p className='mt-3'>টাকা পাঠানো হয়ে গেলে এডমিনকে জানিয়ে দিন। তিনি আপনার প্রোফাইল আপডেট করে দিবেন।</p>
                            <p className='mb-3'>ভালো হয় যদি আপনি টাকা পাঠানোর স্ক্রিনশট/ডকুমেন্টের ছবি তুলে এডমিনকে পাঠান। যদি তা সম্ভব না হয় তাহলে কবে - কোন নাম্বার থেকে - কতো টাকা পাঠিয়েছেন , তা লিখে এডমিনকে ইনবক্স করুন।</p> 

                            <ContactInfo></ContactInfo>                         
                                                     
                        </div>
                       
                    </div>
                </div>
            </section> */}
             <section className='mb-10' id='form'>
                <div>
                    <h2 className='text-2xl text-green-600'><FontAwesomeIcon className='pr-5' icon={faFileInvoice}/>কিভাবে ফর্ম পূরন করবেন?</h2>
                    <div className='grid grid-cols-1 md:grid-cols-3'>
                        <div className='md:col-span-2'>
                            <p className='mt-3'>টাকা পাঠানো হয়ে গেলে ফর্ম পূরন করুন।</p>
                            <p className='mb-3'><FontAwesomeIcon className='text-blue-500' icon={'image'}/> সম্ভব হলে টাকা পাঠানোর <strong className='text-blue-600'>স্ক্রিনশট/মানি রিসিটের ছবি</strong> ফর্মে এড করুন অথবা এডমিনকে ইনবক্সে পাঠান। </p>
                            {/* <p className='mb-3'>আপনি চাইলে টাকা পাঠানোর পর স্ক্রিনশট/মেসেজ ফর্মে যুক্ত করে দিতে পারেন অথবা এডমিনকে ইনবক্সে দিতে পারেন। </p> */}
                            
                            <a className='btn-success rounded py-1 px-3' href="https://docs.google.com/forms/d/e/1FAIpQLSd-JNO4jrMPEzp5MWM9OB9hYRiP4baO53h2Q6pmLlK1Itsgfw/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='pr-3' icon="fa-solid fa-link" />পেমেন্ট ক্লিয়ারেন্স ফর্ম</a>
                        </div>

                        
                        
                        <div className='mx-auto text-center my-5'>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd-JNO4jrMPEzp5MWM9OB9hYRiP4baO53h2Q6pmLlK1Itsgfw/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
                            <img className='w-32' src={due_payment_form_qr} alt="" />
                        </a>
                            <p className='p-1 rounded bg-blue-100'>পেমেন্ট ক্লিয়ারেন্স ফর্ম</p>
                        </div>
                        

                    </div>
                </div>
            </section>            

            <ContactInfo></ContactInfo>

            </div>
    );
};

export default AqeedahDue;