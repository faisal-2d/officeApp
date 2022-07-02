import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import AqeedahRow from "./AqeedahRow";

const AqeedahResultPage = () => {
  const [students, setStudents] = useState();

  useEffect(()=> {
    axios.get(`https://flannel-loonie-61461.herokuapp.com/students`)
    .then(data => setStudents(data.data))
  },[]);


if(!students){
  return <Loading></Loading>
}

const searchByName = e => {
  e.preventDefault();
  const name = e.target.name.value;
  axios.get(`https://flannel-loonie-61461.herokuapp.com/students/${name}`)
    .then(data => setStudents(data.data))
}

  return (
    <div>
      <p className="text-center text-2xl">আক্বিদাহ কোর্সে স্বাগতম!</p>

      <form onSubmit={searchByName} >
      <div className="form-control my-10">
  <div className="input-group justify-center">
    <input name="name" type="text" placeholder="আপনার নাম লিখে সার্চ করুন" className="input input-bordered w-4/5" />
    <button type="submit" className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
      </form>

<div className="overflow-x-auto w-10/12 mx-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th>SN</th>
        <th>Name</th>
        <th>Father's Name</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody>

      {students?.map(student => <AqeedahRow
      key={student.sn}
      student={student}
      ></AqeedahRow> ) }     

      
    </tbody>
  </table>
</div>

    </div>
  );
};

export default AqeedahResultPage;
