import React from 'react';
import { Link } from 'react-router-dom';
import Sprinner from '../../Loading/Sprinner';
import digitConverter from '../../tools/digitConverter';

const Dua = () => {
    const batchList = [2];
    return (
        <div className="my-10">
        <p className="text-center text-2xl">দোআ ও যিকির কোর্সের ব্যাচসমূহ</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-5 md:mx-10">
  
        {
          batchList.map((batch, index) => <div className="card bg-base-100 shadow-xl"
          key={index}        
          >
          <div className="card-body mx-auto">
            <h2 className="text-center text-3xl">ব্যাচ {digitConverter(batch)}</h2>          
            <div className="card-actions">
            <Link className="btn btn-primary btn-wide mt-5" to={`/dua-${batch}`}>প্রবেশ করুন</Link>
            </div>
          </div>
        </div>
          )
        }
  
        </div>

        <div>
        </div>
      </div>
    );
};

export default Dua;