import React from 'react'
import { experiences } from '../../Data/exprience'
const WorkExperience = () => {
    return (
        <div className='px-10 md:px-32 mt-28 mb-28 md:flex gap-10'>

            <h1 className='text-5xl '>
               <span className='font-semibold'> Work </span><span className='font-primrie'>Experience</span>
            </h1>

            <div className='px-4 mt-11'>
                {experiences.map((item) => (
                    <div
                        key={item.id}
                        className='md:w-2xl mt-10 space-y-3'
                    >
                        <div className='flex justify-between'>
                            <div>
                                <h1 className='text-2xl font-semibold'>{item.company}</h1>
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