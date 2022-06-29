import React from 'react';

const ArabicSchedule = () => {
    return (
        <div>
            {/* Arabic */}      
      <div className="mt-20 mb-10">
        <p className="text-center text-blue-600 font-bold text-3xl">
        আরবি ভাষা কোর্সঃ লেভেল ১ (সপ্তাহে ২ দিন ক্লাস)
        </p>
        <p className="text-xl text-center text-red-600 my-4">(জুমে ক্লাস)</p>
      </div>
      <div className="overflow-x-auto ">
        <table className="table w-full w-3/4 mx-auto text-xl ">
          <thead>
            <tr>
              <th></th>
              <th className="text-xl">বার</th>
              <th className="text-xl">মেয়েদের ক্লাস</th>
              <th className="text-xl">ছেলেদের ক্লাস</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover">
              <th>১</th>
              <td>শনিবার</td>
              <td>বিকাল ৪ঃ৩০</td>
              <td>সন্ধ্যা ৭ঃ৩০</td>
            </tr>

            <tr className="hover">
              <th>২</th>
              <td>মঙ্গলবার</td>
              <td>বিকাল ৪ঃ৩০</td>
              <td>সন্ধ্যা ৭ঃ৩০</td>
            </tr>
           
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default ArabicSchedule;