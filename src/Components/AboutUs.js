import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <p className="text-center text-2xl">আমাদের সম্পর্কে জানতে আগ্রহী হওয়ার জন্য ধন্যবাদ</p>
      <div className="my-5 w-4/5 mx-auto">
      <div tabIndex="0"className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
          এই প্রতিষ্ঠানটি কাদের দ্বারা পরিচালিত?
        </div>
        <div className="collapse-content">
          <p>এই প্রতিষ্ঠানটি বিশ্বস্ত ও অভিজ্ঞ সালাফি আলেমদের দ্বারা পরিচালিত, যারা সৌদি আরবের বিভিন্ন দাওয়াহ সেন্টারে দীর্ঘদিন যাবত দাঈ হিসেবে সফলতার সাথে দায়িত্ব পালন করে আসছেন। </p>
        </div>
      </div>

      <div tabIndex="0"className="my-2 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
          এই কোর্সগুলো কি যে কেউ করতে পারবে?
        </div>
        <div className="collapse-content">
          <p>জি, এই কোর্সগুলো বাংলাভাষী যে কেউ করতে পারবে। যে কোন শ্রেণিপেশার মানুষ আমাদের কোর্স থেকে উপকৃত হতে পারে।</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
