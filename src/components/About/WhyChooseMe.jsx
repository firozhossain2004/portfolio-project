import React from 'react'
import { features } from '../../Data/features'

const WhyChooseMe = () => {
    return (
        <div className='px-4 mt-20  mb-20 '>




            <div className="max-w-7xl mx-auto mt-6">
                <div className=' mb-10 md:mb-16'>
                    <h6 className='text-[#6650D7] mb-3 text-sm md:text-base'>
                        WHY CHOOSE ME
                    </h6>

                    <h1 className=' text-2xl md:text-4xl lg:text-5xl md:w-2xl '>
                        I <span className='font-primrie'>Design </span> <span className='font-semibold'>for the</span>
                        <span className='font-primrie'> Future</span> <span className='font-semibold'>to Drive
                            Today’s</span> <span className='font-primrie'>Success </span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-7 ">
                    {features.map((item) => (
                        <div
                            key={item.id}
                            className="bg-[#1c1c1c] p-4 md:py-7  rounded-3xl"
                        >
                            <div className='w-12 mb-3'>
                                <img src={item.img} alt={item.title} />
                            </div>
                           

                                <h2 className="text-[28px] md:text-[32px] mb-3">
                                    {item.title}
                                </h2>
                          

                            <p className="text-gray-400 text-[18px]">
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