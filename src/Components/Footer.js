import { faFacebook, faFacebookF, faFacebookMessenger, faInstagram, faTelegram, faWhatsapp, faYoutube, } from '@fortawesome/free-brands-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/blackLogo-01.png'

const Footer = () => {
    const date = new Date(); 
    const year = date.getFullYear();
 

 return ( 
<div>
 
<footer className="footer p-10 bg-base-200 text-base-content">
  <div>
    <span className="footer-title">কোর্স সমূহ</span>    
    <Link className="link link-hover" to='/courses/aqeedah'>আক্বিদাহ</Link>
    <Link className="link link-hover" to='/courses/dua'> দোআ ও যিকির {/*<span className="badge badge-error">নতুন</span>*/}</Link>    
    <Link className="link link-hover" to='/courses/arabic'>আরবি ভাষা</Link>
    <Link className="link link-hover" to='/courses'>সকল কোর্স</Link>
  </div> 
  <div>
    <span className="footer-title">প্রতিষ্ঠান</span> 
    <Link className="link link-hover" to='/registration'>রেজিস্ট্রেশন</Link> 
    <Link className="link link-hover" to='/about-us'>আমাদের সম্পর্কে</Link> 
   
  </div> 
  <div>
    <span className="footer-title">সাপোর্ট</span> 
    <Link className="link link-hover" to='/aqeedah-due'>বকেয়া পরিশোধ করুন</Link>
    <p className="">এডমিন</p> 
    <p className="">+966578621278</p> 

  </div>
</footer> 
<footer className="mb-10 footer flex md:flex-row flex-col justify-between items-center   px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
  <div className="items-center grid-flow-col order-2">
      <img src={logo} alt="" />      
  </div> 
  <div className="md:place-self-center md:justify-self-end order-1 md:order-3">    
    <div className=''>
    <div className="grid grid-flow-col gap-4">
      <a className='text-2xl text-red-600' href='https://www.youtube.com/@alharamainislamicacademy' target='_blank'><FontAwesomeIcon className='' icon={faYoutube}></FontAwesomeIcon></a> 
      <a className='text-2xl text-blue-600' href='https://www.facebook.com/alharamain.ac' target='_blank'><FontAwesomeIcon className='' icon={faFacebook}></FontAwesomeIcon></a> 
      <a className='text-2xl text-pink-600' href='https://www.instagram.com/alharamain.ac/' target='_blank'><FontAwesomeIcon className='' icon={faInstagram}></FontAwesomeIcon></a> 
      <a className='text-2xl text-indigo-600' href='https://m.me/alharamain.ac' target='_blank'><FontAwesomeIcon className='' icon={faFacebookMessenger}></FontAwesomeIcon></a> 
      <a className='text-2xl text-green-600' href='https://wa.me/966578621278' target='_blank'><FontAwesomeIcon className='' icon={faWhatsapp}></FontAwesomeIcon></a> 
      <a className='text-2xl text-sky-600' href='https://t.me/+966578621278' target='_blank'><FontAwesomeIcon className='' icon={faTelegram}></FontAwesomeIcon></a> 
      
    </div>
    </div>
  </div>
</footer>
</div>
        
    );
};

export default Footer;