import axios from 'axios';
import React from 'react';
import getRamadanDate from './getRamadanDate';

const getReportUpdate = (topic, batch, sn) => {
    console.log("im reporting");
    const data = {
        "index" : getRamadanDate()-1,
    } 
    
    axios.put(`${process.env.REACT_APP_BACKEND_API}/dua/report_update/${topic}/${batch}/${sn}`, data)
        .then(data => {
            console.log(data);
        })
    
    return ;
};

export default getReportUpdate;