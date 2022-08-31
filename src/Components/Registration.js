import React from 'react';
import AqeedahRegistration from './CourseRegistration/AqeedahRegistration';
import NextBatchReg from './CourseRegistration/NextBatchReg';

const Registration = () => {
    // <AqeedahRegistration></AqeedahRegistration>
    return (
        <div className='min-h-screen container mx-auto my-10 px-5'>
            <NextBatchReg></NextBatchReg>
        </div>
    );
};

export default Registration;