import axios from 'axios';
import React, { useState } from 'react';

const MeritRow = ({merit, student, batch}) => {
    
    const th = m => {
        const meritString = JSON.stringify(m);
        if (meritString.endsWith(0)) return 'st';
        if (meritString.endsWith(1)) return 'nd';
        if (meritString.endsWith(2)) return 'rd';
        return 'th';
    }



    // const clickMe = sn => {                   
    //         axios.get('AqeedahMerit.json')
    //         .then(data => {
    //          const sellD = data.data.find(a => a.sn === sn)
    //          const myData = {
    //             "aqeedah3data" : [{
    //               "name" : "Exm 1",
    //               "Score" : sellD.exm1,
    //               "resultBook" : ""
    //             },{
    //               "name" : "Exm 2",
    //               "Score" : sellD.exm2,
    //               "resultBook" : ""
    //             },{
    //               "name" : "Exm 3",
    //               "Score" : sellD.exm3,
    //               "resultBook" : ""
    //             },{
    //               "name" : "Exm 4",
    //               "Score" : sellD.exm4,
    //               "resultBook" : ""
    //             }
    //           ]
    //           }

    //             axios.put(``, myData)
    //             .then(data => console.log(data.data))
    //         })            
        
    // }
    // // clickMe(student.sn);
   
    return (
        <tr className=" ">
            <th className='bg-green-100 font-bold'>{merit+1} <sup>{th(merit)}</sup>            
            </th>
            <th>{student?.sn}</th>
            <td>{student?.name.toUpperCase()}</td>
            <th>{student?.aqeedah3data[0].Score}</th>
            <th>{student?.aqeedah3data[1].Score}</th>
            <th>{student?.aqeedah3data[2].Score}</th>
            <th>{student?.aqeedah3data[3].Score}</th>            
            <th className='bg-red-100 text-red-600'>{student?.aqeedah3Total}</th>
            
      </tr>
    );
};

export default MeritRow;