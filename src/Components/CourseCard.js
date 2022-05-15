import React from "react";

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
          <div className="card-actions justify-end">
            {/* <button className="btn btn-sm text-emerald-700 outline-none bg-emerald-300">বিস্তারিত দেখুন</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
