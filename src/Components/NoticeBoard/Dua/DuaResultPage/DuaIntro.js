import { faCheckCircle } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DuaIntro = () => {
  return (
    <section className="mt-20 mb-10">
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="mb-8 md:mb-0">
          <iframe
            className="w-max rounded"
            height="315"
            src="https://www.youtube.com/embed/p7aBOQyG0aE?si=zFODydzAtzszoGuU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <p className="text-xl my-4">কোর্সটি কেন করবেন?</p>
          <div>
            <p>
              <FontAwesomeIcon
                className="text-green-700 pr-2"
                icon={faCheckCircle}
              />
              কুরআন ও হাদিসে বর্ণিত দোআগুলো শিখতে পারবেন।{" "}
            </p>
            <p>
              <FontAwesomeIcon
                className="text-green-700 pr-2"
                icon={faCheckCircle}
              />
              বিভিন্ন নবী-রাসূল (আঃ) এর দোআ শিখতে পারবেন।{" "}
            </p>
            <p>
              <FontAwesomeIcon
                className="text-green-700 pr-2"
                icon={faCheckCircle}
              />
              যেকোন সময় পড়ার মতো ১০০টি দোআ ও যিকির শিখতে পারবেন।{" "}
            </p>
            <p>
              <FontAwesomeIcon
                className="text-green-700 pr-2"
                icon={faCheckCircle}
              />
              বিষয়ভিত্তিক দোআগুলোতে "সকালে ঘুম থেকে উঠা" থেকে "রাতে ঘুমাতে
              যাওয়া" পর্যন্ত ৫০টি দোআ অন্তর্ভূক্ত।{" "}
            </p>
            <p>
              <FontAwesomeIcon
                className="text-green-700 pr-2"
                icon={faCheckCircle}
              />
              কোন পরীক্ষা নেই।{" "}
            </p>
            <p>
              <FontAwesomeIcon
                className="text-green-700 pr-2"
                icon={faCheckCircle}
              />
              এই কোর্সে আপনি নিজেও শিখবেন, অন্যদেরকেও শিখাবেন।
            </p>
            <p>
              <FontAwesomeIcon
                className="text-green-700 pr-2"
                icon={faCheckCircle}
              />
              রমাদানের সময়গুলো একটি নিয়মের মধ্যে কাটাতে পারবেন।{" "}
            </p>
            <p>
              <FontAwesomeIcon
                className="text-green-700 pr-2"
                icon={faCheckCircle}
              />
              এই দোআগুলো মানুষকে বেশি বেশি শেখানোর মাধ্যমে আপনার পরিবার ও সমাজ
              থেকে বিদআতী যিকির দূর করতে পারবেন।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DuaIntro;
