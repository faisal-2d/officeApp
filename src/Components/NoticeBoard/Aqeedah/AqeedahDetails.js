import axios from "axios";
import React, { useEffect, useState } from 'react';
import maleProfile from '../../../assets/male-profile.png'
import femaleProfile from '../../../assets/female-profile.png'
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import { Link, useParams } from 'react-router-dom';
import Loading from "../../Loading/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faFilePdf, faMoneyBill } from "@fortawesome/fontawesome-free-solid";
import graduation from '../../../assets/graduation.jpg'
import { faMoneyBill1 } from "@fortawesome/free-solid-svg-icons";




const AqeedahDetails = () => {    
    const [student, setStudent] = useState();
    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user);

    const params = useParams();
useEffect(()=> {
  axios.get(`https://flannel-loonie-61461.herokuapp.com/aqeedah/${params.batch}/sn/${params.sn}`)
//   http://localhost:5000/
  .then(data => setStudent(data.data))
},[params]);


    if(!student){
        return <Loading></Loading>
    }

    const updateLeaderBoard = () => {
        const myData = {}

    for(let i=1; i<261;i++){
    axios.put(`http://localhost:5000/${params.batch}aqeedah1total/${i}`, myData)
    .then(data => console.log(data.data))
    }
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
        <div className='container mx-auto px-5'>
            <p className="text-center text-2xl my-10">আক্বিদাহ কোর্সের {b} তম ব্যাচে স্বাগতম!</p>
            <div className="rounded bg-gradient-to-tl from-sky-200 flex flex-col md:flex-row justify-center md:justify-between">
            <div className='flex items-center p-5'>
                <div className='mr-5'>                   
                    <img src={student.gender==="female" ? femaleProfile : maleProfile} alt="" />                        
                </div>
                <div>                                                    
                    <p className=''>SN <strong>{params.sn}</strong></p>
                    <p className='md:text-3xl'><strong>{student.name.toUpperCase()}</strong></p>                                   
                    <p className='md:text-xl'>{student.gender==="female" ? "BINTE" : "BIN"} <strong>{student.fatherName.toUpperCase()}</strong></p>
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
                </div>}

                {student.aqeedah3payment && <div className={`relative overflow-hidden rounded py-2 px-5 bg-gradient-to-tl ${ student.aqeedah3payment === 'due' ? 'from-red-200 to-red-100' : 'from-green-300 to-green-200'} `}>
                <div className="flex justify-between">                
                <div className="mr-10">
                    <p>Payment</p>
                    <p>Level 2 + 3</p>
                </div>
                <FontAwesomeIcon className={`text-2xl ${ student.aqeedah3payment === 'due' ? 'text-red-600' : 'text-green-600'} `} icon={faMoneyBill1} />
                </div>
                <FontAwesomeIcon className="text-8xl absolute -ml-16 mt-2 opacity-10 text-inherit" icon="fa-regular fa-circle" />
                <p className={`text-center font-bold text-xl my-2 ${ student.aqeedah3payment === 'due' ? 'text-red-600' : 'text-green-600'} `}>
                <span className="uppercase font-bold">{student.aqeedah3payment}</span>
                </p>
                </div>}

                
            </div>

            </div>

            
{/* Level 2+3 */}
{student.aqeedah3data && <section className="my-10">
           <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>            

            <div className={`p-5 rounded bg-gradient-to-tl from-green-300`}>
            <p className='text-xl'>Batch: {params.batch}</p>
            <p className='text-xl'>Course: Aqeedah Level 2 + 3 </p>
            
            <br />
           <Link className="py-2 px-4 rounded bg-green-300" to={'/meritlist-aqeedah-'+params.batch}> <FontAwesomeIcon icon="fa-solid fa-trophy" /> Leaderboard</Link>
            </div>

            <div className='mx-auto px-5 py-1 bg-gradient-to-tl from-indigo-200'>
                <BarChart width={300} height={200} data={student.aqeedah3data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis type="number" domain={[0, 100]} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="Score" fill="#6F2DBD" />
                </BarChart>
            </div>  
               
            
            </div>

           <p className="text-2xl mt-12 mb-5">আপনার লেভেল ২ + ৩ এর পরীক্ষার রেজাল্টসমূহ</p>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    student.aqeedah3data.map((exm, index) => <div key={index} className=' text-center p-5 rounded bg-indigo-200'>
                            <p className='text-2xl'>{exm.name}</p>
                            <p className='text-5xl'>{exm.Score}</p>
                        </div>
                    )
                }
                
            </div>


            </section>
            }

{/* Level 1 */}
            {student.aqeedah1data && <section className="my-10">
           <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>            

            <div className='p-5 rounded bg-gradient-to-tl from-green-300'>
            <p className='text-xl'>Batch: {params.batch}</p>
            <p className='text-xl'>Course: Aqeedah  
           <span> Level 1</span>
            </p>
           
            <br />
           <Link className="py-2 px-4 rounded bg-green-300" to={'/leaderboard-aqeedah1-'+params.batch}> <FontAwesomeIcon icon="fa-solid fa-trophy" /> Leaderboard</Link>           
            </div>

            <div className='mx-auto px-5 py-1 bg-gradient-to-tl from-orange-200'>
                <BarChart width={300} height={200} data={student.aqeedah1data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis type="number" domain={[0, 100]} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="Score" fill="#FF6A4A" />
                </BarChart>
            </div>  
               
            
            </div>

            <p className="text-2xl mt-12 mb-5">আপনার লেভেল ১ এর পরীক্ষার রেজাল্টসমূহ</p>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    student.aqeedah1data.map((exm, index) => <div key={index} className=' text-center p-5 rounded bg-yellow-200'>
                            <p className='text-2xl'>{exm.name}</p>
                            <p className='text-5xl'>{exm.Score}</p>
                        </div>
                    )
                }
                
            </div>


            </section>
            }

      
            

             
            

            {/* Aqeedah Certificate  */}
            {student.aqeedahCertificate && <div>
                <p className="text-2xl mt-12 mb-5">অভিনন্দন! আপনি সার্টিফিকেট পেয়েছেন!</p>
                <div className="text-center p-5 rounded bg-sky-200 w-fit">
                    <img className="rounded" src={graduation} alt="" />
                    <a className="bg-red-400 block mt-2 text-white p-2 rounded shadow" href={student.aqeedahCertificate} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='pr-5' icon={faFilePdf}/> Certificate</a>
                </div>
                </div>}

        
            

            
            
                {
                    admin && <div className="text-center my-20">
                        <p>Now You can update!</p>
                        <button onClick={updateLeaderBoard} className="btn-primary"> update leaderboard</button>
                        
                    </div>
                }
        </div>
    );
};

export default AqeedahDetails;