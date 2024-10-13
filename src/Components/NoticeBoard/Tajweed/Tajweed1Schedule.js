import React from "react";
import bd_flag from "../../../assets/icons/bd_flag.ico";
export default function Tajweed1Schedule() {
  return (
    <div className="my-10 py-10 bg-blue-200 rounded">
      <div className="">
        <p className="text-xl text-center my-10">লেভেল ১, সপ্তাহে ১ দিন</p>
      </div>
      <div className="overflow-x-auto ">
        <table className="table w-3/4 mx-auto text-xl ">
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
              <td>বৃহস্পতিবার</td>
              <td>দুপুর ৩:০০ - ৫:০০</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
