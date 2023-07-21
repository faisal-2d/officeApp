import { faMousePointer } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NextBatchReg = () => {
    const oneDay = 24 * 60 * 60 * 1000;
    const today = new Date();
    const addmissionStartDate = new Date(2023, 7, 1);    //months start from 0
    const totalDays = Math.round(Math.abs((addmissionStartDate - today) / oneDay));
    const remainingMonths = Math.floor(totalDays/30);
    const remainingDays = totalDays%30;

    

    const digitConverter = engDigit => {
    const engD = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const bangD = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

      const str = engDigit.toString();
      let bangDigit = '';
      
      for(let i=0; i<str.length; i++){
        for(let j=0; j<engD.length; j++){
          if(str[i]==engD[j]){
            bangDigit+=bangD[j];
          }
        }           
    }
    return bangDigit;
  } 

  const d = digitConverter(remainingDays);
  const m = digitConverter(remainingMonths);

    return (
        <div className='bg-sky-100 p-5 md:p-16 rounded text-white my-10'>
                <div className='mb-10'>
                <p className='text-center text-sky-900  text-3xl mb-4'>আক্বিদাহ কোর্সের ২০ তম ব্যাচে ভর্তি চলছে!</p>
                {/* <p className='text-center text-sky-900  text-3xl mb-4'>আক্বিদাহ কোর্সের পরবর্তী ব্যাচে ভর্তি শুরু হবে</p> 
                <p className='text-center text-black text-2xl'>আর মাত্র <span className={` ${m==='০' ? 'hidden' : ''}`}>{m} মাস </span> {d} দিন পর!</p>  */}
                
                
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 text-black text-xl'>
                    {/* <p className='p-3 bg-green-300 rounded'>ভর্তি শুরু হবে ১ আগস্ট </p> */}
                    <p className='p-3 bg-orange-300 rounded'>ভর্তি শেষ হবে ২০ আগস্ট </p>
                    <p className='p-3 bg-blue-300 rounded'>অরিয়েন্টেশন ক্লাস ২২ আগস্ট</p>
                    {/* <p className='p-3 bg-red-300 rounded'>ক্লাস শুরু হবে ১ সেপ্টেম্বর</p> */}
                    <Link to="/courses/aqeedah"><p className='p-3 bg-pink-300 rounded shadow-md'>কোর্স সম্পর্কে বিস্তারিত জানুন <FontAwesomeIcon className='text-pink-600' icon={faMousePointer} fade/></p></Link>
                    <Link to="/registration-aqeedah"><p className='p-3 bg-green-300 rounded shadow-md'>এখনি রেজিস্ট্রেশন করুন <FontAwesomeIcon className='text-green-600' icon={faMousePointer} fade/></p></Link>
                    
                </div>
            </div>
    );
};

export default NextBatchReg;