import React from 'react'
import LogoCount from '../LogoCount'
const WorkStats = () => {
    return (
        <div>
            <div className='text-center mb-15'>
                <h1 className='text-5xl'>Work <span className='font-Englisc'>Stats</span></h1>
            </div>
            
            <div>
                <div className='md:flex flex-2 justify-between px-40 md:px-50 items-center mb-10'>
                    <div>
                        <div className='space-y-10 md:flex items-center gap-44 '>

                            <div>
                                <LogoCount end={4} />
                                <p className='text-sm text-gray-400 w-20 text-center'>Years of Experience</p>
                            </div>
                            <div>
                                <LogoCount end={3} />
                                <p className='text-sm text-gray-400 w-40'>Recognitions</p>
                            </div>
                            <div>
                                <LogoCount end={500} />
                                <p className='text-sm text-gray-400 w-40'>Projects Completed</p>
                            </div>
                            <div>
                                <LogoCount end={98} />
                                <p className='text-sm w-40 text-gray-400'>Satisfied Clients</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WorkStats