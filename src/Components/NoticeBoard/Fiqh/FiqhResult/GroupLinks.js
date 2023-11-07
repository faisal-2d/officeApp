import React from 'react';
import FiqhBarchart from './FiqhBarchart';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand } from '@fortawesome/free-solid-svg-icons';

import Level_2_Male from '../../../../assets/group logo/Level_2_Female.png'
import Level_1_Male from '../../../../assets/group logo/Level_2_Female.png'
import Level_2_Female from '../../../../assets/group logo/Level_2_Female.png'
import Level_1_Female from '../../../../assets/group logo/Level_2_Female.png'
import Level_2_Channel from '../../../../assets/group logo/Level_2_Female.png'

const GroupLinks = ({batch, level, gender}) => {

    const upcomingLevel1 = 21;
    const currentLevel1 = upcomingLevel1-1;
    const currentLevel2 = currentLevel1-1;

    const b = 2;
    return (
        <div className='p-5 rounded bg-gradient-to-tl from-sky-300'>
            <p><span className='text-xl'>Join </span><FontAwesomeIcon className='text-blue-600' icon={faHand} fade/></p>

            <div className="mt-4 flex justify-around">
            { gender==="female" ?  <a href={b} target="_blank" rel="noopener noreferrer"><div>
                    <div>
                        <img className='w-20' src={Level_2_Female} alt="" />
                    </div>
                    <p className="text-center">Class Group</p>
                </div>
            </a>
            :   <a href={b} target="_blank" rel="noopener noreferrer"><div>
            <div>
                <img className='w-20' src={Level_2_Male} alt="" />
            </div>
            <p className="text-center">Class Group</p>
        </div>
    </a>
            }  
            <a href={b} target="_blank" rel="noopener noreferrer"><div>    
                    <div>
                        <img className='w-20' src={Level_2_Channel} alt="" />
                    </div>   
                    <p className="text-center">Lecture Notes</p>
                    
                </div> 
                </a>

            </div>
            </div>
    );
};

export default GroupLinks;