import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../../Loading/Loading';

const Aqeedah3ResultUpdate = () => {
    const [student, setStudent] = useState();

    const sn = useParams();
    const location = useLocation();
    const nevigate = useNavigate();   
useEffect(()=> {
  axios.get(`https://flannel-loonie-61461.herokuapp.com/aqeedah/14/sn/${sn.sn}`)
//   http://localhost:5000/
  .then(data => setStudent(data.data))
},[sn]);

    if(!student){
        return <Loading></Loading>
    }

    const myData = {}
    const updatedata = () => {
        axios.put(`http://localhost:5000/level3total/130`, myData)
    .then(data => console.log(data.data))
    }

    


    return (
        <div className='text-center'>
            <p className='text-center text-xl'>Aqeedah , Batch 14</p>

        <button onClick={updatedata} className='btn btn-primary mx-auto'>update</button>


        </div>
    );
};

export default Aqeedah3ResultUpdate;