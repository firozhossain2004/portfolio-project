import React from 'react'
import LogoCount from '../LogoCount'
const WorkStats = () => {
    return (
        <div>
            <div className='text-center mb-15'>
                <h1 className='text-5xl'><span className='font-semibold'>Work</span> <span className='font-primrie'>Stats</span></h1>
            </div>

            <div>
                <div className='md:flex flex-2 justify-between px-40 md:px-50 items-center mb-10'>
             
                        <div className='space-y-10 md:flex items-center gap-40 '>

                            <div>
                                <div className='md:ml-10'>
                                    <LogoCount end={4} />
                                </div>
                                <p className='text-sm text-gray-400 text-center'>Years of
                                    Experience</p>
                            </div>
                            <div>
                                <LogoCount end={2} />
                                <p className='text-sm text-gray-400 '>Industry
                                    Recognitions</p>
                            </div>
                            <div>
                                <LogoCount end={500} />
                                <p className='text-sm text-gray-400 w-40'>Projects Completed</p>
                            </div>
                            <div>
                                <LogoCount end={98} />
                                <p className='text-sm  text-gray-400'>Client
                                    Satisfaction Rate</p>
                            </div>
                        </div>
                   

                </div>
            </div>
        </div>
    )
}

export default WorkStats