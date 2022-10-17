import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({course}) => {
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={course.img}
            alt="Course Thamanail"
          />
        </figure>
        <div className="card-body">          
          <h2 className="card-title">{course.courseName}</h2>
          <p className="text-xl">কোর্সের মেয়াদ: {course.duration}</p>            
          <p className="text-xl">কোর্স টিচার: {course.courseTeacher}</p>          
          {/* <p>{course.description}</p> */}
            <Link className="btn btn-primary mt-3 outline-none" to={course.info}>বিস্তারিত দেখুন</Link>
          <div className="card-actions">
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
