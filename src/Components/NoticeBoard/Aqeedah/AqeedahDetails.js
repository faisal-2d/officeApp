import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Loading from "../../Loading/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faFilePdf, faHandPointUp, faMoneyBill, faMousePointer } from "@fortawesome/fontawesome-free-solid";

import maleProfile from '../../../assets/male-profile.png'
import femaleProfile from '../../../assets/female-profile.png'
import graduation from '../../../assets/certi_img/graduation.gif'
import aq_certi_1 from '../../../assets/certi_img/aq_certi_2.gif'
import aq_certi_2 from '../../../assets/certi_img/aq_certi_1.gif'
import aq_certi_3 from '../../../assets/certi_img/aq_certi_3.gif'

import useModerator from "../../hooks/useModerator";
import digitConverter from "../../tools/digitConverter";
import thConverter from "../../tools/thConverter";
import AqeedahPaymentCard from "./AqeedahPaymentCard";
import LevelUp from "./LevelUp";
import AqeedahGroupCard from "./AqeedahGroupCard";
import RefundPolicy from "./RefundPolicy";




const AqeedahDetails = () => {    
    const params = useParams();
    const nev = useLocation();

    const [student, setStudent] = useState(nev.state?.student);
    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const [moderator] = useModerator(user);
    const [adminDesk, setAdminDesk] = useState(false);


const getStudent = () => {

        axios.get(`${process.env.REACT_APP_BACKEND_API}/aqeedah/${params.batch}/sn/${params.sn}`)
        .then(data => { setStudent(data.data)
        });       
       
}

if(!student){
    getStudent();
    return <Loading></Loading>
}


    const upcomingLevel1 = 23;
    const currentLevel1 = upcomingLevel1-1;
    const currentLevel2 = currentLevel1-1;

    const level1ExmDates = e => {
        return '';
    }
    const level2ExmDates = e => {
        return '';
    }

    

    const accessLevelTwo = () => {
        const data = {
                        "aqeedah2payment" : "due",
                        "aqeedah3payment" : "due",
                        "aqeedah3Total" : 0,
                        "aqeedah3data" : [
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
                          }
                         ]
                     }


            axios.put(`${process.env.REACT_APP_BACKEND_API}/aqeedah/accessLevelTwo/${params.batch}/${params.sn}`, data)
            .then(data => {
                getStudent();
            })
    }

   
    const payment1Update = () => {

        const data = {
                "aqeedah1payment" : "paid",           
            }        

        axios.put(`${process.env.REACT_APP_BACKEND_API}/aqeedah/${params.batch}/payment/${params.sn}`, data)
        .then(data => {
            getStudent();
        })
        
    }
    const payment2Update = (level) => {

        const data = {
                "aqeedah2payment" : "paid",           
            }        

        axios.put(`${process.env.REACT_APP_BACKEND_API}/aqeedah/${params.batch}/payment/${params.sn}`, data)
        .then(data => {
            getStudent();            
        })
        
    }
    const payment3Update = (level) => {

        const data = {
                "aqeedah3payment" : "paid",           
            }     

        axios.put(`${process.env.REACT_APP_BACKEND_API}/aqeedah/${params.batch}/payment/${params.sn}`, data)
        .then(data => {
            getStudent();           
        })
        
    }
        
    return (
        <div className='container mx-auto mb-40 px-5'>
            <p className="text-center text-2xl my-10">আক্বিদাহ কোর্সের {digitConverter(params.batch)}{thConverter(params.batch)} ব্যাচে স্বাগতম!</p>
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

            <div className="flex flex-col md:flex-row p-5 gap-10">                

                {student.aqeedah1payment && <AqeedahPaymentCard
                payment={student.aqeedah1payment}
                level={1}
                ></AqeedahPaymentCard>}

                {student.aqeedah2payment && <AqeedahPaymentCard
                payment={student.aqeedah2payment}
                level={2}
                ></AqeedahPaymentCard>}

                {student.aqeedah3payment && <AqeedahPaymentCard
                payment={student.aqeedah3payment}
                level={3}
                ></AqeedahPaymentCard>}              

                
            </div>

            </div>


{/* Aqeedah Certificate  */}
{(student.aqeedahCertificate || student.aqeedahCourseCertificates) && <div>

                <p className="text-2xl mt-12 mb-5">অভিনন্দন! আপনি সার্টিফিকেট পেয়েছেন!</p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                { student.aqeedahCourseCertificates?.level1 && <div className={`text-center p-5 rounded bg-green-100 w-fit `}>
                    <img className="rounded" src={aq_certi_1} alt="" />
                    {student.aqeedah1payment=="due" 
                    ?  <Link className="bg-red-500 block mt-2 text-white p-2 rounded shadow" to='/aqeedah-due'>বকেয়া পরিশোধ করুন</Link>
                    : <a className="bg-green-500 block mt-2 text-white p-2 rounded shadow" href={student.aqeedahCourseCertificates?.level1} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='pr-5' icon={faFilePdf}/> Level 1 Certificate</a>
                    }
                    
                </div>}
                
                {student.aqeedahCourseCertificates?.level2 && <div className="text-center p-5 rounded bg-sky-100 w-fit">
                    <img className="rounded" src={aq_certi_2} alt="" />
                    {student.aqeedah2payment=="due" 
                    ?  <Link className="bg-red-500 block mt-2 text-white p-2 rounded shadow" to='/aqeedah-due'>বকেয়া পরিশোধ করুন</Link>
                    : <a className="bg-blue-500 block mt-2 text-white p-2 rounded shadow" href={student.aqeedahCourseCertificates?.level2} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='pr-5' icon={faFilePdf}/> Level 2 Certificate</a>
                    }                    
                </div>}

                {student.aqeedahCourseCertificates?.level3 && <div className="text-center p-5 rounded bg-fuchsia-100 w-fit">
                    <img className="rounded" src={aq_certi_3} alt="" />
                    {student.aqeedah3payment=="due" 
                    ?  <Link className="bg-red-500 block mt-2 text-white p-2 rounded shadow" to='/aqeedah-due'>বকেয়া পরিশোধ করুন</Link>
                    : <a className="bg-fuchsia-600 block mt-2 text-white p-2 rounded shadow" href={student.aqeedahCourseCertificates?.level3} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='pr-5' icon={faFilePdf}/> Level 3 Certificate</a>
                    }
                </div>}

                {student.aqeedahCertificate && <div className="text-center p-5 rounded bg-sky-100 w-fit">
                    <img className="rounded" src={graduation} alt="" />
                    {(student.aqeedah1payment=="due" || student.aqeedah2payment=="due" || student.aqeedah3payment=="due") 
                    ?  <Link className="bg-red-500 block mt-2 text-white p-2 rounded shadow" to='/aqeedah-due'>বকেয়া পরিশোধ করুন</Link>
                    : <a className="bg-teal-500 block mt-2 text-white p-2 rounded shadow" href={student.aqeedahCertificate} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='pr-5' icon={faFilePdf}/> Aqeedah Certificate</a>
                    }
                </div>}

                </div>
   </div>             
}
{(!student.aqeedah3data && currentLevel1 == params.batch) && <LevelUp
        accessLevelTwo={accessLevelTwo
        }></LevelUp>}
            
{/* Level 2+3 */}
{student.aqeedah3data && <section className="my-10">
            <div className="divider text-4xl text-slate-500 my-20">লেভেল ২ + ৩</div>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>            

           <AqeedahGroupCard
                batch={params.batch}
                gender={student.gender}
                level={3}
            ></AqeedahGroupCard>


            <div className={`p-5 rounded bg-gradient-to-tl from-green-300`}>
            <p className='text-xl'>Batch: {params.batch}</p>
            <p className='text-xl'>Course: Aqeedah Level 2 + 3 </p>
            
            <br />
                <div className="text-center mb-8">
                    <Link className="py-3 px-5 rounded bg-green-300" to={'/meritlist-aqeedah-'+params.batch+'/'+params.sn}> <FontAwesomeIcon icon="fa-solid fa-trophy" /> Leaderboard</Link>
                </div>
            </div>

            <div className=' bg-gradient-to-tl from-indigo-200 to-blue-100 rounded'>
            <ResponsiveContainer height={200}>
                <BarChart  data={student.aqeedah3data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis type="number" domain={[0, 100]} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="Score" fill="#6F2DBD" />
                </BarChart>
            </ResponsiveContainer>           
            </div>           
               
            
            </div>

           <p className="text-2xl mt-12 mb-5">আপনার লেভেল ২ + ৩ এর পরীক্ষার রেজাল্টসমূহ</p>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    student.aqeedah3data.map((exm, index) => <div key={index} className={`text-right p-2 pb-5 rounded  ${ exm.Score >= 50 ? 'bg-green-200' : exm.Score > 0 ? 'bg-red-200' : ' bg-slate-200'}`}>
                    <FontAwesomeIcon className="text-sm opacity-30" icon="fa-solid fa-circle" />
                    <FontAwesomeIcon className="ml-1 text-sm opacity-30" icon="fa-solid fa-circle" />
                    {exm.name === "Exm 4" ?<FontAwesomeIcon className="ml-1 text-sm opacity-30" icon="fa-solid fa-circle" /> : ""}
                     <div className=' text-center p-2'>
                     <p className='text-2xl'>{exm.name}</p>
                     {params.batch==currentLevel2 && level2ExmDates(index) }
                     <p className='text-5xl'>{exm.Score}</p>
                     </div>
                 </div>
                    )
                }
                
            </div>


            </section>
            }

{/* Level 1 */}
{student.aqeedah1data && <section className="my-10">
            <div className="divider text-4xl text-slate-500 my-20">লেভেল ১</div>
            
           <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>             

            <AqeedahGroupCard
                batch={params.batch}
                gender={student.gender}
                level={1}
            ></AqeedahGroupCard>
           

            <div className='p-5 rounded bg-gradient-to-tl from-green-300'>
            <p className='text-xl'>Batch: {params.batch}</p>
            <p className='text-xl'>Course: Aqeedah  
                <span> Level 1</span>
            </p>
           
            <br />
            <div className="text-center mb-8">
            <Link className="py-3 px-5 rounded bg-green-300" to={'/leaderboard-aqeedah1-'+params.batch+'/'+params.sn}> <FontAwesomeIcon icon="fa-solid fa-trophy" /> Leaderboard</Link>           
            </div>
            </div>

            <div className='bg-gradient-to-tl from-orange-200 to-red-100 rounded'>
            <ResponsiveContainer height={200}>
                <BarChart  data={student.aqeedah1data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis type="number" domain={[0, 100]} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="Score" fill="#FF6A4A" />
                </BarChart>
            </ResponsiveContainer>
            </div>  

            
            
            </div>

            <p className="text-2xl mt-12 mb-5">আপনার লেভেল ১ এর পরীক্ষার রেজাল্টসমূহ</p>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    student.aqeedah1data.map((exm, index) => <div key={index} className={`text-right p-2 pb-5 rounded  ${ exm.Score >= 50 ? 'bg-green-200' : exm.Score > 0 ? 'bg-red-200' : ' bg-slate-200'}`}>
                           <FontAwesomeIcon className="text-sm opacity-30" icon="fa-solid fa-circle" />
                            <div className=' text-center p-2'>
                            <p className='text-2xl'>{exm.name}</p>
                            {params.batch==currentLevel1 && level1ExmDates(index)}
                            <p className='text-5xl'>{exm.Score}</p>
                            </div>
                        </div>
                    )
                }
                
            </div>


            </section>
            }

            <RefundPolicy></RefundPolicy> 
            
            {
                (admin || moderator) && <div className="text-center mt-40">
                    <div className="my-5  mx-auto">

                        <div className="p-10 bg-slate-200 rounded-sm">
                            <div className="flex items-center justify-center">
                                <p className="text-xl font-medium text-purple-600 mr-10">Admin Support</p>
                                <input type="checkbox" className="toggle toggle-primary" onChange={e=>setAdminDesk(e.target.checked)} />
                            </div>

                            {adminDesk && <div className="my-10">
                                <button onClick={payment1Update} className="p-2 px-4 m-2 btn btn-success rounded-md"> Payement : Level 1</button> 
                                <button onClick={payment2Update} className="p-2 px-4 m-2 btn btn-success rounded-md"> Payement : Level 2</button> 
                                <button onClick={payment3Update} className="p-2 px-4 m-2 btn btn-success rounded-md"> Payement : Level 3</button> 
                                {!student.aqeedah3data && <button onClick={accessLevelTwo} className="p-2 px-4 m-2 btn btn-secondary rounded-md"> LevelUp</button> }
                            </div>} 
                        </div>
                    
                     
                    </div>  
                </div>
            }
        </div>
    );
};

export default AqeedahDetails;