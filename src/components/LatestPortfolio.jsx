import React from 'react'
import home1 from '../assets/home1.jpg'
import home2 from '../assets/home2.jpg'
import home3 from '../assets/home3.png'
import home4 from '../assets/home4.jpg'
import home5 from '../assets/home5.jpg'
import client from '../assets/client.png'
import { Link } from 'react-router-dom'
const LatestPortfolio = () => {
    return (
        <div>
            <div className='py-20'>
                <h1 className='text-5xl text-center  font-semibold'>Latests <span className='font-Englisc'>Portfolio</span></h1>

            </div>
            <div className='px-40'>
                <div className=" md:flex gap-28 mb-10">


                    <div
                        className="md:w-[40%] md:h-[360px] rounded-2xl overflow-hidden relative group "

                    >
                        <img src={home1} className='rounded-2xl' alt="" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>

                    </div>


                    <div
                        className="md:w-[35%] md:h-[260px] rounded-2xl mt-24 backdrop-blur-lg  relative group overflow-hidden"

                    >
                        <img src={home2} className='rounded-2xl' alt="" />

                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>

                    </div>

                </div>


                <div
                    className="md:w-[50%] mx-auto md:h-[350px] rounded-2xl  mb-7 relative group overflow-hidden"

                >
                    <img src={home3} className='rounded-2xl' alt="" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>

                </div>

                <div className=" md:flex gap-32 mt-24">

                    <div
                        className="md:w-[35%] md:h-[260px] rounded-2xl  backdrop-blur-lg relative group overflow-hidden mb-10"

                    >
                        <img src={home4} className='rounded-2xl' alt="" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>

                    </div>
                    <div
                        className="md:w-[40%] md:h-[360px] rounded-2xl overflow-hidden relative group"

                    >
                        <img
                            src={home5}
                        />


                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>

                    </div>

                </div>
                <div className='flex justify-center  py-18'>
                    <Link to={"/contact"} className='bg-[#6650D7] px-6 py-1.5 rounded-xl text-center  '>Start a Project</Link>
                </div>
            </div>
            <div className='py-28'>
                <div className='text-center'>
                    <h4 className='text-xl text-[#6650D7] py-2.5'>CLIENT STORIES</h4>
                    <h1 className='text-6xl'>My Clients Love to
                        <br /> <span className='font-Englisc'>Recommend me</span></h1>

                </div>
                <div className=' px-14 md:flex md:px-48 justify-center gap-60 mx-auto items-center mt-28'> 
                    <div className='space-y-6'>
                        <div className='flex items-center'>
                            <img src={client} className='w-15 h-15 object-contain' alt="" />

                            <div className="flex flex-col">
                                <h5 className="text-lg  ">
                                    Elias Ayyoub
                                </h5>
                                <span className="text-[10px] text-gray-400">
                                    Projects Manager
                                </span>
                            </div>

                        </div>
                        <p className='w-80 text-xs text-gray-400'>I’ve worked with Raihan on several projects, including
                            the Olive Tree Residence brochure, and their creativity
                            and attention to detail always stand out. They deliver
                            high-quality work and are a pleasure to collaborate
                            with. Raihan showed me firsthand their
                            professionalism and dedication. Highly recommended!</p>
                    </div>
                    <div className='space-y-6'>
                        <div className='flex items-center '>
                            <img src={client} className='w-15 h-15 object-contain' alt="" />

                            <div className="flex flex-col">
                                <h5 className="text-lg  ">
                                    Rashed Al M
                                </h5>
                                <span className="text-[10px] text-gray-400">
                                    Consultant at Confidential
                                </span>
                            </div>

                        </div>
                        <p className='w-80 text-xs text-gray-400'>I asked for something very specific: turning multiple
                            articles and photos into one clean, elegant, luxury-style
                            book. He understood everything from the first day and
                            delivered ahead of schedule, even while dealing with
                            exams and fever. His work with the Arabic content was
                            surprisingly professional, as if it were his native
                            language. The final result was beyond what I imagined.
                            He’s talented, reliable, and great to work with.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestPortfolio