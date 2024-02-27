import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import useAssistant from '../../../hooks/useAssistant';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import duaGemsUpdater from './Functions/duaGemsUpdater';
import duaCompletion from './Functions/duaCompletion';

const DuaList = ({student, update_profile}) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const [assistant] = useAssistant(user);

    const params = useParams();

    const duaList = [
                    "بسم الله",
                    "الحمد لله",
                    "لا اله الا الله",
                    "الله أكبر",
                    "سبحان الله",
                    "أستغفر الله",
                    "رب اغفر لي",
                    "حسبي الله",
                    "توكلت على الله",
                    "لا حول ولا قوة الا بالله",
                    ];
    
    const dua_index = student?.dua;
    const result = duaList.map((dua, index) => {
      return {
        dua: dua,
        value: dua_index[index] === 1,
      };
    });

    const update_dua_list = (dua, index) => {
        if(!admin && !assistant)
        return;
        if(dua.value == 1)
        return;

        if((student?.todaysinfo?.dua)==0){
            duaGemsUpdater(student?.gems, params.batch, params.sn);
        }
        const data = {
            "index" : index,
        }     

        axios.put(`https://alharamanin-backend-web.onrender.com/dua/dua_update/${params.batch}/${params.sn}`, data)
        .then(data => {
            duaCompletion(params?.batch, params?.sn);
            update_profile(true);
        })
        }

    return (
        <section className='my'>
            <div className="divider text-4xl text-slate-500 my-20">দোআ সমূহ</div>
            <div className='grid grid-cols-1 md:grid-cols-3 text-right'>
                {result.map((dua, index) => {
                    return <p onClick={() => update_dua_list(dua,index)} className={`p-3 m-2 rounded-md bg-${dua.value == true ? 'green-300' : 'yellow-200'}`} key={index}>{dua.dua}</p>;
                })}
            </div>
        </section>
    );
};

export default DuaList;