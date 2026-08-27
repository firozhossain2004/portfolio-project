import React from 'react'
import Form from './Form'

const FormPage = () => {
    return (
        <div className="flex flex-col md:flex-row gap-10 max-w-7xl mx-auto bg-white/10 p-6 md:p-8 rounded-2xl backdrop-blur-md overflow-hidden ">

            <div className='w-full md:w-1/2 space-y-7 '>
                <h1 className='text-[28px] md:text-[43px] '>
                    Tell Me Your Amazing <br />
                    <span className='font-primrie'>Project Here</span>
                </h1>
                <div className='w-full max-w-md '>
                    <p className='flex items-center gap-1.5 text-gray-400 '>
                        <span className="text-[#6650D7] text-2xl">•</span>
                       <span className='text-[18px]'> Expect a response within 24 hours.</span>
                    </p>
                    <p className='flex items-center gap-1.5 text-gray-400 '>
                        <span className="text-[#6650D7] text-2xl">•</span>
                        <span className='text-[18px]'>Happy to sign an NDA upon request.</span>
                    </p>
                    <p className='flex items-center gap-1.5 text-gray-400 '>
                        <span className="text-[#6650D7] text-2xl">•</span>
                       <span className='text-[18px]'> Dedicated support from a luxury design
                        specialist.</span>
                    </p>

                </div>
                <div className='space-y-6 mb-6'>
                    <div>
                        <h3 className='text-xl'>My Email</h3>
                        <p className='text-[18px] text-gray-400'>b4raihan@gmail.com</p>
                    </div>
                    <div>
                        <h3 className='text-xl'>My Whatsapp Number</h3>
                        <p className='text-[18px] text-gray-400'>+880 164 662 6226</p>
                    </div>
                    <div>
                        <h3 className='text-xl'>Address</h3>
                        <p className='text-[18px] text-gray-400'>Satkhira, Khulna, Bangladesh</p>
                    </div>
                </div>
            </div>
            <Form />
        </div>
    )
}

export default FormPage