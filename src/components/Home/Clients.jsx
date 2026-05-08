import React from 'react'
import client from '../../assets/homeimg/client.png'
const Clients = () => {
    return (
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
    )
}

export default Clients