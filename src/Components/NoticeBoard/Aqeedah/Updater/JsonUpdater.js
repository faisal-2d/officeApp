import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const JsonUpdater = () => {
    const [level3optHide, setLevel3optHide] = useState(false);
    const { register, handleSubmit, reset, clearErrors, formState: { errors } } = useForm();

    const handleJsonUpdate = data => { 

        const batchNo = parseInt(data.batch);
        const  exmNo = parseInt(data.exm);
        const  dateType = data.type;
        const  level = data.level;
        const  jsonData = JSON.parse(data.jsondata);



        // jsonData.map(data => {
           

                if(dateType ==="certificate"){
                    console.log("I'm uploading certificates");
                    jsonData.map(data => {
                        
                        axios.put(`https://alharamanin-backend-web.onrender.com/aqeedah${batchNo}/${level}/certificate/${data.sn}`, data)
                        .then(data => console.log("Certificate Updated - ",data.data))
                    })
                }
                
                else if(dateType ==="result"){
                    console.log("I'm uploading results");
                    jsonData.map(data => {
                        
                        let resultData;
                        
                        if(exmNo === 1){
                            resultData =  {   
                            "name" : "Exm 1",
                            "Score" : data.score             
                        }                        
                        
                    } else if(exmNo === 2){
                        resultData =  {   
                            "name" : "Exm 2",
                            "Score" : data.score             
                        }                   
                    }else if(exmNo === 3){
                        resultData =  {   
                            "name" : "Exm 3",
                            "Score" : data.score             
                        }                    
                        
                    }else if(exmNo === 4){
                        resultData =  {   
                            "name" : "Exm 4",
                            "Score" : data.score             
                        }                    
                        
                    }
                    axios.put(`https://alharamanin-backend-web.onrender.com/aqeedah${batchNo}/${level}/exm${exmNo}/${data.sn}`, resultData)
                    .then(data => console.log(data.data))
                    
                })
                    // console.log(`resultdate: https://alharamanin-backend-web.onrender.com/aqeedah${batchNo}/${level}/exm${exmNo}/${data.sn}`);
                }

                else if(dateType ==="leaderboard"){
                    console.log("I'm updating leaderboard");
                    jsonData.map(data => {
                        
                        let leadData = {};
                        
                        axios.put(`https://alharamanin-backend-web.onrender.com/aqeedah${batchNo}/${level}/leaderboard/${data.sn}`, leadData)
                        .then(data => console.log(data.data))                      
                        
                    })
                    // console.log(`leadData: https://alharamanin-backend-web.onrender.com/aqeedah${batchNo}/${level}/leaderboard/${data.sn}`);
                }
                else if(dateType ==="register"){
                    console.log("I'm registering new students!");
                    jsonData.map(data => {
                        
                    const insertData = {
                        "sn" : parseInt(data.sn),
                        "name" : data.name.toLowerCase(),
                        "fatherName" : data.fatherName.toLowerCase(),
                        "phone" : data.phone,
                        "gender" : data.gender,
                        "aqeedah1payment" : data.aqeedah1payment,
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
                
                        axios.post(`https://alharamanin-backend-web.onrender.com/register/aqeedah/${batchNo}`, insertData)
                        .then(data => {
                            console.log("Registration Successfull ! Student " + insertData?.sn);
                        })
                    })
                }
                else {
                    console.log("i cann't update, Data type is unknown!");
                }      
    // })


   
        }; 

        const placeholderText = `[ 
            Resuslt:
            {
                "sn": 2,
                "score": 50
            },
            
            Certificate:
            {
                "sn": 3,
                "certificate": "../drive/.."
            },


            Register:   Level 1
            {
                "sn": 3,
                "name" : "faisal",
                "fatherName" : "abc",
                "phone" : "0125",
                "gender" : "male",
                "aqeedah1payment" : "paid"
            },
]
    `;
   return (
        <div>

                <p className='text-2xl text-center mb-5'>Aqeedah Course</p>
        <section className='bg-green-200 p-5 rounded'>
                <p className='text-xl mb-5'>JSON</p>

            <form onSubmit={handleSubmit(handleJsonUpdate)}> 
                <div className='flex items-end gap-10 mb-5'>

                <div className="form-control">
                    <label className="label">
                    <span className="label-text">Type</span>
                    </label>
                    <label htmlFor="field-result" className='flex align-center mb-1' >
                        <input 
                            {...register("type")}
                            type="radio"
                            name="type"
                            value="result"
                            id="field-result"
                            className='radio mr-3 checked:bg-sky-500'
                            onChange={()=> setLevel3optHide(true)}
                        />
                        <span>Result</span>
                    </label>
                    <label htmlFor="field-leaderboard" className='flex align-center mb-1'>
                        <input
                            {...register("type")}
                            type="radio"
                            name="type"
                            value="leaderboard"
                            id="field-leaderboard"
                            className='radio mr-3 checked:bg-orange-600'
                            onChange={()=> setLevel3optHide(true)}
                        />
                        <span>Leaderboard</span>
                    </label>                
                    <label htmlFor="field-certificate" className='flex align-center mb-1'>
                        <input
                            {...register("type")}
                            type="radio"
                            name="type"
                            value="certificate"
                            id="field-certificate"
                            className='radio mr-3 checked:bg-lime-500'
                            onChange={()=> setLevel3optHide(false)}
                        />
                        <span>Certificate</span>
                    </label>                
                    <label htmlFor="field-register" className='flex align-center mb-1'>
                        <input
                            {...register("type")}
                            type="radio"
                            name="type"
                            value="register"
                            id="field-register"
                            className='radio mr-3 checked:bg-green-500'
                            onChange={()=> setLevel3optHide(false)}
                        />
                        <span>Register</span>
                    </label>                
                </div>

                <div className="form-control">
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
                    <label htmlFor="field-level3" className='flex align-center mb-1'>
                        <input
                            {...register("level")}
                            type="radio"
                            name="level"
                            value=  "level3"
                            id="field-level3"
                            className={`radio mr-3 checked:bg-emerald-600`}
                            disabled={level3optHide === true ? "disabled" : ""}
                        />
                        <span>Level 3</span>
                    </label>               
                </div>
                


                
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Batch No</span>                    
                    </label>
                    <input type="text" placeholder="19" className="input input-bordered w-full max-w-xs" {...register("batch", { required: true })} />
                        {errors.batch?.type === 'required' && "Batch Number is required"}
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Exm</span>                    
                    </label>
                    <input type="text" placeholder="1" className="input input-bordered w-full max-w-xs"  {...register("exm")} disabled={level3optHide === true ? "" : "disabled"}/>
                       
                    </div>
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

                <div className="my-10">
                    {/* {JSON.parse(placeholderText)} */}
                </div>
            
        </div>
    );
};

export default JsonUpdater;