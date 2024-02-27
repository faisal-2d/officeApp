import React from 'react';
import Loading from '../../../Loading/Loading';
import { useQuery } from 'react-query';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import FiqhLB_Row from './FiqhLB_Row';
import { eventWrapper } from '@testing-library/user-event/dist/utils';
import digitConverter from '../../../tools/digitConverter';
import thConverter from '../../../tools/thConverter';

const FiqhLeaderboard = () => {
  const [myPosition, setMyPosition] = useState(0);

  const params = useParams();
  const level = params.level;
  const batch = params.batch;

  const getStudentList = async () => {
    const { data } = await axios.get(
      `https://alharamanin-backend-web.onrender.com/fiqh/leaderboard/get/${params.batch}/${level}`
    );
    // http://localhost:5000
    // https://alharamanin-backend-web.onrender.com/
    return data;
  };

  const sn = params.sn;
  const queryName = "fiqh_leaderBoard"+level;
  
  const {
    isLoading,
    isFetching,
    data: students,
    refetch,
  } = useQuery(queryName, getStudentList);

  if (isLoading) {
    return <Loading></Loading>;
  }
  
const myResult = (students?.result).find(student => student.sn == params.sn);

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
            <p>Course: Fiqh Level {level} (Batch: {params.batch})</p>
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
                  <th className='bg-yellow-100 font-bold'>{digitConverter(myPosition)} <sup>{thConverter(myPosition)}</sup></th>
                  <th className='bg-yellow-100'>{myResult?.sn}</th>
                  <td className='bg-yellow-100'>{myResult?.name.toUpperCase()}</td>
                  {level === '2' && <>
                    <th className='bg-yellow-100'>{myResult?.fiqh2data[0].Score}</th>
                    <th className='bg-yellow-100'>{myResult?.fiqh2data[1].Score}</th>
                    <th className='bg-yellow-100'>{myResult?.fiqh2data[2].Score}</th>
                    <th className='bg-yellow-100 text-red-600'>{myResult?.fiqh2Total}</th>
                  </>}            
                  {level === '1' && <>
                    <th className='bg-yellow-100'>{myResult?.fiqh1data[0].Score}</th>
                    <th className='bg-yellow-100'>{myResult?.fiqh1data[1].Score}</th>
                    <th className='bg-yellow-100'>{myResult?.fiqh1data[2].Score}</th>
                    <th className='bg-yellow-100 text-red-600'>{myResult?.fiqh1Total}</th>
                  </>}            
              </tr>
              <tr>
                <td></td>
              </tr>
  
                {(students?.result)?.map((student, index) => ( <FiqhLB_Row
                    key={index}
                    merit={index}
                    student={student}
                    setMyPosition={setMyPosition}
                    level = {level}
                    mySn={myResult?.sn}
                  ></FiqhLB_Row>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default FiqhLeaderboard;