import React from 'react';
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckCircle, faClose, faCross } from '@fortawesome/free-solid-svg-icons';

const ScholarshipRow = ({student}) => {
    const navigate = useNavigate();
    const loadDetails = e => {    
        navigate(`${student?.sn}`, {state:{id:1, student: student}});
    }
    
    if(!student){
  return <Loading></Loading>
}
const textColor = (student.isAccepted) ? 'text-green-600'  :'text-red-600' ;
    return (
        <tr onClick={loadDetails } className={`hover`}>
            <th>{student?.sn}</th>
            <td>{student?.name.toUpperCase()}</td>
            <td>{student?.fatherName.toUpperCase()}</td>
            <td>{student?.phone.slice(-4)}</td>
            {student?.isAccepted ? <td className={textColor}>
                                        Accepted  
                                        <FontAwesomeIcon className='ml-3'  icon={faCheck} />
                                    </td> 
                                : <td className={textColor}>
                                    Not Accepted
                                    <FontAwesomeIcon className='ml-3'  icon={faClose} />
                                </td>} 
      </tr>                        
    );
};
export default ScholarshipRow;