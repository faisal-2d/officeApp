import axios from "axios";
import React, { useEffect, useState } from 'react';
import maleProfile from '../../assets/male-profile.png'
import femaleProfile from '../../assets/female-profile.png'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { useParams } from 'react-router-dom';
import Loading from "../Loading/Loading";

const AqeedahDetails = () => {
    const [student, setStudent] = useState();
    const sn = useParams();      
useEffect(()=> {
  axios.get(`https://flannel-loonie-61461.herokuapp.com/student/${sn.sn}`)
  .then(data => setStudent(data.data))
},[sn]);

    if(!student){
        return <Loading></Loading>
    }
    const data = [
        {
          "name": "Exm 1",
          "Score": 90,
          "ResultBook": "www.google.com"          
        },
        {
          "name": "Exm 2",
          "Score": 50          
        },
        {
          "name": "Exm 3",
          "Score": 60          
        }        
      ]

     
    return (
        <div className='container mx-auto'>
            <p className="text-center text-2xl my-10">আক্বিদাহ কোর্সের ১৬তম ব্যাচে স্বাগতম!</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            <div className='flex items-center p-5 rounded bg-blue-200'>
                <div className='mr-5'>                   
                    <img src={student.gender==="female" ? femaleProfile : maleProfile} alt="" />                        
                </div>
                <div>                                                    
                    <p className=''>SN <strong>{sn.sn}</strong></p>
                    <p className='text-3xl'><strong>{student.name.toUpperCase()}</strong></p>                                   
                    <p className='text-xl'>{student.gender==="female" ? "BINTE" : "BIN"} <strong>{student.fatherName.toUpperCase()}</strong></p>
                    <p className=''>Phone <strong>{student.phone}</strong></p>
                    
                </div>
            </div>

            <div className='mx-auto order-3 md:order-2'>
                <BarChart width={230} height={150} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis type="number" domain={[0, 100]} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="Score" fill="#FF6A4A" />
                </BarChart>
            </div>

            <div className='p-5 rounded bg-green-200 order-2'>
            <p className='text-xl'>Batch: 16</p>
            <p className='text-xl'>Course: Aqeedah - Level 1</p>
            {/* <div className='flex items-center'>
            <p className='text-xl'>Course Fee:</p>
            <p className='rounded py-0.5 px-3 font-bold bg-green-500 hover-none outline-none ml-3'>PAID</p>
            </div> */}
            </div>
            
            </div>

            <p className="text-2xl mt-12 mb-5">আপনার পরীক্ষার রেজাল্টসমূহ</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                <div className=' text-center p-5 rounded bg-yellow-200'>
                    <p className='text-2xl'>১ম সেমিস্টার পরীক্ষা</p>
                    <p className='text-4xl'>90</p>
                    <button className="btn btn-active btn-ghost btn-wide">পরীক্ষার উত্তরপত্র দেখুন</button>
                </div>
            

            
                <div className=' text-center p-5 rounded bg-yellow-200'>
                    <p className='text-2xl'>২য় সেমিস্টার পরীক্ষা</p>
                    <p className='text-4xl'>50</p>
                    <button className="btn btn-active btn-ghost btn-wide">পরীক্ষার উত্তরপত্র দেখুন</button>
                </div>
            
                <div className=' text-center p-5 rounded bg-yellow-200'>
                    <p className='text-2xl'>৩য় সেমিস্টার পরীক্ষা</p>
                    <p className='text-4xl'>60</p>
                    <button className="btn btn-active btn-ghost btn-wide">পরীক্ষার উত্তরপত্র দেখুন</button>
                </div>            
            </div>


        </div>
    );
};

export default AqeedahDetails;