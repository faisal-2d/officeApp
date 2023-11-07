import React from 'react';

const TafseerInfo = () => {
    return (
        <div className='container mx-auto px-5 my-10'>
            {/* Welcome  */}
           <section>
                <div className='p-5 rounded bg-gradient-to-tl from-sky-200'>
                    <p className='text-3xl'>সংক্ষিপ্ত তাফসীর কোর্সে</p>
                    <p className='text-4xl'>স্বাগতম!</p>
                </div>
           </section>
           {/* Course Descripttion  */}
           <section className='my-10'>
                <p className='text-xl'>বিজ্ঞপ্তিঃ</p>
                <p> এই কোর্সে নতুন ভর্তি নেওয়া হচ্ছে না। </p>
                <p>কোর্সটি পরিচালনা করতেন শায়খ আব্দুল্লাহ আল কাফী (রহিমাহুল্লাহ)। তিনি ১৬ আগস্ট ২০২৩ তারিখে ইন্তেকাল করেন।</p>
                <p>আল্লাহ সুবহানাহু ওয়া তায়ালা শায়খকে জান্নাতুল ফিরদাউস দান করুন। আমীন।</p>
                <p className='pt-3'>পরবর্তীতে এই কোর্সটি আবার শুরু হলে আমাদের ফেসবুক পেইজে বিজ্ঞপ্তি দেওয়া হবে।</p>
           </section>
        </div>
    );
};

export default TafseerInfo;