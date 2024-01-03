import React from 'react';
import Loading from '../Loading/Loading';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../hooks/useAdmin';
import ScholarshipRow from './ScholarshipRow';
import { useEffect } from 'react';
import { useState } from 'react';
import useModerator from '../hooks/useModerator';
import Verifying from '../Loading/Verifying';

const ScholarshipList = () => {
    const [user, loading, error] = useAuthState(auth);
    const [moderator, isLoadingModerator] = useModerator(user);
    // const [totoalStud, setTotalStud] = useState(150);
    const params = useParams();
  
  let searchName ='';
  const {isLoading, isFetching, data: students, refetch} = useQuery('scholarship_studentList', () => axios.get(`https://alharamanin-backend-web.onrender.com/scholarship/${params.course}`))
//   const {isLoading, isFetching, data: students, refetch} = useQuery('scholarship_studentList', () => axios.get(`https://alharamanin-backend-web.onrender.com/scholarship/${params.course}/${params.batch}`))

// const studentCount = async () => await axios.get(`https://alharamanin-backend-web.onrender.com/count/aqeedah/21`).then(data=>setTotalStud(data));
//     console.log(studentCount);
    // console.log(totoalStud);
  
  if(isLoading){
    return <Loading></Loading>
  }

  if(!moderator){
    return <Verifying></Verifying>
}
  
  if(students?.length === 0){
    return <div className='min-h-screen flex justify-center items-center'>
              <p className="text-center text-2xl my-5">কোন রেজাল্ট পাওয়া যায়নি</p>
            </div>
  }

   const searchByName = e => {
    e.preventDefault();
    const name = e.target.name.value;  
    searchName = name;
    refetch();
  }

    return (
        <div className="my-10">
        <p className="text-center text-2xl my-10">আক্বিদাহ স্কলারশিপ পেইজে স্বাগতম!</p>
        {/* <form onSubmit={searchByName} >
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
        </form> */}
  
  <div className="overflow-x-auto w-10/12 mx-auto">
    <table className="table w-full">
      
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Father's Name</th>
          <th>Phone</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
  
        {students.data?.map(student => <ScholarshipRow
        key={student?.sn}
        student={student}
        ></ScholarshipRow> ) }     
  
        
      </tbody>
    </table>
  </div>
  
      </div>
    );
};

export default ScholarshipList;