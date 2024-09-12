import React from 'react'
import { faCircle, faFilePdf, faHandPointUp, faMoneyBill, faMousePointer } from "@fortawesome/fontawesome-free-solid";
import Level_1_male from '../../../assets/group logo/Level_1_Male.png'
import Level_1_female from '../../../assets/group logo/Level_1_Female.png'
import Level_1_channel from '../../../assets/group logo/Level_1_Channel.png'

import Level_3_male from '../../../assets/group logo/Level_2_Male.png'
import Level_3_female from '../../../assets/group logo/Level_2_Female.png'
import Level_3_channel from '../../../assets/group logo/Level_2_Channel.png'

import { faHand } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const AqeedahGroupCard = ({batch, gender, level}) => {

    const links = {
        23: {
            male_1: "https://t.me/+96YkFcCwTQcxNDQ0",
            female_1: "https://t.me/+ujDmSj2uDPk1MWFk",
            channel_1: "https://t.me/+fnNxjDdSOfw4MTJk",

            male_3: "",
            female_3: "",
            channel_3: ""
        },
        22: {
            male_1: "https://t.me/+g4lSTnM5Fjk4NTU8",
            female_1: "https://t.me/+xvumye3q8hdkZGI0",
            channel_1: "https://t.me/+baC6EWJojCE5OTg0",

            male_3: "https://t.me/+5lozhxaJ7tI1OGI0",
            female_3: "https://t.me/+GS-6lRkeX68zODlk",
            channel_3: "https://t.me/+X1LDnWRFdiY3NTk0"
        },
        21: {
            male_1: "https://t.me/+1eenPK1I1_VhYWY8",
            female_1: "https://t.me/+00Diz2CJWtY4ZmY0",
            channel_1: "https://t.me/+Vug6OU6mdRs1OWRk",

            male_3: "https://t.me/+5e9IQqrXcR1iZDVk",
            female_3: "https://t.me/+s5_mreoGYLViNjBk",
            channel_3: "https://t.me/+VkXlFePK53NiYTQ0"
        },
        20: {
            male_1: "https://t.me/+TiZYTgSvLYUxYzg0",
            female_1: "https://t.me/+y6IptpP6eMVkNjFk",
            channel_1: "https://t.me/+YrJ7oZUWyug4NzQ0",

            male_3: "https://t.me/+QfZKGJJFD_Q3ZmM8",
            female_3: "https://t.me/+X7Jqn6MEj0E5Mjlk",
            channel_3: "https://t.me/+5STLoUvnDDU1NTE8"
        }
    };

    const getLink = (type) => {
        if (links[batch] && links[batch][type]) {
            return links[batch][type];
        } else {
            return "";
        }
    }
    const imageMap = {
        1: {
          male: Level_1_male,
          female: Level_1_female,
          channel: Level_1_channel
        },
        3: {
          male: Level_3_male,
          female: Level_3_female,
          channel: Level_3_channel
        }
      };
   
if(links[batch])
  return (
    <div className='p-5 rounded bg-gradient-to-tl from-sky-300'>
        <p><span className='text-xl'>Join </span><FontAwesomeIcon className='text-blue-600' icon={faHand} fade/></p>
        
        <div className="mt-4 flex justify-around">
             

            <a href={getLink(`${gender}_${level}`)} target="_blank" rel="noopener noreferrer"><div>
                    <div>
                        <img className='w-20' src={imageMap[level][gender]} alt="" />
                    </div>
                    <p className="text-center">Class Group</p>
                </div>
            </a>

            
            <a href={getLink(`channel_${level}`)} target="_blank" rel="noopener noreferrer"><div>    
                    <div>
                        <img className='w-20' src={imageMap[level]['channel']} alt="" />
                    </div>   
                    <p className="text-center">Lecture Notes</p>
                    
                </div> 
                </a>

            </div>
    </div>
  )
}

export default AqeedahGroupCard