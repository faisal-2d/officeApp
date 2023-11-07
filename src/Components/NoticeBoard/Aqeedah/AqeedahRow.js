import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';

const AqeedahRow = ({student, batch}) => {

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
            <td>{student?.name.toUpperCase()}</td>
            <td>{student?.fatherName.toUpperCase()}</td>
            <td>{student?.phone}</td>
            {/* <td>{student?.gender.toUpperCase()}</td> */}
            {/* <td>{student?.aqeedah1payment}</td>
            <td>{student?.aqeedah1data[1].Score}</td>
            <td>{student?.aqeedah1data[2].Score}</td>
            <td>{student?.aqeedah1Total}</td> */}
            
            
      </tr>
    );
};

export default AqeedahRow;