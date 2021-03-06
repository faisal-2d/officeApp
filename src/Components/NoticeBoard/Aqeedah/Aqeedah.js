import React from "react";
import { Link } from "react-router-dom";

const Aqeedah = () => {
  const batchList = [ 17, 16, 15, 14 ]
  return (
    <div>
      <p className="text-center text-2xl">আক্বিদাহ কোর্সের ব্যাচসমূহ</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-10">

      {
        batchList.map((batch, index) => <div className="card w-96 bg-base-100 shadow-xl"
        key={index}>
        <div className="card-body mx-auto">
          <h2 className="text-center text-3xl">ব্যাচ {batch}</h2>          
          <div className="card-actions">
          <Link to={`/aqeedah-${batch}`}><button className="btn btn-primary btn-wide mt-5">প্রবেশ করুন</button></Link>
          </div>
        </div>
      </div>
        )
      }

      </div>
    </div>
  );
};

export default Aqeedah;
