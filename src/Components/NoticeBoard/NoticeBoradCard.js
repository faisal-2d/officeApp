import React from 'react';
import { Link } from 'react-router-dom';

const NoticeBoradCard = ({course, courseLink}) => {
    return (
        <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{course}</h2>
          <p>
           {course} কোর্সের শিক্ষার্থীদের লিস্ট, পরীক্ষার রেজাল্ট পেতে এখানে
            প্রবেশ করুন।
          </p>
          <div className="card-actions justify-end">
            <Link to={courseLink}><button className="btn btn-primary">প্রবেশ করুন</button></Link>
          </div>
        </div>
      </div>
    );
};

export default NoticeBoradCard;