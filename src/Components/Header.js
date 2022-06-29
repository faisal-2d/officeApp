import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/blackLogo-01.png'

const Header = () => {
    const menu = <>
    <li><Link to="/">হোম</Link></li>        
    <li><Link to="/courses">কোর্স সমূহ</Link></li>        
    <li><Link to="/schedule">ক্লাসের সময়</Link></li>    
    <li><Link to="/noticeboard">নোটিশ বোর্ড</Link></li>    
    <li><Link to="/about-us">আমাদের সম্পর্কে</Link></li>        
    <li><Link to="/registration" className="btn btn-ghost text-red-500">রেজিস্ট্রেশন</Link></li>        
    </>
    return (  
            <div className="container mx-auto navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menu}
      </ul>
    </div>
    <Link to="/"><img className='w-auto' src={logo} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {menu}
    </ul>
  </div>
  <div className="navbar-end">
  <Link to="/about-us">লগ ইন</Link>
  </div>
</div>       
    );
};

export default Header;