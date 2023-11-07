import React from 'react';
import Loading from '../../../Loading/Loading';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import FiqhRow from './FiqhRow';

const FiqhResultPage = () => {
    const [user, loading, error] = useAuthState(auth);
  const [admin, isLoadingAdmin] = useAdmin(user);

  const params = useParams();
  let searchName = 'a';
  const getStudentList = async (searchName) => {
    const {data} = await axios.get(`https://alharamanin-backend-web.onrender.com/fiqh/${params.batch}/${searchName}`)
    // http://localhost:5000
    // https://flannel-loonie-61461.herokuapp.com
    return data;
  }

const {isLoading, isFetching, data: students, refetch} = useQuery('studentList', () => getStudentList(searchName))
 


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


const digitConverter = engDigit => {
  const engD = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const bangD = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

    const str = engDigit.toString();
    let bangDigit = '';
    
    for(let i=0; i<str.length; i++){
      for(let j=0; j<engD.length; j++){
        if(str[i]==engD[j]){
          bangDigit+=bangD[j];
        }
      }           
  }
  return bangDigit;
}    
const b = digitConverter(params.batch);

    return (
        <div className="my-10">
      <p className="text-center text-2xl">ফিকহ কোর্সের {b} তম ব্যাচে স্বাগতম!</p>

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
        {/* <th>Payment</th>
        <th>Exm 1</th>
        <th>Exm 2</th>
        <th>Exm 3</th>
        <th>Total</th> */}
      </tr>
    </thead>
    <tbody>

      {students?.map(student => <FiqhRow
      key={student.sn}
      student={student}
      batch={params.batch}
      ></FiqhRow> ) }     

      
    </tbody>
  </table>
</div>

    </div>
    );
};

export default FiqhResultPage;