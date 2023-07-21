import React from 'react';

const SeeratInfo = () => {
    return (
        <div className='container mx-auto px-5 my-10'>
            {/* Welcome  */}
           <section>
                <div className='p-5 rounded bg-gradient-to-tl from-sky-200'>
                    <p className='text-3xl'>সীরাতুন নবী (সাঃ) কোর্সে</p>
                    <p className='text-4xl'>স্বাগতম!</p>
                </div>
           </section>
           {/* Course Descripttion  */}
           <section className='my-10'>
                <p className='text-xl'>কোর্স পরিচিতিঃ</p>
                <p>(এই পেইজটি এখনও আপডেট করা হয়নি।)</p>
           </section>
        </div>
    );
};

export default SeeratInfo;