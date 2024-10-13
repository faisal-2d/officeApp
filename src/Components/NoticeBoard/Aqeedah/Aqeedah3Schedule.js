import React from "react";
import bd_flag from "../../../assets/icons/bd_flag.ico";

const Aqeedah3Schedule = () => {
  return (
    <div className="my-10 py-10 bg-green-200 rounded">
      <div className="">
        <p className="text-xl text-center my-10">লেভেল ৩, সপ্তাহে ৪ দিন</p>
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
              <td>দুপুর ২:০০</td>
            </tr>

            <tr className="hover">
              <th>২</th>
              <td>মঙ্গলবার</td>
              <td>দুপুর ২:০০</td>
            </tr>

            <tr className="hover">
              <th>৩</th>
              <td>বুধবার</td>
              <td>দুপুর ২:০০</td>
            </tr>

            <tr className="hover">
              <th>৪</th>
              <td>বৃহস্পতিবার</td>
              <td>দুপুর ২:০০</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Aqeedah3Schedule;
