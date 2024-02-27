import axios from 'axios';
import React, { useState } from 'react';
import digitConverter from '../../tools/digitConverter';
import thConverter from '../../tools/thConverter';

const MeritRow = ({merit, student, setMyPosition, mySn}) => {  
 

    if(student.sn == mySn){
        setMyPosition(merit+1);
    }
    
   
   
    return (
        <tr className=" ">
            <th className='bg-green-100 font-bold'>{digitConverter(merit+1)} <sup>{thConverter(merit+1)}</sup> </th>
            <th>{student?.sn}</th>
            {/* <td>{student?.name.toUpperCase()} {student?.gender === "male" ? "BIN" : "BINTE"} {student?.fatherName.toUpperCase()}</td> */}
            <td>{student?.name.toUpperCase()}</td>
            <th>{student?.aqeedah3data[0]?.Score}</th>
            <th>{student?.aqeedah3data[1]?.Score}</th>
            <th>{student?.aqeedah3data[2]?.Score}</th>
            <th>{student?.aqeedah3data[3]?.Score}</th>            
            <th className='bg-red-100 text-red-600'>{student?.aqeedah3Total}</th>            
      </tr>
    );
};

export default MeritRow;