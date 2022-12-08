import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import CourseCard from "./CourseCard";
import Loading from "./Loading/Loading";

const Courses = () => {
  // const [courses, setCourses] = useState([]);
  // useEffect(() => {
  //   axios.get("CourseList.json").then((data) => setCourses(data.data));    
  // }, []);

  const {isLoading, isFetching, data: courses, refetch} = useQuery('courseList', () => axios.get(`CourseList.json`));


  if(isLoading){
    return <Loading></Loading>
  }

  return (
    <div className="container mx-auto my-10">
      <p className='text-center text-2xl'>আমাদের কোর্স সমূহ</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center my-10">
      {courses?.data?.map((course, index) => (
        <CourseCard key={index} course={course}></CourseCard>
      ))}
      </div>
    </div>
  );
};

export default Courses;
