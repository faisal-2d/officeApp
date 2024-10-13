import aqeedahThumbnail from "../assets/course_thumbnails/1.png";
import arabicThumbnail from "../assets/course_thumbnails/2.png";
import duaThumbnail from "../assets/course_thumbnails/3.png";
import fiqhThumbnail from "../assets/course_thumbnails/4.png";
import tafseerThumbnail from "../assets/course_thumbnails/5.png";
import seeratThumbnail from "../assets/course_thumbnails/6.png";
import quranThumbnail from "../assets/course_thumbnails/7.png";
import tajweedThumbnail from "../assets/course_thumbnails/8.png";
import CourseCard from "./CourseCard";

const Courses = () => {
  return (
    <div className="container mx-auto my-10 mb-40">
      <p className="text-center text-2xl">আমাদের কোর্স সমূহ</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-x-10 md:gap-y-20 justify-items-center my-10 mx-4 md:mx-16">
        <CourseCard
          course={{
            img: aqeedahThumbnail,
            name: "আক্বীদাহ কোর্স",
            duration: "৭.৫ মাস",
            teacher: "শায়খ আব্দুল্লাহ আল বাকি (হাফি.)",
            info: "aqeedah",
          }}
        />
        <CourseCard
          course={{
            img: seeratThumbnail,
            name: "সীরাতুন নববী (সাঃ)",
            duration: "৩ মাস",
            teacher: "শায়খ আব্দুল্লাহ আল কাফী (রহি.)",
            info: "seerat",
          }}
        />
        <CourseCard
          course={{
            img: tajweedThumbnail,
            name: "তাজউইদ কোর্স",
            duration: "১ বছর ৩ মাস",
            teacher: "উস্তাদা শামসুন্নাহার",
            info: "tajweed",
            badge: "শুধুমাত্র মহিলাদের জন্য",
            badge_cls: "bg-pink-300",
          }}
        />
        <CourseCard
          course={{
            img: quranThumbnail,
            name: "আল কুরআন কোর্স",
            duration: "১ বছর",
            teacher: "উস্তাদা হাবিবা সাদিয়া",
            info: "alquran",
            badge: "শুধুমাত্র মহিলাদের জন্য",
            badge_cls: "bg-pink-300",
          }}
        />
        <CourseCard
          course={{
            img: arabicThumbnail,
            name: "আরবি ভাষা কোর্স",
            duration: "১ বছর ৬ মাস",
            teacher: "ফাইসাল আব্দুল্লাহ",
            info: "arabic",
          }}
        />
        <CourseCard
          course={{
            img: duaThumbnail,
            name: "দোআ ও যিকির",
            duration: "২৫ দিন",
            teacher: "ফাইসাল আব্দুল্লাহ",
            info: "dua",
            badge: "রমাদান স্পেশাল কোর্স",
            badge_cls: "badge-info",
          }}
        />
        <CourseCard
          course={{
            img: fiqhThumbnail,
            name: "ইসলামী ফিহক",
            duration: "৬ মাস",
            teacher: "শায়খ আব্দুল্লাহ আল কাফী (রহি.)",
            info: "fiqh",
          }}
        />
        <CourseCard
          course={{
            img: tafseerThumbnail,
            name: "সংক্ষিপ্ত তাফসীর",
            duration: "৩ মাস",
            teacher: "শায়খ আব্দুল্লাহ আল কাফী (রহি.)",
            info: "tafseer",
          }}
        />
      </div>
    </div>
  );
};

export default Courses;
