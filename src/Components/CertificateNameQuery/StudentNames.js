import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Progress from '../Loading/Progress';
import Alert1 from '../Alerts/Alert1';

const StudentNames = () => {
    const { register, handleSubmit, reset, clearErrors, formState: { errors } } = useForm();
    const [students, setStudents] = useState([]);

    let showProgess = false;

    const handleJsonUpdate = async e => { 
        showProgess = true;

        const course = e.course;
        const batchNo = parseInt(e.batch);                

        const {data} = await axios.get(`https://alharamanin-backend-web.onrender.com/${course}/${batchNo}`)    

        setStudents(data);
        showProgess = false;
   
        }; 
    // const copyStudentList = e => {
    //     const names = document.getElementById('certificate-student-list').innerText;
    //     const tempInput = document.createElement('input');
    
    //     // Set its value to the text you want to copy
    //     tempInput.value = names;

    //     // Append it to the DOM
    //     document.body.appendChild(tempInput);

    //     // Select the text in the input
    //     tempInput.select();

    //     // Execute copy command
    //     document.execCommand('copy');

    //     // Remove the temporary input
    //     document.body.removeChild(tempInput);
    //     alert("Copied");
    // }

    return (
        <section>

                <p className='text-2xl text-center mb-5'>Certificate Name Query</p>
                <section className='bg-green-200 p-5 rounded'>
                <p className='text-xl mb-5'>Get Names</p>

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

                    
                    
                    <button type='submit' className='btn btn-primary'>Fetch</button>
                    {/* <button type='reset' onClick={() => reset()} className='btn btn-warning'>Reset</button> */}
                    <input onClick={() => clearErrors()} type="reset" className='btn btn-error'/>

                    <div className="radial-progress text-green-600 font-bold" style={{"--value":students?.length}} role="progressbar">{students?.length}</div>
                    {/* <button onClick={() => copyStudentList()} className='btn btn-success'>copy</button> */}

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
                 
                <div>
                    <Progress></Progress>
                </div>  
                            
                


        </section>
    );
};

export default StudentNames;