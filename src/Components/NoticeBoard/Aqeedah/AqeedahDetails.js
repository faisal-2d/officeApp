import axios from "axios";
import React, { useEffect, useState } from 'react';
import maleProfile from '../../../assets/male-profile.png'
import femaleProfile from '../../../assets/female-profile.png'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Link, useParams } from 'react-router-dom';
import Loading from "../../Loading/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faFilePdf, faMoneyBill } from "@fortawesome/fontawesome-free-solid";
import graduation from '../../../assets/certi_img/graduation.gif'
import aq_certi_1 from '../../../assets/certi_img/aq_certi_1.gif'
import aq_certi_2 from '../../../assets/certi_img/aq_certi_2.gif'
import aq_certi_3 from '../../../assets/certi_img/aq_certi_3.gif'
import { faMoneyBill1 } from "@fortawesome/free-solid-svg-icons";




const AqeedahDetails = () => {    
    const [student, setStudent] = useState();
    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user);

    const params = useParams();
useEffect(()=> {
  axios.get(`https://alharamanin-backend-web.onrender.com/aqeedah/${params.batch}/sn/${params.sn}`)
//   http://localhost:5000/
  .then(data => setStudent(data.data))
},[params]);


    if(!student){
        return <Loading></Loading>
    }

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

    const updateLeaderBoard = () => {
        const myData = {}
        const activeSn = [           
            23,
            24,
            31,
            83,
            173,
            3,
            49,
            74,
            134,
            135,
            161,
            181,
            187,
            242,
            27,
            32,
            58,
            67,
            93,
            208,
            232,
            53,
            77,
            138,
            172,
            179,
            217,
            260,
            129,
            180,
            210,
            262,
            266,
            268,
            35,
            162,
            170,
            195,
            209,
            222,
            13,
            21,
            33,
            42,
            86,
            119,
            124,
            176,
            183,
            202,
            249,
            258,
            263,
            265,
            26,
            128,
            4,
            99,
            150,
            160,
            200,
            214,
            218,
            15,
            16,
            22,
            113,
            114,
            55,
            69,
            157,
            182,
            230,
            139,
            7,
            8,
            144,
            188,
            71,
            110,
            137,
            12,
            75,
            169,
            207,
            269,
            80,
            123,
            51,
            264,
            48,
            122,
            62,
            238,
            11,
            159,
            158,
            25,
            43,
            168,
            267,
            126,
            37,
            57,
            60,
            63,
            79,
            94,
            95,
            101,
            102,
            104,
            154,
            164,
            184,
            205,
            206,
            219,
            246,
            251,
        ];

    
    activeSn.map(j => axios.put(`http://localhost:5000/${params.batch}aqeedah3total/${j}`, myData)
    .then(data => console.log(data.data))
    )

    // for(let i=1; i<=354;i++){
    //  axios.put(`http://localhost:5000/${params.batch}aqeedah1total123/${i}`, myData)
    // .then(data => console.log(data.data))
    // }
    
    }


    const payment1Update = () => {

        const data = {
                "aqeedah1payment" : "paid",           
            }        

        axios.put(`https://alharamanin-backend-web.onrender.com/payment/aqeedah/${params.batch}/${params.sn}`, data)
        .then(data => console.log(data.data))
        //http://localhost:5000/
        //https://alharamanin-backend-web.onrender.com
    }
    const payment2Update = (level) => {

        const data = {
                "aqeedah2payment" : "paid",           
            }        

        axios.put(`https://alharamanin-backend-web.onrender.com/payment/aqeedah/${params.batch}/${params.sn}`, data)
        .then(data => console.log(data.data))
        //http://localhost:5000/
        //https://alharamanin-backend-web.onrender.com
    }
    const payment3Update = (level) => {

        const data = {
                "aqeedah3payment" : "paid",           
            }     

        axios.put(`https://alharamanin-backend-web.onrender.com/payment/aqeedah/${params.batch}/${params.sn}`, data)
        .then(data => console.log(data.data))
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

                { student.aqeedahCourseCertificates?.level1 && <div className={`text-center p-5 rounded bg-sky-100 w-fit `}>
                    <img className="rounded" src={aq_certi_1} alt="" />
                    {student.aqeedah1payment=="due" 
                    ?  <Link className="bg-red-500 block mt-2 text-white p-2 rounded shadow" to='/aqeedah-due'>বকেয়া পরিশোধ করুন</Link>
                    : <a className="bg-blue-500 block mt-2 text-white p-2 rounded shadow" href={student.aqeedahCourseCertificates?.level1} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='pr-5' icon={faFilePdf}/> Level 1 Certificate</a>
                    }
                    
                </div>}
                
                {student.aqeedahCourseCertificates?.level2 && <div className="text-center p-5 rounded bg-green-100 w-fit">
                    <img className="rounded" src={aq_certi_2} alt="" />
                    {student.aqeedah2payment=="due" 
                    ?  <Link className="bg-red-500 block mt-2 text-white p-2 rounded shadow" to='/aqeedah-due'>বকেয়া পরিশোধ করুন</Link>
                    : <a className="bg-green-500 block mt-2 text-white p-2 rounded shadow" href={student.aqeedahCourseCertificates?.level2} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='pr-5' icon={faFilePdf}/> Level 2 Certificate</a>
                    }                    
                </div>}

                {student.aqeedahCourseCertificates?.level3 && <div className="text-center p-5 rounded bg-red-100 w-fit">
                    <img className="rounded" src={aq_certi_3} alt="" />
                    {student.aqeedah3payment=="due" 
                    ?  <Link className="bg-red-500 block mt-2 text-white p-2 rounded shadow" to='/aqeedah-due'>বকেয়া পরিশোধ করুন</Link>
                    : <a className="bg-red-400 block mt-2 text-white p-2 rounded shadow" href={student.aqeedahCourseCertificates?.level3} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='pr-5' icon={faFilePdf}/> Level 3 Certificate</a>
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

            <div className={`p-5 rounded bg-gradient-to-tl from-green-300`}>
            <p className='text-xl'>Batch: {params.batch}</p>
            <p className='text-xl'>Course: Aqeedah Level 2 + 3 </p>
            
            <br />
           <Link className="py-2 px-4 rounded bg-green-300" to={'/meritlist-aqeedah-'+params.batch+'/'+params.sn}> <FontAwesomeIcon icon="fa-solid fa-trophy" /> Leaderboard</Link>
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

            {/* <div className='mx-auto px-5 py-1 bg-gradient-to-tl from-indigo-200'>
                <BarChart width={300} height={200} data={student.aqeedah3data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis type="number" domain={[0, 100]} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="Score" fill="#6F2DBD" />
                </BarChart>
                 </div>   */}
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
            <div className="divider text-4xl text-slate-500 my-20">লেভেল ১</div>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>           
            <div className='p-5 rounded bg-gradient-to-tl from-green-300'>
            <p className='text-xl'>Batch: {params.batch}</p>
            <p className='text-xl'>Course: Aqeedah  
           <span> Level 1</span>
            </p>
           
            <br />
           <Link className="py-2 px-4 rounded bg-green-300" to={'/leaderboard-aqeedah1-'+params.batch+'/'+params.sn}> <FontAwesomeIcon icon="fa-solid fa-trophy" /> Leaderboard</Link>           
            </div>

            <div className=' bg-gradient-to-tl from-orange-200 to-red-100 rounded'>
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
                    student.aqeedah1data.map((exm, index) => <div key={index} className=' text-center p-5 rounded bg-yellow-200'>
                            <p className='text-2xl'>{exm.name}</p>
                            <p className='text-5xl'>{exm.Score}</p>
                        </div>
                    )
                }
                
            </div>


            </section>
            }

             
            
            {
                admin && <div className="text-center my-20">
                    <p>Now You can update!</p>
                    <button onClick={updateLeaderBoard} className="p-2 m-2 btn-primary"> update leaderboard</button>
                    <button onClick={accessLevelTwo} className="p-2 m-2 btn-secondary"> Access Level 2</button>
                    {/* <button onClick={paymentUpdate} className="p-2 m-2 bg-orange-500"> Payment Update</button> */}

                    <div className="my-10">
                    <button onClick={payment1Update} className="p-2 m-2 btn-success rounded-md"> Payement : Level 1</button>
                    <button onClick={payment2Update} className="p-2 m-2 btn-success rounded-md"> Payement : Level 2</button>
                    <button onClick={payment3Update} className="p-2 m-2 btn-success rounded-md"> Payement : Level 3</button>
                    </div>  
                </div>
            }
        </div>
    );
};

export default AqeedahDetails;