import React, { useState } from 'react';
import diamond from '../../assets/trophy/gem_red.png'
import axios from 'axios';

const useBloop = (e) => {
const [bloop, setBloop] = useState(false);

setBloop(e);

if (!bloop){
    return;
}
 
return (
    <div className='min-h-screen flex justify-center items-center'>
            <img className={`w-16 mt-4 animate-bounce`} src={diamond}/>
    </div>
);

 
}
