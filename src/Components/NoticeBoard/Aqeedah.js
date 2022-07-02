import React from "react";
import { Link } from "react-router-dom";

const Aqeedah = () => {
  return (
    <div>
      <p className="text-center text-2xl">আক্বিদাহ কোর্সের ব্যাচসমূহ</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-10">

      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">ব্যাচ ১৬</h2>
          <p>ক্লাস শুরুঃ মে'২২</p>
          <p>মোট শিক্ষার্থীঃ ২৬২ জন</p>
          <div className="card-actions justify-end">
          <Link to='/aqeedah-homepage'><button className="btn btn-primary">প্রবেশ করুন</button></Link>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
};

export default Aqeedah;
