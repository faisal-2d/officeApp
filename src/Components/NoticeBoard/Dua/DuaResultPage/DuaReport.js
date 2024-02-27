import { faCheck, faTimes } from '@fortawesome/fontawesome-free-solid';
import { faCheckSquare, faCross, faTimesRectangle, faTimesSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import digitConverter from '../../../tools/digitConverter';
import useAdmin from '../../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import duaGemsUpdater from './Functions/duaGemsUpdater';

const DuaReport = ({student,  update_profile}) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user);

    const params = useParams();
    
    const complete = <FontAwesomeIcon className="text-green-500" icon={faCheckSquare}></FontAwesomeIcon>;
    const incomplete = <FontAwesomeIcon className="text-red-500" icon={faTimesSquare}></FontAwesomeIcon>;

    const update_report_list = (r, index) => {
        if (!admin)
        return;
        if(r.dua == 1 && r.teaching == 1)
        return;
        
        if((student?.todaysinfo?.teaching)==0){
            duaGemsUpdater(student?.gems, params.batch, params.sn);
        }

        const data = {
            "index" : index,
        }     

        axios.put(`https://alharamanin-backend-web.onrender.com/dua/report_update/${params.batch}/${params.sn}`, data)
        .then(data => {
            update_profile(true);
        })
    }
    
    const report = student?.report; 
    return (
        
        <section className='my'>
            <div className="divider text-4xl text-slate-500 my-20">অ্যাটেন্ডেন্স</div>
            <div className='mt-8 mb-8'>
                <p>প্রতিদিন আপনাকে ২টি কাজ করতে হবেঃ</p>
                <p className='md:ml-8'>১) অন্তত ১টি দোআ মুখস্থ করতে হবে।</p>
                <p className='md:ml-8'>২) পরিচিত কাউকে ১টি নতুন (সে জানেনা এমন) দোআ মুখস্থ করাতে হবে।</p>
            </div>
            <div className='grid  grid-cols-2 md:grid-cols-5 text-let'>
                {report.map((r, index) => {
                    return <p onClick={() => update_report_list(r, index)} className={`p-3 m-2 rounded-md `} key={index}>রমাদান {digitConverter(index+1)} : <span className='mr-3'></span> {r.dua ? complete : incomplete} {r.teaching ? complete : incomplete}</p>;
                })}
            </div>

        </section>
    );
};

export default DuaReport;