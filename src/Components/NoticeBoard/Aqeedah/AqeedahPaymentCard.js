import { faMoneyBill1 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const AqeedahPaymentCard = ({payment, level}) => {
    let p = '';
    if (payment === 'due')
        p = 'red'
    else
        p = 'green'
    
    return (
        <div className={`relative overflow-hidden h-32 my-auto rounded py-2 px-5 bg-gradient-to-tl ${ payment === 'due' ? 'from-red-200 to-red-100' : 'from-green-300 to-green-200'} `}>
                <Link to={`${payment === 'due' ? '/aqeedah-due' : ''}`}>
                <div className="w-auto  flex justify-between">                
                <div className="mr-16">
                    <p>Payment</p>
                    <p>Level {level}</p>
                </div>
                <FontAwesomeIcon className={`text-2xl ${ payment === 'due' ? 'text-red-600' : 'text-green-600'} `} icon={faMoneyBill1} />
                </div>
                <FontAwesomeIcon className="text-8xl absolute -ml-16 mt-2 opacity-10 text-inherit" icon="fa-regular fa-circle" />
                <p className={`text-center font-bold text-xl my-2 ${ payment === 'due' ? 'text-red-600' : 'text-green-600'} `}>
                <span className="uppercase font-bold ">{payment}</span>                
                </p>
                {payment === 'due' && <p className="text-red-600 text-center text-sm link -mt-2 animate-pulse">বকেয়া পরিশোধ করুন</p> }                
            </Link>
        </div>
        
    );
};

export default AqeedahPaymentCard;