import axios from 'axios';
import React from 'react';

const UpdateResult = () => {

    const data = {
        aqeedah1data : [{
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
          }
        ]
    }
    const updateAll = () => {
        axios.put(`http://localhost:5000/student/${1}`, data)
    .then(data => console.log(data.data))
}
    return (
        <div className='text-center'>
            <button onClick={updateAll} className='btn btn-primary'>Update All</button>
        </div>
    );
};

export default UpdateResult;