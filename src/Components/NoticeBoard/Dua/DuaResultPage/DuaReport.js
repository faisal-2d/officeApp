import { faCheck, faTimes } from '@fortawesome/fontawesome-free-solid';
import { faCheckSquare, faCross, faTimesRectangle, faTimesSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import digitConverter from '../../../tools/digitConverter';
import useAdmin from '../../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import JemsBlooping from '../../../Loading/JemsBlooping';
import getRamadanDate from './Functions/getRamadanDate';
import getReportUpdate from './Functions/getReportUpdate';
import duaGemsUpdater from './Functions/duaGemsUpdater';
import Loading from '../../../Loading/Loading';


const DuaReport = ({student,  update_profile}) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const [bloop, setBloop] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    const params = useParams();
    
    const complete = <FontAwesomeIcon className="text-green-500" icon={faCheckSquare}></FontAwesomeIcon>;
    const incomplete = <FontAwesomeIcon className="text-red-500" icon={faTimesSquare}></FontAwesomeIcon>;

    const teaching_status = student?.todaysinfo?.teaching;

    const update_report_list = async () => { 
             
        
        setClickCount(clickCount+1);
     
        if(clickCount === 0){
        if((teaching_status)===0){
           await setBloop(true);
           await getReportUpdate('teaching', params.batch, params.sn);    
           await duaGemsUpdater(student?.gems, params.batch, params.sn);
        }

    }
    await update_profile(true);        
    await update_profile(true);        
    await setBloop(false);
    }
    if(bloop){
        return <JemsBlooping></JemsBlooping>
    }
    const r_day = getRamadanDate();
    
    const report = student?.report; 
    return (
        
        <section className='my'>
            <div className="divider text-4xl text-slate-500 my-20">অ্যাটেন্ডেন্স</div>
            <div className='mt-8 mb-12 flex flex-col md:flex-row items-center'>
                <div className='mr-auto'>
                    <p>প্রতিদিন আপনাকে ২টি কাজ করতে হবেঃ</p>
                    <p className='md:ml-8'>১) অন্তত ১টি দোআ মুখস্থ করতে হবে।</p>
                    <p className='md:ml-8'>২) পরিচিত কাউকে ১টি নতুন (সে জানেনা এমন) দোআ মুখস্থ করাতে হবে।</p>
                </div>
                {/* {((r_day) && (!teaching_status) && (!clickCount)) && <div className='my-8 mx-auto bg-yellow-200 rounded-md p-5'>
                    <p>💠 {digitConverter(r_day)} রমাদান</p>
                    <p>আপনি কি আজ কাউকে দোআ শিখিয়েছেন?</p>
                    <div className='flex gap-3 justify-center mt-3'>
                        <label onClick={() => update_report_list()} htmlFor="attendance_yes" className="btn btn-success text-white">হ্যা, শিখিয়েছি</label>
                        <label htmlFor="attendance_no" className="btn btn-error text-white">না, শেখাইনি</label>                        
                    </div>
                </div>} */}
                <div>
                                        

                    <input type="checkbox" id="attendance_yes" className="modal-toggle" />
                    <div className="modal" role="dialog">
                    <div className="modal-box">
                        <div className="modal-action">
                        <label htmlFor="attendance_yes" className="btn btn-sm btn-circle absolute right-2 top-2 btn-error">✕</label>
                        <div className='flex justify-center items-center mx-auto gap-4'>
                        <h3 className="font-bold text-lg">ধন্যবাদ!</h3>
                        <p className="py-4">جزاك الله خيرًا </p>
                        </div>
                        </div>
                    </div>
                    </div>

                    <input type="checkbox" id="attendance_no" className="modal-toggle" />
                    <div className="modal" role="dialog">
                    <div className="modal-box">
                        <div className="modal-action">
                        <label htmlFor="attendance_no" className="btn btn-sm btn-circle absolute right-2 top-2 btn-error">✕</label>
                        </div>
                        <h3 className="font-bold text-lg">মাত্র ২ মিনিট লাগবে!</h3>
                        <p className="py-4">আপনার পরিচিত কাউকে সহজ এবং ছোট একটি দোআ কাউকে শিখিয়ে দিন।</p>
                    </div>
                    </div>

                </div>
                
            </div>
            <div className={`grid  grid-cols-2 md:grid-cols-5 text-let`}>
                {report.map((r, index) => {
                    return <p className={`p-3 m-2 rounded-md `} key={index}>রমাদান {digitConverter(index+1)} :<span className='mr-1'></span> {r.dua ? complete : incomplete} {r.teaching ? complete : incomplete}</p>;
                })}
            </div>

        </section>
    );
};

export default DuaReport;