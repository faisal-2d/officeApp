import React from 'react';

const SeeratLB_Row = ({merit, student, setMyPosition, mySn, level}) => {
    if(student.sn == mySn){
        setMyPosition(merit+1);
    }
    
    const th = m => {
        if (m===0) return 'st';
        if (m===1) return 'nd';
        if (m===2) return 'rd';
        return 'th';
    }
    return (
        <tr className=" ">
            <th className='bg-green-100 font-bold'>{merit+1} <sup>{th(merit)}</sup></th>
            <th>{student?.sn}</th>
            <td>{student?.name.toUpperCase()}</td> 
            {level ==='2' && <>
                <th>{student?.seerat2data[0]?.Score}</th>
                <th>{student?.seerat2data[1]?.Score}</th>
                <th>{student?.seerat2data[2]?.Score}</th>        
                <th className='bg-red-100 text-red-600'>{student?.seerat2Total}</th>
            </>}
            {level ==='1' && <>
                <th>{student?.seerat1data[0]?.Score}</th>
                <th>{student?.seerat1data[1]?.Score}</th>
                <th>{student?.seerat1data[2]?.Score}</th>        
                <th className='bg-red-100 text-red-600'>{student?.seerat1Total}</th>
            </>}
        
        </tr>
    );
};

export default SeeratLB_Row;