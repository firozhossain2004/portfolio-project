import React from 'react'
import home1 from '../assets/hero/home1.jpg'
import home2 from '../assets/hero/home2.jpg'
import home3 from '../assets/hero/home3.png'
import home4 from '../assets/hero/home4.jpg'
import home5 from '../assets/hero/home5.jpg'
import client from '../assets/client.png'
import { Link } from 'react-router-dom'

const LatestPortfolio = () => {
    return (
        <div>

            {/* TITLE */}
            <div className='py-12 md:py-20 text-center px-4'>
                <h1 className='text-3xl md:text-5xl font-semibold'>
                    Latests <span className='font-Englisc'>Portfolio</span>
                </h1>
            </div>

            {/* PORTFOLIO */}
            <div className='px-4 md:px-20'>

                {/* TOP ROW */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-16 mb-10">

                    <div className="w-full md:w-[45%] h-[250px] md:h-[400px] rounded-2xl overflow-hidden relative group">
                        <img src={home1} className='w-full h-full object-cover rounded-2xl transition duration-500 group-hover:scale-105' alt="" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
                    </div>

                    <div className="w-full md:w-[35%] h-[200px] md:h-[300px] md:mt-20 rounded-2xl relative group overflow-hidden">
                        <img src={home2} className='w-full h-full object-cover rounded-2xl transition duration-500 group-hover:scale-105' alt="" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
                    </div>

                </div>

                {/* CENTER BIG IMAGE */}
                <div className="w-full md:w-[60%] mx-auto h-[250px] md:h-[420px] rounded-2xl mb-10 relative group overflow-hidden">
                    <img src={home3} className='w-full h-full object-cover rounded-2xl transition duration-500 group-hover:scale-105' alt="" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
                </div>

                {/* BOTTOM ROW */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-20 mt-10">

                    <div className="w-full md:w-[35%] h-[200px] md:h-[300px] rounded-2xl relative group overflow-hidden">
                        <img src={home4} className='w-full h-full object-cover rounded-2xl transition duration-500 group-hover:scale-105' alt="" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
                    </div>

                    <div className="w-full md:w-[45%] h-[250px] md:h-[400px] rounded-2xl overflow-hidden relative group">
                        <img src={home5} className='w-full h-full object-cover rounded-2xl transition duration-500 group-hover:scale-105' alt="" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
                    </div>

                </div>

                {/* BUTTON */}
                <div className='flex justify-center py-12 md:py-16'>
                    <Link to={"/contact"} className='bg-[#6650D7] px-6 py-2 rounded-xl'>
                        Start a Project
                    </Link>
                </div>
            </div>

            {/* CLIENT SECTION */}
            <div className='py-16 md:py-28 px-4'>

                <div className='text-center'>
                    <h4 className='text-lg md:text-xl text-[#6650D7] py-2'>
                        CLIENT STORIES
                    </h4>

                    <h1 className='text-3xl md:text-6xl'>
                        My Clients Love to <br />
                        <span className='font-Englisc'>Recommend me</span>
                    </h1>
                </div>

                <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-32 mt-12 md:mt-20'>

                    {/* CARD 1 */}
                    <div className='space-y-4 max-w-sm text-center md:text-left'>
                        <div className='flex items-center gap-3 justify-center md:justify-start'>
                            <img src={client} className='w-12 h-12 object-contain' alt="" />
                            <div>
                                <h5 className="text-lg">Elias Ayyoub</h5>
                                <span className="text-xs text-gray-400">Projects Manager</span>
                            </div>
                        </div>

                        <p className='text-sm text-gray-400'>
                            I’ve worked with Raihan on several projects...
                        </p>
                    </div>

                    {/* CARD 2 */}
                    <div className='space-y-4 max-w-sm text-center md:text-left'>
                        <div className='flex items-center gap-3 justify-center md:justify-start'>
                            <img src={client} className='w-12 h-12 object-contain' alt="" />
                            <div>
                                <h5 className="text-lg">Rashed Al M</h5>
                                <span className="text-xs text-gray-400">Consultant</span>
                            </div>
                        </div>

                        <p className='text-sm text-gray-400'>
                            I asked for something very specific...
                        </p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default LatestPortfolio