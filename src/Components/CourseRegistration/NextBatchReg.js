import React from 'react';

const NextBatchReg = () => {
    const oneDay = 24 * 60 * 60 * 1000;
    const today = new Date();
    const addmissionStartDate = new Date(2022, 9, 25);
    const remainingDays = Math.round(Math.abs((addmissionStartDate - today) / oneDay));
    return (
        <div className='bg-sky-100 p-16 rounded text-white my-10'>
                <div className='mb-10'>
                <p className='text-center text-sky-900  text-3xl mb-4'>আক্বিদাহ কোর্সের ১৮তম ব্যাচে ভর্তি শুরু হবে</p>
                <p className='text-center text-black text-2xl'>আর মাত্র {remainingDays} দিন পর!</p>
                <section>
{/* <div className="flex gap-5">
  <div>
    <span className="countdown font-mono text-4xl">
      <span style=""></span>
    </span>
    days
  </div> 
  <div>
    <span className="countdown font-mono text-4xl">
      <span style=""></span>
    </span>
    hours
  </div> 
  <div>
    <span className="countdown font-mono text-4xl">
      <span style="--value:24;"></span>
    </span>
    min
  </div> 
  <div>
    <span className="countdown font-mono text-4xl">
      <span style="--value:12;"></span>
    </span>
    sec
  </div>
</div> */}
                </section>
                {/* <p className='text-center text-black text-2xl'>কিভাবে ভর্তি হবেন? <Link to='registration' className='underline'>বিস্তারিত জানুন</Link></p> */}
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 text-black text-2xl'>
                    <p className='p-3 bg-green-300 rounded'>ভর্তি শুরু হবে ২৫ অক্টবর</p>
                    <p className='p-3 bg-orange-300 rounded'>ভর্তি শেষ হবে ২৫ নভেম্বর</p>
                    <p className='p-3 bg-blue-300 rounded'>ব্যাচের অরিয়েন্টেশন ২৭ নভেম্বর</p>
                    <p className='p-3 bg-red-300 rounded'>ক্লাস শুরু হবে ২৯ নভেম্বর</p>
                </div>
            </div>
    );
};

export default NextBatchReg;