import { Link } from "react-router-dom";
import aqeedahThumbnail from "../assets/course_thumbnails/1.png"
import arabicThumbnail from "../assets/course_thumbnails/2.png"
import duaThumbnail from "../assets/course_thumbnails/3.png"
import fiqhThumbnail from "../assets/course_thumbnails/4.png"
import tafseerThumbnail from "../assets/course_thumbnails/5.png"
import seeratThumbnail from "../assets/course_thumbnails/6.png"



const Courses = () => {
  return (
    <div className="container mx-auto my-10 mb-40">
      <p className='text-center text-2xl'>আমাদের কোর্স সমূহ</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-x-10 md:gap-y-20 justify-items-center my-10 mx-4 md:mx-16">


    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="w-4/5" src={aqeedahThumbnail}/>
        </figure>
        <div className="card-body">          
          <h2 className="card-title">আক্বীদাহ কোর্স</h2>
          <p >কোর্সের মেয়াদ: ৭.৫ মাস</p>            
          <p >কোর্স টিচার: শায়খ আব্দুল্লাহ আল বাকি (হাফি.)</p>          
            <Link className="btn btn-success mt-3 outline-none" to='aqeedah'>বিস্তারিত দেখুন</Link>
          <div className="card-actions">
          </div>
        </div>
      </div>
    </div>


    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="w-4/5" src={arabicThumbnail}/>
        </figure>
        <div className="card-body">          
          <h2 className="card-title">আরবি ভাষা কোর্স</h2>
          <p >কোর্সের মেয়াদ: ১ বছর ৬ মাস</p>            
          <p >কোর্স টিচার: ফাইসাল আব্দুল্লাহ</p>          
            <Link className="btn btn-success mt-3 outline-none" to='arabic'>বিস্তারিত দেখুন</Link>
          <div className="card-actions">
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="w-4/5" src={duaThumbnail}/>
        </figure>
        <div className="card-body">          
          <h2 className="card-title">দোআ ও যিকির <div className="badge badge-info">রমাদান স্পেশাল কোর্স</div></h2>
          <p >কোর্সের মেয়াদ: ২৫ দিন</p>            
          <p >কোর্স টিচার: ফাইসাল আব্দুল্লাহ</p>          
            <Link className="btn btn-success mt-3 outline-none" to='dua'>বিস্তারিত দেখুন</Link>
          <div className="card-actions">
          </div>
        </div>
      </div>
    </div>


    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="w-4/5" src={fiqhThumbnail}/>
        </figure>
        <div className="card-body">          
          <h2 className="card-title">ইসলামী ফিহক</h2>
          <p >কোর্সের মেয়াদ: ৬ মাস</p>            
          <p >কোর্স টিচার: শায়খ আব্দুল্লাহ আল কাফী (রহি.)</p>          
            <Link className="btn btn-success mt-3 outline-none" to='fiqh'>বিস্তারিত দেখুন</Link>
          <div className="card-actions">
          </div>
        </div>
      </div>
    </div>


    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="w-4/5" src={tafseerThumbnail}/>
        </figure>
        <div className="card-body">          
          <h2 className="card-title">সংক্ষিপ্ত তাফসীর</h2>
          <p >কোর্সের মেয়াদ: ৩ মাস</p>            
          <p >কোর্স টিচার: শায়খ আব্দুল্লাহ আল কাফী (রহি.)</p>          
            <Link className="btn btn-success mt-3 outline-none" to='tafseer'>বিস্তারিত দেখুন</Link>
          <div className="card-actions">
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="w-4/5" src={seeratThumbnail}/>
        </figure>
        <div className="card-body">          
          <h2 className="card-title">সীরাতে নববী (সাঃ)</h2>
          <p >কোর্সের মেয়াদ: ৩ মাস</p>            
          <p >কোর্স টিচার: শায়খ আব্দুল্লাহ আল কাফী (রহি.)</p>          
            <Link className="btn btn-success mt-3 outline-none" to='seerat'>বিস্তারিত দেখুন</Link>
          <div className="card-actions">
          </div>
        </div>
      </div>
    </div>

      </div>
    </div>
  );
};

export default Courses;
