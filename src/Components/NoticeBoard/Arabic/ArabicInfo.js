import { faHeadphones, faMousePointer } from '@fortawesome/fontawesome-free-solid';
import { faTelegramPlane, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBookOpen, faCircleCheck, faMicrophone, faMoneyBill1, faPenRuler } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import partyFlag from '../../../assets/partyFlag.png'
import ContactInfo from '../../ContactInfo';
import { Link } from 'react-router-dom';
import CardArabicNextBatch from './CardArabicNextBatch';
const ArabicInfo = () => {
    return (
        <div className='container mx-auto px-5 my-10'>
            {/* Welcome  */}
           <section>
                <div className='rounded bg-gradient-to-tl from-sky-200 flex justify-between'>                   
                    <div className='p-5'>
                        <p className='text-3xl'>আরবি ভাষা কোর্সে</p>
                        <p className='text-4xl'>স্বাগতম!</p>
                    </div>  
                    <div className='p-5 hidden md:inline'>
                        <div className='flex justify-between'>                            
                            <div className='text-right font-serif align-middle mr-10'>
                                <p className='text-4xl '>دروس اللغة العربية</p>
                                <p className='text-2xl'>لغير الناطقين بها </p>
                            </div>
                            <div>
                                <img src={partyFlag} alt="" />
                            </div>
                        </div>
                    </div>                  
                </div>
                
           </section>

            {/* Course Descripttion  */}
           <section className='my-10'>
                <p className='text-xl'>কোর্স পরিচিতিঃ</p>
                <p>এই কোর্সে আমরা দুরুসুল লুগাহ আল আরাবিয়্যাহ সিরিজটি পড়ব। যেটা 'মদিনা বুক' নামেও পরিচিত।  </p>
                <p>আমরা কোন গতানুগতিক মুখস্থ বিদ্যার দিকে যাব না। এবং শুরুতেই ব্যাকরণ নিয়ে খুব বেশি আলোচনা করব না।  সৌদি আরবের ভাষা ইন্সটিউটগুলোতে যেভাবে পড়ানো হয়, সেভাবে প্রতিটা বাক্য ভেঙে ভেঙে বুঝিয়ে পড়ানো হবে।</p>
                <p>কোর্স ফী এককালীন, তবে বিশেষ প্রয়োজনে কিস্তিতে দিতে পারবেন। এই ব্যাপারে কোর্স টিচারের সাথে যোগাযোগ করে নিবেন।</p>
                <p>যারা বাংলাদেশে আছেন, তারা বাজারে বা অনলাইন শপে বইগুলো কিনতে পারবেন। কেনার সময় খেয়াল রাখবেন, বইয়ে যেন শুধু আরবি থাকে, অনুবাদ না থাকে। ইংরেজি বা বাংলা অনুবাদযুক্ত বই কিনবেন না।</p>
           </section>

           {/* <section className='my-3 lg:w-1/3 mx-auto'>
                <Link to="/registration-arabic"><p className='p-3 bg-yellow-200 rounded shadow-md'>বিকাশ নাম্বার এবং গ্রুপ লিংক এখানে <FontAwesomeIcon className='text-orange-600' icon={faMousePointer} fade/></p></Link>
            </section> */}

            {/* <CardArabicNextBatch/> */}

           {/* study method  */}
           <section className='my-10'>
                <p className='text-xl'>শিখন পদ্ধতিঃ</p>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-10 my-5'>
                    <div className='text-center bg-green-200 px-5 py-10 rounded'>
                        <FontAwesomeIcon className='text-3xl text-green-700' icon={faHeadphones} />
                        <p className='text-2xl text-green-700 mt-3 mb-5'>লিসনিং</p>
                        <p className="text-left px-5">লেভেল ১ এর শিক্ষার্থীদেরকে ক্লাস শুরুর আগে ঐদিনের রেকর্ড দেওয়া হবে। শিক্ষার্থীরা অডিওটি শুনে উচ্চারন শিখবেন।</p>
                        <p className="text-left px-5">লেভেল ২ ও লেভেল ৩ এর শিক্ষার্থীদেরকে বইয়ের বাইরে কোন একটি বিষয়ে আরবি অডিও/ভিডিও (সাবটাইটেল ছাড়া) দেওয়া হবে, এবং কিছু প্রশ্ন দেওয়া হবে, শিক্ষার্থীরা উত্তর দিবেন। </p>
                    </div>  
                    <div className='text-center bg-violet-200 px-5 py-10 rounded'>
                        <FontAwesomeIcon className='text-3xl text-violet-700' icon={faBookOpen} />
                        <p className='text-2xl text-violet-700 mt-3 mb-5'>রিডিং</p>
                        <p className="text-left px-5">লাইভ ক্লাসে শিক্ষার্থী পড়বেন এবং শিক্ষক ভুল-ত্রুটি ঠিক করে দিবেন। </p>
                        <p className="text-left px-5">তবে পড়া তৈরি করার জন্য ক্লাসের আগেই ঐদিনের পড়ার রেকর্ড দেওয়া হবে।</p>
                        <p className="text-left px-5">সাধারণত একদিনে ১টি দারস পড়া হয়, তবে দারস বড় হলে দুইদিনে পড়া হয়।</p>
                    </div>  
                    <div className='text-center bg-red-200 px-5 py-10 rounded'>
                        <FontAwesomeIcon className='text-3xl text-rose-700' icon={faPenRuler} />
                        <p className='text-2xl text-rose-700 mt-3 mb-5'>রাইটিং</p>
                        <p className="text-left px-5">হোমওয়ার্ক ও এসাইনমেন্ট লিখে জমা দিতে হবে। এছাড়া পরীক্ষাগুলো সম্পূর্ণ লিখিত পরীক্ষা হবে।</p>
                        <p className="text-left px-5">হাতের লেখার ক্লাস নেই, তবে লেভেল ১ এর শিক্ষার্থীদের জন্য প্রথমদিকে কিছু ক্লাস নেয়া হতে পারে।</p>
                    </div>  
                    <div className='text-center bg-yellow-200 px-5 py-10 rounded'>
                        <FontAwesomeIcon className='text-3xl text-orange-700' icon={faMicrophone} />
                        <p className='text-2xl text-orange-700 mt-3 mb-5'>স্পিকিং</p>
                        <p className="text-left px-5">ক্লাসে বই থেকে এবং বইয়ের বাইরে থেকে (পড়ার সাথে প্রাসঙ্গিক) আরবিতে প্রশ্নত্তোর করা হবে।</p>
                        <p className="text-left px-5">শিক্ষার্থীরা যেন আরবিতে কথা বলায় পারদর্শী হয়ে ওঠে সেজন্য আরবি কথোপকথন অনুশীলন করানো হবে।</p>
                    </div>  
                </div>
           </section>

           {/* Course Level  */}
           <section className='my-10'>
                <p className='text-xl'>লেভেল সমূহঃ</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 my-5'>
                    <div className='text-center rounded shadow-lg px-5 py-12 bg-gradient-to-tl from-sky-300 to-orange-200'>
                        <p className='text-2xl pb-6'>লেভেল ১</p>
                        {/* <p className='text-3xl my-3 text-rose-600'>প্রতিমাসে ১,০০০ ৳</p> */}
                        <div className='text-left px-5'>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> ৫ মাসের কোর্স</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> মদিনা বুক ১ম খন্ড সম্পূর্ণ (১২৩ পৃষ্ঠা)</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> প্রতি ক্লাসে প্রি-রেকর্ডেড লেকচার</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> জুমে লাইভ ক্লাস ও প্রশ্নত্তোর</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> পুরুষ - মহিলা আলাদা ক্লাস</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> জুম ক্লাস রেকর্ড</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> এসাইনমেন্ট ও পরীক্ষা</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> আরবিতে ভাইভা/মৌখিক পরীক্ষা</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> সার্বক্ষনিক সহায়তার জন্য টেলিগ্রাম গ্রুপ</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> সার্টিফিকেট</p> 
                        </div>                      
                    </div>
                    <div className='text-center rounded shadow-lg px-5 py-12 bg-gradient-to-tl from-sky-300 to-orange-200'>
                        <p className='text-2xl pb-6'>লেভেল ২</p>
                        {/* <p className='text-3xl my-3 text-rose-600'>প্রতিমাসে ১,০০০ ৳</p> */}
                        <div className='text-left px-5'>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> ৬ মাসের কোর্স</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> মদিনা বুক ২য় খন্ড সম্পূর্ণ (২২০ পৃষ্ঠা)</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> প্রতি ক্লাসে প্রি-রেকর্ডেড লেকচার</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> জুমে লাইভ ক্লাস ও প্রশ্নত্তোর</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> পুরুষ - মহিলা আলাদা ক্লাস</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> জুম ক্লাস রেকর্ড</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> এসাইনমেন্ট ও পরীক্ষা</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> আরবিতে ভাইভা/মৌখিক পরীক্ষা</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> সার্বক্ষনিক সহায়তার জন্য টেলিগ্রাম গ্রুপ</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> সার্টিফিকেট</p> 
                        </div>                      
                    </div>
                    <div className='text-center rounded shadow-lg px-5 py-12 bg-gradient-to-tl from-sky-300 to-orange-200'>
                        <p className='text-2xl pb-6'>লেভেল ৩</p>
                        {/* <p className='text-3xl my-3 text-rose-600'>প্রতিমাসে ১,০০০ ৳</p> */}
                        <div className='text-left px-5'>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> ৬ মাসের কোর্স</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> মদিনা বুক ৩য় খন্ড সম্পূর্ণ (৩০২ পৃষ্ঠা)</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> প্রতি ক্লাসে প্রি-রেকর্ডেড লেকচার</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> জুমে লাইভ ক্লাস ও প্রশ্নত্তোর</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> পুরুষ - মহিলা আলাদা ক্লাস</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> জুম ক্লাস রেকর্ড</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> এসাইনমেন্ট ও পরীক্ষা</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> আরবিতে ভাইভা/মৌখিক পরীক্ষা</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> সার্বক্ষনিক সহায়তার জন্য টেলিগ্রাম গ্রুপ</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> সার্টিফিকেট</p> 
                        </div>                      
                    </div>
                </div>
           </section>


           <section className='my-20'>
                <p className='text-xl my-10'>কোর্স ফীঃ</p>
                <div className='grid grid-cols-1 md:grid-cols-4'>

                <div className="relative overflow-hidden md:order-2 w-56 h-28 rounded py-2 px-5 mx-auto my-3 md:my-0 bg-gradient-to-tl from-cyan-200 to-cyan-100">
                <div className="flex justify-between">                
                <div className="mr-10">
                    <p>ভর্তি ফী</p>                
                </div>
                <FontAwesomeIcon className={`text-2xl text-cyan-600 `} icon={faMoneyBill1} />
                </div>
                <FontAwesomeIcon className="text-8xl absolute -ml-16 mt-2 opacity-10 text-inherit" icon="fa-regular fa-circle" />
                <p className={`text-center font-bold text-xl my-2 text-cyan-600 `}>
                <span className="font-bold text-xl">৳ ১৫০০</span>
                {/* <p className="font-bold text-xl">মাসিক ফী = ৳১,০০০</p> */}
                </p>                
                </div>
                <div className="relative overflow-hidden md:order-2 w-56 h-28 rounded py-2 px-5 mx-auto my-3 md:my-0 bg-gradient-to-tl from-green-300 to-green-100">
                <div className="flex justify-between">                
                <div className="mr-10">
                    <p>মাসিক ফী</p>                
                </div>
                <FontAwesomeIcon className={`text-2xl text-green-600 `} icon={faMoneyBill1} />
                </div>
                <FontAwesomeIcon className="text-8xl absolute -ml-16 mt-2 opacity-10 text-inherit" icon="fa-regular fa-circle" />
                <p className={`text-center font-bold text-xl my-2 text-green-600 `}>
                {/* <p className="font-bold text-xl">ভর্তি ফী = ৳৫০০</p> */}
                <span className="font-bold text-xl">৳ ১০০০</span>
                </p>                
                </div>

                {/* <div className='md:col-span-2'>
                    <p>কোর্স ফী পাঠাতে হবে। তারপর টেলিগ্রাম গ্রুপে জয়েন করতে হবে।</p>
                    <p>কোর্স ফী ৫০০ টাকা। ভর্তির পর আর কোন খরচ নেই।</p>                   
                    
             <section className='my-3 lg:w-2/3'>
                <Link to="/dua-registration"><p className='p-3 bg-orange-100 rounded shadow-md'>বিকাশ নাম্বার এবং গ্রুপ লিংক এখানে <FontAwesomeIcon className='text-orange-600' icon={faMousePointer} fade/></p></Link>
            </section>
                </div> */}
                

                </div>

           </section>


           {/* FAQs  */}
           <section>

           </section>
           
           {/* <section className='my-3 lg:w-1/3 mx-auto'>
                <Link to="/registration-arabic"><p className='p-3 bg-yellow-200 rounded shadow-md'>বিকাশ নাম্বার এবং গ্রুপ লিংক এখানে <FontAwesomeIcon className='text-orange-600' icon={faMousePointer} fade/></p></Link>
            </section> */}

           {/* Course Teacher  */}
           <section className='my-10'>
                <p className='text-xl'>কোর্স শিক্ষকঃ</p>
                <p>এই কোর্সে দারস দিবেন ফাইসাল আব্দুল্লাহ, সৌদি আরবের কিং খালিদ বিশ্ববিদ্যালয়ে আরবি ভাষা ইন্সটিটিউট থেকে ডিপ্লোমা করেছেন, বর্তমানে অত্র বিশ্ববিদ্যালয়ে অনার্সে অধ্যায়নরত। </p>
                <p>পুরুষ ও মহিলাদের আলাদা ক্লাস, তবে শিক্ষক একজনই। মহিলারা ক্যামেরা অফ রেখে লাইভ ক্লাসে যোগ দিতে পারবেন।</p>
                <ContactInfo></ContactInfo> 
           </section>
        </div>
    );
};

export default ArabicInfo;