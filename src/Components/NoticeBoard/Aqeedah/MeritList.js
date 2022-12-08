import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import MeritRow from './MeritRow';
import { useQuery } from 'react-query'
import { faArrowUpAZ } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


const MeritList = () => {
  const [myPosition, setMyPosition] = useState();
    const params = useParams();
  const getStudentList = async () => {
    const {data} = await axios.get(`https://alharamanin-backend-web.onrender.com/leaderboard/aqeedah3/${params.batch}`)
    // http://localhost:5000
    // https://alharamanin-backend-web.onrender.com
        return data;
  }

const {isLoading, isFetching, data: students, refetch} = useQuery('leaderBoard', getStudentList)
 

if(isLoading){
  return <Loading></Loading>
}

if(students?.length === 0){
  return <div className='min-h-screen flex justify-center items-center'>
          <p className="text-center text-2xl my-5">কোন রেজাল্ট পাওয়া যায়নি</p>
        </div>
}

const myResult = students.find(student => student.sn == params.sn);

const th = m => {
  if (m==1) return 'st';
  if (m==2) return 'nd';
  if (m==3) return 'rd';
  return 'th';
}

    return (
        <div>
          <div className='text-center my-10 text-xl'>
          <p>Welcome to Leaderboard, Batch: Aqeedah - {params.batch} </p>
          <p>Level 2+3</p>
          </div>
            
            <div>

            <div className="overflow-x-auto w-10/12 mx-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th className='bg-green-200'>Merit</th>
        <th>SN</th>
        <th>Name</th>
        <th>Exm_1</th>
        <th>Exm_2</th>
        <th>Exm_3</th>
        <th>Exm_4</th>
        <th className='bg-red-200'>Total</th>
      </tr>
    </thead>
    <tbody> 
    <tr className="">
            <th className='bg-yellow-100 font-bold'>{myPosition} <sup>{th(myPosition)}</sup></th>
            <th className='bg-yellow-100'>{myResult?.sn}</th>
            <td className='bg-yellow-100'>{myResult?.name.toUpperCase()}</td>
            <th className='bg-yellow-100'>{myResult?.aqeedah3data[0].Score}</th>
            <th className='bg-yellow-100'>{myResult?.aqeedah3data[1].Score}</th>
            <th className='bg-yellow-100'>{myResult?.aqeedah3data[2].Score}</th>
            <th className='bg-yellow-100'>{myResult?.aqeedah3data[3].Score}</th>            
            <th className='bg-yellow-100 text-red-600'>{myResult?.aqeedah3Total}</th>            
      </tr>
      <tr>
        <td></td>
      </tr>

            {students?.map((student, index) => <MeritRow
                key={index}
                merit={index}
                student={student}               
                setMyPosition={setMyPosition}
                mySn={myResult.sn}
        ></MeritRow>) }        
      
    </tbody>
  </table>
            </div>


            </div>
        </div>
    );
};

export default MeritList;