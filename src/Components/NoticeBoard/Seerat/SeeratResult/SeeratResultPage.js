import React from 'react';
import Loading from '../../../Loading/Loading';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import SeeratRow from './SeeratRow';
import digitConverter from '../../../tools/digitConverter';
import thConverter from '../../../tools/thConverter';

const SeeratResultPage = () => {
    const [user, loading, error] = useAuthState(auth);
  const [admin, isLoadingAdmin] = useAdmin(user);

  const params = useParams();
  let searchName = '';
  const getStudentList = async (searchName) => {
    const {data} = await axios.get(`${process.env.REACT_APP_BACKEND_API}/seerat/${params.batch}/${searchName}`)
    // http://localhost:5000
    // 
    return data;
  }

const {isLoading, isFetching, data: students, refetch} = useQuery('seerat_studentList', () => getStudentList(searchName))
 


if(isLoading){
  return <Loading></Loading>
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
      <p className="text-center text-2xl">সীরাত কোর্সের {digitConverter(params.batch)}{thConverter(params.batch)} ব্যাচে স্বাগতম!</p>

      <div className='text-center'>
        <form onSubmit={searchByName} >
          <div className="form-control my-10">
            <div className="input-group flex justify-center">
            <input name="name" type="text" placeholder="আপনার নাম লিখে সার্চ করুন" className="input input-bordered mr-2 w-4/5" />
            {isFetching 
            ?
            <button className="btn btn-primary btn-circle">
              <span className="loading loading-spinner text-white"></span>
            </button>
            :
            <button type="submit" className="btn btn-primary btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>}
            </div>
          </div>
        </form>
        </div>

<div className="overflow-x-auto w-10/12 mx-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th>SN</th>
        <th>Name</th>
        <th>Father's Name</th>
        <th>Phone</th>
        {/* <th>Payment</th>
        <th>Exm 1</th>
        <th>Exm 2</th>
        <th>Exm 3</th>
        <th>Total</th> */}
      </tr>
    </thead>
    <tbody>

      {students?.map(student => <SeeratRow
      key={student.sn}
      student={student}
      batch={params.batch}
      ></SeeratRow> ) }     

      
    </tbody>
  </table>
</div>

    </div>
    );
};

export default SeeratResultPage;