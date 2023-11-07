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
import Level_1_Male from '../../../assets/group logo/Level_1_Male.png'
import Level_1_Female from '../../../assets/group logo/Level_1_Female.png'
import Level_2_Male from '../../../assets/group logo/Level_2_Male.png'
import Level_2_Female from '../../../assets/group logo/Level_2_Female.png'

import Level_1_Channel from '../../../assets/group logo/Level_1_Channel.png'
import Level_2_Channel from '../../../assets/group logo/Level_2_Channel.png'
import { faHand, faHandFist, faMoneyBill1 } from "@fortawesome/free-solid-svg-icons";




const AqeedahDetails = () => {    
    const params = useParams();
    const nev = useLocation();

    const [student, setStudent] = useState(nev.state?.student);
    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const [adminDesk, setAdminDesk] = useState(false);
    // setStudent()
// useEffect(()=> {
//   axios.get(`https://alharamanin-backend-web.onrender.com/aqeedah/${params.batch}/sn/${params.sn}`)
// //   http://localhost:5000/
//   .then(data => setStudent(data.data))
// },[params]);


const getStudent = () => {

        axios.get(`https://alharamanin-backend-web.onrender.com/aqeedah/${params.batch}/sn/${params.sn}`)
        .then(data => { setStudent(data.data)
            // console.log("i got the student ",data.data);
        });       
       
}

if(!student){
    getStudent();
    return <Loading></Loading>
}


    const upcomingLevel1 = 21;
    const currentLevel1 = upcomingLevel1-1;
    const currentLevel2 = currentLevel1-1;

    const Level_0_Male_link ="https://t.me/+1eenPK1I1_VhYWY8";
    const Level_0_Female_link ="https://t.me/+00Diz2CJWtY4ZmY0";
    const Level_0_Channel_link ="https://t.me/+Vug6OU6mdRs1OWRk";

    const Level_1_Male_link ="https://t.me/+TiZYTgSvLYUxYzg0";
    const Level_1_Female_link ="https://t.me/+y6IptpP6eMVkNjFk";
    const Level_1_Channel_link ="https://t.me/+YrJ7oZUWyug4NzQ0";

    const Level_2_Male_link ="https://t.me/+LdWx9XHJjRcwYWVk";
    const Level_2_Female_link ="https://t.me/+9p7ObVUYgxQxYzhk";
    const Level_2_Channel_link ="https://t.me/+Jr2W1XuU3JJlOWU8";

    const today = new Date();
    const exmDate = new Date(2023, 9, 1); 
    const d1 = new Date("25 Mar 2015");
    // console.log(exmDate);
    // (new Date("10 Aug 2023")).toDateString();

    const level1ExmDates = exmNo => {
        if(exmNo===0)
            return <p className=''>১০ অক্টবর, মঙ্গলবার</p>;
        else if(exmNo===1)
            return <p className=''>১২ নভেম্বর, রবিবার</p>;
        else if(exmNo===2)
            return <p className=''>২২ নভেম্বর, বুধবার</p>;
    };
    const level2ExmDates = exmNo => {
        if(exmNo===0)
            return <p className=''>২৮ সেপ্টেম্বর, বৃহস্পতিবার</p>;
        else if(exmNo===1)
            return <p className=''>১৩ নভেম্বর, সোমবার</p>;
        else if(exmNo===2)
            return <p className=''>২০ নভেম্বর, সোমবার</p>;
        else
            return <p className=''>৩ জানুয়ারি, বুধবার</p>;
    };

    const accessLevelTwo = () => {
        console.log(params.batch);
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


            axios.put(`https://alharamanin-backend-web.onrender.com/accessLevelTwo/aqeedah${params.batch}/${params.sn}`, data)
           .then(data => console.log(data.data))
    }

   
    const payment1Update = () => {

        const data = {
                "aqeedah1payment" : "paid",           
            }        

        axios.put(`https://alharamanin-backend-web.onrender.com/payment/aqeedah/${params.batch}/${params.sn}`, data)
        .then(data => {
            getStudent();
            // console.log(data.data);
        })
        //http://localhost:5000/
        //https://alharamanin-backend-web.onrender.com
    }
    const payment2Update = (level) => {

        const data = {
                "aqeedah2payment" : "paid",           
            }        

        axios.put(`https://alharamanin-backend-web.onrender.com/payment/aqeedah/${params.batch}/${params.sn}`, data)
        .then(data => {
            getStudent();
            // console.log(data.data);
        })
        //http://localhost:5000/
        //https://alharamanin-backend-web.onrender.com
    }
    const payment3Update = (level) => {

        const data = {
                "aqeedah3payment" : "paid",           
            }     

        axios.put(`https://alharamanin-backend-web.onrender.com/payment/aqeedah/${params.batch}/${params.sn}`, data)
        .then(data => {
            getStudent();
            // console.log(data.data);
        })
        //http://localhost:5000/
        //https://alharamanin-backend-web.onrender.com
    }


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
        
    return (
        <div className='container mx-auto mb-40 px-5'>
            <p className="text-center text-2xl my-10">আক্বিদাহ কোর্সের {b} তম ব্যাচে স্বাগতম!</p>
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

                {student.aqeedah1payment && <div className={`relative overflow-hidden rounded py-2 px-5 bg-gradient-to-tl ${ student.aqeedah1payment === 'due' ? 'from-red-200 to-red-100' : 'from-green-300 to-green-200'} `}>
                <div className="w-auto  flex justify-between">                
                <div className="mr-16">
                    <p>Payment</p>
                    <p>Level 1</p>
                </div>
                <FontAwesomeIcon className={`text-2xl ${ student.aqeedah1payment === 'due' ? 'text-red-600' : 'text-green-600'} `} icon={faMoneyBill1} />
                </div>
                <FontAwesomeIcon className="text-8xl absolute -ml-16 mt-2 opacity-10 text-inherit" icon="fa-regular fa-circle" />
                <p className={`text-center font-bold text-xl my-2 ${ student.aqeedah1payment === 'due' ? 'text-red-600' : 'text-green-600'} `}>
                <span className="uppercase font-bold ">{student.aqeedah1payment}</span>                
                </p>
                {student.aqeedah1payment === 'due' && <p className="text-red-600 text-center text-sm link -mt-2"><Link to='/aqeedah-due'>বকেয়া পরিশোধ করুন</Link></p> }                
                </div>}

                {student.aqeedah2payment && <div className={`relative overflow-hidden rounded py-2 px-5 bg-gradient-to-tl ${ student.aqeedah2payment === 'due' ? 'from-red-200 to-red-100' : 'from-green-300 to-green-200'} `}>
                <div className="flex justify-between">                
                <div className="mr-10">
                    <p>Payment</p>
                    <p>Level 2</p>
                </div>
                <FontAwesomeIcon className={`text-2xl ${ student.aqeedah2payment === 'due' ? 'text-red-600' : 'text-green-600'} `} icon={faMoneyBill1} />
                </div>
                <FontAwesomeIcon className="text-8xl absolute -ml-16 mt-2 opacity-10 text-inherit" icon="fa-regular fa-circle" />
                <p className={`text-center font-bold text-xl my-2 ${ student.aqeedah2payment === 'due' ? 'text-red-600' : 'text-green-600'} `}>
                <span className="uppercase font-bold">{student.aqeedah2payment}</span>
                </p>
                {student.aqeedah2payment === 'due' && <p className="text-red-600 text-center text-sm link -mt-2"><Link to='/aqeedah-due'>বকেয়া পরিশোধ করুন</Link></p> }
                </div>}

                {student.aqeedah3payment && <div className={`relative overflow-hidden rounded py-2 px-5 bg-gradient-to-tl ${ student.aqeedah3payment === 'due' ? 'from-red-200 to-red-100' : 'from-green-300 to-green-200'} `}>
                <div className="flex justify-between">                
                <div className="mr-10">
                    <p>Payment</p>
                    <p>Level 3</p>
                </div>
                <FontAwesomeIcon className={`text-2xl ${ student.aqeedah3payment === 'due' ? 'text-red-600' : 'text-green-600'} `} icon={faMoneyBill1} />
                </div>
                <FontAwesomeIcon className="text-8xl absolute -ml-16 mt-2 opacity-10 text-inherit" icon="fa-regular fa-circle" />
                <p className={`text-center font-bold text-xl my-2 ${ student.aqeedah3payment === 'due' ? 'text-red-600' : 'text-green-600'} `}>
                <span className="uppercase font-bold">{student.aqeedah3payment}</span>
                </p>
                {student.aqeedah3payment === 'due' && <p className="text-red-600 text-center text-sm link -mt-2"><Link to='/aqeedah-due'>বকেয়া পরিশোধ করুন</Link></p> }
                </div>}

                
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

            
{/* Level 2+3 */}
{student.aqeedah3data && <section className="my-10">
            <div className="divider text-4xl text-slate-500 my-20">লেভেল ২ + ৩</div>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>            

           {params.batch==currentLevel2 && <div className='p-5 rounded bg-gradient-to-tl from-sky-300'>
            <p><span className='text-xl'>Join </span><FontAwesomeIcon className='text-blue-600' icon={faHand} fade/></p>

            <div className="mt-4 flex justify-around">
            { student.gender==="female" ?  <a href={Level_2_Female_link} target="_blank" rel="noopener noreferrer"><div>
                    <div>
                        <img className='w-20' src={Level_2_Female} alt="" />
                    </div>
                    <p className="text-center">Class Group</p>
                </div>
            </a>
            :   <a href={Level_2_Male_link} target="_blank" rel="noopener noreferrer"><div>
            <div>
                <img className='w-20' src={Level_2_Male} alt="" />
            </div>
            <p className="text-center">Class Group</p>
        </div>
    </a>
            }  
            <a href={Level_2_Channel_link} target="_blank" rel="noopener noreferrer"><div>    
                    <div>
                        <img className='w-20' src={Level_2_Channel} alt="" />
                    </div>   
                    <p className="text-center">Lecture Notes</p>
                    
                </div> 
                </a>

            </div>
            </div>}


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

           {params.batch== upcomingLevel1 && <div className='p-5 rounded bg-gradient-to-tl from-sky-300'>
            <p><span className='text-xl'>Join </span><FontAwesomeIcon className='text-blue-600' icon={faHand} fade/></p>

            <div className="mt-4 flex justify-around">
            { student.gender==="female" ?  <a href={Level_0_Female_link} target="_blank" rel="noopener noreferrer"><div>
                    <div>
                        <img className='w-20' src={Level_1_Female} alt="" />
                    </div>
                    <p className="text-center">Class Group</p>
                </div>
            </a>
            :   <a href={Level_0_Male_link} target="_blank" rel="noopener noreferrer"><div>
            <div>
                <img className='w-20' src={Level_1_Male} alt="" />
            </div>
            <p className="text-center">Class Group</p>
        </div>
    </a>
            }  
            <a href={Level_0_Channel_link} target="_blank" rel="noopener noreferrer"><div>    
                    <div>
                        <img className='w-20' src={Level_1_Channel} alt="" />
                    </div>   
                    <p className="text-center">Lecture Notes</p>
                    
                </div> 
                </a>

            </div>
            </div>}
           {params.batch==currentLevel1 && <div className='p-5 rounded bg-gradient-to-tl from-sky-300'>
            <p><span className='text-xl'>Join </span><FontAwesomeIcon className='text-blue-600' icon={faHand} fade/></p>

            <div className="mt-4 flex justify-around">
            { student.gender==="female" ?  <a href={Level_1_Female_link} target="_blank" rel="noopener noreferrer"><div>
                    <div>
                        <img className='w-20' src={Level_1_Female} alt="" />
                    </div>
                    <p className="text-center">Class Group</p>
                </div>
            </a>
            :   <a href={Level_1_Male_link} target="_blank" rel="noopener noreferrer"><div>
            <div>
                <img className='w-20' src={Level_1_Male} alt="" />
            </div>
            <p className="text-center">Class Group</p>
        </div>
    </a>
            }  
            <a href={Level_1_Channel_link} target="_blank" rel="noopener noreferrer"><div>    
                    <div>
                        <img className='w-20' src={Level_1_Channel} alt="" />
                    </div>   
                    <p className="text-center">Lecture Notes</p>
                    
                </div> 
                </a>

            </div>
            </div>}

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

             
            
            {
                admin && <div className="text-center mt-40">
                    <div className="my-5  mx-auto">

                        <div className="p-10 bg-slate-200 rounded-sm">
                            <div className="flex items-center justify-center">
                                <p className="text-xl font-medium text-purple-600 mr-10">Admin Support</p>
                                <input type="checkbox" className="toggle toggle-primary" onChange={e=>setAdminDesk(e.target.checked)} />
                            </div>

                            {adminDesk && <div className="my-10">
                                {!student.aqeedah3data && <button onClick={accessLevelTwo} className="p-2 px-4 m-2 btn-secondary rounded-md"> Access Level 2</button>}
                                <button onClick={payment1Update} className="p-2 px-4 m-2 btn-success rounded-md"> Payement : Level 1</button>
                                <button onClick={payment2Update} className="p-2 px-4 m-2 btn-success rounded-md"> Payement : Level 2</button>
                                <button onClick={payment3Update} className="p-2 px-4 m-2 btn-success rounded-md"> Payement : Level 3</button>
                            </div>} 
                        </div>
                    
                     
                    </div>  
                </div>
            }
        </div>
    );
};

export default AqeedahDetails;