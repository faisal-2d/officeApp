import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ContactInfo from '../../ContactInfo';
import partyFlag from '../../../assets/partyFlag.png'
import { faCalendar, faCalendarAlt, faCalendarCheck, faCalendarDays, faCalendarPlus, faCalendarTimes, faCircleCheck, faFile, faFileAlt, faFileVideo, faMoneyBill1 } from '@fortawesome/free-regular-svg-icons';
import { faCalendarDay, faCalendarWeek, faFemale, faGift, faGifts, faMicrophone, faMousePointer, faPhotoVideo, faQuestion, faRecordVinyl, faUserGroup, faVideo, faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import { faViadeo, faViadeoSquare } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import dua_img from '../../../assets/dua_image.jpg'
import trophy_img from '../../../assets/trophy/trophy_top3.png'
import DuaIntro from './DuaResultPage/DuaIntro';
const DuaInfo = () => {
    return (
        <div className='container mx-auto px-5 my-10'>
            {/* Welcome  */}
           <section>
                <div className='rounded bg-gradient-to-tl from-sky-200 flex justify-between'>                   
                    <div className='p-5'>
                        <p className='text-3xl'>দোআ ও যিকির কোর্সে</p>
                        <p className='text-4xl'>স্বাগতম!</p>
                    </div>  
                    <div className='p-5 hidden md:inline'>
                        <div className='flex justify-between'>                            
                            <div className='text-right font-serif align-middle mr-10'>
                                <p className='text-4xl '>الدعاء و الذِكرُ</p>
                                <p className='text-2xl'>من الكتابِ و السنةِ</p>
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
                <p className='text-xl'>কোর্স পরিচিতিঃ <span className="badge badge-success">রমাদান স্পেশাল কোর্স</span></p>
                <p>এই রমাদানে আমরা কুরআন ও হাদিস থেকে ১৫০টি দোআ শিখব, ইনশা আল্লাহ।</p>
                <p>যার মধ্যে ১০০টি দোআ/যিকির, যেগুলো যে কোন সময় পড়া যায়। নবী-রাসূলদের (عليهم السلام) সুন্দর সুন্দর দোআ, যেগুলো আল্লাহ তা'আলা পছন্দ করেছেন এবং আমরা কুরআন - হাদিস থেকে আমরা জানতে পেরেছি। </p>
                <p>এবং ৫০টি দোআ বিষয়ভিত্তিক (নির্দিষ্ট ক্ষেত্রে পড়ার দোআঃ মসজিদে প্রবেশের দোআ, খাবার খাওয়ার আগে দোআ ইত্যাদি) </p>
                <p>রমাদানের বরকতময় দিন-রাতগুলো, বিশেষ করে শেষ দশকের রাতগুলো যেন দোআ ও যিকিরপূর্ণ হয়, তাই এই কোর্সের আয়োজন। তাছাড়া, সারাবছরই এই দোআগুলো আমল করতে পারবেন।</p>
           </section>            


            {/* study method  */}
           <section className='mt-20 mb-10'>
                <div className='flex flex-col md:flex-row justify-around items-center'>
                    <div className='mb-8 md:mb-0'>
                        <img className='rounded-lg' src={dua_img}  />
                    </div>
                    <div >
                        <p className='text-xl my-4'>কিভাবে কোর্স পরিচালিত হবে?</p>
                        <p><FontAwesomeIcon className='text-red-600 pr-2' icon={faCalendarWeek} />২৫ দিনের কোর্স (১ম রমাদান থেকে ২৫ রমাদান)</p>
                        <p><FontAwesomeIcon className='text-red-600 pr-2' icon={faUserGroup} />পুরুষ-মহিলা আলাদা গ্রুপ</p>
                        <p><FontAwesomeIcon className='text-red-600 pr-2' icon={faFemale} />মহিলাদের জন্য মহিলা উস্তাদা থাকবেন</p>
                        <p><FontAwesomeIcon className='text-red-600 pr-2' icon={faVideo} />প্রতিদিন ৫/৬টি দোআর অডিও/ভিডিও দেওয়া হবে</p>
                        <p><FontAwesomeIcon className='text-red-600 pr-2' icon={faRecordVinyl} fade/>প্রতিদিন ২০ মিনিট লাইভে ক্লাসে দোআ প্রাকটিস করানো হবে</p>
                        {/* <p><FontAwesomeIcon className='text-red-600 pr-2' icon={faMicrophone} />২টি মৌখিক পরীক্ষা নেওয়া হবে</p> */}
                        <p><FontAwesomeIcon className='text-red-600 pr-2' icon={faGift} />সেরা ৬ জনকে (পুরুষ ৩, মহিলা ৩) পুরষ্কৃত করা হবে</p>
                    </div>
                </div>

           </section>

           {/* How to select best students */}
           <section className='my-20'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='order-2'>
                        <p className='text-xl my-4'>কিভাবে সেরা ৬ জনকে পুরষ্কৃত করা হবে?</p>
                        <p>আমরা পুরুষদের গ্রুপ থেকে সেরা ৩ জনকে এবং মহিলাদের গ্রুপ থেকে সেরা ৩ জনকে পুরষ্কৃত করব। </p>
                        <p>আমাদের এই বিশেষ কোর্সে কোন পরীক্ষা থাকবে না। এখানে আমাদের প্রতিযোগিতার চেয়ে সহযোগিতা বেশি প্রয়োজন।</p><br></br>
                        <p>সেরা ৩ জনকে নির্বাচিত করার জন্য আমরা একটি বিশেষ পদ্ধতি অনুসরন করব।</p>
                        <p>একজন শিক্ষার্থী প্রতিদিন <span className='px-2 bg-yellow-300 rounded-full'>২ পয়েন্ট</span> পাবেন, যদি তিনি</p>
                        <p><span className='px-2 bg-green-300 rounded-full'>১ পয়েন্ট</span> অন্তত ১টি নতুন দোআ মুখস্থ করেন</p>
                        <p><span className='px-2 bg-green-300 rounded-full'>১ পয়েন্ট</span> কাউকে অন্তত ১টি নতুন দোআ শিখান। হতে পারে তার পরিবারের কোন সদস্য, বন্ধু, কলিগ বা পরিচিত কেউ।</p>
                        <p>২৫ দিনের ক্লাসে ২৫x২=৫০ পয়েন্ট পাবেন। যিনি সবচেয়ে বেশি পয়েন্ট পাবেন, তিনি বিজয়ী হবেন।</p><br></br>
                        <p>এভাবে শুধু আপনিই উপকৃত হবেন না, আপনার পরিবার, বন্ধু-বান্ধব, কলিগরাও উপকৃত হবে। ইনশাআল্লাহ।</p><br></br>
                        <p>অন্য কারো সাথে আপনার প্রতিযোগিতা নেই, প্রতিযোগিতা শুধু নিজের সাথে।</p><br></br>
                        <p>প্রতিদিন ছোট একটি টাস্ক। একটি নতুন দোআ নিজে শিখুন, অন্যকে শেখান।</p>
                        <p>চ্যালেঞ্জটা নিবেন নাকি?</p>
                    </div>
                    <div className='order-1 md:order-3'>
                    <img className='rounded-lg block mx-auto my-10 ' src={trophy_img}  />
                    </div>
                </div>

           </section>

           <DuaIntro></DuaIntro>

           {/* admission system  */}
           <section className='my-20'>
                <p className='text-xl my-4'>কিভাবে ভর্তি হবেন?</p>
                <div className='grid grid-cols-1 md:grid-cols-4'>

                <div className="relative overflow-hidden md:order-2 w-56 h-28 rounded py-2 px-5 mx-auto my-3 md:my-0 bg-gradient-to-tl from-cyan-200 to-cyan-100">
                <div className="flex justify-between">                
                <div className="mr-10">
                    <p>কোর্স ফী</p>                
                </div>
                <FontAwesomeIcon className={`text-2xl text-cyan-600 `} icon={faMoneyBill1} />
                </div>
                <FontAwesomeIcon className="text-8xl absolute -ml-16 mt-2 opacity-10 text-inherit" icon="fa-regular fa-circle" />
                <p className={`text-center font-bold text-xl my-2 text-cyan-600 `}>
                <span className="uppercase font-bold text-2xl">৳৫০০</span>
                </p>
                
                </div>

                <div className='md:col-span-2'>
                    <p>কোর্স ফী পাঠাতে হবে। তারপর টেলিগ্রাম গ্রুপে জয়েন করতে হবে।</p>
                    <p>কোর্স ফী ৫০০ টাকা। ভর্তির পর আর কোন খরচ নেই।</p>                   
                    
             <section className='my-3 lg:w-2/3'>
                <Link to="/registration-dua"><p className='p-3 bg-orange-100 rounded shadow-md'>ভর্তি ফর্ম এবং গ্রুপ লিংক এখানে <FontAwesomeIcon className='text-orange-600' icon={faMousePointer} fade/></p></Link>
            </section>
                </div>
                

                </div>

           </section>

           

            {/* Course Module  */}
            <section className='my-10'>
                <p className='text-xl'>কোর্সে যা শেখানো হবেঃ</p>
                <p className='font-bold text-orange-700'>বিষয়ভিত্তিক দোআ</p>
                    <div className='grid grid-cols-1 md:grid-cols-3 mx-5'>
                        <div>
                            <p><FontAwesomeIcon className='text-orange-700 pr-2' icon={faCircleCheck} />খাবার খাওয়ার আগে ও পরের দোআ</p>
                            <p><FontAwesomeIcon className='text-orange-700 pr-2' icon={faCircleCheck} />ইফতারের দোআ</p>
                            <p><FontAwesomeIcon className='text-orange-700 pr-2' icon={faCircleCheck} />শিরক থেকে বাচার দোআ</p>
                            <p><FontAwesomeIcon className='text-orange-700 pr-2' icon={faCircleCheck} />অযুর দোআ</p>
                            <p><FontAwesomeIcon className='text-orange-700 pr-2' icon={faCircleCheck} />নামাযের দোআ</p>
                            <p><FontAwesomeIcon className='text-orange-700 pr-2' icon={faCircleCheck} />সালাম ফিরানোর শেষে দোআ</p>
                            <p><FontAwesomeIcon className='text-orange-700 pr-2' icon={faCircleCheck} />আযানের দোআ</p>
                            <p><FontAwesomeIcon className='text-orange-700 pr-2' icon={faCircleCheck} />কুনুতের দোআ</p>
                            <p><FontAwesomeIcon className='text-orange-700 pr-2' icon={faCircleCheck} />মসজিদে প্রবেশ ও বের হওয়ার দোআ</p>
                            <p><FontAwesomeIcon className='text-orange-700 pr-2' icon={faCircleCheck} />ঘুমানোর আগে এবং ঘুম থেকে ওঠার পর দোআ</p>
                            
                        </div>
                        <div>                         
                            <p><FontAwesomeIcon className='text-orange-700 pr-2' icon={faCircleCheck} />ইস্তেখারার দোআ</p>
                            <p><FontAwesomeIcon className='text-orange-700 pr-2' icon={faCircleCheck} />সকাল সন্ধ্যার দোআ</p>
                            <p><FontAwesomeIcon className='text-orange-700 pr-2' icon={faCircleCheck} />বাড়িতে প্রবেশ ও বের হওয়ার দোআ</p>
                            <p><FontAwesomeIcon className='text-orange-700 pr-2' icon={faCircleCheck} />টয়লেটে প্রবেশ ও বের হওয়ার দোআ</p>
                            <p><FontAwesomeIcon className='text-orange-700 pr-2' icon={faCircleCheck} />বাহনে (বাস, ট্রেন) ওঠার দোআ</p>
                            <p><FontAwesomeIcon className='text-orange-700 pr-2' icon={faCircleCheck} />সফরের দোআ</p>
                            <p><FontAwesomeIcon className='text-orange-700 pr-2' icon={faCircleCheck} />কাপড় পরা ও খোলার দোআ</p>
                            <p><FontAwesomeIcon className='text-orange-700 pr-2' icon={faCircleCheck} />নতুন কাপড় পরার দোআ</p>
                            <p><FontAwesomeIcon className='text-orange-700 pr-2' icon={faCircleCheck} />নতুন চাঁদ দেখার দোআ</p>
                            <p><FontAwesomeIcon className='text-orange-700 pr-2' icon={faCircleCheck} />ঈদের দোআ</p>
                        </div>                                            
                        
                        <div>
                            <iframe className='w-full rounded' height="315" src="https://www.youtube.com/embed/Tm2vqEVTCzE?si=VjcPvCFKYOGsBOMB" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                <p className='font-bold mt-10 text-blue-700'>কুরআন থেকে দোআ</p>
                    <div className='grid grid-cols-1 md:grid-cols-3 mx-5'>
                        <div>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা বাকারা ১২৭, ১২৮</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা বাকারা ১২৮</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা বাকারা ২০১</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা বাকারা ২৮৫</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা আল ইমরান ৮</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা আল ইমরান ১৬</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা আল ইমরান ৩৮</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা আল ইমরান ৫৩</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা আল ইমরান ১৪৭</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা মা'য়িদাহ ৮৩</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা আ'রাফ ২৩</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা আ'রাফ ৪৭</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা আ'রাফ ১৫৫, ১৫৬</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা তাওবাহ ১২৯</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা ইউনুস ৮৫, ৮৬</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা হুদ ৪৭</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা ইউসুফ ১০১</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা ইবরাহীম ৪০</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা ইবরাহীম ৪১</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা কাহাফ ১০</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা তহা ২৫-২৮</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা তহা ১১৪</p>
                        </div>
                        <div>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা আম্বিয়া ৮৭</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা আম্বিয়া ৮৯</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা মুমিনুন ৯৭, ৯৮</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা মুমিনুন ১০৯</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা মুমিনুন ১১৮</p>                            
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা ফুরকান ৬৫, ৬৬</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা ফুরকান ৭৪</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা ফুরকান ৮৩-৮৫</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা ফুরকান ৮৭-৮৯</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা কাসাস ১৬</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা কাসাস ২১, ২২</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা কাসাস ২৪</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা আনকাবুত ৩০</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা সফফাত ১০০</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা হাশর ১০</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা মুমতাহিনা ৪, ৫</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা তাহরীম ৮</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা নূহ ২৮</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা ইবরাহীম ২৭ *</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা হুজুরাত ৭ *</p>
                            <p><FontAwesomeIcon className='text-blue-700 pr-2' icon={faCircleCheck} />সূরা তাগাবুন ১৬ *</p>
                        </div>
                        <div>
                            <iframe className='w-full rounded' height="315" src="https://www.youtube.com/embed/ckawqGK3hGE?si=LbOLmfwoxhMNqcJF" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        
                        
                    </div>
                <p className='font-bold mt-10 text-green-700'>হাদিস থেকে দোআ</p>
                    <div className='grid grid-cols-1 md:grid-cols-3 mx-5'>
                        <div>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />বুখারি ৪৫২২</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />মুসলিম ২৭২১</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />মুসলিম ২৭২৫</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />মুসলিম ২৭৩৯</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />মুসলিম ২৭১৬</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />বুখারি ১৯৮২</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />বুখারি ৬৩৪৫</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />আবু দাউদ ৫০৯০</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />মুসলিম ২৬৫৪</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />তিরমিযী ৩৫২২</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />তিরমিযী ৩৫১৪</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />ইবনু হিব্বান ২৪২৪</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />তিরমিযী ৩৫২১</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />আবু দাউদ ১৫৫৪</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />তিরমিযী ৩৫৫১</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />তিরমিযী ৩৫১৩</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />বুখারি ৮৩৪</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />সহীহুল জামে ৫৯০২</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />তিরমিযী ৩৫০০</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />সহীহুল জামে ১২৭৮</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />আবু দাঊদ ১৫৪৪</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />বুখারি ১১৭</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />নাসাঈ ৫৫১৭</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />তিরমিযী ৩৪৮২</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />তিরমিযী ২৫৭২</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />বুখারি ১৪৩</p>
                        </div>
                        
                        <div>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />আহমাদ ৪/৪০৩</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />ইবনু মাজাহ ৯২৫</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />আবু দাউদ ১৫১৮</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />নাসাঈ ৫৪৬৯</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />নাসাঈ ১৩৪৪</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />তিরমিযী ৩৪৮৩</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />নাসাঈ ৭৮৬৭</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />আল হাকিম ১/৫২৩</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />আল হাকিম ১/৫৩২</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />আহমাদ ৬/৪৮</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />আবু দাউদ ১৫২৪</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />ইবনু হিব্বান ২৪৩৬</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />নাসাঈ ৫৪৭৫</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />নাসাঈ ১৬১৭</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />আল হাকিম ১/৫৪১</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />মুসলিম ২৬৯৬</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />আহমাদ ৬/৬৮</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />বুখারি ৬৩৩৩</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />বুখারি ২৭৯০</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />আল হাকিম ১/৪</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />আহমাদ ২৯/৫৯৬</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />ইবনু মাজাহ ৩৮৫১</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />বুখারি ৬৩৬৩</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />মুসলিম ১৯০৯</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />মুসলিম ২১৪</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} />বাইহাকী ৫/৯৫</p>
                       
                        </div>                        
                        <div>
                            <iframe  className='w-full rounded' height="315" src="https://www.youtube.com/embed/_4SyPEKN0Vk?si=IRbRhBvuksCJxob-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>

                        
                    </div>
           </section>

                     

         

           

           {/* FAQs  */}
           <section className='my-10'>
           <div className="divider text-4xl text-slate-500 my-20">FAQs</div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-7 lg:mx-32'>
            <div className='flex'>
                    <div className='justify-center'>
                        <p className='bg-red-100 p-5 rounded'><FontAwesomeIcon className='text-4xl text-red-600' icon={faQuestion} /></p>
                    </div>
                    <div className='px-2'>
                        <p className='text-xl text-red-600'>ক্লাস কিভাবে হবে?</p>
                        <p>প্রতিদিন ফজরের নামাযের পর ৫/৬টি দোআর অডিও/ভিডিও দেওয়া হবে। সারাদিন এই অডিও শুনবেন এবং মুখস্থ করবেন। টেলিগ্রাম গ্রুপ ও চ্যানেলের মাধ্যমে ক্লাস হবে। </p>
                    </div>
            </div>

            <div className='flex'>
                    <div className='justify-center'>
                        <p className='bg-red-100 p-5 rounded'><FontAwesomeIcon className='text-4xl text-red-600' icon={faQuestion} /></p>
                    </div>
                    <div className='px-2'>
                        <p className='text-xl text-red-600'>কোর্সটি কতদিন চলবে?</p>
                        <p>এটি রমাদান স্পেশাল কোর্স, তাই শুধুমাত্র রমাদানেই কোর্সটি চলবে। ১ম রমাদান থেকে ২৫ রমাদান পর্যন্ত। </p>
                    </div>
            </div>
                
            <div className='flex'>
                    <div className='justify-center'>
                        <p className='bg-red-100 p-5 rounded'><FontAwesomeIcon className='text-4xl text-red-600' icon={faQuestion} /></p>
                    </div>
                    <div className='px-2'>
                        <p className='text-xl text-red-600'>কিভাবে পড়া নেওয়া হবে?</p>
                        <p>প্রতিদিন যে দোআগুলো দেওয়া হবে, সেগুলো মুখস্থ হয়ে গেলে গ্রুপে রেকর্ড দিবেন। চেষ্টা করবেন, দুপুরের আগেই দোআগুলো মুখস্থ করে ফেলতে। </p>
                    </div>
                </div>

                <div className='flex'>
                    <div className='justify-center'>
                        <p className='bg-red-100 p-5 rounded'><FontAwesomeIcon className='text-4xl text-red-600' icon={faQuestion} /></p>
                    </div>
                    <div className='px-2'>
                        <p className='text-xl text-red-600'>কোর্সে কি যে কেউ ভর্তি হতে পারবে?</p>
                        <p>জি, ১৫ বছরের বেশি বয়সী, যে কোন শ্রেণি-পেশার মানুষ যে কেউ এই কোর্সে ভর্তি হতে পারবে। </p>
                    </div>
                </div>                
                

                <div className='flex'>
                    <div className='justify-center'>
                        <p className='bg-red-100 p-5 rounded'><FontAwesomeIcon className='text-4xl text-red-600' icon={faQuestion} /></p>
                    </div>
                    <div className='px-2'>
                        <p className='text-xl text-red-600'>ক্লাস কি লাইভ হবে?</p>
                        <p>জি, লাইভ ক্লাস হবে, তবে আপনি দিনের যে কোন সময় পড়া দিতে পারবেন। আপনার যখনি দোআ মুখস্থ হবে, সাথে সাথে গ্রুপে অডিও মেসেজ পাঠিয়ে দিবেন। </p>
                    </div>
                </div>
                
                <div className='flex'>
                    <div className='justify-center'>
                        <p className='bg-red-100 p-5 rounded'><FontAwesomeIcon className='text-4xl text-red-600' icon={faQuestion} /></p>
                    </div>
                    <div className='px-2'>
                        <p className='text-xl text-red-600'>মেয়েদের জন্য কি আলাদা উস্তাদা থাকবেন?</p>
                        <p>জি, মেয়েদের জন্য ডেডিকেটেড একজন উস্তাদা থাকবেন। যিনি শুধুমাত্র মেয়েদের পড়া নিবেন এবং কোথাও ভুল হলে শুধরে দিবেন।</p>
                    </div>
                </div>
                
                <div className='flex'>
                    <div className='justify-center'>
                        <p className='bg-red-100 p-5 rounded'><FontAwesomeIcon className='text-4xl text-red-600' icon={faQuestion} /></p>
                    </div>
                    <div className='px-2'>
                        <p className='text-xl text-red-600'>ভিডিও/অডিওগুলো কি আমি কারো সাথে শেয়ার করতে পারব?</p>
                        <p>জি, যতো ইচ্ছা শেয়ার করতে পারবেন। </p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='justify-center'>
                        <p className='bg-red-100 p-5 rounded'><FontAwesomeIcon className='text-4xl text-red-600' icon={faQuestion} /></p>
                    </div>
                    <div className='px-2'>
                        <p className='text-xl text-red-600'>কিভাবে পুরষ্কার পাব?</p>
                        <p>প্রতিদিন অন্তত ১টি নতুন দোআ মুখস্থ করুন এবং অন্য কাউকে ১টি নতুন দোআ শেখান। </p>
                    </div>
                </div>
                
            </div>

           </section>
        
            
            <section className='my-28 lg:w-1/3 mx-auto'>
                <Link to="/registration-dua"><p className='p-3 bg-orange-200 rounded shadow-md'>ভর্তি ফর্ম এবং গ্রুপ লিংক এখানে <FontAwesomeIcon className='text-orange-600' icon={faMousePointer} fade/></p></Link>
            </section>


            
           {/* Course Teacher  */}
           <ContactInfo></ContactInfo> 

        </div>
    );
};

export default DuaInfo;