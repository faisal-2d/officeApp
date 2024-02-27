import React from 'react';
import digitConverter from '../../../tools/digitConverter';
import thConverter from '../../../tools/thConverter';

const TafseerLB_Row = ({merit, student, setMyPosition, mySn, level}) => {
    if(student.sn == mySn){
        setMyPosition(merit+1);
    }
    

    return (
        <tr className=" ">
            <th className='bg-green-100 font-bold'>{digitConverter(merit+1)} <sup>{thConverter(merit+1)}</sup></th>
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