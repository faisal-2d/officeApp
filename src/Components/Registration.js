import { faTelegramPlane, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMousePointer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import AqeedahDue from './CourseRegistration/AqeedahDue';
import AqeedahRegistration from './CourseRegistration/AqeedahRegistration';
import NextBatchReg from './CourseRegistration/NextBatchReg';

const Registration = () => {
    // <AqeedahRegistration></AqeedahRegistration>
    return (
        <div className='min-h-screen container mx-auto my-10 px-5'>
            <p className='text-center text-2xl'>আক্বিদাহ কোর্সে রেজিস্ট্রেশন চলছে!</p>

            {/* register now  */}
            <section className='mx-auto my-10 lg:w-1/3'>
                <Link to="/courses/aqeedah"><p className='p-3 bg-blue-100 rounded shadow-md'>কোর্স সম্পর্কে বিস্তারিত জানুন <FontAwesomeIcon className='text-blue-600' icon={faMousePointer} fade/></p></Link>
            </section>

            <AqeedahRegistration></AqeedahRegistration>

            {/* Admin Contact  */}
           <section className='my-10'>
                <p className='text-xl'>প্রয়োজনে এডমিনের সাথে যোগাযোগ করুন</p>
                <p className='mt-3'>হোয়াটসঅ্যাপে/টেলিগ্রামে-</p>
                <p>ফাইসাল</p>              
                <p className='font-bold'>+966 57 862 1278</p>
                <p className='my-2 text-white'>
                                <a target="_blank" href='https://wa.me/message/AS7CJBZOLZLFL1' className='rounded p-2 bg-lime-600 mr-3'>
                                    <FontAwesomeIcon className='pr-2 text-xl' icon={faWhatsapp}/> WhatsApp
                                </a>
                                <a target="_blank" href='https://t.me/faisal_335' className='rounded p-2 bg-sky-600'>
                                    <FontAwesomeIcon className='pr-2 text-xl' icon={faTelegramPlane}/> Telegram
                                </a>
                            </p> 
           </section>
        </div>
    );
};

export default Registration;