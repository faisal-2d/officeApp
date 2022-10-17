import React from 'react';

const Arabic1Shedule = () => {
    return (
        <div>
            {/* Arabic 1*/}      
      <div className="mt-20 mb-10">
        <p className="text-center text-green-600 font-bold text-3xl">
        আরবি ভাষা কোর্সঃ লেভেল ১
        </p>
        <p className="text-xl text-center text-red-600 my-4">(জুমে ক্লাস, সপ্তাহে ২ দিন)</p>
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
              <td>বিকাল ৪ঃ০০</td>
              <td>সন্ধ্যা ৭ঃ০০</td>
            </tr>

            <tr className="hover">
              <th>২</th>
              <td>মঙ্গলবার</td>
              <td>বিকাল ৪ঃ০০</td>
              <td>সন্ধ্যা ৭ঃ০০</td>
            </tr>
           
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default Arabic1Shedule;