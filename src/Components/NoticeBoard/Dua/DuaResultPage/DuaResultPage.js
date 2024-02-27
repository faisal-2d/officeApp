import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import Loading from '../../../Loading/Loading';
import DuaResultPageRow from './DuaResultPageRow';
import digitConverter from '../../../tools/digitConverter';
import thConverter from '../../../tools/thConverter';

const DuaResultPage = () => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, isLoadingAdmin] = useAdmin(user);
      const navigate = useNavigate();
  
  
      const params = useParams();
      let searchName = '';
      const getStudentList = async (searchName) => {
        const {data} = await axios.get(`https://alharamanin-backend-web.onrender.com/dua/${params.batch}/${searchName}`)
        // http://localhost:5000
        // https://alharamanin-backend-web.onrender.com
        return data;
      }
      const {isLoading, isFetching, data: students, refetch} = useQuery('dua_studentList', () => getStudentList(searchName))
     
  
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
         <p className="text-center text-2xl my-10">দোআ ও যিকির কোর্সের {digitConverter(params.batch)}{thConverter(params.batch)} ব্যাচে স্বাগতম!</p>
  
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
          <th>Gems</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
  
 
      {students?.map(student => <DuaResultPageRow
        key={student.sn}
        student={student}
        batch={params.batch}
        ></DuaResultPageRow> ) } 
  
        
      </tbody>
    </table>
  </div>
  
      </div>
      );
  };
export default DuaResultPage;