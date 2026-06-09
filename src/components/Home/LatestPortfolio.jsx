import React from 'react'
import home1 from '../../assets/homeimg/hero/home1.jpg'
import home2 from '../../assets/homeimg/hero/home2.jpg'
import home3 from '../../assets/homeimg/hero/home3.png'
import home4 from '../../assets/homeimg/hero/home4.jpg'
import home5 from '../../assets/homeimg/hero/home5.jpg'
import { Link } from 'react-router-dom'

const LatestPortfolio = () => {
    return (
        <div> 
            <div className='py-12 md:py-20 text-center px-4'>
                <h1 className='text-3xl md:text-6xl font-semibold'>
                    Latests <span className='tracking-wide font-luxury  italic'>Portfolio</span>
                </h1>
            </div>

            <div className='px-4 md:px-24 md:ml-24'>

                
                <div className="flex flex-col md:flex-row gap-6 md:gap-40 mb-10 ">

                    <div className="w-full md:w-[40%] h-64 md:h-96 rounded-2xl overflow-hidden relative group">
                        <img src={home1} className='w-full h-full object-cover rounded-2xl transition duration-500 group-hover:scale-105' alt="" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
                    </div>

                    <div className="w-full md:w-[40%] h-44 md:h-72 md:mt-16 rounded-2xl relative group overflow-hidden">
                        <img src={home2} className='w-full h-full object-cover rounded-2xl transition duration-500 group-hover:scale-105' alt="" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
                    </div>

                </div>

               
                <div className="w-full md:w-[60%] mx-auto h-64 md:h-96 rounded-2xl mb-10 relative group overflow-hidden">
                    <img src={home3} className='w-full h-full object-cover rounded-2xl transition duration-500 group-hover:scale-105' alt="" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
                </div>

           
                <div className="flex flex-col md:flex-row gap-6 md:gap-40 mt-10 md:ml-40">

                    <div className="w-full md:w-[40%] h-44 md:h-72 rounded-2xl relative group overflow-hidden">
                        <img src={home4} className='w-full h-full object-cover rounded-2xl transition duration-500 group-hover:scale-105' alt="" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
                    </div>

                    <div className="w-full md:w-[40%] h-64 md:h-96 rounded-2xl overflow-hidden relative group">
                        <img src={home5} className='w-full h-full object-cover rounded-2xl transition duration-500 group-hover:scale-105' alt="" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
                    </div>

                </div>

                
                <div className='flex justify-center py-12 md:py-16'>
                    <Link to={"/contact"} className='bg-[#6650D7] px-6 py-2 rounded-xl'>
                        Start a Project
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default LatestPortfolio