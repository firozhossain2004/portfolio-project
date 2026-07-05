import React from 'react'
import { experiences } from '../../Data/exprience'
const WorkExperience = () => {
    return (
        <div className='px-4 lg:px-24 mb-8 mt-8 md:mt-10 md:mb-10 lg:flex gap-10'>

            <h1 className='text-3xl md:text-5xl '>
               <span className='font-semibold'> Work </span><span className='font-primrie'>Experience</span>
            </h1>

            <div className='px-2  mt-2'>
                {experiences.map((item) => (
                    <div
                        key={item.id}
                        className='md:w-4xl space-y-2.5 mt-10 md:space-y-3 px-4'
                    >
                        <div className='flex justify-between'>
                            <div>
                                <h1 className='text-[22px] font-semibold'>{item.company}</h1>
                                <p className='text-sm  '>
                                    {item.role}
                                </p>
                            </div>

                            <p className='text-sm  text-gray-500'>
                                {item.duration}
                            </p>
                        </div>

                        <p className='text-[18px] text-gray-400'>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WorkExperience