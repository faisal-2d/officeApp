import axios from 'axios';
import React from 'react';

const UpdateResult = () => {

    const data = {
        "aqeedah3data" : [{
            "name" : "Exm 1",
            "Score" : 0,
            "resultBook" : ""
          },{
            "name" : "Exm 2",
            "Score" : 0,
            "resultBook" : ""
          },{
            "name" : "Exm 3",
            "Score" : 0,
            "resultBook" : ""
          },{
            "name" : "Exm 4",
            "Score" : 0,
            "resultBook" : ""
          }
        ]
    }
    const updateAll = () => {
        axios.put(``, data)
    .then(data => console.log(data.data))
}

const myData = {}
const snList = [75, 76, 101, 105, 186, 205, 209, 215, 216, 340, 368, 392]
    for(let i=0; i<snList.length; i++){
        axios.put(``, myData)
    .then(data => console.log(data.data))
    }


    return (
        <div className='text-center'>
            <button onClick={updateAll} className='btn btn-primary'>Update All</button>
        </div>
    );
};

export default UpdateResult;