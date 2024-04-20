import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const NewRegAqeedah = () => {
    const [studSn, setStudSn] = useState();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const batch = 22;
    useEffect(() => {
        axios.get(`https://alharamanin-backend-web.onrender.com/aqeedah/count/get/${batch}`)
        .then(data => setStudSn(data.data.result))
    },[])
    

    const handleFormSubmit = data =>{       
        
        const insertData = {
            "sn" : parseInt(data.sn),
            "name" : data.fullName.toLowerCase(),
            "fatherName" : data.fatherName.toLowerCase(),
            "phone" : data.phone,
            "gender" : data.gender,
            "aqeedah1payment" : data.payment,
            "aqeedah1data" : [{
                "name" : "Exm 1",
                "Score" : 0
              },{
                "name" : "Exm 2",
                "Score" : 0
              },{
                "name" : "Exm 3",
                "Score" : 0
              }
            ]            
            
        }
        
        axios.post(`https://alharamanin-backend-web.onrender.com/aqeedah/${batch}/register`, insertData)
        .then(data => {setStudSn(studSn+1)})
        reset();    
        }; 

    return (
        <div className='min-h-screen container mx-auto my-10 px-5'>
            <p className='text-center text-2xl text-primary'>Register New Student : Aqeedah {batch}</p>
            <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
            <div className="card-body">
       <form onSubmit={handleSubmit(handleFormSubmit)}> 
       <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>             
       <div>             
      
      <div className='flex gap-10'>
      <div className="form-control">
        <label className="label">
          <span className="label-text">SN</span>
        </label>
        <div className="mb-3">
            {/* <input type="text" placeholder="SN" className="input input-bordered w-20" {...register("sn", { required: true })} /> */}
             
            { studSn 
                ? <input type="text" placeholder="SN" className="input input-bordered w-20" defaultValue={studSn+1}  {...register("sn", { required: true })} />
                : <button className="btn btn-square loading"></button>
            }
            {errors.sn?.type === 'required' && "Serial Number is required"}
        </div>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Phone</span>
        </label>
        <div className="mb-3">
            <input type="text" placeholder="****" className="input input-bordered w-full max-w-xs"  {...register("phone", { required: true })} />
            {errors.phone?.type === 'required' && "Phone Number is required"}
        </div>
      </div>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Full Name</span>
        </label>
        <div className="mb-3">
            <input type="text" placeholder="Full Name" className="input input-bordered w-full max-w-xs"  {...register("fullName", { required: true })} />
            {errors.fullName?.type === 'required' && "Student's name is required"}
        </div>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Father's Name</span>
        </label>
        <div className="mb-3">
            <input type="text" placeholder="Father's Name" className="input input-bordered w-full max-w-xs"  {...register("fatherName")} />
        </div>
      </div>
      
      

      </div>
      <div>
      
      <div className="form-control">
        <label className="label">
          <span className="label-text">Gender</span>
        </label>
        <label htmlFor="field-male" className='flex align-center mb-1' >
            <input 
                {...register("gender")}
                type="radio"
                name="gender"
                value="male"
                id="field-male"
                className='radio mr-3 checked:bg-sky-500'
            />
            <span>Male</span>
        </label>
        <label htmlFor="field-female" className='flex align-center mb-1'>
            <input
                {...register("gender")}
                type="radio"
                name="gender"
                value="female"
                id="field-female"
                className='radio mr-3 checked:bg-pink-500'
            />
            <span>Female</span>
        </label>                
      </div>
      <div className="form-control mt-5">
        <label className="label">
          <span className="label-text">Payment</span>
        </label>
        <label htmlFor="field-paid" className='flex align-center mb-1' >
            <input 
                {...register("payment")}
                type="radio"
                name="payment"
                value="paid"
                id="field-paid"
                className='radio mr-3 checked:bg-green-500'
            />
            <span>Paid</span>
        </label>
        <label htmlFor="field-due" className='flex align-center mb-1'>
            <input
                {...register("payment")}
                type="radio"
                name="payment"
                value="due"
                id="field-due"
                className='radio mr-3 checked:bg-orange-500'
            />
            <span>Due</span>
        </label>                
        <label htmlFor="field-scholarship" className='flex align-center mb-1'>
            <input
                {...register("payment")}
                type="radio"
                name="payment"
                value="scholarship"
                id="field-scholarship"
                className='radio mr-3 checked:bg-cyan-500'
            />
            <span>Scholarship</span>
        </label>                
      </div>

      <div className="form-control mt-10">        
          <button type='submit' className="btn btn-primary w-full max-w-xs">Register</button>
      </div>        
      </div>

      </div>

      </form>
      </div>
      </div>
        </div>
    );
};

export default NewRegAqeedah;