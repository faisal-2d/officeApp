import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import Loading from '../../../Loading/Loading';
import gem from '../../../../assets/trophy/gem_blue.png'

const DuaResultPageRow = ({student, batch}) => {
  const navigate = useNavigate();
  const loadDetails = e => {    
      navigate(`${student?.sn}`, {state:{id:1, batch: batch, student: student}});
      // <Link to="hi"/>
  }
  
  if(!student){
return <Loading></Loading>
}

  return (
      <tr onClick={loadDetails } className="hover">
          <th>{student?.sn}</th>
          <td>{student?.name?.toUpperCase()}</td>
          <td className='flex'>{student?.gems} <img className='ml-2 w-4' src={gem}/></td>
          <td>{student?.phone}</td>
         
          
          
    </tr>
  );
};

export default DuaResultPageRow;