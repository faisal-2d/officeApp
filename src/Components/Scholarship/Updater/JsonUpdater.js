import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const JsonUpdater = () => {
    const { register, handleSubmit, reset, clearErrors, formState: { errors } } = useForm();

    const handleJsonUpdate = data => { 

        const  course = data.type;
        const  level = data.level;
        const  jsonData = JSON.parse(data.jsondata);
           

            if(course ==="aqeedah"){
                    console.log("I'm registering scolarship students!");
                        jsonData.map(data => {
                        
                            const insertData = {
                                "sn" : parseInt(data.sn),
                                "name" : data.name.toLowerCase(),
                                "fatherName" : data.fatherName.toLowerCase(),
                                "phone" : data.phone,
                                "gender" : data.gender,
                                "isAccepted" : false,
                                "applicationText" : data.applicationText,
                                "comment" : data.comment       
                            }
                        
                                axios.post(`${process.env.REACT_APP_BACKEND_API}/register/scholarship/aqeedah`, insertData)
                                .then(data => {
                                    console.log("Scholarship Stud " + insertData?.sn);
                                })
                            })

                    
                }
                else {
                    console.log("i cann't update, Data type is unknown!");
                }      
    // })


   
        }; 

        const placeholderText = `[ 
           
            Register:   Scholarship
            {
                "sn": 3,
                "name" : "faisal",
                "fatherName" : "abc",
                "phone" : "+966500171458",
                "gender" : "male",
                "isAccepted" : false,
                "applicationText" : "...please give me a chance...",
                "comment" : "thank you"
            },
]
    `;
   return (
        <div>

                <p className='text-2xl text-center mb-5'>Scholarship Entry</p>
        <section className='bg-green-200 p-5 rounded'>
                <p className='text-xl mb-5'>JSON</p>

            <form onSubmit={handleSubmit(handleJsonUpdate)}> 
                <div className='flex items-end gap-10 mb-5'>

                <div className="form-control">
                    <label className="label">
                    <span className="label-text">Course</span>
                    </label>
                    <label htmlFor="field-aqeedah" className='flex align-center mb-1' >
                        <input 
                            {...register("type")}
                            type="radio"
                            name="type"
                            value="aqeedah"
                            id="field-aqeedah"
                            className='radio mr-3 checked:bg-sky-500'
                        />
                        <span>Aqeedah</span>
                    </label>
                                    
                </div>

                {/* <div className="form-control">
                    <label className="label">
                    <span className="label-text">Level</span>
                    </label>
                    <label htmlFor="field-level1" className='flex align-center mb-1' >
                        <input 
                            {...register("level")}
                            type="radio"
                            name="level"
                            value="level1"
                            id="field-level1"
                            className='radio mr-3 checked:bg-pink-600'
                        />
                        <span>Level 1</span>
                    </label>
                    <label htmlFor="field-level2" className='flex align-center mb-1'>
                        <input
                            {...register("level")}
                            type="radio"
                            name="level"
                            value="level2"
                            id="field-level2"
                            className='radio mr-3 checked:bg-fuchsia-700'
                        />
                        <span>Level 2</span>
                    </label>                
                                 
                </div> */}
                


                
                    {/* <div className="form-control">
                    <label className="label">
                        <span className="label-text">Batch No</span>                    
                    </label>
                    <input type="text" placeholder="19" className="input input-bordered w-full max-w-xs" {...register("batch", { required: true })} />
                        {errors.batch?.type === 'required' && "Batch Number is required"}
                    </div> */}

                    {/* <div className="form-control">
                    <label className="label">
                        <span className="label-text">Exm</span>                    
                    </label>
                    <input type="text" placeholder="1" className="input input-bordered w-full max-w-xs"  {...register("exm")} />
                       
                    </div> */}

                    <button type='submit' className='btn btn-primary'>Upload</button>
                    {/* <button type='reset' onClick={() => reset()} className='btn btn-warning'>Reset</button> */}
                    <input onClick={() => clearErrors()} type="reset" className='btn btn-error'/>
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">JSON Data</span>                    
                </label>
                <textarea className="textarea textarea-bordered h-96" placeholder = {placeholderText} {...register("jsondata", { required: true })} />
                        {errors.jsondata?.type === 'required' && "JSON Data is required"}
                
                </div>
                
                </form>

            </section>

                
            
        </div>
    );
};

export default JsonUpdater;