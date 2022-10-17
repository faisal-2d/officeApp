import { faCircle, faMoneyBill1 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ArabicPyamentCard = ({payment, level}) => {

   
    return (
        <div className={`relative overflow-hidden rounded py-2 px-5 bg-gradient-to-tl from-green-300 to-green-200`}>
                <div className="w-auto  flex justify-between">                
                <div className="mr-16">
                    <p>Payment</p>
                    <p>Level {level}</p>
                </div>
                <FontAwesomeIcon className={`text-2xl text-green-600`} icon={faMoneyBill1} />
                </div>
                <FontAwesomeIcon className="text-8xl absolute -ml-16 mt-2 opacity-10 text-inherit" icon="fa-regular fa-circle" />
                
                <div className='mt-4'>
                    {
                        payment.map((p, index) => <FontAwesomeIcon 
                        key={index}
                        className={`text-xl text-green-600 mx-0.5`} icon={`fa-circle ${p.paymnt === "due" ? "fa-regular" : "fa-solid"}`}>                        
                        </FontAwesomeIcon>)
                    }
                </div>
                </div> 
    );
};

export default ArabicPyamentCard;