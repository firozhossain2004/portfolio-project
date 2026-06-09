import React from 'react'
import { data } from '../Data/progess'

const Process = () => {
    return (
        <div>
            <div className='px-4 text-center space-y-3.5 py-10'>

                <h4 className='text-sm mt-3.5 md:text-xl text-[#6650D7]'>MY PROCESS</h4>

                <h1 className='text-xl sm:text-2xl md:text-5xl max-w-2xl mx-auto leading-tight'>My Strategy to get
                    You Leads with Design</h1>
            </div>

            <div className="bg-black text-white py-10 px-4">
      <div className="max-w-6xl mx-auto  space-y-16 md:space-y-24">

        {data.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-40 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >

           
            <div className="max-w-md space-y-4 text-center md:text-left">
              <div className="border border-purple-500 text-purple-400 px-4 py-1 rounded-full inline-block">
                {item.id}
              </div>

              <h2 className="text-xl md:text-2xl font-semibold">
                {item.title}
              </h2>

              <p className="text-gray-400 leading-relaxed text-sm md:text-base ">
                {item.desc}
              </p>
            </div>

           
            <div className="w-full md:w-1/2">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 sm:h-64 md:h-72  object-cover rounded-xl border"
              />
            </div>

          </div>
        ))}

      </div>
    </div>
  
        </div>
    )
}

export default Process