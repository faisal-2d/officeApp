import React from "react";
import bd_flag from "../../../assets/icons/bd_flag.ico";

const Aqeedah2Shcedule = () => {
  return (
    <div className="my-10 py-10 bg-orange-200 rounded">
      <div className="">
        <p className="text-xl text-center my-10">লেভেল ২, সপ্তাহে ৩ দিন</p>
      </div>
      <div className="overflow-x-auto ">
        <table className="table w-full w-3/4 mx-auto text-xl ">
          <thead>
            <tr>
              <th></th>
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
              <td>সোমবার</td>
              <td>সন্ধ্যা ৭:৩০</td>
            </tr>

            <tr className="hover">
              <th>২</th>
              <td>বুধবার</td>
              <td>সন্ধ্যা ৭:৩০</td>
            </tr>

            <tr className="hover">
              <th>৩</th>
              <td>বৃহস্পতিবার</td>
              <td className="text-red-600">সন্ধ্যা ৮:৩০</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Aqeedah2Shcedule;
