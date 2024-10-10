import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../hooks/useAdmin';
import axios from 'axios';
import Loading from '../Loading/Loading';
import maleProfile from '../../assets/male-profile.png'
import femaleProfile from '../../assets/female-profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import useModerator from '../hooks/useModerator';
import Verifying from '../Loading/Verifying';

const ScholarshipDetails = () => {
    const params = useParams();
    const nev = useLocation();

    const [student, setStudent] = useState(nev.state?.student);
    const [user, loading, error] = useAuthState(auth);
    const [moderator, isLoadingModerator] = useModerator(user);
    const [adminDesk, setAdminDesk] = useState(false);
    const [count, setCount] = useState();
  
const getStudent = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_API}/scholarship/aqeedah/${params.sn}`)
        .then(data => { setStudent(data.data)
        });        
}


if(!student){
    getStudent();
    return <Loading></Loading>
}
if(!moderator){
    return <Verifying></Verifying>
}

const updateData = sn => {
    const data = {
            "isAccepted" : true, 
            "accepted_by" : user.displayName         
        }        
    axios.put(`${process.env.REACT_APP_BACKEND_API}/update/scholarship/aqeedah/${sn}`, data)
    .then(data => {
        getStudent();
    })
}

const acceptScholarship = async () => {
   
    await axios.get(`${process.env.REACT_APP_BACKEND_API}/aqeedah/aqeedah/22`).then(data=>setCount(data.data.result+1));
    
    const insertData = {
        "sn" : count,
        "name" : student.name,
        "fatherName" : student.fatherName,
        "phone" : student.phone.slice(-4),
        "gender" : student.gender,
        "aqeedah1payment" : "scholarship",
        "aqeedah1data" : [{
            "name" : "Exm 1",
            "Score" : 0
          },{
            "name" : "Exm 2",
            "Score" : 0
          },{
            "name" : "Exm 3",
            "Score" : 0
          }
        ] 
    }
    
        {count && axios.post(`${process.env.REACT_APP_BACKEND_API}/register/aqeedah/21`, insertData)
        .then(data => {updateData(params.sn)})
        
    }
}


const hello = () => 0;

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
const b = digitConverter(params.sn);


    return (
        <div className='container mx-auto mb-40 px-5'>
            <p className="text-center text-2xl my-10">আবেদন : {b}</p>
            <div className="rounded bg-gradient-to-tl from-sky-200 flex flex-col md:flex-row justify-center md:justify-between">
            <div className='flex items-center p-5'>
                <div className='mr-5'>                   
                    <img src={student.gender==="female" ? femaleProfile : maleProfile} alt="" />                        
                </div>
                <div>                                                    
                    {!student.isAccepted && <p className=''>SN <strong>{count}</strong></p>}
                    <p className='md:text-3xl'><strong>{student.name.toUpperCase()}</strong></p>                                   
                    {student.fatherName && <p className='md:text-xl'>{student.gender==="female" ? "BINT" : "BIN"} <strong>{student.fatherName.toUpperCase()}</strong></p>}
                    {student.isAccepted && <p className=''>Accepted By <strong>{student?.accepted_by}</strong></p>}
                    {/* <p className=''><FontAwesomeIcon icon="fa-solid fa-phone" /> <strong>{student.phone}</strong></p> */}
                    
                </div>
            </div>

            <div className="flex flex-col md:flex-row p-5 gap-10">                

           <button onClick={(student.isAccepted) ? hello : acceptScholarship}>
                <div className={`relative overflow-hidden rounded py-2 px-5 bg-gradient-to-tl ${ student.isAccepted ?'from-green-300 to-green-200'  : 'from-red-200 to-red-100' } `}>
                    <div className="w-auto h-14 flex justify-between">                
                    <div className="mr-16">
                        <p>Scholarship</p>
                    </div>
                    <FontAwesomeIcon className={`text-2xl ${ student.isAccepted ?'text-green-600'  :'text-red-600' } `} icon={faGift} />
                    </div>
                    <FontAwesomeIcon className="text-7xl absolute -ml-10 mt-1 opacity-10 text-inherit" icon={faGift} />
                    <p className={`text-center font-bold text-xl my-2 ${ student.isAccepted ?'text-green-600'  :'text-red-600' } `}>
                    <span className="uppercase font-bold ">{ student.isAccepted ?'accepted'  :'accept now' }</span>                
                    </p>
                </div>
           </button>

                
            </div>

            </div>

            <div className='my-10'> 
                <div className='rounded bg-green-100 border border-green-300 p-5'>
                    <p className='text-xl text-emerald-500 font-semibold'>আবেদনঃ</p>
                    <p>{student?.applicationText}</p>
                </div>
                <div className='my-5 rounded bg-orange-100 border border-orange-300 p-5'>
                    <p className='text-xl text-orange-500 font-semibold'>মন্তব্যঃ</p>
                    <p>{student?.comment}</p>
                </div>

            </div>


            <div className='my-10'>
            <p>যোগাযোগ করুন {student?.phone}</p>
            <p className='my-3 text-white'>
                                <a target="_blank" href={`https://t.me/${student?.phone}`} className='rounded p-2 bg-sky-600'>
                                    <FontAwesomeIcon className='pr-2 text-xl' icon={faTelegramPlane} beatFade/> Telegram
                                </a>
                                <a target="_blank" href={`https://wa.me/${student?.phone}`} className='rounded p-2 bg-lime-600 ml-3'>
                                    <FontAwesomeIcon className='pr-2 text-xl' icon={faWhatsapp} beatFade/> WhatsApp
                                </a>
                            </p>
            </div>


             
            
            {/* {
                admin && <div className="text-center mt-40">
                    <div className="my-5  mx-auto">

                        <div className="p-10 bg-slate-200 rounded-sm">
                            <div className="flex items-center justify-center">
                                <p className="text-xl font-medium text-purple-600 mr-10">Admin Support</p>
                                <input type="checkbox" className="toggle toggle-primary" onChange={e=>setAdminDesk(e.target.checked)} />
                            </div>

                            {adminDesk && <div className="my-10">
                                {!student.tafseer2data && <button onClick={accessLevelTwo} className="p-2 px-4 m-2 btn-secondary rounded-md"> Access Level 2</button>}
                                
                            </div>} 
                        </div>
                    
                     
                    </div>  
                </div>
            } */}
        </div>
    );
};

export default ScholarshipDetails;