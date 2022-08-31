import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";
import AqeedahRow from "./AqeedahRow";
import { useQuery } from 'react-query'
import useAdmin from "../../hooks/useAdmin";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const AqeedahResultPage = () => {
  const [user, loading, error] = useAuthState(auth);
  const [admin, isLoadingAdmin] = useAdmin(user);

  const params = useParams();
  let searchName = 'a';
  const getStudentList = async (searchName) => {
    const {data} = await axios.get(`https://flannel-loonie-61461.herokuapp.com/aqeedah/${params.batch}/${searchName}`)
    // http://localhost:5000
    // https://flannel-loonie-61461.herokuapp.com
    return data;
  }

const {isLoading, isFetching, data: students, refetch} = useQuery('studentList', () => getStudentList(searchName))
 
const exm2update = () => {
  axios.get(`LevelTwo.json`)
  .then(data => data.data.map(stud => {
    
    const data = {
      "aqeedah3data" : [
        {
          "name" : "Exm 1",
          "Score" : 0,
          "resultBook" : ""
        },{
          "name" : "Exm 2",
          "Score" : stud.exm2,
          "resultBook" : stud.drive
        },{
          "name" : "Exm 3",
          "Score" : 0,
          "resultBook" : ""
        },{
          "name" : "Exm 4",
          "Score" : 0,
          "resultBook" : ""
        }
      ]
  }
      axios.put(`http://localhost:5000/exm2level2/${stud.sn}`, data)
    .then(data => console.log(data.data))
    // console.log(stud.sn, stud.score, stud.drive);
  }))    
}


const levelOneUpdate = () => {
  axios.get(`LevelOneFinal.json`)
  .then(data => data.data.map(stud => {
    
    const data = {         
          "name" : "Exm 3",
          "Score" : stud.finalScore,
          "resultBook" : ""      
      }
      axios.put(`http://localhost:5000/exm3/aqeedah/16/${stud.sn}`, data)
    .then(data => console.log(data.data))
    // console.log(stud.sn, stud.finalScore);
  }))    
}


if(isLoading){
  return <Loading></Loading>
}

if(students?.length === 0){
  return <p className="text-center text-2xl my-5">কোন রেজাল্ট পাওয়া যায়নি</p>
}


const searchByName = e => {
  e.preventDefault();
  const name = e.target.name.value;  
  searchName = name;
  refetch();
}



return (
  <div className="my-10">
      <p className="text-center text-2xl">আক্বিদাহ কোর্সের {params.batch} তম ব্যাচে স্বাগতম!</p>
    {/* { admin && <button onClick={levelOneUpdate} className="text-center btn-primary text-center">Level 1 Update</button>} */}

      <form onSubmit={searchByName} >
      <div className="form-control my-10">
  <div className="input-group justify-center">
    <input name="name" type="text" placeholder="আপনার নাম লিখে সার্চ করুন" className="input input-bordered w-4/5" />
    {isFetching 
    ?
    <button className="btn btn-primary btn-square loading"></button>
    :
    <button type="submit" className="btn btn-primary btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>}
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
      batch={params.batch}
      ></AqeedahRow> ) }     

      
    </tbody>
  </table>
</div>

    </div>
  );
};

export default AqeedahResultPage;
