
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";
import AqeedahRow from "./AqeedahRow";
import axios from "axios";
import digitConverter from "../../tools/digitConverter";
import thConverter from "../../tools/thConverter";
import NoDataFoundModal from "./NoDataFoundModal";

const AqeedahResultPage = () => {
  const params = useParams();
  const [students, setStudents] = useState([]); // Store students locally
  const [filteredStudents, setFilteredStudents] = useState([]); // For search results
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isNoDataModalVisible, setNoDataModalVisible] = useState(false); // Modal state


  // Fetch student data only once
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_API}/aqeedah/${params.batch}`
        );
        setStudents(data); // Store students in state
        setFilteredStudents(data); // Initially, show all students
        setLoading(false);
      } catch (error) {
        console.error("Error fetching student data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [params.batch]);

  // Handle search input and filter students
  const searchByName = (e) => {
    e.preventDefault();
    const name = e.target.name.value.toLowerCase();
    setSearchTerm(name);
    
    const filtered = students.filter(student =>
      student.name.toLowerCase().includes(name)
    );

    if (filtered.length === 0) {
      document.getElementById('my_modal_3').showModal();
      return;
      // setNoDataModalVisible(true);
    }
    setFilteredStudents(filtered); // Update the filtered list
  };

  if (loading) {
    return <Loading />;
  }

  

  return (
    <div className="my-10">
      <p className="text-center text-2xl">
        আক্বিদাহ কোর্সের {digitConverter(params.batch)}
        {thConverter(params.batch)} ব্যাচে স্বাগতম!
      </p>

      <div className="text-center">
        <form onSubmit={searchByName}>
          <div className="form-control my-10">
            <div className="input-group flex justify-center">
              <input
                name="name"
                type="text"
                placeholder="আপনার নাম লিখে সার্চ করুন"
                className="input input-bordered mr-2 w-4/5"
              />
              <button type="submit" className="btn btn-primary btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
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
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <AqeedahRow key={student.sn} student={student} batch={params.batch} />
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <NoDataFoundModal></NoDataFoundModal>
      </div>     
    </div>
  );
};

export default AqeedahResultPage;



// import axios from "axios";
// import React, { useEffect } from "react";
// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import Loading from "../../Loading/Loading";
// import AqeedahRow from "./AqeedahRow";
// import { useQuery } from 'react-query'
// import useAdmin from "../../hooks/useAdmin";
// import auth from "../../../firebase.init";
// import { useAuthState } from "react-firebase-hooks/auth";
// import digitConverter from "../../tools/digitConverter";
// import thConverter from "../../tools/thConverter";

// const AqeedahResultPage = () => {
//   const [user, loading, error] = useAuthState(auth);
//   const [admin, isLoadingAdmin] = useAdmin(user);


//   const params = useParams();
//   let searchName = '';
//   const getStudentList = async (searchName) => {
//     const {data} = await axios.get(`${process.env.REACT_APP_BACKEND_API}/aqeedah/${params.batch}/${searchName}`)
//     // http://localhost:5000
    
//     return data;
//   }

// const {isLoading, isFetching, data: students, refetch} = useQuery('aqeedah_studentList', () => getStudentList(searchName))
 


// if(isLoading){
//   return <Loading></Loading>
// }

// if(students?.length === 0){
//   return <div className='min-h-screen flex justify-center items-center'>
//             <p className="text-center text-2xl my-5">কোন রেজাল্ট পাওয়া যায়নি</p>
//           </div>
// }


// const searchByName = e => {
//   e.preventDefault();
//   const name = e.target.name.value;  
//   searchName = name;
//   refetch();
// }



// return (
//   <div className="my-10">
//       <p className="text-center text-2xl">আক্বিদাহ কোর্সের {digitConverter(params.batch)}{thConverter(params.batch)} ব্যাচে স্বাগতম!</p>

//       <div className='text-center'>
//         <form onSubmit={searchByName} >
//           <div className="form-control my-10">
//             <div className="input-group flex justify-center">
//             <input name="name" type="text" placeholder="আপনার নাম লিখে সার্চ করুন" className="input input-bordered mr-2 w-4/5" />
//             {isFetching 
//             ?
//             <button className="btn btn-primary btn-circle">
//               <span className="loading loading-spinner text-white"></span>
//             </button>
//             :
//             <button type="submit" className="btn btn-primary btn-circle">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
//             </button>}
//             </div>
//           </div>
//         </form>
//         </div>

// <div className="overflow-x-auto w-10/12 mx-auto">
//   <table className="table w-full">
    
//     <thead>
//       <tr>
//         <th>SN</th>
//         <th>Name</th>
//         <th>Father's Name</th>
//         <th>Phone</th>
//         {/* <th>Payment</th>
//         <th>Exm 1</th>
//         <th>Exm 2</th>
//         <th>Exm 3</th>
//         <th>Total</th> */}
//       </tr>
//     </thead>
//     <tbody>

//       {students?.map(student => <AqeedahRow
//       key={student.sn}
//       student={student}
//       batch={params.batch}
//       ></AqeedahRow> ) }     

      
//     </tbody>
//   </table>
// </div>

//     </div>
//   );
// };

// export default AqeedahResultPage;


