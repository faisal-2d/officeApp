import React from 'react';
import { Link } from 'react-router-dom';

const NoticeBoard = () => {
    return (
        <div className='min-h-screen container mx-auto my-10'>
            <p className='text-center text-2xl'>নোটিশ বোর্ডে স্বাগতম!</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-3 md:mx-10">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">আক্বিদাহ</h2>
          <p>
            আক্বিদাহ কোর্সের শিক্ষার্থীদের লিস্ট, পরীক্ষার রেজাল্ট পেতে এখানে
            প্রবেশ করুন।
          </p>
          <div className="card-actions justify-end">
            <Link to='/aqeedah'><button className="btn btn-primary">প্রবেশ করুন</button></Link>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">আরবি ভাষা</h2>
          <p>
          আরবি ভাষা কোর্সের শিক্ষার্থীদের লিস্ট, পরীক্ষার রেজাল্ট পেতে এখানে
            প্রবেশ করুন।
          </p>
          <div className="card-actions justify-end">
            <Link to='/arabic'><button className="btn btn-primary">প্রবেশ করুন</button></Link>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default NoticeBoard;