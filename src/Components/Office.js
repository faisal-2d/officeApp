import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import useAdmin from './hooks/useAdmin';

const Office = () => {
    const [user, loading, error] = useAuthState(auth);
  const [admin, isLoading] = useAdmin(user);

  if(!admin){
    return <p className="min-h-screen container text-center text-3xl my-32 text-red-600">লাঞ্চের পরে আসেন!</p>
  }

    return (
        <div>
            {admin && <section className="my-10">
                <p className="text-center text-2xl">Hello Admin!</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-5 md:mx-10">

                

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                    <h2 className="card-title">আক্বিদাহ নতুন ভর্তি</h2>
                    <p>
                        আক্বিদাহ কোর্সের নতুন ব্যাচে ভর্তি করুন
                    </p>
                    <div className="card-actions justify-end">
                        <Link to='/new-aqeedah-registration'><button className="btn btn-success">প্রবেশ করুন</button></Link>
                    </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                    <h2 className="card-title">রেজাল্ট আপডেট</h2>
                    <p>
                        রেজাল্ট, লিডারবোর্ড ও সার্টিফিকেট আপডেট করুন
                    </p>
                    <div className="card-actions justify-end">
                        <Link to='/result-update'><button className="btn btn-success">প্রবেশ করুন</button></Link>
                    </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                    <h2 className="card-title">স্কলারশীপ</h2>
                    <p>
                        আবেদনকারীদের নাম, ফোন নাম্বার ও মন্তব্য
                    </p>
                    <div className="card-actions justify-end">
                        <Link to='/scholarship'><button className="btn btn-error">প্রবেশ করুন</button></Link>
                    </div>
                    </div>
                </div>

                

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                    <h2 className="card-title">আরবি নতুন ভর্তি</h2>
                    <p>
                        আরবি কোর্সের নতুন ব্যাচে ভর্তি করুন
                    </p>
                    <div className="card-actions justify-end">
                        <Link to='/new-arabic-registration'><button className="btn btn-success">প্রবেশ করুন</button></Link>
                    </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                    <h2 className="card-title">দোআ ও যিকির নতুন ভর্তি</h2>
                    <p>
                    দোআ ও যিকির কোর্সের নতুন ব্যাচে ভর্তি করুন
                    </p>
                    <div className="card-actions justify-end">
                        <Link to='/new-dua-registration'><button className="btn btn-success">প্রবেশ করুন</button></Link>
                    </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                    <h2 className="card-title">Student Import</h2>
                    <p>
                    এক ব্যাচ থেকে অন্য ব্যাচে স্টুডেন্ট ইম্পোর্ট
                    </p>
                    <div className="card-actions justify-end">
                        <Link to='/student-import'><button className="btn btn-secondary">প্রবেশ করুন</button></Link>
                    </div>
                    </div>
                </div>
                
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                    <h2 className="card-title">Certificate Name Query</h2>
                    <p>
                    সব কোর্সের স্টুডেন্টদের নাম
                    </p>
                    <div className="card-actions justify-end">
                        <Link to='/all-student-names'><button className="btn btn-warning">প্রবেশ করুন</button></Link>
                    </div>
                    </div>
                </div>
                


                

                




                </div>

            </section>}
        </div>
    );
};

export default Office;