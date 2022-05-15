import { faFacebookF, faTelegram, faWhatsapp, } from '@fortawesome/free-brands-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../assets/whiteLogo-01.png'

const Footer = () => {
    const date = new Date(); 
    const year = date.getFullYear();

    // https://www.facebook.com/alharamain.ac
    // https://t.me/alharamain_islamic_academy
    // https://wa.me/qr/FQ5QQ5S5UDRQI1
    // https://www.facebook.com/groups/789770204801843/

    return (
    <footer className="footer justify-around justify-items-center items-center p-4 px-10 bg-sky-900 text-white">  
  <label htmlFor="my-modal-3">
  <div className="grid-flow-col gap-4">
  <FontAwesomeIcon className='px-2' icon={faFacebookF}size="2x"/>  
  <FontAwesomeIcon className='px-2' icon={faTelegram} size="2x"/>  
  <FontAwesomeIcon className='px-2' icon={faWhatsapp} size="2x"/>  
  <FontAwesomeIcon className='px-2' icon={faUserGroup} size="2x"/> 
  </div>
  </label>
  
    <img src={logo} alt="" />
    <p>Copyright © {year} - All right reserved</p>

    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal py-10">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle bg-orange-600 absolute right-2 top-2">✕</label>
    <h3 className="text-lg text-orange-600 font-bold mb-5">Join Us!</h3>
    <div className='grid grid-cols-2 gap-2'>
    <a target='_blank' href='https://www.facebook.com/alharamain.ac' className="btn py-4 bg-sky-700">Facebook <FontAwesomeIcon className='px-2' icon={faFacebookF}/></a>
    <a target='_blank' href='https://www.facebook.com/groups/789770204801843/' className="btn py-4 bg-sky-700">Community <FontAwesomeIcon className='px-2' icon={faUserGroup}/></a>
    <a target='_blank' href='https://t.me/alharamain_islamic_academy' className="btn py-4 bg-sky-900">Telegram <FontAwesomeIcon className='px-2' icon={faTelegram}/></a>
    <a target='_blank' href='https://wa.me/qr/FQ5QQ5S5UDRQI1' className="btn py-4 bg-green-600">WhatsApp <FontAwesomeIcon className='px-2' icon={faWhatsapp}/></a>
    </div>
  </div>
</div>
</footer>
        
    );
};

export default Footer;