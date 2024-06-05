import React from 'react'
import { CheckCircle2 } from 'lucide-react';
import codeImg from "../assets/assets/code.jpg";
import { checklistItems } from '../constants';
const WorkF = () => {
  return (
    <div className='mt-20' id='workflow'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 traking-wide'>Accelerate your{" "} 
        <span className='bg-gradient-to-r from-pink-500 to-pink-800 text-transparent bg-clip-text'>
        coding workflow.
        </span>
        </h2>
        <div className='flex flex-wrap justify-center'>
            <div className='p-2 w-full lg:w-1/2'>
                <img src={codeImg} alt='Code'/>
            </div>
            <div className='pt-12 w-full lg:w-1/2'>
                {checklistItems.map((item,index) =>(
                    <div key={index} className='flex mb-12'>
                        <div className='text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full'>
                          <CheckCircle2/>
                        </div>
                        <div>
                         <h5 className='mt-1 mb-2 text-xl'>{item.title}</h5>
                         <p className='text-md text-neutral-500'>{item.description}</p>
                        </div>
                        </div>
                ))}
            
        </div>
    </div>
    </div>
  )
}

export default WorkF