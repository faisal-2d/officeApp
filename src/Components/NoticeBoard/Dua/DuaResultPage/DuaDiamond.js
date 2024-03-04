import React from 'react';
import diamond from '../../../../assets/trophy/gem_blue.png'

const DuaDiamond = ({gems}) => {
    return (
        <div>
            <div className='flex items-center align-center'>
                <p className='text-7xl mr-2 text-blue-500'>{gems}</p>
                <img className={`w-10 ${gems ? 'mt-4 animate-bounce' : ''}`} src={diamond}/>
            </div>
        </div>
    );
};

export default DuaDiamond;