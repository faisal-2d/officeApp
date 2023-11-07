import { faTelegramPlane, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ContactInfo = () => {
    return (
        <section className='my-10'>
                <p className='text-xl'>প্রয়োজনে যোগাযোগ করুন</p>
                <p className='mt-3'>হোয়াটসঅ্যাপে/টেলিগ্রামে-</p>
                <p>Faisal</p>              
                <p className='font-bold'>+966 57 862 1278</p>
                <p className='my-3 text-white'>
                                <a target="_blank" href='https://t.me/+966578621278' className='rounded p-2 bg-sky-600'>
                                    <FontAwesomeIcon className='pr-2 text-xl' icon={faTelegramPlane} beatFade/> Telegram
                                </a>
                                <a target="_blank" href='https://wa.me/+966578621278' className='rounded p-2 bg-lime-600 ml-3'>
                                    <FontAwesomeIcon className='pr-2 text-xl' icon={faWhatsapp} beatFade/> WhatsApp
                                </a>
                            </p> 
           </section>
    );
};

export default ContactInfo;