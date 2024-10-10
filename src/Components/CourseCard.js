import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="w-4/5" src={course.img} alt="Course Thamanail" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {course.name}
          <badge className={`badge ${course?.badge_cls}`}>
            {course?.badge}
          </badge>
        </h2>
        <p className="">কোর্সের মেয়াদ: {course.duration}</p>
        <p className="">কোর্স টিচার: {course.teacher}</p>
        {/* <p>{course.description}</p> */}
        <Link className="btn btn-success mt-3 outline-none" to={course.info}>
          বিস্তারিত দেখুন
        </Link>
        <div className="card-actions"></div>
      </div>
    </div>
  );
};

export default CourseCard;
