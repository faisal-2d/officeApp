import React from 'react';
import maleProfile from '../../assets/male-profile.png'
import femaleProfile from '../../assets/female-profile.png'

const AqeedahDetails = () => {
    return (
        <div>
            <p className="text-center text-2xl">আক্বিদাহ কোর্সের ১৬তম ব্যাচে স্বাগতম!</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto'>
            <div className='flex items-center p-5 rounded bg-red-100'>
                <div className='mr-5'>
                    <img src={maleProfile} alt="" />
                </div>
                <div>
                    <p className='text-3xl'><strong>Faisal</strong></p>
                    <p className='text-xl'>Fr. <strong>Abdullah Al Baki</strong></p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default AqeedahDetails;