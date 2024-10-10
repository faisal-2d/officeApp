import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import useAssistant from '../../../hooks/useAssistant';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import duaGemsUpdater from './Functions/duaGemsUpdater';
import duaCompletion from './Functions/duaCompletion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCheckCircle, faChevronLeft, faChevronRight } from '@fortawesome/fontawesome-free-solid';
import Loading from '../../../Loading/Loading';
import digitConverter from '../../../tools/digitConverter';
import JemsBlooping from '../../../Loading/JemsBlooping';
import JemsRotating from '../../../Loading/JemsRotating';
import diamond from '../../../../assets/trophy/gem_red.png'
import getReportUpdate from './Functions/getReportUpdate';

const DuaList = ({student, update_profile}) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const [assistant] = useAssistant(user);
    const [currentPage, setCurrentPage] = useState(1);
    const [duaData, setduaData] = useState([]);
    const [bloop, setBloop] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('/duaList.json'); // Assuming data.json is in the public folder
            const data = await response.json();
            setduaData(data);
          } catch (error) {
            console.error('Error fetching JSON data:', error);
          }
        };
    
        fetchData();
      }, []);

    const params = useParams();   
    
    
    const dua_index = student?.dua;
    const result = duaData.map((dua, index) => {
      return {
        dua: dua,
        value: dua_index[index] === 1,
        dua_index: index
      };
    });

    const update_dua_list = async (dua) => {
        if(!admin && !assistant)
        return;
        if(dua.value === 1)
        return;
        if(bloop)
        return;
        console.log(clickCount);
        setClickCount(clickCount+1);

        if(clickCount === 0){
            if((student?.todaysinfo?.dua)===0){
             await setBloop(true);
             await getReportUpdate('dua', params.batch, params.sn);
             await duaGemsUpdater(student?.gems, params.batch, params.sn);
            }
        }
        const data = {
            "index" : dua.dua_index,
        }     

        await axios.put(`${process.env.REACT_APP_BACKEND_API}/dua/dua_update/${params.batch}/${params.sn}`, data)
        .then(data => {
            duaCompletion(params?.batch, params?.sn);
            update_profile(true);
        })
        await setBloop(false);
        console.log("dua list Completed");
        }

    const itemsPerPage = 21;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentItems = result.slice(startIndex, endIndex);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };
       
    if(!result || !currentItems){
        return <JemsRotating></JemsRotating>
    }
    if(bloop){
        return <JemsBlooping></JemsBlooping>
    }

    
    return (
        <section className='my'>
            <div className="divider text-4xl text-slate-500 my-20">দোআ সমূহ</div>
            {/* {bloop && <JemsBlooping></JemsBlooping>} */}
            <div className='grid grid-cols-1 md:grid-cols-3 '>
                {currentItems.map((dua, index) => {
                    return <div key={index} className="">            
                        <div className={` flex justify-between p-3 m-2 rounded-md bg-${dua.value === true ? 'green-300' : 'yellow-200'}`} key={index}>
                            {((admin || assistant) && (!dua.value)) && <div onClick={() => update_dua_list(dua)} className={``}> <FontAwesomeIcon className='text-2xl text-blue-600 cursor-pointer' icon={faCheckCircle}></FontAwesomeIcon> </div>}
                            <p className="ml-auto text-right">{dua.dua.length<=65 ? dua.dua : `...${(dua.dua).substring(0, 65)}`}</p>
                            <div className='flex items-center content-center'><p className={`w-8 h-8 ml-2 p-1 ${dua.value === true ? 'bg-green-400' : 'bg-orange-300'} rounded-full text-center`}>{digitConverter(dua.dua_index+1)}</p></div>
                            </div>
                    </div>;
                })}
            </div>
            <div className='my-10'>
                <div className='text-center'>
                    <div className='px-3 btn btn-success' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}><FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon></div>
                    <span className='mx-4'>Page {currentPage}</span>
                    <div className='px-3 btn btn-success' onClick={() => handlePageChange(currentPage + 1)} disabled={endIndex >= result.length}><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></div>
                </div>
            </div>
        </section>
    );
};

export default DuaList;