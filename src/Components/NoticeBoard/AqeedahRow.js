import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const AqeedahRow = ({student, result}) => {

    const navigate = useNavigate();
    const loadDetails = e => {    
        navigate(`aqeedah-16/${student?.sn}`);
    }

  
   
    if(!student){
  return <Loading></Loading>
}

    return (
        <tr onClick={loadDetails } className="hover">
            <th>{student?.sn}</th>
            <td>{student?.name.toUpperCase()}</td>
            <td>{student?.fatherName.toUpperCase()}</td>
            <td>{student?.phone}</td>
      </tr>
    );
};

export default AqeedahRow;