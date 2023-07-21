import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../../../Loading/Loading";
import Aqeedah1LeaderBoardRow from "./Aqeedah1LeaderBoardRow";

const Aqeedah1LeaderBoard = () => {
  const [myPosition, setMyPosition] = useState(0);

  const params = useParams();
  const getStudentList = async () => {
    const { data } = await axios.get(
      `https://alharamanin-backend-web.onrender.com/leaderboard/aqeedah1/${params.batch}`
    );
    // http://localhost:5000
    // https://alharamanin-backend-web.onrender.com/
    return data;
  };

  const {
    isLoading,
    isFetching,
    data: students,
    refetch,
  } = useQuery("leaderBoard1", getStudentList);

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
          <p>Welcome to Leaderboard, Batch: Aqeedah - {params.batch} </p>
          <p>Level 1</p>
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
                <th className='bg-yellow-100'>{myResult?.aqeedah1data[0].Score}</th>
                <th className='bg-yellow-100'>{myResult?.aqeedah1data[1].Score}</th>
                <th className='bg-yellow-100'>{myResult?.aqeedah1data[2].Score}</th>
                <th className='bg-yellow-100 text-red-600'>{myResult?.aqeedah1Total}</th>            
            </tr>
            <tr>
              <td></td>
            </tr>

              {students?.map((student, index) => (
                <Aqeedah1LeaderBoardRow
                  key={index}
                  merit={index}
                  student={student}
                  setMyPosition={setMyPosition}
                  mySn={myResult.sn}
                ></Aqeedah1LeaderBoardRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Aqeedah1LeaderBoard;
