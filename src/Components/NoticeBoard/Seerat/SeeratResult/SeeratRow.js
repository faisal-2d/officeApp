import React from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Loading/Loading';

const SeeratRow = ({student, batch}) => {
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
           
            
            
      </tr>
    );
};

export default SeeratRow;