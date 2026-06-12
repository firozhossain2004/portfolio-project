import React from 'react'

import TestimonialSlider from './TestimonialSlider'
const Clients = () => {
    return (
        <div className='py-16 md:py-28 px-4'>

            <div className='text-center'>
                <h4 className='text-lg md:text-xl text-[#6650D7] py-2'>
                    CLIENT STORIES
                </h4>

                <h1 className='text-3xl md:text-6xl '>
                    <span className='font-semibold'>My Clients Love to</span> <br />
                    <span className='font-primrie'>Recommend Me</span>
                </h1>
            </div>

            <div className='mt-7'>
                <TestimonialSlider />

            </div>
        </div>
    )
}

export default Clients