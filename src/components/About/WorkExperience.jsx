import React from 'react'
import { experiences } from '../../Data/exprience'
const WorkExperience = () => {
  return (
    <div className=' mt-8 md:mt-20 '>
      <h1 className=' text-2xl md:text-5xl px-4  md:px-19'>
        <span className='font-semibold'> Work </span><span className='font-primrie'>Experience</span>
      </h1>
      <div className="max-w-4xl w-full md:w-3xl mx-auto px-4 sm:px-6 lg:px-0 mt-10">
        {experiences.map((item) => (
          <div
            key={item.id}
            className="space-y-3 mt-10 border-b border-white/10 pb-8"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <div>
                <h1 className="text-xl md:text-2xl font-semibold">
                  {item.company}
                </h1>

                <p className="text-sm text-gray-400">
                  {item.role}
                </p>
              </div>

              <p className="text-sm text-gray-500 sm:text-right">
                {item.duration}
              </p>
            </div>

            <p className="text-base md:text-lg text-gray-400 leading-7">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkExperience