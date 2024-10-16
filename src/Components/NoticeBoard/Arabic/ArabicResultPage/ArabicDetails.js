import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation, useParams } from 'react-router-dom';
import maleProfile from '../../../../assets/male-profile.png';
import femaleProfile from '../../../../assets/female-profile.png';
import aq_certi_1 from '../../../../assets/certi_img/aq_certi_1.gif'
import aq_certi_2 from '../../../../assets/certi_img/aq_certi_2.gif'
import aq_certi_3 from '../../../../assets/certi_img/aq_certi_3.gif'
import auth from '../../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import Loading from '../../../Loading/Loading';
import ArabicPyamentCard from './ArabicPyamentCard';
import { faFilePdf } from '@fortawesome/fontawesome-free-solid';
import ArabicLevelComponent from './ArabicLevelComponent';
import digitConverter from '../../../tools/digitConverter';
import thConverter from '../../../tools/thConverter';

  
 
const ArabicDetails  = () => {
  const params = useParams();
  const nev = useLocation();

    const [student, setStudent] = useState(nev.state?.student);
    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user);


    // useEffect(()=> {
    //   axios.get(`${process.env.REACT_APP_BACKEND_API}/arabic/${params.batch}/sn/${params.sn}`)
    // //   ${process.env.REACT_APP_BACKEND_API}
    //   .then(data => setStudent(data.data))
    // },[params]);
    
    const getStudent = () => {

      axios.get(`${process.env.REACT_APP_BACKEND_API}/arabic/${params.batch}/sn/${params.sn}`)
      .then(data => { setStudent(data.data)
          // console.log("i got the student ",data.data);
      });       
     
}

if(!student){
  getStudent();
  return <Loading></Loading>
}
   
 
return (
        <div className='container mx-auto px-5'>
            <p className="text-center text-2xl my-10">আরবি ভাষা কোর্সের {digitConverter(params.batch)}{thConverter(params.batch)} ব্যাচে স্বাগতম!</p>

            <div className="rounded bg-gradient-to-tl from-sky-200 flex flex-col md:flex-row justify-center md:justify-between">
            <div className='flex items-center p-5'>
                <div className='mr-5'>                   
                <img src={student.gender==="female" ? femaleProfile : maleProfile} alt="" />                        
                </div>
                <div>                                                    
                    <p className=''>SN <strong>{student.sn}</strong></p>
                    <p className='md:text-3xl'><strong>{student.name.toUpperCase()}</strong></p>                                    
                    <p className='md:text-xl'>{student.gender==="female" ? "BINTE" : "BIN"} <strong>{student.fatherName.toUpperCase()}</strong></p>
                    <p className=''><FontAwesomeIcon icon="fa-solid fa-phone" /> <strong>{student.phone}</strong></p>
                    
                </div>
            </div>

            <div className="flex flex-col md:flex-row p-5 gap-10">                

                {student.arabic1payment && <ArabicPyamentCard
                payment={student.arabic1payment}
                level ={1}
                ></ArabicPyamentCard> }  

                {student.arabic2payment && <ArabicPyamentCard
                payment={student.arabic2payment}
                level ={2}
                ></ArabicPyamentCard> }   

                {student.arabic3payment && <ArabicPyamentCard
                payment={student.arabic3payment}
                level ={3}
                ></ArabicPyamentCard> }              

                
            </div>

            </div>


{/* Araboic Certificate  */}
{student.arabicCertificates  &&   <div>
                <p className="text-2xl mt-12 mb-5">অভিনন্দন! আপনি সার্টিফিকেট পেয়েছেন!</p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                {student.arabicCertificates?.level1 && <div className="text-center p-5 rounded bg-sky-100 w-fit">
                    <img className="rounded" src={aq_certi_1} alt="" />
                    <a className="bg-blue-400 block mt-2 text-white p-2 rounded shadow" href={student.arabicCertificates?.level1} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='pr-5' icon={faFilePdf}/> Level 1 Certificate</a>
                </div>}
                
                {student.arabicCertificates?.level2 && <div className="text-center p-5 rounded bg-green-100 w-fit">
                    <img className="rounded" src={aq_certi_2} alt="" />
                    <a className="bg-green-500 block mt-2 text-white p-2 rounded shadow" href={student.arabicCertificates?.level1} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='pr-5' icon={faFilePdf}/> Level 2 Certificate</a>
                </div>}

                {student.arabicCertificates?.level3 && <div className="text-center p-5 rounded bg-red-100 w-fit">
                    <img className="rounded" src={aq_certi_3} alt="" />
                    <a className="bg-red-400 block mt-2 text-white p-2 rounded shadow" href={student.arabicCertificates?.level1} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='pr-5' icon={faFilePdf}/> Level 3 Certificate</a>
                </div>}
               

                </div>
   </div>             
 } 


{/* Level 3  */}
            {student.arabic3skill && <ArabicLevelComponent
            skill={student.arabic3skill}
            data={student.arabic3data}
            level ={3}
            ></ArabicLevelComponent>}

{/* Level 2  */}
            {student.arabic2skill && <ArabicLevelComponent
            skill={student.arabic2skill}
            data={student.arabic2data}
            level ={2}
            ></ArabicLevelComponent>}



{/* Level 1  */}
            {student.arabic1skill && <ArabicLevelComponent
            skill={student.arabic1skill}
            data={student.arabic1data}
            level ={1}
            ></ArabicLevelComponent>}
            
            
        </div>
    );            
};

export default  ArabicDetails;