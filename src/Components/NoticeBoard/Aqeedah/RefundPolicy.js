import { faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import refund_img from '../../../assets/refund.png'

const RefundPolicy = () => {
  return (
    <div className='mt-28 flex flex-col md:flex-row justify-center items-center'>
        <div className='order-2'>
        <h3 className='text-2xl'>রিফান্ড পলিসি</h3>
        <p className='my-5'>যদি আপনি কোর্সে ভর্তি হয়ে সন্তুষ্ট না হন বা কোর্স ফী ফেরত পেতে চান, তাহলে আপনাকে সাহায্য করতে আমরা প্রস্তুত। তবে এই ব্যাপারগুলো অবশ্যই খেয়াল রাখবেন -</p>
        
        <p><span className='font-bold text-green-600'><FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> প্রথম ১ সপ্তাহের মধ্যে জানাতে হবে।</span> ক্লাস শুরুর দিন থেকে ৭ দিনের মধ্যে জানাতে হবে।</p>
        <p><span className='font-bold text-green-600'><FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> রিফান্ড পেতে কি করবেনঃ</span> আমাদের ফেসবুক পেইজে বা টেলিগ্রামে আমাদের কোন অ্যাডমিনের সাথে যোগাযোগ করবেন।</p>
        <p><span className='font-bold text-green-600'><FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> অবহেলা করলে রিফান্ড পাবেন না।</span>ভর্তি হওয়ার পর পড়াশোনা না করলে, পরীক্ষা না দিলে, কোর্সের সাথে না থাকলে আপনাকে কোর্স ফী ফেরত দেওয়া হবে না।</p>
        <p><span className='font-bold text-green-600'><FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> রিফান্ড পেতে কতো সময় লাগতে পারেঃ</span> আমাদের সাথে যোগাযোগ করলে অতি দ্রুত আমরা ব্যবস্থা নিব। সাধারণত ১ দিনের মধ্যেই রিফান্ড পেয়ে যাবেন।</p>
        <p className='mt-5'>কোর্সে ভর্তির পরে যদি নিয়মিত পড়াশোনা না করেন, পরীক্ষা না দেন, এবং উল্লেখিত নিয়ম অনুযায়ী আমাদেরকে না জানান, কোর্সে অনুপস্থিত বা ইনঅ্যাক্টিভ থাকেন, পরবর্তী ব্যাচে ভর্তি হতে চাইলে আপনাকে আবার পুরো ফী পরিশোধ করে ভর্তি হতে হবে।</p>

        </div>
        <div className='order-1 md:order-3 mb-16'>
            <img src={refund_img}></img>
        </div>
    </div>
  )
}

export default RefundPolicy