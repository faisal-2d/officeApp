import React from 'react';
import { useNavigate } from 'react-router-dom';

const AqeedahRow = () => {

    const navigate = useNavigate();
    const loadDetails = e => {    
        navigate(`aqeedah-16/${1}`);
    }
    return (
        <tr onClick={loadDetails } className="hover">
            <th>1</th>
            <td>Faisal</td>
            <td>Abdullah Al Baki</td>
            <td>0706</td>
      </tr>
    );
};

export default AqeedahRow;