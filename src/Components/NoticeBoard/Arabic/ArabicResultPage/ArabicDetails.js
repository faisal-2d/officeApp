import { faMoneyBill1 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import maleProfile from '../../../../assets/male-profile.png';
import femaleProfile from '../../../../assets/female-profile.png';
import auth from '../../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import Loading from '../../../Loading/Loading';
import ArabicBarChart from './ArabicBarChart';
import ArabicPyamentCard from './ArabicPyamentCard';
import SkillMeter from './SkillMeter';

  
 
const ArabicDetails  = () => {
    const [student, setStudent] = useState();
    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user);


    const params = useParams();
    useEffect(()=> {
      axios.get(`https://flannel-loonie-61461.herokuapp.com/arabic/${params.batch}/sn/${params.sn}`)

      .then(data => setStudent(data.data))
    },[params]);
    
    
        if(!student){
            return <Loading></Loading>
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
        <div className='container mx-auto px-5'>
            <p className="text-center text-2xl my-10">আরবি ভাষা কোর্সের {b}{tt} ব্যাচে স্বাগতম!</p>

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
                payment={student.arabic2payment}
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

            <section className="my-10">
           <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>            

            <div>
                <div className={`p-5 rounded bg-gradient-to-tl from-green-300`}>
                <p className='text-xl'>Batch: {params.batch}</p>
                <p className='text-xl'>Course: Arabic Level 2 </p>            
                </div>
            </div>

            <div className='grid grid-cols-2 gap-5 px-14'> 
                {
                    student.arabic2skill.map((data, index) => <SkillMeter
                    key={index}
                    sData={data}
                    color={(data.value > 50 ? "green" : "brown")}
                    ></SkillMeter>)
                }
            </div>

            <div className='mx-auto px-5 py-1 bg-gradient-to-tl from-indigo-200'>
                <ArabicBarChart
                data={student.arabic2data}                
                ></ArabicBarChart>
            </div>  
               
            
            </div>

           <p className="text-2xl mt-12 mb-5">আপনার লেভেল ২ এর পরীক্ষার রেজাল্টসমূহ</p>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    
                    student.arabic2data.map((exm, index) => <div key={index} className='text-center p-5 rounded bg-indigo-200'>
                            <p className='text-2xl'>{exm.name}</p>
                            <p className='text-5xl'>{exm.Score}</p>
                        </div>
                    )
                }
                
            </div>


            </section>
            
            
        </div>
    );            
};

export default  ArabicDetails;