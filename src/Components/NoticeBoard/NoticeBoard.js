import React from 'react';
import NoticeBoradCard from './NoticeBoradCard';

const NoticeBoard = () => {
    return (
        <div className='min-h-screen container mx-auto my-10'>
            <p className='text-center text-2xl'>নোটিশ বোর্ডে স্বাগতম!</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-3 md:mx-10">

      <NoticeBoradCard
      course="আক্বিদাহ"
      courseLink="/aqeedah"
      ></NoticeBoradCard>

      <NoticeBoradCard
      course="তাফসীর"
      courseLink="/tafseer"
      ></NoticeBoradCard>

      <NoticeBoradCard
      course="আরবি ভাষা"
      courseLink="/arabic"
      ></NoticeBoradCard>

      <NoticeBoradCard
      course="ফিকহ"
      courseLink="/fiqh"
      ></NoticeBoradCard>


      <NoticeBoradCard
      course="সীরাত"
      courseLink="/seerat"
      ></NoticeBoradCard>

      <NoticeBoradCard
      course="দোআ ও যিকির"
      courseLink="/dua"
      ></NoticeBoradCard>

      

    </div>
        </div>
    );
};

export default NoticeBoard;