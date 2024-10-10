import React from "react";
import bd_flag from "../../../assets/icons/bd_flag.ico";
const Aqeedah1Schedule = () => {
  return (
    <div className="my-10 py-10 bg-blue-200 rounded">
      <div className="">
        <p className="text-xl text-center my-10">লেভেল ১, সপ্তাহে ৩ দিন</p>
      </div>
      <div className="overflow-x-auto ">
        <table className="table w-3/4 mx-auto text-xl ">
          <thead>
            <tr>
              <th>#</th>
              <th className="text-xl">বার</th>
              <th className="text-xl">
                <span className="flex items-center">
                  <span>সময়</span>
                  <div className="ml-3">
                    <img className="" src={bd_flag} alt="" />
                  </div>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover">
              <th>১</th>
              <td>রবিবার</td>
              <td>সন্ধ্যা ৭ঃ৩০</td>
            </tr>

            <tr className="hover">
              <th>২</th>
              <td>মঙ্গলবার</td>
              <td>সন্ধ্যা ৭ঃ৩০</td>
            </tr>

            <tr className="hover">
              <th>৩</th>
              <td>বৃহস্পতিবার</td>
              <td>সন্ধ্যা ৭ঃ৩০</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Aqeedah1Schedule;
