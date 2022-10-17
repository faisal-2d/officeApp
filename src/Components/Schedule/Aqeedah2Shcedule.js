import React from 'react';

const Aqeedah2Shcedule = () => {
    return (
        <div>
            {/* Aqeedah  */}      
      <div className="mt-20 mb-10">
        <p className="text-center text-sky-900 font-bold text-3xl">
        আক্বিদাহ কোর্সঃ তাওহীদ লেভেল ২
        </p>
        <p className="text-xl text-center my-4">(টেলিগ্রামে ক্লাস, সপ্তাহে ৩ দিন)</p>
      </div>
      <div className="overflow-x-auto ">
        <table className="table w-full w-3/4 mx-auto text-xl ">
          <thead>
            <tr>
              <th></th>
              <th className="text-xl">বার</th>
              <th className="text-xl">সময় (বাংলাদেশ)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover">
              <th>১</th>
              <td>সোমবার</td>
              <td>সন্ধ্যা ৭ঃ৩০</td>
            </tr>

            <tr className="hover">
              <th>২</th>
              <td>বুধবার</td>
              <td>সন্ধ্যা ৭ঃ৩০</td>
            </tr>

            <tr className="hover">
              <th>৩</th>
              <td>বৃহস্পতিবার</td>
              <td className='text-red-600'>সন্ধ্যা ৮ঃ৩০</td>
            </tr>
          </tbody>
        </table>
      </div>
            
        </div>
    );
};

export default Aqeedah2Shcedule;