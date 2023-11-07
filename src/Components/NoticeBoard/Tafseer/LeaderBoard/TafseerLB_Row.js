import React from 'react';

const TafseerLB_Row = ({merit, student, setMyPosition, mySn, level}) => {
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
                <th>{student?.tafseer2data[0]?.Score}</th>
                <th>{student?.tafseer2data[1]?.Score}</th>
                <th>{student?.tafseer2data[2]?.Score}</th>        
                <th className='bg-red-100 text-red-600'>{student?.tafseer2Total}</th>
            </>}
            {level ==='1' && <>
                <th>{student?.tafseer1data[0]?.Score}</th>
                <th>{student?.tafseer1data[1]?.Score}</th>
                <th>{student?.tafseer1data[2]?.Score}</th>        
                <th className='bg-red-100 text-red-600'>{student?.tafseer1Total}</th>
            </>}
        
        </tr>
    );
};

export default TafseerLB_Row;