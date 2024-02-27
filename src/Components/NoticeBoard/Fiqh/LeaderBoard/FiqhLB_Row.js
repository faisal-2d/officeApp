import React from 'react';
import digitConverter from '../../../tools/digitConverter';
import thConverter from '../../../tools/thConverter';

const FiqhLB_Row = ({merit, student, setMyPosition, mySn, level}) => {
    if(student.sn == mySn){
        setMyPosition(merit+1);
    }
    
    return (
        <tr className=" ">
            <th className='bg-green-100 font-bold'>{digitConverter(merit+1)} <sup>{thConverter(merit+1)}</sup></th>
            <th>{student?.sn}</th>
            <td>{student?.name.toUpperCase()}</td> 
            {level ==='2' && <>
                <th>{student?.fiqh2data[0]?.Score}</th>
                <th>{student?.fiqh2data[1]?.Score}</th>
                <th>{student?.fiqh2data[2]?.Score}</th>        
                <th className='bg-red-100 text-red-600'>{student?.fiqh2Total}</th>
            </>}
            {level ==='1' && <>
                <th>{student?.fiqh1data[0]?.Score}</th>
                <th>{student?.fiqh1data[1]?.Score}</th>
                <th>{student?.fiqh1data[2]?.Score}</th>        
                <th className='bg-red-100 text-red-600'>{student?.fiqh1Total}</th>
            </>}
        
        </tr>
    );
};

export default FiqhLB_Row;