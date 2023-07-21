import { faCircleCheck, faMousePointer, faQuestion, faUser, faWarning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import partyFlag from '../../../assets/partyFlag.png'
import NextBatchReg from '../../CourseRegistration/NextBatchReg';

const AqeedahInfo = () => {
    return (
        <div className='container mx-auto px-5 my-10'>
             {/* Welcome  */}
           <section>
                <div className='rounded bg-gradient-to-tl from-sky-200 flex justify-between'>                   
                    <div className='p-5'>
                        <p className='text-3xl'>সহীহ আক্বীদাহ কোর্স সিরিজে</p>
                        <p className='text-4xl'>স্বাগতম!</p>
                    </div>  
                    <div className='p-5 hidden md:inline'>
                        <div className='flex justify-between'>                            
                            <div className='text-right font-serif align-middle mr-10'>
                                <p className='text-4xl '>سلسلة دورة العقيدة الصحيحة</p>
                                <p className='text-2xl'>على منهج السلف الصالح</p>
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
           <div className='my-20 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                    <div className='md:col-span-2 flex justify-center align-center'>
                    <div>
                    <p className='text-xl'>কোর্স পরিচিতিঃ</p>
                    <p>এই কোর্সে আমরা কুরআন ও সুন্নাহর আলোকে আক্বীদাহ (তাওহীদ, শিরক, কুফুরি, নিফাক ইত্যাদি) শিখব, ইনশা আল্লাহ।   </p>
                    <p>আমরা কোন গতানুগতিক ফেরকা/দলের মতাদর্শ শিখব না। বরং সালাফগনের (সাহাবীগন (রাঃ), তাবেঈগন যেমনঃ ইমাম আবু হানিফা, ইমাম আহমাদ বিন হাম্বাল, ইমাম মালেক, ইমাম শাফেয়ী, এবং তাবে'তাবেঈগন) -এর বুঝ ও নীতি অনুযায়ী আক্বীদাহ শিখব ।  সৌদি আরবের মদিনা ইসলামী বিশ্ববিদ্যালয়সহ অন্যান্য বিশ্ববিদ্যালয় ও শিক্ষাপ্রতিষ্ঠানসমূহ, এবং ইসলামী দাওয়াহ সেন্টারগুলোতে যে সিলেবাস পড়ানো হয়, সেই সিলেবাস অনুযায়ী প্রতিটি বিষয় কুরআন ও হাদিস থেকে দলীলসহ শেখানো হবে।</p>
                    <p>কোর্স ফী এককালীন, ভর্তির পর আর কোন টাকা দিতে হবে না।</p>
                    <p>ক্লাসে পিডিএফ দেওয়া হবে, শিক্ষার্থীদেরকে প্রিন্ট করে নিতে হবে।</p>

            {/* register now  */}
            <section className='mx-auto my-10 lg:w-1/3'>
                    <Link to="/registration-aqeedah"><p className='p-3 bg-green-300 rounded shadow-md'>বিকাশ নাম্বার ও গ্রুপ লিংক এখানে <FontAwesomeIcon className='text-green-600' icon={faMousePointer} fade/></p></Link>
            </section>
                    <div className='mt-10'>
                        <p className='text-xl'>লেভেল ১ এর বিষয়বস্তুঃ</p>
                        <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> তাওহীদের পরিচয় ও সূত্রাবলি</p>
                        <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> দ্বীনের মূলনীতি</p>
                        <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> দ্বীনের স্তরসমূহ (ইসলাম, ঈমান, ইহসান)</p>
                        <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> ইবাদতের নীতিমালা</p>                                               
                    </div>
                    <div className='mt-10'>
                        <p className='text-xl'>লেভেল ২ এর বিষয়বস্তুঃ</p>
                        <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> শিরকের পরিচয়, উৎপত্তি ও ইতিহাস</p>
                        <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> শিরকের প্রকারভেদ</p>
                        <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> শিরকের কারন ও প্রতিকার</p>
                        <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> শিরক থেকে বাচার উপায়</p>                                               
                    </div>
                    <div className='mt-10'>
                        <p className='text-xl'>লেভেল ৩ এর বিষয়বস্তুঃ</p>
                        <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> ছোট শিরকের পরিচয় ও লক্ষনসমূহ</p>
                        <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> কুফরের পরিচয় ও প্রকারভেদ</p>
                        <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> ফিসক</p>
                        <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> রিদ্দাহ</p>                                               
                        <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> তাকফীর</p>                                               
                        <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> ফিতান</p>                                               
                    </div>
                    </div>
                    </div>

                    <div>                    
                    <div>
                        <iframe className='w-full rounded m-3' height='300' src="https://www.youtube.com/embed/7d4oNyjvkNo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <iframe className='w-full rounded m-3' height='300'  src="https://www.youtube.com/embed/zEJtWI_1-Fg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    </div>                    
                </div>        
           </section>


           {/* next batch  */}
           <section>
           <NextBatchReg></NextBatchReg>
           </section>

           {/* Levels  */}
           <section className='my-10'>
                <p className='text-xl'>লেভেল সমূহঃ</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 my-5'>
                    <div className='text-center rounded shadow-lg px-5 py-12 bg-gradient-to-tl from-sky-300 to-red-100'>
                        <p className='text-2xl'>লেভেল ১</p>
                        <p className='text-3xl my-3 text-rose-600'>১৫৩০ ৳</p>
                        <div className='text-left px-5'>
                            <p className='mb-5'><FontAwesomeIcon className='text-yellow-400 pr-2' icon={faWarning} /> কোর্স করার শর্ত/যোগ্যতাঃ নেই। ১৫ বছরের বেশি বয়সী যে কেউ এই কোর্সে ভর্তি হতে পারবে।</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> ৩ মাসের কোর্স</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> দাওয়াহ সেন্টারের সিলেবাস (লেভেল ১)</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> প্রতি ক্লাসে অডিও লেকচার, টেক্সট</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> টেলিগ্রাম গ্রুপে ক্লাস ও প্রশ্নত্তোর</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> পুরুষ - মহিলা আলাদা গ্রুপ</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> সপ্তাহে ৩ দিন ক্লাস</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> ক্লাসটেস্ট ও মডেল টেস্ট</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> বিষয়ভিত্তিক বক্তৃতা প্রতিযোগিতা (১টি)</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> ৩টি সেমিস্টার পরীক্ষা</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> সেরা ১০ জনকে পুরষ্কার</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> সার্টিফিকেট</p> 
                        </div>                      
                    </div>
                    <div className='text-center rounded shadow-lg px-5 py-12 bg-gradient-to-tl from-sky-300 to-red-100'>
                        <p className='text-2xl'>লেভেল ২</p>
                        <p className='text-3xl my-3 text-rose-600'>১৫৩০ ৳</p>
                        <div className='text-left px-5'>
                            <p className='mb-5'><FontAwesomeIcon className='text-yellow-400 pr-2' icon={faWarning} /> কোর্স করার শর্ত/যোগ্যতাঃ লেভেল ১ শেষ করতে হবে।</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> ৩ মাসের কোর্স</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> দাওয়াহ সেন্টারের সিলেবাস (লেভেল ২)</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> প্রতি ক্লাসে অডিও লেকচার, টেক্সট</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> টেলিগ্রাম গ্রুপে ক্লাস ও প্রশ্নত্তোর</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> পুরুষ - মহিলা আলাদা গ্রুপ</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> সপ্তাহে ৩ দিন ক্লাস</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> ক্লাসটেস্ট ও মডেল টেস্ট</p>
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> বিষয়ভিত্তিক উচ্চতর দক্ষতামূলক প্রবন্ধ লিখন</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> ৩টি সেমিস্টার পরীক্ষা</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> সার্টিফিকেট</p>  
                        </div>                      
                    </div>
                    <div className='text-center rounded shadow-lg px-5 py-12 bg-gradient-to-tl from-sky-300 to-red-100'>
                        <p className='text-2xl'>লেভেল ৩</p>
                        <p className='text-3xl my-3 text-rose-600'>৭৫০ ৳</p>
                        <div className='text-left px-5'>
                            <p className='mb-5'><FontAwesomeIcon className='text-yellow-400 pr-2' icon={faWarning} /> কোর্স করার শর্ত/যোগ্যতাঃ লেভেল ২ শেষ করতে হবে।</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> ১.৫ মাসের কোর্স</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> দাওয়াহ সেন্টারের সিলেবাস (লেভেল ৩)</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> প্রতি ক্লাসে অডিও লেকচার, টেক্সট</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> টেলিগ্রাম গ্রুপে ক্লাস ও প্রশ্নত্তোর</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> পুরুষ - মহিলা আলাদা গ্রুপ</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> সপ্তাহে ৩ দিন ক্লাস</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> ক্লাসটেস্ট ও মডেল টেস্ট</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> ১টি সেমিস্টার পরীক্ষা</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> সেরা ৫ জনকে পুরষ্কার</p> 
                            <p><FontAwesomeIcon className='text-green-700 pr-2' icon={faCircleCheck} /> সার্টিফিকেট</p>  
                        </div>                      
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
                        <p className='text-xl text-red-600'>কোর্সে কি যে কেউ ভর্তি হতে পারবে?</p>
                        <p>জি, ১৫ বছরের বেশি বয়সী, যে কোন শ্রেণি-পেশার মানুষ যে কেউ এই কোর্সে ভর্তি হতে পারবে। যেমন, মাদরাসার শিক্ষক-শিক্ষার্থী, জেনারেল পড়ুয়া বা বিশ্ববিদ্যালয়ে অধ্যায়নরত শিক্ষার্থী, চাকুরিজীবি </p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='justify-center'>
                        <p className='bg-red-100 p-5 rounded'><FontAwesomeIcon className='text-4xl text-red-600' icon={faQuestion} /></p>
                    </div>
                    <div className='px-2'>
                        <p className='text-xl text-red-600'>ক্লাস কিভাবে হবে?</p>
                        <p>টেলিগ্রাম গ্রুপ ও চ্যানেলের মাধ্যমে ক্লাস হবে। বিভিন্ন টপিকের উপর অডিও দেওয়া হবে। আপনাদেরকে প্রশ্ন দেওয়া হবে, আপনারা উত্তর টাইপ করে/ভয়েজ রেকর্ড করে/খাতায় লিখে ছবি তুলে জমা দিবেন। এছাড়াও MCQ পরীক্ষা থাকবে, আপনারা সঠিক উত্তর সিলেক্ট করবেন। (টেলিগ্রাম হচ্ছে হোয়াটসঅ্যাপের মতো একটি অ্যাপ, প্লে স্টোর থেকে ডাউনলোড করে নিতে পারবেন।)</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='justify-center'>
                        <p className='bg-red-100 p-5 rounded'><FontAwesomeIcon className='text-4xl text-red-600' icon={faQuestion} /></p>
                    </div>
                    <div className='px-2'>
                        <p className='text-xl text-red-600'>কিভাবে পড়া বুঝিয়ে দেওয়া হবে?</p>
                        <p>বাংলায় পড়ানো হবে। কুরআনের আয়াত ও হাদিসের অর্থ ভেঙে ভেঙে বুঝিয়ে দেওয়া হবে। আপনাদেরকে আয়াত ও হাদিস মুখস্থ করানো হবে, তবে পরীক্ষায় লেখতে হবেনা। </p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='justify-center'>
                        <p className='bg-red-100 p-5 rounded'><FontAwesomeIcon className='text-4xl text-red-600' icon={faQuestion} /></p>
                    </div>
                    <div className='px-2'>
                        <p className='text-xl text-red-600'>ক্লাস কি লাইভ হবে?</p>
                        <p>না, লাইভ ক্লাস হবে না। তবে ক্লাসের নিদৃষ্ট সময় আছে, এই সময়ে পড়া দেওয়া হবে। ক্লাসের সময় উপস্থিত থাকতে পারলে ভালো। তবে অডিও লেকচার দেওয়া হবে, তাই পরেও শুনতে পারবেন। </p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='justify-center'>
                        <p className='bg-red-100 p-5 rounded'><FontAwesomeIcon className='text-4xl text-red-600' icon={faQuestion} /></p>
                    </div>
                    <div className='px-2'>
                        <p className='text-xl text-red-600'>ক্লাস মিস হলে কি করব?</p>
                        <p>ক্লাস মিস হলে কোন সমস্যা নেই। প্রতিটি দারস টেলিগ্রাম চ্যানেলে দেওয়া থাকবে। সেখান থেকে শুনে নিলেই হবে। ক্লাস টেস্টও যে কোন সময় দিতে পারবেন। তবে, সেমিস্টার পরীক্ষা নির্ধারিত সময়ের মধ্যেই দিতে হবে, পরে দেওয়া যাবে না।</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='justify-center'>
                        <p className='bg-red-100 p-5 rounded'><FontAwesomeIcon className='text-4xl text-red-600' icon={faQuestion} /></p>
                    </div>
                    <div className='px-2'>
                        <p className='text-xl text-red-600'>অডিওগুলো/দারসগুলো কি আমি কারো সাথে শেয়ার করতে পারব?</p>
                        <p>আপনি ব্যক্তিগতভাবে কাউকে দিতে চাইলে দিতে পারেন। যেমন, আপনার পরিবারের কোন সদস্য, বন্ধু, কলিগ ইত্যাদি। তবে কোন গ্রুপে/চ্যানেলে শেয়ার করবেন না। তবে, আপনি যা শিখছেন/শিখবেন, সেটার আপনার ভাষায়, সহজ ও সুন্দরভাবে মানুষকে বুঝাবেন এবং শিখাবেন।</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='justify-center'>
                        <p className='bg-red-100 p-5 rounded'><FontAwesomeIcon className='text-4xl text-red-600' icon={faQuestion} /></p>
                    </div>
                    <div className='px-2'>
                        <p className='text-xl text-red-600'>কিভাবে পুরষ্কার পাব?</p>
                        <p>যারা সেমিস্টার পরীক্ষাগুলোতে ভালো রেজাল্ট করবে, তাদের মধ্যে সেরা (লেভেল ১ এ ১০ জন, লেভেল ২+৩ এ ৫ জন) -কে পুরষ্কার দেওয়া হবে। </p>
                    </div>
                </div>
                
            </div>

           </section>

            
           {/* register now  */}
            <section className='mx-auto my-10 lg:w-1/3'>
                <Link to="/registration-aqeedah"><p className='p-3 bg-green-300 rounded shadow-md'>বিকাশ নাম্বার ও গ্রুপ লিংক এখানে <FontAwesomeIcon className='text-green-600' icon={faMousePointer} fade/></p></Link>
            </section>


           {/* course teacher  */}
           <section className='my-10'>
                <div className='flex flex-col md:flex-row items-center md:items-start'>
                    <div className='justify-center'>
                        <p className='bg-green-100 p-5 rounded'><FontAwesomeIcon className='text-4xl text-green-600' icon={faUser} /></p>
                    </div>
                    <div className='px-2'>
                        <p className='text-xl text-green-600'>শায়খ আব্দুল্লাহ আল বাকি (হাফি.)</p>
                        <p>কোর্স টিচার ও পরিচালক, আল হারামাইন ইসলামী একাডেমি।</p>
                        <p>দাঈ, ইসলামী দাওয়াহ এন্ড গাইডেন্স সেন্টার, পূর্ব জেদ্দা, সৌদি আরব।</p>
                        <p className='mt-5'>শায়খ দীর্ঘদিন যাবত দাওয়াতের সাথে যুক্ত আছেন, আল হামদুলিল্লাহ।</p>
                        <p>তিনি বাংলাদেশে পড়াশোনা (দাওয়ায়ে হাদিস, কামিল (হাদিস বিভাগ)) শেষ করে আরব (সৌদি আরব, কুয়েত) আলেমদের কাছে পড়াশোনা করেছেন এবং আক্বীদাহর উপরে ডিপ্লোমা করেছেন।</p>
                        <p className='mt-5'>তিনি ঢাকায় ২ বছর এবং রংপুরে ৫ বছর শিক্ষকতা করেছেন।</p>
                        <p>এছাড়াও দাওয়াতি কাজের অংশ হিসেবে কুয়েতি সংস্থায় (৫ বছর), জাপানে দাওয়াতি ট্যুর (১ মাস) সম্পন্ন করেছেন।</p>
                        <p>তিনি গত ১২ বছর থেকে জেদ্দা ইসলামী দাওয়াহ সেন্টারে যোগ্যতার সাথে দাওয়াতি কাজের সাথে যুক্ত আছেন এবং অনলাইনে বিশ্বের বিভিন্ন প্রান্তে ছড়িয়ে থাকা বাঙালি ভাই-বোনদের মাঝে ইসলামের শিক্ষা ছড়িয়ে দিতে কার্যক্রম পরিচালনা করছেন।</p>
                        <p className='mt-5'>আল্লাহ সুবহানাহু ওয়া তায়ালা তাকে হায়াতে ত্বয়্যেবা দান করুন এবং তার ইলম ও আমলে বারাকাহ দান করুন। তার ত্যাগ, শ্রম ও কাজগুলো কবুল করুন। আমীন।</p>
                    </div>
                </div>
           </section>


        </div>
    );
};

export default AqeedahInfo;