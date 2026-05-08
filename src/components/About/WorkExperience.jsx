import React from 'react'
import { experiences } from '../../Data/exprience'
const WorkExperience = () => {
    return (
        <div className='px-10 md:px-20 mt-28 mb-28 md:flex gap-28'>

            <h1 className='text-5xl font-medium'>
                Work <span className='font-Englisc'>Experience</span>
            </h1>

            <div>
                {experiences.map((item) => (
                    <div
                        key={item.id}
                        className='md:w-2xl mt-10 space-y-3'
                    >
                        <div className='flex justify-between'>
                            <div>
                                <h1 className='text-xl'>{item.company}</h1>
                                <p className='text-sm text-gray-400'>
                                    {item.role}
                                </p>
                            </div>

                            <p className='text-xs  text-gray-400'>
                                {item.duration}
                            </p>
                        </div>

                        <p className='text-sm text-gray-400'>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WorkExperience