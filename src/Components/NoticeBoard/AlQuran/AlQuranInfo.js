import {
  faCircleCheck,
  faMoneyBill1,
} from "@fortawesome/free-regular-svg-icons";
import { faRecordVinyl, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import partyFlag from "../../../assets/partyFlag.png";
import quran_class_img from "../../../assets/quran_tajweed/female_teacher.png";
import male_teacher from "../../../assets/quran_tajweed/online_quran_male.png";
import reciting from "../../../assets/quran_tajweed/quran_class_2.png";
import timer_20_mins from "../../../assets/quran_tajweed/timer_20_mins.png";

export default function AlQuranInfo() {
  return (
    <div className="container mx-auto px-5 my-10">
      <section>
        <div className="rounded bg-gradient-to-tl from-sky-200 flex justify-between">
          <div className="p-5">
            <p className="text-3xl">আল কুরআন কোর্সে</p>
            <p className="text-4xl">স্বাগতম!</p>
          </div>
          <div className="p-5 hidden md:inline">
            <div className="flex justify-between">
              <div className="text-right font-serif align-middle mr-10">
                <p className="text-4xl ">دورة تلاوة القرآن</p>
                <p className="text-2xl">و تحفيظه</p>
              </div>
              <div>
                <img src={partyFlag} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Descripttion  */}
      <section className="my-10">
        <p className="text-xl">
          কোর্স পরিচিতিঃ{" "}
          <span className="badge bg-pink-300">শুধুমাত্র মহিলাদের জন্য</span>
        </p>
        <p>
          আপনি কি কোন উস্তাদার তত্ত্বাবধানে কুরআন খতম (তেলাওয়াত, হিফজ) করতে
          চাচ্ছেন? তাহলে আমাদের এই প্রোগ্রামটি আপনার জন্য!
        </p>
        <p>
          এই কোর্সে তাজউইদ শেখানো হবে না। যারা ইতিমধ্যে তাজউইদ জানেন, তারা
          শুদ্ধভাবে সম্পূর্ণ কুরআন খতম (তেলাওয়াত, হিফজ) করার জন্য এই প্রোগ্রামে
          জয়েন করুন।
        </p>
        <p>
          যদি তাজউইদের বেসিক নিয়মগুলো জেনে থাকেন, তাহলে আজ থেকেই তেলাওয়াত
          (নাজেরা) বা হিফজ শুরু করুন।
        </p>
      </section>

      {/* study method  */}
      <section className="mt-20 mb-10">
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="mb-8 md:mb-0">
            <img className="rounded-lg" src={quran_class_img} />
          </div>
          <div>
            <p className="text-xl my-4">এক নজরে</p>

            <p>
              <FontAwesomeIcon
                className="text-green-600 pr-2"
                icon={faCircleCheck}
              />
              শুধুমাত্র মহিলাদের জন্য
            </p>
            <p>
              <FontAwesomeIcon
                className="text-green-600 pr-2"
                icon={faUserGroup}
              />
              আসন সীমিতঃ মাত্র ৮ জন
            </p>
            <p>
              <FontAwesomeIcon
                className="text-red-600 pr-2"
                icon={faRecordVinyl}
                fade
              />
              ওয়ান-টু-ওয়ান লাইভ ক্লাস
            </p>
            <p>
              <FontAwesomeIcon
                className="text-green-600 pr-2"
                icon="fa-solid fa-clock"
              />
              সপ্তাহে ২ দিন
            </p>
          </div>
        </div>
      </section>

      {/* How to select best students */}
      {/* <section className="my-20">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="order-2">
            <p className="text-xl my-4">কিভাবে সেরা ৬ জনকে পুরষ্কৃত করা হবে?</p>
            <p>
              আমরা পুরুষদের গ্রুপ থেকে সেরা ৩ জনকে এবং মহিলাদের গ্রুপ থেকে সেরা
              ৩ জনকে পুরষ্কৃত করব।{" "}
            </p>
            <p>
              আমাদের এই বিশেষ কোর্সে কোন পরীক্ষা থাকবে না। এখানে আমাদের
              প্রতিযোগিতার চেয়ে সহযোগিতা বেশি প্রয়োজন।
            </p>
            <br></br>
            <p>
              সেরা ৩ জনকে নির্বাচিত করার জন্য আমরা একটি বিশেষ পদ্ধতি অনুসরন করব।
            </p>
            <p>
              একজন শিক্ষার্থী প্রতিদিন{" "}
              <span className="px-2 bg-yellow-300 rounded-full">২ পয়েন্ট</span>{" "}
              পাবেন, যদি তিনি
            </p>
            <p>
              <span className="px-2 bg-green-300 rounded-full">১ পয়েন্ট</span>{" "}
              অন্তত ১টি নতুন দোআ মুখস্থ করেন
            </p>
            <p>
              <span className="px-2 bg-green-300 rounded-full">১ পয়েন্ট</span>{" "}
              কাউকে অন্তত ১টি নতুন দোআ শিখান। হতে পারে তার পরিবারের কোন সদস্য,
              বন্ধু, কলিগ বা পরিচিত কেউ।
            </p>
            <p>
              ২৫ দিনের ক্লাসে ২৫x২=৫০ পয়েন্ট পাবেন। যিনি সবচেয়ে বেশি পয়েন্ট
              পাবেন, তিনি বিজয়ী হবেন।
            </p>
            <br></br>
            <p>
              এভাবে শুধু আপনিই উপকৃত হবেন না, আপনার পরিবার, বন্ধু-বান্ধব,
              কলিগরাও উপকৃত হবে। ইনশাআল্লাহ।
            </p>
            <br></br>
            <p>
              অন্য কারো সাথে আপনার প্রতিযোগিতা নেই, প্রতিযোগিতা শুধু নিজের সাথে।
            </p>
            <br></br>
            <p>
              প্রতিদিন ছোট একটি টাস্ক। একটি নতুন দোআ নিজে শিখুন, অন্যকে শেখান।
            </p>
            <p>চ্যালেঞ্জটা নিবেন নাকি?</p>
          </div>
          <div className="order-1 md:order-3">
            <img className="rounded-lg block mx-auto my-10 " src={trophy_img} />
          </div>
        </div>
      </section> */}

      {/* Schedule  */}
      {/* <section className="my-24">
        <div className="flex items-center">
          <span className="text-xl">ক্লাসের সময়ঃ </span>
          <div className="ml-3">
            <img className="" src={bd_flag} alt="" />
          </div>
          <span className="ml-3">বাংলাদেশের সময় অনুযায়ী</span>
        </div>
        <Tajweed1Schedule />
      </section> */}

      {/* admission system  */}
      <section className="my-20">
        <p className="text-xl my-4">কিভাবে ভর্তি হবেন?</p>
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="md:order-1">
            <div className="relative overflow-hidden  w-56 h-28 rounded py-2 px-5 mx-auto my-5 md:my-0 bg-gradient-to-tl from-cyan-200 to-cyan-100">
              <div className="flex justify-between">
                <div className="mr-10">
                  <p>ফীঃ প্রতি মাসে</p>
                </div>
                <FontAwesomeIcon
                  className={`text-2xl text-cyan-600 `}
                  icon={faMoneyBill1}
                />
              </div>
              <FontAwesomeIcon
                className="text-8xl absolute -ml-16 mt-2 opacity-10 text-inherit"
                icon="fa-regular fa-circle"
              />
              <p
                className={`text-center font-bold text-xl my-2 text-cyan-600 `}
              >
                <span className="uppercase font-bold text-2xl">৳২০০০</span>
              </p>
            </div>
          </div>

          <div className="md:order-2 text-center my-5 md:my-0">
            <img className="mx-auto" src={timer_20_mins} alt="" />
          </div>

          <div className="md:col-span-2">
            <div>
              <p>
                এই কোর্সে নির্ধারিত সময়-কাল নেই। আপনি যতোদিন পড়তে চান, পড়তে
                পারবেন। প্রতি মাসে ফী ২০০০ টাকা।
              </p>
              <p>
                সপ্তাহে ২ দিন পড়ানো হয়, (উস্তাদার সাথে কথা বলে) আপনার সুবিধামতো
                যে কোন ২ দিন পড়তে পারবেন।
              </p>
              <p>
                লাইভ ক্লাসে ওয়ান-টু-ওয়ান ২০ মিনিট সময় পড়া দিতে পারবেন। ২০
                মিনিটের চেয়ে বেশি সময় পড়তে চাইলে সে অনুযায়ী ফী দিতে হবে।
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="my-40">
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div>
            <img src={reciting} alt="" />
          </div>
          <div>
            <h3 className="text-xl text-teal-600 my-5">
              আপনি কি তাজউইদ শিখতে চান?
            </h3>
            <p>
              আপনি যদি কুরআন পড়তে না জানেন, তাজউইদ না জানেন, আমাদের তাজউইদ
              কোর্সে ভর্তি হতে পারেন।
            </p>
            <p>
              তাজউইদের অন্তত বেসিক নিয়মগুলো জেনে তারপর কুরআন পড়া শুরু করা উচিত।
            </p>
            <p>
              কোর্স সম্পর্কে বিস্তারিত দেখুন এখানে
              <Link
                className="ml-5 btn btn-warning btn-sm px-3  "
                to="/courses/tajweed"
              >
                সহজ তাজউইদ
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section>{/* <TajweedNextBatch /> */}</section>

      {/* Male Teacher  */}
      <section className="my-32">
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div>
            <img src={male_teacher} alt="" />
          </div>
          <div>
            <h3 className="text-xl text-sky-600 my-5">
              আপনার সন্তানের জন্য পুরুষ উস্তাদ প্রয়োজন?
            </h3>
            <p>
              যেহেতু এই কোর্সটি শুধুমাত্র বোনদের জন্য, তাই ভাইদের কথা চিন্তা করে
              আলাদা ব্যবস্থা রাখা হয়েছে।
            </p>
            <p>
              ভাইদেরকে কোর্স করানো হবে না, তবে একজন উস্তাদের কাছে ১-১ লাইভ ক্লাস
              করতে পারবেন। বিশেষভাবে, প্রবাসী ভাইরা উপকৃত হবেন, ইনশাআল্লাহ।
            </p>
            <p>
              তাই আপনার ভাই, ছেলে বা অন্য কারো জন্য পুরুষ উস্তাদের প্রয়োজন হলে
              আমাদের সাথে যোগাযোগ করতে পারেন।
            </p>
          </div>
        </div>
      </section>

      {/* FAQs  */}
      {/* <section className="my-10">
        <div className="divider text-4xl text-slate-500 my-20">FAQs</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:mx-32">
          <div className="flex">
            <div className="justify-center">
              <p className="bg-red-100 p-5 rounded">
                <FontAwesomeIcon
                  className="text-4xl text-red-600"
                  icon={faQuestion}
                />
              </p>
            </div>
            <div className="px-2">
              <p className="text-xl text-red-600">ক্লাস কিভাবে হবে?</p>
              <p>
                প্রতিদিন ফজরের নামাযের পর ৫/৬টি দোআর অডিও/ভিডিও দেওয়া হবে।
                সারাদিন এই অডিও শুনবেন এবং মুখস্থ করবেন। টেলিগ্রাম গ্রুপ ও
                চ্যানেলের মাধ্যমে ক্লাস হবে।{" "}
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="justify-center">
              <p className="bg-red-100 p-5 rounded">
                <FontAwesomeIcon
                  className="text-4xl text-red-600"
                  icon={faQuestion}
                />
              </p>
            </div>
            <div className="px-2">
              <p className="text-xl text-red-600">কোর্সটি কতদিন চলবে?</p>
              <p>
                এটি রমাদান স্পেশাল কোর্স, তাই শুধুমাত্র রমাদানেই কোর্সটি চলবে।
                ১ম রমাদান থেকে ২৫ রমাদান পর্যন্ত।{" "}
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="justify-center">
              <p className="bg-red-100 p-5 rounded">
                <FontAwesomeIcon
                  className="text-4xl text-red-600"
                  icon={faQuestion}
                />
              </p>
            </div>
            <div className="px-2">
              <p className="text-xl text-red-600">কিভাবে পড়া নেওয়া হবে?</p>
              <p>
                প্রতিদিন যে দোআগুলো দেওয়া হবে, সেগুলো মুখস্থ হয়ে গেলে গ্রুপে
                রেকর্ড দিবেন। চেষ্টা করবেন, দুপুরের আগেই দোআগুলো মুখস্থ করে
                ফেলতে।{" "}
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="justify-center">
              <p className="bg-red-100 p-5 rounded">
                <FontAwesomeIcon
                  className="text-4xl text-red-600"
                  icon={faQuestion}
                />
              </p>
            </div>
            <div className="px-2">
              <p className="text-xl text-red-600">
                কোর্সে কি যে কেউ ভর্তি হতে পারবে?
              </p>
              <p>
                জি, ১৫ বছরের বেশি বয়সী, যে কোন শ্রেণি-পেশার মানুষ যে কেউ এই
                কোর্সে ভর্তি হতে পারবে।{" "}
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="justify-center">
              <p className="bg-red-100 p-5 rounded">
                <FontAwesomeIcon
                  className="text-4xl text-red-600"
                  icon={faQuestion}
                />
              </p>
            </div>
            <div className="px-2">
              <p className="text-xl text-red-600">ক্লাস কি লাইভ হবে?</p>
              <p>
                জি, লাইভ ক্লাস হবে, তবে আপনি দিনের যে কোন সময় পড়া দিতে পারবেন।
                আপনার যখনি দোআ মুখস্থ হবে, সাথে সাথে গ্রুপে অডিও মেসেজ পাঠিয়ে
                দিবেন।{" "}
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="justify-center">
              <p className="bg-red-100 p-5 rounded">
                <FontAwesomeIcon
                  className="text-4xl text-red-600"
                  icon={faQuestion}
                />
              </p>
            </div>
            <div className="px-2">
              <p className="text-xl text-red-600">
                মেয়েদের জন্য কি আলাদা উস্তাদা থাকবেন?
              </p>
              <p>
                জি, মেয়েদের জন্য ডেডিকেটেড একজন উস্তাদা থাকবেন। যিনি শুধুমাত্র
                মেয়েদের পড়া নিবেন এবং কোথাও ভুল হলে শুধরে দিবেন।
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="justify-center">
              <p className="bg-red-100 p-5 rounded">
                <FontAwesomeIcon
                  className="text-4xl text-red-600"
                  icon={faQuestion}
                />
              </p>
            </div>
            <div className="px-2">
              <p className="text-xl text-red-600">
                ভিডিও/অডিওগুলো কি আমি কারো সাথে শেয়ার করতে পারব?
              </p>
              <p>জি, যতো ইচ্ছা শেয়ার করতে পারবেন। </p>
            </div>
          </div>
          <div className="flex">
            <div className="justify-center">
              <p className="bg-red-100 p-5 rounded">
                <FontAwesomeIcon
                  className="text-4xl text-red-600"
                  icon={faQuestion}
                />
              </p>
            </div>
            <div className="px-2">
              <p className="text-xl text-red-600">কিভাবে পুরষ্কার পাব?</p>
              <p>
                প্রতিদিন অন্তত ১টি নতুন দোআ মুখস্থ করুন এবং অন্য কাউকে ১টি নতুন
                দোআ শেখান।{" "}
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="my-28 lg:w-1/3 mx-auto">
        <Link to="/registration-dua">
          <p className="p-3 bg-orange-200 rounded shadow-md">
            ভর্তি ফর্ম এবং গ্রুপ লিংক এখানে{" "}
            <FontAwesomeIcon
              className="text-orange-600"
              icon={faMousePointer}
              fade
            />
          </p>
        </Link>
      </section> */}
    </div>
  );
}
