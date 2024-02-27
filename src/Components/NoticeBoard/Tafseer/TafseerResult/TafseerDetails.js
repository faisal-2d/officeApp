import axios from 'axios';
import React, { useState } from 'react';
import Loading from '../../../Loading/Loading';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faFilePdf, faHandPointUp, faMoneyBill, faMousePointer } from "@fortawesome/fontawesome-free-solid";

import maleProfile from '../../../../assets/male-profile.png'
import femaleProfile from '../../../../assets/female-profile.png'
import graduation from '../../../../assets/certi_img/graduation.gif'
import aq_certi_1 from '../../../../assets/certi_img/aq_certi_2.gif'
import aq_certi_2 from '../../../../assets/certi_img/aq_certi_1.gif'
import aq_certi_3 from '../../../../assets/certi_img/aq_certi_3.gif'
import Level_1_Male from '../../../../assets/group logo/Level_1_Male.png'
import Level_1_Female from '../../../../assets/group logo/Level_1_Female.png'
import Level_2_Male from '../../../../assets/group logo/Level_2_Male.png'
import Level_2_Female from '../../../../assets/group logo/Level_2_Female.png'

import Level_1_Channel from '../../../../assets/group logo/Level_1_Channel.png'
import Level_2_Channel from '../../../../assets/group logo/Level_2_Channel.png'
import { faHand, faHandFist, faMoneyBill1 } from "@fortawesome/free-solid-svg-icons";
import TafseerPaymentCard from './TafseerPaymentCard';
import TafseerLevelComponents from './TafseerLevelComponents';
import digitConverter from '../../../tools/digitConverter';
import thConverter from '../../../tools/thConverter';



const TafseerDetails = () => {
    const params = useParams();
    const nev = useLocation();

    const [student, setStudent] = useState(nev.state?.student);
    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const [adminDesk, setAdminDesk] = useState(false);
    // setStudent()
// useEffect(()=> {
//   axios.get(`https://alharamanin-backend-web.onrender.com/tafseer/${params.batch}/sn/${params.sn}`)
// //   https://alharamanin-backend-web.onrender.com/
//   .then(data => setStudent(data.data))
// },[params]);


const getStudent = () => {

        axios.get(`https://alharamanin-backend-web.onrender.com/tafseer/${params.batch}/sn/${params.sn}`)
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
        const data = {
                        "tafseer2payment" : "due",
                        "tafseer3payment" : "due",
                        "tafseer3Total" : 0,
                        "tafseer2data" : [
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


            axios.put(`https://alharamanin-backend-web.onrender.com/accessLevelTwo/tafseer${params.batch}/${params.sn}`, data)
           .then(data => console.log(data.data))
    }

   
    const payment1Update = () => {

        const data = {
                "tafseer1payment" : "paid",           
            }        

        axios.put(`https://alharamanin-backend-web.onrender.com/payment/tafseer/${params.batch}/${params.sn}`, data)
        .then(data => {
            getStudent();
            // console.log(data.data);
        })
        //https://alharamanin-backend-web.onrender.com/
        //https://alharamanin-backend-web.onrender.com
    }
    const payment2Update = (level) => {

        const data = {
                "tafseer2payment" : "paid",           
            }        

        axios.put(`https://alharamanin-backend-web.onrender.com/payment/tafseer/${params.batch}/${params.sn}`, data)
        .then(data => {
            getStudent();
            // console.log(data.data);
        })
        //https://alharamanin-backend-web.onrender.com/
        //https://alharamanin-backend-web.onrender.com
    }
    const payment3Update = (level) => {

        const data = {
                "tafseer3payment" : "paid",           
            }     

        axios.put(`https://alharamanin-backend-web.onrender.com/payment/tafseer/${params.batch}/${params.sn}`, data)
        .then(data => {
            getStudent();
            // console.log(data.data);
        })
        
    }


   

    return (
        <div className='container mx-auto mb-40 px-5'>
            <p className="text-center text-2xl my-10">তাফসীর কোর্সের {digitConverter(params.batch)}{thConverter(params.batch)} ব্যাচে স্বাগতম!</p>
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

            {student.tafseer1payment && <TafseerPaymentCard
                payment={student.tafseer1payment}
                level ={1}
                ></TafseerPaymentCard> }
            {student.tafseer2payment && <TafseerPaymentCard
                payment={student.tafseer2payment}
                level ={2}
                ></TafseerPaymentCard> }

                
            </div>

            </div>


{/* tafseer Certificate  */}
{(student.tafseerCertificate || student.tafseerCourseCertificates) && <div>

                <p className="text-2xl mt-12 mb-5">অভিনন্দন! আপনি সার্টিফিকেট পেয়েছেন!</p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                { student.tafseerCourseCertificates?.level1 && <div className={`text-center p-5 rounded bg-green-100 w-fit `}>
                    <img className="rounded" src={aq_certi_1} alt="" />
                    {student.tafseer1payment=="due" 
                    ?  <Link className="bg-red-500 block mt-2 text-white p-2 rounded shadow" to='/tafseer-due'>বকেয়া পরিশোধ করুন</Link>
                    : <a className="bg-green-500 block mt-2 text-white p-2 rounded shadow" href={student.tafseerCourseCertificates?.level1} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='pr-5' icon={faFilePdf}/> Level 1 Certificate</a>
                    }
                    
                </div>}
                
                {student.tafseerCourseCertificates?.level2 && <div className="text-center p-5 rounded bg-sky-100 w-fit">
                    <img className="rounded" src={aq_certi_2} alt="" />
                    {student.tafseer2payment=="due" 
                    ?  <Link className="bg-red-500 block mt-2 text-white p-2 rounded shadow" to='/tafseer-due'>বকেয়া পরিশোধ করুন</Link>
                    : <a className="bg-blue-500 block mt-2 text-white p-2 rounded shadow" href={student.tafseerCourseCertificates?.level2} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='pr-5' icon={faFilePdf}/> Level 2 Certificate</a>
                    }                    
                </div>}                

        

                </div>
   </div>             
}

            
{/* Level 2  */}
            {student.tafseer2data && <TafseerLevelComponents
            batch={params.batch}
            sn = {student.sn}
            gender = {student.gender}
            data={student.tafseer2data}
            level ={2}
            ></TafseerLevelComponents>}

{/* Level 1  */}
            {student.tafseer1data && <TafseerLevelComponents
            batch={params.batch}
            sn = {student.sn}
            gender = {student.gender}
            data={student.tafseer1data}
            level ={1}
            ></TafseerLevelComponents>}





             
            
            {
                admin && <div className="text-center mt-40">
                    <div className="my-5  mx-auto">

                        <div className="p-10 bg-slate-200 rounded-sm">
                            <div className="flex items-center justify-center">
                                <p className="text-xl font-medium text-purple-600 mr-10">Admin Support</p>
                                <input type="checkbox" className="toggle toggle-primary" onChange={e=>setAdminDesk(e.target.checked)} />
                            </div>

                            {adminDesk && <div className="my-10">
                                {!student.tafseer2data && <button onClick={accessLevelTwo} className="p-2 px-4 m-2 btn-secondary rounded-md"> Access Level 2</button>}
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
export default TafseerDetails;