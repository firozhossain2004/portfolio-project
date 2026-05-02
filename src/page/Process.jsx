import React from 'react'
import { data } from '../js/progess'

const Process = () => {
    return (
        <div>
            <div className='text-center space-y-3.5'>
                <h4 className='text-xl text-[#6650D7]'>MY PROCESS</h4>
                <h1 className='text-5xl w-2xl mx-auto'>My Strategy to get
                    You Leads with Design</h1>
            </div>
            <div className="bg-black text-white py-20 px-5">
      <div className="max-w-6xl mx-auto space-y-24">

        {data.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row items-center gap-40 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >

           
            <div className="max-w-md space-y-4">
              <div className="border border-purple-500 text-purple-400 px-4 py-1 rounded-full inline-block">
                {item.id}
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold">
                {item.title}
              </h2>

              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>

           
            <div>
              <img
                src={item.img}
                alt={item.title}
                className="w-96 h-64  border object-cover rounded-2xl"
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