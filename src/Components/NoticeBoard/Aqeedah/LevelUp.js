import React from 'react';

const LevelUp = ({accessLevelTwo}) => {
    return (
        <section className="my-10">
        <p>আপনি কি লেভেল ২ এ জয়েন করতে চান?</p>
        
                <div className='mx-auto md:mx-0 mt-5 p-5 w-56 rounded bg-gradient-to-tl from-slate-300'>
                    <p className='text-xl'>Level 2 + 3</p>            
                   
                    <br />
                    <div className="text-center mb-8">
                    <div onClick={accessLevelTwo} className="py-3 px-3 rounded bg-orange-300 cursor-pointer">প্রোফাইল আপডেট করুন</div>           
                    </div>
                </div>
        </section>
    );
};

export default LevelUp;