import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import Loading from '../../../Loading/Loading';
import ArabicResultPageRow from './ArabicResultPageRow';

const ArabicResultPage = () => {
  const [user, loading, error] = useAuthState(auth);
  const [admin, isLoadingAdmin] = useAdmin(user);
    const navigate = useNavigate();


    const params = useParams();
    let searchName = 'a';
    const getStudentList = async (searchName) => {
      const {data} = await axios.get(`https://alharamanin-backend-web.onrender.com/arabic/${params.batch}/${searchName}`)
      // http://localhost:5000
      // https://alharamanin-backend-web.onrender.com
      return data;
    }
  
  const {isLoading, isFetching, data: students, refetch} = useQuery('arabic_studentList', () => getStudentList(searchName))
   

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
    

    
const levelOneReg = () => {
  axios.get(`Arabic3list.json`)
  .then(data => data.data.map(stud => {
    

    const data = {
            "sn" : stud.sn,
            "name" : stud.name,
            "fatherName" : stud.fatherName,
            "gender" : stud.gender,
            "phone" : stud.phone,
            "arabic1payment" : [              
              {month: "dec", paymnt: "paid"},
              {month: "jan", paymnt: "paid"},
              {month: "feb", paymnt: "paid"},
              {month: "mar", paymnt: "paid"}
             ],
          "arabic1skill" : [
            { name: "Reading", value: 30},
            { name: "Writing", value: 30},
            { name: "Listening", value: 30},
            { name: "Speaking", value: 30}
        ],
            "arabic1data" : [
               {
                 "name" : "Exm 1",
                 "Score" : 0,
               },{
                 "name" : "Exm 2",
               "Score" : 0,
               },{
                 "name" : "Exm 3",
                 "Score" : 0,
              },{
                 "name" : "Exm 4",
                 "Score" : 0,
              },{
                 "name" : "Exm 5",
                 "Score" : 0,
               },{
                 "name" : "Exm 6",
               "Score" : 0,
               },{
                 "name" : "Exm 7",
                 "Score" : 0,
              },{
                 "name" : "Exm 8",
                 "Score" : 0,
              }
             ]
         }
         
        //  axios.put(`https://alharamanin-backend-web.onrender.com/update/arabic/3/${stud.sn}`, data.arabic2payment)
        //  .then(data => console.log(data.data))
         axios.post(`https://alharamanin-backend-web.onrender.com/arabic/newregister3`, data)
         .then(data => console.log(data.data))

         
    // console.log(stud.sn, data.arabic2payment);
  }))    
}

// const checkBefore = () => {
//   const data = {         
//     "name" : "Exm 1",
//     "Score" : 0,
//     "resultBook" : ""      
// }
//  for(let i=1; i<415; i++){
//    axios.put(`https://alharamanin-backend-web.onrender.com/exm1/aqeedah/17/${i}`, data)
// .then(data => console.log(data.data))
//  }
// }

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

        const th = t => {
            if(t == 1 || t ==  5 || t ==  7 || t ==  8 || t ==  9 || t ==  10)
            return "ম";
            else if(t == 2 || t ==  3)
            return "য়";
            else if(t == 4 )
            return "র্থ";
            else if(t == 6 )
            return "ষ্ঠ";
            else return "তম";
        }
        const tt = th(params.batch);
  
    return (
        <div className="my-10">
       <p className="text-center text-2xl my-10">আরবি ভাষা কোর্সের {b}{tt} ব্যাচে স্বাগতম!</p>
      {/* { admin && <div className="text-center mx-auto"><button onClick={levelOneReg} className="btn-primary text-center">Result Update</button></div> } */}

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
      </tr>
    </thead>
    <tbody>

    {/* <tr onClick={() => myFunction('10')}>
        <td>1</td>
        <td>Faisal</td>
        <td>Abdullah</td>
        <td>1234</td>
      </tr>  
    <tr onClick={() => myFunction('12')}>
        <td>1</td>
        <td>Faisal</td>
        <td>Abdullah</td>
        <td>1234</td>
      </tr>   */}

    {students?.map(student => <ArabicResultPageRow
      key={student.sn}
      student={student}
      batch={params.batch}
      ></ArabicResultPageRow> ) } 

      
    </tbody>
  </table>
</div>

    </div>
    );
};

export default ArabicResultPage;