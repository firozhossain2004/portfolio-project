import React from 'react'
import { data } from '../Data/progess'
import ContactQuestion from '../components/ContactQuestion'

const Process = () => {
  return (
    <div>
      <div className='px-5 md:text-center space-y-3.5 py-10'>

        <h4 className='text-[16px] mt-3.5 md:text-[16px] text-[#6650D7]'>MY PROCESS</h4>

        <h1 className='text-xl sm:text-2xl md:text-5xl max-w-2xl mx-auto leading-tight'><span className='font-semibold'>My</span> <span className='font-primrie'>Strategy</span> <span
          className='font-semibold'>to get You Leads with</span> <span className='font-primrie'>Design</span></h1>
      </div>

      <div className="bg-black text-white py-10 ">
        <div className="max-w-6xl mx-auto  space-y-10 md:space-y-17">

          {data.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-40 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
            >
              <div className="max-w-md space-y-4  md:text-left">
                <div className="border border-[#6650D7] text-purple-400 px-4 py-1 rounded-full inline-block">
                  {item.id}
                </div>
                <h2 className="text-xl md:text-[32px] font-semibold">
                  {item.title}
                </h2>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base ">
                  {item.desc}
                </p>
              </div>
              <div className="w-full md:w-md">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-xl h-56 sm:h-64 md:h-64  object-cover rounded-xl border"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="text-center space-y-3 max-w-2xl mx-auto mt-15 mb-10">
          <h5 className="text-xs sm:text-sm md:text-lg text-purple-500 tracking-wide">
            FREQUENTLY ASKED QUESTIONS
          </h5>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
            <span className='font-semibold'>Your Questions</span> <br />
            <span className="font-primrie">Answered!</span>
          </h2>
        </div>

        <div className="max-w-3xl md:max-w-4xl mx-auto">
          <ContactQuestion />
        </div>
      </div>
    </div>
  )
}

export default Process