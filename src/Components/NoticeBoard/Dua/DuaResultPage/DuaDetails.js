import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation, useParams } from 'react-router-dom';
import auth from '../../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import axios from 'axios';
import Loading from '../../../Loading/Loading';

import maleProfile from '../../../../assets/male-profile.png'
import femaleProfile from '../../../../assets/female-profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import aq_certi_1 from '../../../../assets/certi_img/aq_certi_2.gif'
import aq_certi_2 from '../../../../assets/certi_img/aq_certi_1.gif'
import { faFilePdf } from '@fortawesome/fontawesome-free-solid';
import DuaLevelComponent from './DuaLevelComponent';
import DuaPaymentCard from './DuaPaymentCard';
import DuaDiamond from './DuaDiamond';
import CompletionBar from './CompletionBar';
import DuaList from './DuaList';
import DuaReport from './DuaReport';
import digitConverter from '../../../tools/digitConverter';
import thConverter from '../../../tools/thConverter';
import useAssistant from '../../../hooks/useAssistant';
import getDate from '../../../tools/getDate';



const DuaDetails = () => {
    const params = useParams();
    const nev = useLocation();


    const [student, setStudent] = useState(nev.state?.student);
    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const [assistant] = useAssistant(user);

    const [adminDesk, setAdminDesk] = useState(false);


const getStudent = () => {

        axios.get(`${process.env.REACT_APP_BACKEND_API}/dua/${params.batch}/sn/${params.sn}`)
        .then(data => { setStudent(data.data);
        });       
       
}
let totalGems = student?.gems;

if(!student){
    getStudent();
    return <Loading></Loading>
}  

    const date = getDate(new Date());
    if((student?.todaysinfo?.date)<date){
        const data = {
            "date" : date
        }
        axios.put(`${process.env.REACT_APP_BACKEND_API}/dua/date/update/${params.batch}/${params.sn}`, data)
            .then(data => {
                update_profile(true);
            })
    }

   
    const payment1Update = () => {

        const data = {
                "dua1payment" : "paid",           
            }        

        axios.put(`${process.env.REACT_APP_BACKEND_API}/dua/${params.batch}/payment/${params.sn}`, data)
        .then(data => {
            getStudent();

        })

    } 

    const update_profile = e => {
        if(e){
            getStudent();
        }
    }

    
    

    return (
        <div className='container mx-auto mb-40 px-5'>
            <p className="text-center text-2xl my-10">দোআ ও যিকির কোর্সের {digitConverter(params.batch)}{thConverter(params.batch)} ব্যাচে স্বাগতম!</p>
            <div className="rounded bg-gradient-to-tl from-sky-200 flex flex-col md:flex-row justify-center md:justify-between">
            <div className='flex items-center p-5'>
                <div className='mr-5'>                   
                    <img src={student.gender==="female" ? femaleProfile : maleProfile} alt="" />                        
                </div>
                <div>                                                    
                    <p className=''>SN <strong>{params.sn}</strong></p>
                    <p className='md:text-3xl'><strong>{student.name.toUpperCase()}</strong></p>                                   
                    {student.fatherName && <p className='md:text-xl'>{student.gender==="female" ? "BINT" : "BIN"} <strong>{student.fatherName.toUpperCase()}</strong></p>}
                    <p className=''><FontAwesomeIcon icon="fa-solid fa-phone" /> <strong>{student.phone}</strong></p>
                    
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center p-5 gap-10">   

            <div className='mx-auto items-center'>
                <DuaDiamond
                gems = {totalGems}
                ></DuaDiamond>
            </div>             

            {student?.dua1payment && <DuaPaymentCard
                payment={student.dua1payment}
                level ={1}
                ></DuaPaymentCard> }
            

                
            </div>

            </div>


{/* dua Certificate  */}
{(student.duaCourseCertificates) && <div>

                <p className="text-2xl mt-12 mb-5">অভিনন্দন! আপনি সার্টিফিকেট পেয়েছেন!</p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                { student.duaCourseCertificates?.level1 && <div className={`text-center p-5 rounded bg-green-100 w-fit `}>
                    <img className="rounded" src={aq_certi_1} alt="" />
                    {student.dua1payment=="due" 
                    ?  <Link className="bg-red-500 block mt-2 text-white p-2 rounded shadow" to='/dua-due'>বকেয়া পরিশোধ করুন</Link>
                    : <a className="bg-green-500 block mt-2 text-white p-2 rounded shadow" href={student.duaCourseCertificates?.level1} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='pr-5' icon={faFilePdf}/> Level 1 Certificate</a>
                    }
                    
                </div>}
                
                

        

                </div>
   </div>             
}



{/* Level 1  */}
            <CompletionBar
            completion = {parseInt((student?.completion)*(100/150))}
            ></CompletionBar>
            
            <DuaList
            student = {student}
            update_profile = {update_profile} 
            ></DuaList>

            <DuaReport
            student = {student}
            update_profile = {update_profile}
            ></DuaReport>
             
            
            
            {
                admin && <div className="text-center mt-40">
                    <div className="my-5  mx-auto">

                        <div className="p-10 bg-slate-200 rounded-sm">
                            <div className="flex items-center justify-center">
                                <p className="text-xl font-medium text-purple-600 mr-10">Admin Support</p>
                                <input type="checkbox" className="toggle toggle-primary" onChange={e=>setAdminDesk(e.target.checked)} />
                            </div>

                            {adminDesk && <div className="my-10">
                                <button onClick={payment1Update} className="p-2 px-4 m-2 btn btn-accent rounded-md"> Payement : Level 1</button>
                            </div>} 
                        </div>
                    
                     
                    </div>  
                </div>
            }
        </div>
    );
};


export default DuaDetails;