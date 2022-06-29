import axios from "axios";
import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios.get("CourseList.json").then((data) => setCourses(data.data));    
  }, []);
  return (
    <div className="container mx-auto my-10">
      <p className="text-4xl text-sky-800 text-center">আমাদের কোর্স সমূহ</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center my-10">
      {courses?.map((course, index) => (
        <CourseCard key={index} course={course}></CourseCard>
      ))}
      </div>
    </div>
  );
};

export default Courses;
