import React from 'react'
import { features } from '../../Data/features'

const WhyChooseMe = () => {
    return (
        <div className='px-4 md:px-28  mb-16 md:mb-20'>
            
            
            <div className='mb-10 md:mb-16'>
                <h6 className='text-[#6650D7] mb-3 text-sm md:text-base'>
                    WHY CHOOSE ME
                </h6>

                <h1 className='text-2xl md:text-4xl lg:text-5xl leading-snug md:w-2xl'>
                    I <span className='font-Englisc'>Design </span> for the 
                    <span className='font-Englisc'> Future</span> to Drive
                    Today’s Success
                </h1>
            </div>

            <div className="bg-black text-white px-4 md:px-8 lg:px-10 py-10 md:py-16 lg:py-20 rounded-2xl">

               
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    
                    {features.slice(0, 2).map((item) => (
                        <div
                            key={item.id}
                            className="bg-[#1c1c1c] p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl hover:bg-[#222] transition"
                        >
                            <h2 className="text-xl md:text-2xl lg:text-3xl mt-6 md:mt-10 lg:mt-20 mb-3 md:mb-4">
                                {item.title}
                            </h2>

                            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

               
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-6 md:mt-8">
                    
                    {features.slice(2).map((item) => (
                        <div
                            key={item.id}
                            className="bg-[#1c1c1c] p-6 md:p-8 pb-10 md:pb-16 lg:pb-20 rounded-2xl md:rounded-3xl hover:bg-[#222] transition"
                        >
                            <h2 className="text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 mt-6 md:mt-10 lg:mt-20">
                                {item.title}
                            </h2>

                            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default WhyChooseMe