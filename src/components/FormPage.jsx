import React from 'react'
import Form from './Form'

const FormPage = () => {
    return (
        <div className="md:flex gap-10 max-w-5xl mx-auto bg-white/10 p-8 rounded-2xl backdrop-blur-md">

            <div className='w-2xl space-y-15'>
                <h1 className='text-4xl'>
                    Tell Me Your Amazing <br />
                    <span className='font-luxury italic tracking-wide'>Project Here</span>
                </h1>
                <div className='w-xs '>
                    <p className='flex items-center gap-1.5 text-gray-400 '>
                        <span className="text-[#6650D7] text-2xl">•</span>
                        Expect a response within 24 hours.
                    </p>
                    <p className='flex items-center gap-1.5 text-gray-400 '>
                        <span className="text-[#6650D7] text-2xl">•</span>
                        Happy to sign an NDA upon request.
                    </p>
                    <p className='flex items-center gap-1.5 text-gray-400 '>
                        <span className="text-[#6650D7] text-2xl">•</span>
                        Dedicated support from a luxury design
                        specialist.
                    </p>

                </div>
                <div className='space-y-6'>
                    <div>
                        <h3>My Email</h3>
                        <p className='text-sm text-gray-400'>b4raihan@gmail.com</p>
                    </div>
                    <div>
                        <h3>My Whatsapp Number</h3>
                        <p className='text-sm text-gray-400'>+880 164 662 6226</p>
                    </div>
                    <div>
                        <h3>Address</h3>
                        <p className='text-sm text-gray-400'>Satkhira, Khulna, Bangladesh</p>
                    </div>
                </div>
            </div>
            <Form />


        </div>
    )
}

export default FormPage