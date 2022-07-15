import React from 'react';
import AqeedahRegistration from './CourseRegistration/AqeedahRegistration';

const Registration = () => {
    return (
        <div className='min-h-screen'>
            <p className="text-center text-2xl">আক্বিদাহ কোর্সে রেজিস্ট্রেশন চলছে!</p>
            <div className='mx-auto text-center'>
            <ul className="steps steps-vertical">
                <li className="step step-primary">১০০০ টাকা সেন্ডমানি করুন</li>
                <li className="step step-primary">ভর্তি ফর্ম পূরন করুন</li>
                <li className="step step-primary">গ্রুপে জয়েন করুন</li>
            </ul>
            </div>
            <div className='text-center my-5'>
            <a className='btn text-blue-600' href="https://docs.google.com/forms/d/e/1FAIpQLSdwsQWCre-4cJhcD15fZgU6A8cC4jS5H4__6pSXdc153hSEAw/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">রেজিস্ট্রেশন ফর্ম</a>            </div>
            </div>
    );
};

export default Registration;