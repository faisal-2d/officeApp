import { faArrowAltCircleDown } from '@fortawesome/fontawesome-free-regular';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const StudentImport = () => {
    const { register, handleSubmit, reset, clearErrors, formState: { errors } } = useForm();
    const [students, setStudents] = useState([]);

    let showProgess = false;

    const handleJsonUpdate = async e => { 
        showProgess = true;

        const course = e.course;
        const batchNo = parseInt(e.batch);                

        const {data} = await axios.get(`${process.env.REACT_APP_BACKEND_API}/${course}/${batchNo}`)    

        setStudents(data);
        showProgess = false;
   
        };

  return (
    <section className='min-h-screen container mx-auto my-10 px-5'>
    <p className='text-2xl text-center mb-5'>Student Import <FontAwesomeIcon className='' icon={faArrowAltCircleDown}></FontAwesomeIcon></p>

    <div>
    <section className='bg-green-200 p-5 rounded'>
    <p className='text-xl mb-5'>Get Student</p>

    <form onSubmit={handleSubmit(handleJsonUpdate)}> 
    <div className='flex items-end gap-10 mb-5'>                
    

    
        <div className="form-control">
        <label className="label">
            <span className="label-text">Course Name</span>                    
        </label>
        <input type="text" placeholder="aqeedah" className="input input-bordered w-full max-w-xs" {...register("course", { required: true })} />
            {errors.course?.type === 'required' && "Course Name is required"}
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
            <span className="label-text">Serial No</span>                    
        </label>
        <input type="text" placeholder="102" className="input input-bordered w-full max-w-xs" {...register("serial", { required: true })} />
            {errors.batch?.type === 'required' && "Serial Number is required"}
        </div>

        
        
        <button type='submit' className='btn btn-primary'>Get</button>
        <input onClick={() => clearErrors()} type="reset" className='btn btn-error'/>         

    </div>                

    </form>

    </section>
    
    <div className="my-10" id='certificate-student-list'>
      
        <table>
            <tbody>
        {students?.map((student, index) => {
            return <tr key={index}>
                <td>{student?.sn} </td><td><span className='ml-4'>{student?.name.toUpperCase()} {(student?.fatherName) && <span>{student?.gender == 'female' ? "BINT" : "BIN"} {student?.fatherName.toUpperCase()}</span>}</span></td>
            </tr>;
        })} 
            
            </tbody>
        </table>
      
    </div>               
        </div>



    <div>
    <section className='bg-orange-200 p-5 rounded'>
    <p className='text-xl mb-5'>Import Student</p>

    <form onSubmit={handleSubmit(handleJsonUpdate)}> 
    <div className='flex items-end gap-10 mb-5'>                
    

    
        <div className="form-control">
        <label className="label">
            <span className="label-text">Course Name</span>                    
        </label>
        <input type="text" placeholder="aqeedah" className="input input-bordered w-full max-w-xs" {...register("course", { required: true })} />
            {errors.course?.type === 'required' && "Course Name is required"}
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
            <span className="label-text">Serial No</span>                    
        </label>
        <input type="text" placeholder="102" className="input input-bordered w-full max-w-xs" {...register("serial", { required: true })} />
            {errors.batch?.type === 'required' && "Serial Number is required"}
        </div>       
        
        
        <button type='' className='btn btn-secondary'>Import</button>       

    </div>                

    </form>

    </section>
    
    <div className="my-10" id='certificate-student-list'>
      
        <table>
            <tbody>
        {students?.map((student, index) => {
            return <tr key={index}>
                <td>{student?.sn} </td><td><span className='ml-4'>{student?.name.toUpperCase()} {(student?.fatherName) && <span>{student?.gender == 'female' ? "BINT" : "BIN"} {student?.fatherName.toUpperCase()}</span>}</span></td>
            </tr>;
        })} 
            
            </tbody>
        </table>
      
    </div>               
        </div>

        

</section>
  )
}

export default StudentImport