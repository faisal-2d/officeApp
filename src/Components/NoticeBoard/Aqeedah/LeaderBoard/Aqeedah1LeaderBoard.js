import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../../../Loading/Loading";
import Aqeedah1LeaderBoardRow from "./Aqeedah1LeaderBoardRow";

const Aqeedah1LeaderBoard = () => {
  const params = useParams();
  const getStudentList = async () => {
    const { data } = await axios.get(
      `https://flannel-loonie-61461.herokuapp.com/leaderboard/aqeedah1/${params.batch}`
    );
    // http://localhost:5000
    // https://flannel-loonie-61461.herokuapp.com/
    return data;
  };

  const {
    isLoading,
    isFetching,
    data: students,
    refetch,
  } = useQuery("leaderBoard", getStudentList);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <p className="text-center my-10 text-xl">
        Welcome to Leaderboard, Aqeedah Level 1, Batch: {params.batch}{" "}
      </p>

      <div>
        <div className="overflow-x-auto w-10/12 mx-auto">
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
              {students?.map((student, index) => (
                <Aqeedah1LeaderBoardRow
                  key={index}
                  merit={index}
                  student={student}
                  batch={params.batch}
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
