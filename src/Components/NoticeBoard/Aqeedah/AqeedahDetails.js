import axios from "axios";
import React, { useEffect, useState } from 'react';
import maleProfile from '../../../assets/male-profile.png'
import femaleProfile from '../../../assets/female-profile.png'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Loading from "../../Loading/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const AqeedahDetails = () => {    
    const [student, setStudent] = useState();
    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user);

    const sn = useParams();
    const location = useLocation();
    const nevigate = useNavigate();   
useEffect(()=> {
  axios.get(`https://flannel-loonie-61461.herokuapp.com/aqeedah/${location.state.batch}/sn/${sn.sn}`)
//   http://localhost:5000/
  .then(data => setStudent(data.data))
},[sn]);


    if(!student){
        return <Loading></Loading>
    }

    const myData = {}
    const updatedata = () => {
        axios.put(`https://flannel-loonie-61461.herokuapp.com/level3total/${sn.sn}`, myData)
    .then(data => console.log(data.data))
    }
        
    return (
        <div className='container mx-auto'>
            <p className="text-center text-2xl my-10">আক্বিদাহ কোর্সের {location.state.batch} তম ব্যাচে স্বাগতম!</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            <div className='flex items-center p-5 rounded bg-blue-200'>
                <div className='mr-5'>                   
                    <img src={student.gender==="female" ? femaleProfile : maleProfile} alt="" />                        
                </div>
                <div>                                                    
                    <p className=''>SN <strong>{sn.sn}</strong></p>
                    <p className='text-3xl'><strong>{student.name.toUpperCase()}</strong></p>                                   
                    <p className='text-xl'>{student.gender==="female" ? "BINTE" : "BIN"} <strong>{student.fatherName.toUpperCase()}</strong></p>
                    <p className=''><FontAwesomeIcon icon="fa-solid fa-phone" /> <strong>{student.phone}</strong></p>
                    
                </div>
            </div>

            {/* Level 1 */}

            { student.aqeedah1data && <div className='mx-auto order-3 md:order-2'>
                <BarChart width={270} height={200} data={student.aqeedah1data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis type="number" domain={[0, 100]} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="Score" fill="#FF6A4A" />
                </BarChart>
            </div>}

            {/* Level 2+3 */}

            { student.aqeedah3data && <div className='mx-auto order-3 md:order-2'>
                <BarChart width={270} height={200} data={student.aqeedah3data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis type="number" domain={[0, 100]} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="Score" fill="#FF6A4A" />
                </BarChart>
            </div>}

            <div className='p-5 rounded bg-green-200 order-2'>
            <p className='text-xl'>Batch: {location.state.batch}</p>
            <p className='text-xl'>Course: Aqeedah  
            {student.aqeedah1data && <span> Level 1</span>}
            {student.aqeedah3data && <span> Level 2 + 3</span>}
            </p>
            {student.aqeedah1payment && <div>
                <p className='text-xl'>Payment: <span className="uppercase font-bold">{student.aqeedah1payment}</span></p>
                </div>}
            <br />
            {student.aqeedah3data && <Link className="p-1 rounded bg-green-300" to={'/meritlist-aqeedah-'+location.state.batch}>Merit List</Link>}            
            </div>
                        
            
            </div>

            {/* Level 1 */}
            <p className="text-2xl mt-12 mb-5">আপনার পরীক্ষার রেজাল্টসমূহ</p>
            { student.aqeedah1data && <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    student.aqeedah1data.map((exm, index) => <div key={index} className=' text-center p-5 rounded bg-yellow-200'>
                            <p className='text-2xl'>{exm.name}</p>
                            <p className='text-4xl'>{exm.Score}</p>
                            {exm.resultBook && <a target='_blank' href={exm.resultBook}><button className="btn btn-active btn-ghost btn-wide">পরীক্ষার উত্তরপত্র দেখুন</button></a>}
                        </div>
                    )
                }
                
            </div>}

            {/* Level 2 + 3 */}
            { student.aqeedah3data && <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    student.aqeedah3data.map((exm, index) => <div key={index} className=' text-center p-5 rounded bg-yellow-200'>
                            <p className='text-2xl'>{exm.name}</p>
                            <p className='text-4xl'>{exm.Score}</p>
                            {exm.resultBook && <a target='_blank' href={exm.resultBook}><button className="btn btn-active btn-ghost btn-wide">পরীক্ষার উত্তরপত্র দেখুন</button></a>}
                        </div>
                    )
                }
                
            </div>}
            
            
                {
                    admin && <div className="text-center">
                        <p>Now You can update!</p>
                        <button onClick={updatedata} className='btn btn-primary mx-auto'>update</button>
                    </div>
                }
        </div>
    );
};

export default AqeedahDetails;