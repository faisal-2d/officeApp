import { faTelegramPlane, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMousePointer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import ContactInfo from './ContactInfo';
import AqeedahDue from './CourseRegistration/AqeedahDue';
import AqeedahRegistration from './CourseRegistration/AqeedahRegistration';
import NextBatchReg from './CourseRegistration/NextBatchReg';
import DuaRegistration from './NoticeBoard/Dua/DuaRegistration';
import CardArabicNextBatch from './NoticeBoard/Arabic/CardArabicNextBatch';
import CardDuaNextBatch from './NoticeBoard/Dua/CardDuaNextBatch';

const Registration = () => {
    return (
        <div className='min-h-screen container mx-auto my-10 px-5'>
        <CardDuaNextBatch></CardDuaNextBatch>
         <NextBatchReg/>
        {/* <CardArabicNextBatch/> */}
        {/* <AqeedahRegistration></AqeedahRegistration> */}
        {/* <DuaRegistration></DuaRegistration> */}
        <ContactInfo></ContactInfo> 
        </div>
    );
};

export default Registration;