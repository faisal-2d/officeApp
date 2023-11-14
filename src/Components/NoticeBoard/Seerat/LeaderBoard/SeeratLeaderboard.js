import React from 'react';
import Loading from '../../../Loading/Loading';
import { useQuery } from 'react-query';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SeeratLB_Row from './SeeratLB_Row';

const SeeratLeaderboard = () => {
    const [myPosition, setMyPosition] = useState(0);

  const params = useParams();
  const level = params.level;
  const batch = params.batch;

  const getStudentList = async () => {
    const { data } = await axios.get(
      `https://alharamanin-backend-web.onrender.com/leaderboard/seerat${level}/${params.batch}`
    );
    // http://localhost:5000
    // https://alharamanin-backend-web.onrender.com/
    return data;
  };

  
  const sn = params.sn;
  const queryName = "seerat_leaderBoard"+level;
  const {
    isLoading,
    isFetching,
    data: students,
    refetch,
  } = useQuery(queryName, getStudentList);

  if (isLoading) {
    return <Loading></Loading>;
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
            <p>Welcome to Leaderboard </p>
            <p>Course: Seerat Level {level} (Batch: {params.batch})</p>
            </div>
  
        <div>
          <div className="overflow-x-auto w-10/12 mx-auto mb-20">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className="bg-green-200">Merit</th>
                  <th>SN</th>
                  <th>Name</th>
                  <th>Exm_1</th>
                  <th>Exm_2</th>
                  <th>Exm_3</th>
                  <th className="bg-red-200">Total</th>
                </tr>
              </thead>
              <tbody>
              <tr className="">
                  <th className='bg-yellow-100 font-bold'>{myPosition} <sup>{th(myPosition)}</sup></th>
                  <th className='bg-yellow-100'>{myResult?.sn}</th>
                  <td className='bg-yellow-100'>{myResult?.name.toUpperCase()}</td>
                  {level === '2' && <>
                    <th className='bg-yellow-100'>{myResult?.seerat2data[0].Score}</th>
                    <th className='bg-yellow-100'>{myResult?.seerat2data[1].Score}</th>
                    <th className='bg-yellow-100'>{myResult?.seerat2data[2].Score}</th>
                    <th className='bg-yellow-100 text-red-600'>{myResult?.seerat2Total}</th>
                  </>}            
                  {level === '1' && <>
                    <th className='bg-yellow-100'>{myResult?.seerat1data[0].Score}</th>
                    <th className='bg-yellow-100'>{myResult?.seerat1data[1].Score}</th>
                    <th className='bg-yellow-100'>{myResult?.seerat1data[2].Score}</th>
                    <th className='bg-yellow-100 text-red-600'>{myResult?.seerat1Total}</th>
                  </>}            
              </tr>
              <tr>
                <td></td>
              </tr>
  
                {students?.map((student, index) => ( <SeeratLB_Row
                    key={index}
                    merit={index}
                    student={student}
                    setMyPosition={setMyPosition}
                    level = {level}
                    mySn={myResult.sn}
                  ></SeeratLB_Row>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default SeeratLeaderboard;